---
layout: post
title: 'Ruby Rails - First Exploration'
date: 2019-12-16
author: DoHerasYang
color: rgb(255,210,32)
cover: '/Pictures/rails.jpeg'
tags: Ruby-Rails

---

# Rails - Ruby

> #### Version: 
>
> + Rails 5.2.4 on Mac OS X Catalina 10.15.2
> + SQLite version 3.29.0

> #### Environment
>
> 1. Install `Rails` on your computer 
>
>    ```shell
>    # Firstly you should have installed the Ruby 2.6.5
>    $ gem install rails -v 5.2.4
>    $ rails -v #check your version
>    ```
>
> 2. Setting up the Sqlite3( The Sqlite 3 is the defalut database by Rtails)
>
>    ```shell
>    $ brew install sqlite3
>    ```
>    
> 3. Install the `Yarn` and `ChromeDriver` 
>
>    ```shell
>    $ brew install yarn
>    $ brew cask install chromedriver
>    ```



### 1. Hello Rails

#### 1.1  Create Your First Rails Projects

```shell
# You should find a empty folder and change the current directory
# 
$ pwd
$ rails new testprojects
$ cd testproject
$ rails db:migrate
$ rails server
$ rails about # show the details of created Rails project
# $ bundle exec rails about
```

+ Finishing the previous steps, you can receive there messages from the terminal.

```shell
=> Booting Puma
=> Rails 5.2.4 application starting in development
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.12.2 (ruby 2.6.3-p62), codename: Llamas in Pajamas
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://localhost:3000
Use Ctrl-C to stop
```

+ If you want to check the web page you have created by `rails new <NAME>` command. Type these url `http://localhost:3000` in your browser.

![helloRails](/Pictures/Blog Pictures/helloRails.png)

+ If you want blind the network address, you can specify the Ip address `0.0.0.0`.

```shell
$ rails server -b 0.0.0.0
```

#### 1.2 Controller

+ The command `generate` logs the files and directions. When you create the controller, you can also create the static pages by this command. It means you can build your website by Ruby script.

```shell
$ rails generate controller kernel hello goodbye
$ cd /app/controllers & ls 
application_controller.rb	kernel_controller.rb
concerns
$ cd .. && cd ./views/say && ls
goodbye.html.erb	hello.html.erb
```

+ From the previous











#### 1.2  Pages

**Static Pages**

+ It's very easy to build the static pages by youself. The only one you have to konw is the location where the static pages store is `/public` folder.

**HTML Dynamically with erb **

```

```






