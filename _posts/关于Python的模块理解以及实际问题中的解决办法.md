

# Python的模块概念理解和实际问题中的解决办法



## 1.问题背景以及重现

最近一直在倒腾非常经典的基于 `python` 的后台 `Web` 框架 - `Flask` 希望有朝一日可以自己搭建自己的网站的后端逻辑和框架，一开始开始的过程中遇到的困难是超乎自己想象，非常多的概念不理解导致后台的框架非常单一以及难以组织，这些都会放到一个独立的模块来进行讲解以及分享自己在构建这个项目中的一些思路和一些心得，少说废话，现在先进入到本博客 - 问题重现部分。

在构建`Flask` 后端框架的过程中，自己希望将 `route` 作为一个单独的部分来存储和组织项目，这种条件下 `Flask` 官方推荐使用 `Blueprint` -  蓝图 作为项目的解决办法， 在导入了新的蓝图之后，之前单一的`app.py` 文件现在扩展成了多个文件，带来的许多难以想象的问题，最大的问题是 -  在 `app.py` 文件中加入新的函数不能被正确被执行出并得到函数所对应的结果。

下边为 `Flask` 新的项目结构:

```shell
.
├── README.md
├── app.py
├── route
├── static
├── templates
└── venv
```

之前的所有代码内容只保存在单一文件 `app.py ` 中， 做了新的项目架构分层之后， 新加了一个新的文件夹`route`之后引入了蓝图，进行完改造之后，所有原有的功能运行正常，因此我需要增加一个新的日志模块来记录用户的操作结果，将模块执行的内容添加到一个新的文件并记录下来，我先将功能放在`app.py`， 用一个简单的例子来说明这个意图:

简要得说明下方的代码，`logging_file` 是用来生成日志文件的一个函数，`if __name__ == '__main__':` 作为 `PyCharm` 程序默认生成的一个入口函数，现在我需要执行被内嵌在 `Flask` 的 `logging` 模块来实现日志记录功能。

```python
def logging_file():
    # 创建和判断一个新的日志文件目录
    date = str(datetime.date.today())
    cur_dir = 'logs'
    if not os.path.exists(cur_dir):
        os.mkdir(cur_dir)
    # 创建一个新的日志文件
    cur_logfile = 'logs/' + date + '.log'
    if not os.path.exists(cur_logfile):
        os.system(r'touch {}'.format(cur_logfile))
    return '/logs/' + date + '.log'


if __name__ == '__main__':
    handler = logging.FileHandler(logging_file(), encoding='UTF-8')
    handler.setLevel(logging.DEBUG)  # 设置日志记录最低级别为DEBUG，低于DEBUG级别的日志记录会被忽略，不设置setLevel()则默认为NOTSET级别。
    logging_format = logging.Formatter(
        '%(asctime)s - %(levelname)s - %(filename)s - %(funcName)s - %(lineno)s - %(message)s')
    handler.setFormatter(logging_format)
    app.logger.addHandler(handler)
    app.run(host='0.0.0.0', port=5000, debug=True)
```

执行了上述的代码之后，我发现居然没有新的目录 - `../logs ` 产生以及生成当前时间的日志文件，这让我非常困惑，在把代码交给朋友运行之后，发现他是可以正常出现对应的结果的，他的运行环境是 `Windows` ， 而我的运行环境是 `Mac OS`， 在我的环境中，我不能调用 `logging_file` 函数，并且控制台上没有报错信息。

为了解决这个问题，我做了很多尝试，在当前的环境下，不论自己怎么更改函数都不能顺利被 `Flask` 框架执行，于是我将 `logging_file` 函数，放到了 `if __name__ == '__main__':` 之前的代码行进行执行，发现函数被顺利执行，我意识到自己对于 `if __name__ == '__main_'` 的理解出现了问题。



## 2.理解 Python 概念 - 模块

重新查找和学习网上关于`模块`的理解，对于 `Python` 的这门语言来说，作为一门解释型语言，区别于其他的强制类型语言( C/Java )需要一个入口函数来满足编译器对于执行的顺序的需要，但是 `Python ` 并不需要这个。

```markdown
Python 模块(Module)，是一个 Python 文件，以 .py 结尾，包含了 Python 对象定义和Python语句。模块让你能够有逻辑地组织你的 Python 代码段。把相关的代码分配到一个模块里能让你的代码更好用，更易懂。模块能定义函数，类和变量，模块里也能包含可执行的代码。
```

上述的解释来自 `菜鸟教程` 对于 Python 模块的解释。

参照 [Python 官方文件 3.9.1](https://docs.python.org/zh-cn/3/tutorial/modules.html) ，对于 `模块` 的解释， 模块是包含 Python 定义和语句的文件。文件名就是模块名加后缀名 `.py` 。在模块内部，通过全局变量 `__name__` 可以获取模块名（即字符串）。模块包含可执行语句及函数定义。这些语句用于初始化模块，且仅在 import 语句第一次遇到模块名时执行。

综上: 其中对于 `__name__ `在模块的作用，在本模块中，调用并打印 `__name__` 显示的当前的值为 `__main__` ， 但是在外部的调用，并不知到这个值的情况，因此我们需要做一个小的实验。

```python
# 创建一个新的 test.py
print(__name__)   # 打印的结果为 __main__
```

现在我们创建一个新的 `import_file.py` 来调用 `test.py`， 我们发现新的结果结果为:

```python
# 创建一个新的 import_file.py
import test # 打印的结果为 test
```

我们可能对这个概念就有一定的了解了， 在模块内部的变量`__name__`命名时是 `__main__` ， 但是对于外部引用时该变量就变为模块的名字，对于上述的代码中，外部的名字为 `test`。



## 3.问题改进办法

经过分析后，我们发现对于 `Flask` 框架在调用 `app.py` 作为入口的模块的时候，会出现这个问题，但是为什么在判断语句`if __name__ == '__main__':` 的内部，`app.run` 可被执行，这个需要参照 `Flask` 框架的实现机制，这个我会在后续的 `Flask` 模块中进行分析。

上述代码的改进方法非常简单:

```python
if __name__ == 'app':
    handler = logging.FileHandler(logging_file(), encoding='UTF-8')
    handler.setLevel(logging.DEBUG)  # 设置日志记录最低级别为DEBUG，低于DEBUG级别的日志记录会被忽略，不设置setLevel()则默认为NOTSET级别。
    logging_format = logging.Formatter(
        '%(asctime)s - %(levelname)s - %(filename)s - %(funcName)s - %(lineno)s - %(message)s')
    handler.setFormatter(logging_format)
    app.logger.addHandler(handler)
    app.run(host='0.0.0.0', port=5000, debug=True)
```

2021年01月25日 14:57









