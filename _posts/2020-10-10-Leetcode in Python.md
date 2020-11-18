---
layout: post
title: 'Leetcode'
date: 2020-10-15
author: DoHerasYang
color: rgb(153,153,255)
cover: '/Pictures/CoverPage/leetcode.jpeg'
tags: Python C/C++ JavaScript Chinese
---

# Leetcode

>来源：力扣（LeetCode）

---

[TOC]

---

## 1.算法

### 1.1 定义

+ 解决特定问题求解步骤的描述，在计算机中为指令的有限序列，并且每条指令表示一个或者多个操作。
+ 特性
  + 有穷性
  + 确定性
  + 可行性
  + 输入
  + 输出
+ 设计要求
  + 正确性
  + 可读性
  + 健壮性
  + 高效率
  + 低存储量需求

### 1.2 时间复杂度

![01](/Users/doheras/Desktop/Blog/DoHerasYang.github.io/Pictures/LeetCode/01.png)

## 2.线性表(List)

### 2.1.1 顺序存储结构

线性表的顺序存储结构，指的是用一段地址**连续的存储单元**一次存储线性表的数据元素。比如说C语言的一维数组。线性表中的元素的存储是相邻的。因此第一个存储的位置就非常关键。

数组中的存取时间性能为O(1)。不管是第一个还是最后一个线性表中的元素的位置，计算元素的位置都需要一个相同的公式 $LOC(a_i) = LOC(a_1)+(i-1)*C$,即只需要常数阶的时间复杂度。通常具有这个特点的存储结构被称为**随机存取结构**。

#### 2.1.1.1 插入删除操作

**时间复杂度**

> 如果说运气比较好，插入或者删除第一个或者最后一个位置的时候，不需要重复的遍历整个顺序表，那么需要的时间复杂度为$O(1)$。
>
> 如果运气不好的情况下，需要插入或者删除第一个或者最后一个元素，需要的是遍历n次，那么时间复杂度为$O(n)$。

#### 2.1.1.2 优缺点总结

**优点**

+ 无需为表中元素增加额外的空间
+ 快速地存取表中任一位置的元素

**缺点**

+ 插入删除大量移动元素
+ 表长度变换大难以确定存储空间容量
+ 容易造成存储空间碎片

### 2.1.2 链式存储结构

**存储特点**是利用任意一组的存储单元存储线性表的数据元素。这组存储单元可以是连续的，也可以是不连续的。意味着这些元素可以存在内存未被占用的任意位置。

**结构特点**:

+ 数据域：存储数据元素信息的域。
+ 指针域：存储直接后继位置的域被称为指针域。指针的存放时需要空间的。

**头指针与头节点的区别**

> **头指针**
>
> + 是指链表指向第一个节点的指针，若链表有头节点，那么就是指向头节点的指针。
> + 头指针不能为空
>
> **头节点**
>
> + 数据域一般是没有意义的。
> + 方便在第一个节点进行插入和删除。

#### 2.1.2.1 单链表

**遍历一个链式结构(单链表)**

> ```c++
> typedef struct Node
> {
>   	int data;
>   	struct Node *next;
> }Node;
> typedef struct Node *LinkList; // 定义一个头指针变量
> 
> bool getItemInChain(LinkList *L, int i, int *e){
>   	int j;
>   	LinkList p;
>   	p = L->next;
>   	j = 1;
>   	while(p && j<1){
>     		p = p->next;
>     		j++;
>   	}
>   	*e = p->data;
>   	return true;
> }
> ```

**插入删除-单链表**

> ```c++
> // 算法思想是在插入的位置记录一个指针，然后一个计数器设为 i ， 记录依次插入
> bool insertItemChain(LinkList *L, int i, int e){
>   	int j = 1;
>   	LinkList p,s;
>   	p = *L;
>   // 开始遍历查找插入的节点地址
>   	while(p && j<i){
>     		p = p->next;
>     		j++;
>   	}
>   	if(!p || j>i){
>     	return ERROR;
>   	}
>   	s = (LinkList)malloc(sizeof(Node));
>   	s->data = e;
>   	s->next = p->next;
>   	p->next = s;
>   	return true;
> }
> ```
>
> 时间复杂度 $O(n)$,  优势是如果知道了插入位置，那么插入就变的非常的简单。
>
> ```c++
> // 删除与插入类似，找到需要删除的节点的上一个位置即可。
> bool deleteItemChain(LinkList *L, int i, int *e){
>   	int j = 1;
>   	LinkList p,q;
>  	p = *L;
>   	while(p->next && j<i){
>     		p = p->next;
>     		j++;
>   	}
>   	if(!(p->next) || j>i)	return false;
>    	q = p->next;
>   	p->next = q->next;
>   	*e = q->data;
>   	free(q);
>   	return true;
>   }
> ```
> 

**单链表的整体创建**

```c++
// 只插入到当前头节点的后边
void CreateListHead(LinkList *L, int n){
  LinkList p;
  int i;
  srand(time(0));
  // 给新的头节点分配存储空间
  *L = (LinkList)malloc(sizeof(Node));
  (*L)->next = null;
  for(i=0;i<n;i++){
    p = (LinkList)malloc(sizeof(Node));
    p->data = rand()%1024+1;
    p->next = (*L)->next;
    (*L)->next = p;
  }
}

// 尾插法 插入到单链表的末端
void CreateListTail(LinkList *L, int n){
  LinkList p,r;
  int i;
  srand(time(0));
  // 创建整个线性表的存储空间
  *L = (LinkList)malloc(sizeof(Node));
  r = *L;
  for(i=0;i<n;i++){
    p = (Node*)malloc(sizeof(Node)); //注意这个部分
    p->data = rand()%1024+1;
    r->next = p;
    r = p;
  }
  r->next = null;
}
```

**单链表的整表删除**

```c++
bool ClearList(LinkList *L){
  LinkList p,q;
  p = (*L)->next;
  while(p){
    q = p->next;
    free(p);
    p = q;
  }
  (*L)->next = null;
  return true;
}
```

#### 2.1.2.2 静态链表

用数组描述的链表叫做 **静态链表**。

数据结构定义如下

```c++
typedef struct{
  int data;
  int cur; //相当于动态链表中的next
}Component,StaticLinkList[MAXSIZ];
```

详细地静态链表操作如下：

```c++
// 初始化一个静态链表
bool InitList(StaticLinkList space){
  int i ;
  for(i=0;i<MAXSIZE-1;i++){
    space[i].cur = i+1;
  }
  space[MAXSIZE-1] = 0;
  return true;
}
//


```

### 2.1.3 比较以及使用场景

> 顺序表和链表的区别和联系
>
> 顺序表：1、空间连续，支持随机访问。查找的时间复杂度为O(1),方便进行查找
>
> ​       2、中间或前面部分的插入删除时间复杂度O(N)
>
> ​        3、增容的代价比较大
>
> 链表：1、以节点为单位存储，不支持随机访问
>
> ​      2、任意位置插入时间复杂度为O(1)
>
> ​      3、没有增容问题

## 3.栈与队列

### 3.1 栈

**定义**

+ 先进后出的一种数据结构。LIFO
+ 仅仅限定在表尾进行插入和删除的线性表。
+ 允许插入和删除的那一端被称为栈顶，另一端被称为栈底，不含任何数据元素的栈被称为空栈。

```c++
// 定义栈的数据结构
typedef struct
{
  int data[MAXSIZE]; //记录一个数组来存放栈中的元素
  int top; // 设定一个栈顶指针
}
```

**出栈的方式(可能的次数)**

+ 方法的总数为	$C(n,2n) / n+1 $     其中 n 为出入栈的元素个数。 卡特兰数公式
+ https://leetcode-cn.com/circle/article/lWYCzv/
+ 进栈出栈的时间复杂度为 $O(1)$

#### 3.1.1 两栈共享空间

思路：

+ 定义一个新的结构体，新的结构体中定义一个数组元素是来模拟栈。有两个指针，第一个是第一栈指针，用来指向第一栈的栈顶，第二个用来指向第二栈的栈顶，最后两个指针进行判断栈是否满了。

```c++
typedef struct{
  int data[MAXSIZE];
  int top1;
  int top2;
}SqDoubleStack;

bool Push( SqDoubleStack *S, int *e, int stackNumber){
  if(S->top1+1 == S->top2){
    return false;
  }
  if (StackNumber == 1)	S->data[++S->top1] = e;
  if (StackNumber == 2)	S->data[--S->top2] = e;
  return true;
}

bool Pop(SqDoubleStack *S, int *e, int stackNumber){
  if (StackNumber == 1){
    if(S->top1 == -1) return false;
    *e = S->data[S->top1--];
  }else if (StackNumer == 2){
    if(S->top2 == MAXSIZE) return false;
    *e = S->data[S->top2++];
  }
  return true;
}
```

#### 3.1.2 链式栈存储结构以及实现

```c++
// 定义一个链式的存储结构
typedef struct StackNode{
  int data;
  struct StackNode *next;
}StackNode, *LinkStackPtr;

// 用来指示栈的当前栈顶的位置
typedef struct LinkStack{
  LinkStackPtr top; // 这个结构指向栈顶的地址空间
  int count; // 栈的大小
}

// 入栈操作
bool Push( LinkStack *S, int e){
  LinkStackPtr s = (LinkStackPtr)malloc(sizeof(StackNode));
  s->data = e;
  s->next = S->top;
  S->top = s; // 将栈顶的空间复制给新创建的s
  S->count++;
  return true;
}

// 出栈操作
bool Pop( LinkStack *S, int *e){
  // 定义一个指针
  LinkStackPtr p;
  if(*S == null) return false;
  *e = S->top->e;
  p = S->top;
  S->top = S->top->next;
  free(p);
  S->count--;
  return true;
}

// 时间复杂度都是 O(1) 因为是线性的问题。
```

#### 3.1.3 栈的应用 后缀表示法

举个例子:            $9+(3-1)\times{3}+10\div2$       中缀表达式

**怎么转换成后缀表达式**

+ 从左到右遍历中缀表达式的每个数字和符号，如果是数字就输出成为后缀表达式。
+ 如果是符号的话，判断其与栈顶的符号的优先级大小，如果遇到括号或者优先级低于栈顶符号，则栈顶的符号元素依次出站并输出，并将当前符号进栈。

**图例**

+ 数字为 9， 因此

  第一次栈的状态为  +   

  后缀表达式的状态为 9

+ 当表达式读取到了左括号，因为没有匹配到右括号，所以继续进栈，此时状态为

  栈：  + （  -

  后缀表达式： 9 3 1

+ 当栈收到了右括号进栈，就将除了括号的所有中间的符号输出

  栈： +

  后缀表达式: 9 3 1 -

+ 接下来是乘号，因为乘号的复杂度要大于加号，所以不输出，

  栈： + $\times$

  后缀表达式:  9 3 1 - 3

+ 当遇到了另一个加号+，此时加号的优先级是小于乘号的，因此原先栈的全部符号出栈，然后新的加号进栈。此时的状态为

  栈： +

  后缀表达式: 9 3 1 - 3 $\times$ + 10

+ 最后是除号，因为除号的优先级是大于加号的，因为是最后一个符号所以全部出栈

  栈: null

  后缀表达式: 9 3 1 - 3 $\times$ + 10 $\div$ +

### 3.2 队列

#### 3.2.1 定义

队列是一种只允许在一端进行插入操作，而在另一端进行删除的线性遍，它遵循先进先出的调度顺序，其中队头允许删除，而队尾允许插入。

#### 3.2.2 循环队列

假设有一个队列有n个元素，则顺序存储的队列可以建立一个大于n的数组。对于一个数组来说，循环队列的实现可以突破数组的实际大小。可以引入两个指针，第一是 front 指针用来指向数组的第一个元素，rear 用来指向最后一个节点。

**假溢出**

如果 rear 指针指向了数组的最后一个位置，且这个时候队列进行了插入操作，这个时候看起来队列已经满了，如果队列之前经过出队列的操作，那么会存在之前数组的空闲位置。这时候就是假的溢出。

**定义**

解决假溢出的方式就是，后面的数组满了，但是前边的数组位置却是空的，这个时候可以把新的元素存储到数组的最前头，也就是形成了头尾相接的循环。 这种头尾相接的顺序被称为循环队列。

**怎么判断循环队列是否满**

当队列为空的时候，指针front == gear，当循环队列满的时候，也是 gear == front 这个时候就出现了冲突。

+ 第一个方法是设置一个label用来区分是第一次相等还是第二次相等。
+ 第二个方法是 预留一个 空的位置 来表示队列已经满了

**计算循环队列的长度**

$$ (rear - font + QueueSize) \% QueueSize$$

```c++
// 我们来定义队列的数据结构

typedef struct{
  int data[MAXSIZE];
  int front;
  int rear;
}SqQueue;

bool InitQueue(SqQueue *Q){
  Q->front = 0;
  Q->rear = 0;
  return true;
}

bool EnQueue (SqQueue *Q, int e){
  if((Q->rear+1)%MAXSIZE == Q->front) return false;
  Q->data[Q->rear] = e;
 	Q->rear = (Q->rear+1) % MAXSIZE;
  return true;
}

bool DeQueue (SqQueue *Q, QElemType *e){
  if (Q->front == Q->rear) return false;
  *e = Q->data[Q->front];
  Q->front = (Q->front+1) %MAXSIZE;
  return true;
}

```

总结一下:

> front为队头、rear为队尾、maxSize为队列的总容量、m为队列中元素的个数：
>
> 队空：front = rear
>
> 队满：(rear + 1) % maxSize = front
>
> 进队：front = (front + 1) % maxSize
>
> 出队：rear = (rear + 1) % maxSize
>
> 队列中元素的个数 m = (rear - front + maxSize) % maxSize

### 3.2.3 队列的链式存储结构以及实现

对于一个链式的存储队列来说，需要一个头指针来指向队列的头部。需要一个指针来指向队列的尾部。

```c++
typedef struct QNode{
  int data;
  struct QNode *next;
}QNode,*QueuePtr;

typedef struct
{
  QueuePtr front,rear;
}LinkQueue;

// 插入队列
bool EnQueue(LinkQueue *Q, int e){
  QueuePtr s = (QueuePtr) malloc(sizeof(QNode));
  if(!s) exit(OVERFLOW);
  s->data = e;
  s->next = null;
  Q->rear->next = s;
  Q->rear = s;
  return true;
}

// 出队列
bool DeQueue(LinkQueue *Q, int *e){
  QueuePtr = s;
  if(Q->front == Q->rear) return false;
  p = Q->front->next;
  *e = p->data;
  Q->front->next = p->next;
  if(Q->rear == p) Q->rear = Q->front;
  free(p);
  return true;
}
```

## 4 串

### 4.1 定义

串由零个或者多个字符组成的有限序列，又名叫字符串。每一个构成字符串的字符都可以是单个的。

### 4.2 存储结构

#### 4.2.1 顺序存储结构

串的顺序存储结构是用一组地址连续的存储单元来存储串中的字符序列。必须为每一个定义的串变量分配一个固定长度的存储区。一般用长数组来定义。

在C语言中，`malloc()`和`free()`函数用来分配存储空间。

#### 4.2.2 链式存储结构

串的链式存储与线性表相似，每一个串的末尾指向新的串的开始位置，串的末尾位置制为`\0`。

### 4.3 多模匹配

#### 4.3.1 定义

子串的定位操作通常被称做串的模式匹配，作为串的基本操作之一。

基本的串的操作

```c++
int Index(String S, String T, int pos){
  
  int i = pos;
  int j = 1;
  
  while(i<=S[0] && j<=T[0])
  {
    if( S[i] == T[j]){
      ++i;
      ++j;
    }
    else
    {
      i = i-j+2;
      j = 1;
    }
    if( j>T[0])
      return i-T[0];
    else
      return 0;
  }
}

// 时间复杂度 最好的情况下就是 O(1)  比较差的情况是 O(n+m)
// 比较差的情况是 O((n-m+1)*m)
```

#### 4.3.2 KMP模式匹配算法 克努特-莫里斯-普拉特算法

[还没看懂............]



## 5 二叉树

### 5.1 定义

+ 树是n个节点的集合，当n=0时树被称为空树，在任意一棵非空树中，有且只有一个特定的点被称为根节点，其余的节点可以被分为m个互不相交的有限集，每一个集合又被称为一个子树。
+ 结点拥有的子树被称为结点的度，度数为0的节点被称为叶节点，度不为0多的结点被称为非终端结点或分支结点。树的度为各结点的度的最大值。
+ **有序树**与**无序树**:  如果一个树是从左到右是有次序的，不能互换的，则称该树为有序树，否则被称为无序树。
+ **二叉树的定义**:  二叉树是n个结点的有限集合，该集合或者为空集，或者由一个根节点和两颗互不相交的、分别被称为根节点的左子树和右子树构成。
+ **完全二叉树**: 对于一棵具有n个结点的二叉树按照序号进行编号，如果编号为i的节点与同样深度的满二叉树中编号为i的节点位置完全相同，那么这棵二叉树被称为完全二叉树。

### 5.2 特点

二叉树特点

+ 二叉树中不存在度数大于2的结点。
+ 二叉树中左右子树是有顺序的，次序不能任意颠倒。
+ 即使某节点只有一棵子树，也要区分它是左子树还是右子树，这两个是不一样的。

完全二叉树特点

+ 叶子结点只出现在最下两层
+ 最下层的叶子一定集中在左部的连续位置
+ 倒数第二层，如果有叶子结点，那么一定在右边的连续位置
+ 如果结点度为1，则该结点只有做孩子，不存在只有右子树的情况
+ 同样结点数的二叉树，完全二叉树深度最小

### 5.3 性质

+ 二叉树的每一层最多有$2^{(i-1)}$个结点
+ 深度为$k$的二叉树最多有$2^{k}-1$个结点
+ 对于任何一棵二叉树，如果终端结点数为 $n_0$, 度数为2的结点数为 $n_2$, 那么 $n_0 = n_2+1$
+ 二叉树的访问规则: （下标从0开始）
  + 对于一个父结点 $i$ 来说，其左子节点的序号为 $2*i+1$ , 右子节点的访问序号为 $2*i+2$.
  + 对于一个节点 $i$ 来说，其父结点的坐标为 $（i-1）/2$ 向下取整。
+ 



**堆排序**

```
#include<cstdio>
#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;

void adjust(int arr[], int len, int index)
{
    int left = 2*index + 1;
    int right = 2*index + 2;
    int maxIdx = index;
    if(left<len && arr[left] > arr[maxIdx]) maxIdx = left;
    if(right<len && arr[right] > arr[maxIdx]) maxIdx = right;  // maxIdx是3个数中最大数的下标
    if(maxIdx != index)                 // 如果maxIdx的值有更新
    {
        swap(arr[maxIdx], arr[index]);
        adjust(arr, len, maxIdx);       // 递归调整其他不满足堆性质的部分
    }

}
void heapSort(int arr[], int size)
{
    for(int i=size/2 - 1; i >= 0; i--)  // 对每一个非叶结点进行堆调整(从最后一个非叶结点开始)
    {
        adjust(arr, size, i);
    }
    for(int i = size - 1; i >= 1; i--)
    {
        swap(arr[0], arr[i]);           // 将当前最大的放置到数组末尾
        adjust(arr, i, 0);              // 将未完成排序的部分继续进行堆排序
    }
}

int main()
{
    int array[8] = {8, 1, 14, 3, 21, 5, 7, 10};
    heapSort(array, 8);
    for(auto it: array)
    {
        cout<<it<<endl;
    }
    return 0;
}
```























---



1.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

**解题思路:**

+ 在`python`中，字典类型的变量可以快速地找到对应的值及其下标——`（dict()）`，对于`List`类型，我们需要的快速地将List中的值及其对应下标可以快速地查找出来，第一个方法是将所有的List里的所有的值及其对应的下标存储到`Dictionary`类型中，第二个思路是使用`enumerate`函数生成一个迭代器。

+ 在本题中，如果想要找到对应的解，最暴力的方法是遍历到一个值，然后遍历剩下的数据结构看是否可以找到另外一个值，使其两者对应的和等于target。很明显这个方法的时间复杂度较高。

+ 第二个方法，就是使用一个字典类型存储`List`中的值以及对应的下标，并计算出当前遍历的值与目标值，最后在字典中找到对应的值。

+ ```python
  class Solution(object):
      def twoSum(self, nums, target):
          """
          :type nums: List[int]
          :type target: int
          :rtype: List[int]
          """
          dictionary = dict()
          for i,num in enumerate(nums):
            if dictionary.get(target-num) is not None:
              return [i,dictionary.get(target-num)]
            dictionary[num] = i
          return []
  ```

2.给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

**解题思路**：

+ 该题中，首先已经定义了一个链表的数据结构:

  ```python
  # Definition for singly-linked list.
  # class ListNode(object):
  #     def __init__(self, val=0, next=None):
  #         self.val = val
  #         self.next = next
  ```

+ 必须要考虑的特殊情况是: 

  ```python
  # 一个链表有一个链表没有
  # a = []
  # b = [1,2,3]
  
  # 链表的长度不相等
  # a = [1,2]
  # b = [1,2,3]
  
  # 如果发生了进位的情况
  # a = [1,1]
  # b = [9,9]
  # a+b = [0,1,1]
  ```

+ ```python
  # Definition for singly-linked list.
  # class ListNode(object):
  #     def __init__(self, val=0, next=None):
  #         self.val = val
  #         self.next = next
  class Solution:
      def addTwoNumbers(self, l1: ListNode, l2: ListNode)
  			"""
  			:type l1: ListNode
  			:type l2: ListNode
  			:rtype: ListNode
  			"""
        # 首先应该创建一个新的链表，链表有两部分一个是用来遍历的另外一个是用来遍历和存储最后结果的
        dummy = p = ListNode(None)          
        s = 0  # 初始化进位 s 为 0
        while l1 or l2 or s:
          # 如果 l1 或 l2 存在, 则取l1的值 + l2的值 + s(s初始为0, 如果下面有进位1, 下次加上)
          # 如果存在位数不同的情况,则空位取零
  				s += (l1.val if l1 else 0) + (l2.val if l2 else 0)  
  				p.next = ListNode(s % 10)       # p.next 指向新链表, 用来创建一个新的链表
  				p = p.next                      # p 向后遍历
  				s //= 10                        # 有进位情况则取模, eg. s = 18, 18 // 10 = 1
  				l1 = l1.next if l1 else None    # 如果l1存在, 则向后遍历, 否则为 None
  				l2 = l2.next if l2 else None    # 如果l2存在, 则向后遍历, 否则为 None
        return dummy.next   # 返回 dummy 的下一个节点, 因为 dummy 指向的是空的头结点, 下一个节点才是新建链表的后序节点
  ```


3. 给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。 

```python
#输入: "abcabcbb"
#输出: 3 
#解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
#输入: "bbbbb"
#输出: 1
#解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
#输入: "pwwkew"
#输出: 3
#解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
#     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

**解题思路**：

+ 本题非常简单，并不需要第二次遍历或者穷举来解决问题，对于一个字符串可以看成一个链表，可以使用两个指针来表示字符串的子字符串位置，第一个指针用来记录当前字符串的位置，后边的指针用来进行遍历下一个字符并且准备记录，数据结构用来记录当前字符串和之前最大的字符串，实现起来非常简单。

```python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        string = ''
        target = ''
        for i in s:
            # 如果没有
            if i not in target:
                target += i
            else:
                target = target[target.index(i)+1:]
                target += i
            if len(target) > len(string):
                string = target
        return len(string)        
```

4.给定两个大小为 m 和 n 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的中位数。

```python
# 输入：nums1 = [1,3], nums2 = [2]
# 输出：2.00000
# 解释：合并数组 = [1,2,3] ，中位数 2

# 输入：nums1 = [1,2], nums2 = [3,4]
# 输出：2.50000
# 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

# 输入：nums1 = [0,0], nums2 = [0,0]
# 输出：0.00000

# 输入：nums1 = [], nums2 = [1]
# 输出：1.00000

# 输入：nums1 = [2], nums2 = []
# 输出：2.00000
```

**解题思路**：

+ 第k小数 -  使用递归的办法每次删掉有序数组的一半最后就可以得到中位数。

```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) == 0 and len(nums2) == 0:
            return float(('%.5f' % 0))
        list1 = nums1 + nums2
        list1.sort()
        length = len(list1)
        a = length % 2
        b = length // 2
        if a == 0:
            max = (list1[int(a + b) - 1] + list1[int(a + b)]) / 2
            return float(('%.5f' % max))
        else:
            max = list1[int(a + b) - 1]
            return float(('%.5f' % max))

```

5.给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

```python
# 输入: "babad"
# 输出: "bab"
# 注意: "aba" 也是一个有效答案。

# 输入: "cbbd"
# 输出: "bb"
```

**解题思路**:

+ 中心扩展算法

+ 每一个除了开头和结尾的字符都是可以扩散的中心，找出其中的状态转移链：

  $ P(i, j) \leftarrow P(i+1, j-1) \leftarrow P(i+2, j-2) \leftarrow \cdots \leftarrow \text{某一边界情况}$

```python
class Solution:
    def expandAroundCenter(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1

    def longestPalindrome(self, s: str) -> str:
        start, end = 0, 0
        for i in range(len(s)):
            left1, right1 = self.expandAroundCenter(s, i, i)
            left2, right2 = self.expandAroundCenter(s, i, i + 1)
            if right1 - left1 > end - start:
                start, end = left1, right1
            if right2 - left2 > end - start:
                start, end = left2, right2
        return s[start: end + 1]
```

6. 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```python
L   C   I   R
E T O E S I I G
E   D   H   N
```

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G

```

+ 解题思路: 创建一个字符数组用来存储对应位置的字符，最后连接。

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows<2: return s
        res = ["" for _ in range(numRows)]
        sid = 0
        flag = -1
        for c in s:
            res[sid] += c
            if sid == 0 or sid == (numRows-1):
                flag = -flag
            sid += flag
        return "".join(res)     
```

7.给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31, 2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

```python
class Solution:
    def reverse(self, x: int) -> int:
        y, res = abs(x), 0
        # 则其数值范围为 [−2^31,  2^31 − 1]
        boundry = (1<<31) -1 if x>0 else 1<<31
        while y != 0:
            res = res*10 +y%10
            if res > boundry :
                return 0
            y //=10
        return res if x >0 else -res
```

8.请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0 。

```python
import re
class Solution:
    def myAtoi(self, s: str) -> int:
        INTMAX = 2147483647
        INTMIN = -2147483648
        string = s.lstrip()
        num = re.findall(r"^[\+\-]?\d+",string)
        num = int(*num)
        return max(min(num,INTMAX),INTMIN)
```

9.判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

```python
import math
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x == 0:
            return True
        elif x < 0:
            return False
        else:
            num = 0
            x_r = x
            length = int(math.log(x,10))+1
            for i in range(length,0,-1):
                num += (x_r%10) * math.pow(10,i-1)
                x_r = x_r//10
            if num == x:
                return True
            else:
                return False
```

10.给你一个字符串 `s` 和一个字符规律 `p`，请你来实现一个支持 `'.'` 和 `'*'` 的正则表达式匹配。

```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p: return not s
        # 第一个字母是否匹配
        first_match = bool(s and p[0] in {s[0],'.'})
        # 如果 p 第二个字母是 *
        if len(p) >= 2 and p[1] == "*":
            return self.isMatch(s, p[2:]) or \
            first_match and self.isMatch(s[1:], p)
        else:
            return first_match and self.isMatch(s[1:], p[1:])
```

11.给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        a, b = 0, len(height)-1
        res = 0
        while a < b:
            area = min(height[a], height[b])*(b-a)
            if area > res:
                res = area
            if height[a] > height[b]:
                b -= 1
            elif height[a] < height[b]:
                a += 1
            else:
                a += 1
                b -= 1
        return re
```

12.罗马数字包含以下七种字符： `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```markdown
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

**解题思路**：

+ 使用贪心哈希表尽可能地匹配数字

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        hashmap = {
            1000:'M', 
            900:'CM', 
            500:'D', 
            400:'CD', 
            100:'C', 
            90:'XC', 
            50:'L', 
            40:'XL', 
            10:'X', 
            9:'IX', 
            5:'V', 
            4:'IV', 
            1:'I'
        }
        result = ""
        for k in hashmap:
            if num // k !=0:
                count = num // k 
                result += hashmap[k]*count
                num %= k
        return result
```

13.罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        hashmap = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        result = 0
        for index in range(len(s)-1):
            if(hashmap[s[index]]<hashmap[s[index+1]]):
                result -= hashmap[s[index]]
            else:
                result += hashmap[s[index]]
        return result + hashmap[s[-1]]
```

14.编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans = ''
        for i in zip(*strs):
            if len(set(i)) == 1:
                ans += i[0]
            else:
                break
        return ans
```

15.给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

**解题思路**：

+ 首先需要对数组进行排序，这样方便下一步的进行双指针处理,双指针可以减少枚举的范围。
+ 双指针进行运算，第一个指针是选定数字的下一个数字，另外一个指针在从后往前进行遍历。

```python
class Solution:
    def threeSum(self, nums: [int]) -> [[int]]:
        nums.sort()
        res, k = [], 0
        for k in range(len(nums) - 2):
            if nums[k] > 0: break # 1. because of j > i > k.
            if k > 0 and nums[k] == nums[k - 1]: continue # 2. skip the same `nums[k]`.
            i, j = k + 1, len(nums) - 1
            while i < j: # 3. double pointer
                s = nums[k] + nums[i] + nums[j]
                if s < 0:
                    i += 1
                    while i < j and nums[i] == nums[i - 1]: i += 1
                elif s > 0:
                    j -= 1
                    while i < j and nums[j] == nums[j + 1]: j -= 1
                else:
                    res.append([nums[k], nums[i], nums[j]])
                    i += 1
                    j -= 1
                    while i < j and nums[i] == nums[i - 1]: i += 1
                    while i < j and nums[j] == nums[j + 1]: j -= 1
        return res
```

16.给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

```python
#                '2':['a','b','c'],
#                '3':['d','e','f'],
#                '4':['g','h','i'],
#                '5':['j','k','l'],
#                '6':['m','n','o'],
#                '7':['p','q','r','s'],
#                '8':['t','u','v'],
#                '9':['w','x','y','z']
```

**解题思路**:

+ 对于处理多个排列组合，第一反应应该是递归，选择一个数字然后尽可能地去寻找之后的所有排列组合。

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0 :
            return []
        phone = {
                '2':['a','b','c'],
                '3':['d','e','f'],
                '4':['g','h','i'],
                '5':['j','k','l'],
                '6':['m','n','o'],
                '7':['p','q','r','s'],
                '8':['t','u','v'],
                '9':['w','x','y','z']}
        
        def backTrack(combination,nextdigital):
          	#组合可能性的结束，就是所有的数字结束
            if len(nextdigital) == 0:
                ans.append(combination)
            else:
                for i in phone[nextdigital[0]]:
                    backTrack(combination+i,nextdigital[1:])
        ans = list()
        backTrack('',digits)
        return ans
```

17.给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

```python
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []
        nums.sort()
        length = len(nums)
        # 构建一个用来hash的表
        hashtable = {value:index for index,value in enumerate(nums)}
        # 枚举
        for i in range(length-3):
            if i>0 and nums[i] == nums[i-1]: continue
            if nums[i] * 4 > target: break
            if nums[i] + 3 * nums[-1] < target: continue
            for j in range(i+1, length-2):
                if j>i+1 and nums[j] == nums[j-1]: continue
                if nums[i] + 3*nums[j] > target: break
                if nums[i] + nums[j] + 2*nums[-1] < target:
                    continue
                for k in range(j+1,length-1):
                    if k>j+1 and nums[k] == nums[k-1]: continue
                    key = target-nums[i]-nums[j]-nums[k]
                    if hashtable.get(key,-1)>k:
                        ans.append([nums[i], nums[j], nums[k], key])
        return ans
```

18.给定一个链表，删除链表的倒数第 *n* 个节点，并且返回链表的头结点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**解题思路**:

+ 普通方法很好想到，首先第一次遍历先返回整个链表的大小长度，第二次遍历整个链表将倒数第N个节点跳过并重新归置链表。
+ 进阶的办法，即使用快慢指针，即我们并不需要重复遍历整个链表，即只需要将快指针前n个，两个指针同时开始遍历整个链表，每次向前迭代1个节点，当快指针指向整个链表的末尾节点时，慢指针跳过当前节点，最后返回整个链表。
+ 回溯法比较巧妙，就是每次回溯的时候来计算整个链表的长度，当然，这个长度是对于整个链表从后到前的长度，当长度等于n时，将该节点删除。

```python
class Solution:  
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        if not head: 
            self.count = 0
            return head
        head.next = self.removeNthFromEnd(head.next, n) # 递归调用
        self.count += 1 # 回溯时进行节点计数
        return head.next if self.count == n else head
```

19.给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

```python
class Solution:
    def isValid(self, s: str) -> bool:
      	if len(s) % 2 == 1:
          return False
        dic = {'{': '}',  '[': ']', '(': ')', '?': '?'}
        stack = ["?"]
        for c in s:
            if c in dic: stack.append(c)
            elif dic[stack.pop()] != c: return False 
        return len(stack) == 1
```

20.给你一个升序排列的整数数组 nums ，和一个整数 target 。

假设按照升序排序的数组在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。

请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

**解题思路**:

+ 必须要考虑的事情，第一个是怎么快速的找到转折点，另外一个是怎么找到那个数，因此二分查找就可以用到了。

```C++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l = 0;
        int r = nums.size() - 1;
        int mid;
        while (l < r){
            mid = l + (r - l) / 2;
            if ((nums[0]> target) ^ (nums[mid] < nums[0]) ^ (nums[mid] < target))
                l = mid + 1;
            else
                r = mid;
        }
        return l == r && nums[l] == target? l:-1;
    }
};
```

21.输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

**示例 1:**

给定二叉树 `[3,9,20,null,null,15,7]`

```
    3
   / \
  9  20
    /  \
   15   7
```

返回true

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
 返回false
```

**解题代码**：

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isBalanced(TreeNode* root) {
      if(!root) return True; // 如果是空的那一定是平衡的
      if(abs(depth(root->left),depth(root->right))>1) return False;
      return isBalanced(root->left) && isBalanced(root->right);
    }
  	int depth(TreeNode* tree){
      if(!tree) return 0;
      int leftheight = depth(tree->left);
      int rightheight = depth(tree->right);
      return leftheight>rightleft? leftheight+1:rightleft+1;
    }
```

```c++
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return !root ? true : abs(depth(root->left) - depth(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
    }
    int depth(TreeNode* cur) { //计算二叉树的最大深度
        return !cur ? 0 : max(depth(cur->left), depth(cur->right)) + 1;
    }
};
```

22.将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

```C++
// 一般方法  C++ 迭代
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {

        ListNode* ans = new ListNode(0);
        ListNode* cur = ans;

        while(l1!=nullptr && l2!= nullptr){
            ListNode** temp = (l1->val < l2->val)? &l1:&l2;
            ans->next = *temp;
            ans = ans->next;
            *temp = (*temp)->next; // 指针的指针指向
        }
        ans->next = (l1 == nullptr)? l2:l1;
        ListNode* result = new ListNode(0);
        result = cur->next;
      	delete ans;
      	delete cur;
        return result;
    }
};
```

```c++
// 递归
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {

        if(l1 == nullptr){
            return l2;
        }
        if (l2 == nullptr){
            return l1;
        }
        if(l1->val < l2->val){
            l1->next = mergeTwoLists(l1->next,l2);
            return l1;
        }else{
            l2->next = mergeTwoLists(l1,l2->next);
            return l2;
        }
    }
};
```

23.用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

```c++
#include <stack>
class CQueue {
public:
    stack<int> stack1;
    stack<int> stack2;
    CQueue() {

    }
    
    void appendTail(int value) {
        stack1.push(value);
    }
    
  	// 需要出队列的是 stack2 的栈顶元素或者是stack1的栈底元素 没出去一个元素就要pop掉
    int deleteHead() {
        int ans;
        if(stack1.empty() && stack2.empty()) return -1;
        if(!stack2.empty()){
            ans = stack2.top();
            stack2.pop();
            return ans;
        }else if(!stack1.empty()){
            while(!stack1.empty()){
                stack2.push(stack1.top());
                stack1.pop();
            }
            ans = stack2.top();
            stack2.pop();
            return ans;
        }
        return ans;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue* obj = new CQueue();
 * obj->appendTail(value);
 * int param_2 = obj->deleteHead();
 */
```

24.输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

```c++
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int>s;
        int length = pushed.size();
        int j = 0;
        for(int i=0;i<length;i++){
            s.push(pushed[i]);
            while(j<length && j<=i && s.top() == popped[j] ){
                    s.pop();
                    j++;
            }
        }
        if(s.empty())
            return true;
        else
            return false;
    }
};
```

25.定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

```c++
class MinStack {
public:
    /** initialize your data structure here. */
    stack <int> inStack;
    stack <int> outStack;
    MinStack() {

    }
    
    void push(int x) {
        inStack.push(x);
        if(outStack.empty() || outStack.top()>=x)outStack.push(x);
    }
    
    void pop() {
        if(inStack.top() == outStack.top()) outStack.pop();
        inStack.pop();
        
    }
    
    int top() {
        return inStack.top();
    }
    
    int min() {
        return outStack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->min();
 */
```













----

# 华为机试练习题

1.获取字符串的最后一个单词的长度

> 题目描述
> 计算字符串最后一个单词的长度，单词以空格隔开。
>
> 输入描述:
> 输入一行，代表要计算的字符串，非空，长度小于5000。
>
> 输出描述:
> 输出一个整数，表示输入字符串最后一个单词的长度。
>
> 输入
>
> ```
> hello nowcoder
> ```
>
> 输出
>
> ```
> 8
> ```

**解题思路**

```c++
#include <iostream>
#include <string.h>
using namespace std;
char str[5000];
int main(){
    cin.get(str,5000);
    int length =strlen(str);
    if(length==0) cout<<0<<endl;
    int ans = 0;
    while(str[length-1]!=' '&&length>0){
        length--;
        ans++;
    }
    cout<<ans<<endl;
    return 0;
}
```

2.计算字符串个数

> 题目描述
> 写出一个程序，接受一个由字母和数字组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。
>
> 输入描述:
> 第一行输入一个有字母和数字以及空格组成的字符串，第二行输入一个字符。
>
> 输出描述:
> 输出输入字符串中含有该字符的个数。
>
> 输入
>
> ```
> ABCDEF
> A
> ```
>
> 输出
>
> ```
> 1
> ```

**解题思路**

```c++
#include<iostream>
#include<string.h>
using namespace std;
int main(){
    char str[2000];
    char target_char;
    cin.get(str,2000);
    cin>>target_char;
    int length = strlen(str);
    int ans = 0;
    while(length>0){
        if(str[length-1] == target_char || str[length-1] == tolower(target_char) || str[length-1] == toupper(target_char)) ans++;
        length--;
    }
    cout<<ans<<endl;
    return 0;
}
```

3.随机数输入排序和去重

输入描述:

```
注意：输入可能有多组数据。每组数据都包括多行，第一行先输入随机整数的个数N，接下来的N行再输入相应个数的整数。具体格式请看下面的"示例"。
```

```
3
2
2
1
11
10
20
40
32
67
40
20
89
300
400
15
```

输出描述:

```
返回多行，处理后的结果
```

```
1
2
10
15
20
32
40
67
89
300
400
```

解题思路:

```c++
#include<iostream>
#include<set>
using namespace std;

int main(){
    int N,n;
    set<int> ans;
    while(cin>>N){
        ans.clear();
        while(N--){
            cin>>n;
            ans.insert(n);
        }
        for(set<int>::iterator it=ans.begin();it!=ans.end();it++){
            cout<<*it<<endl;
        }
    }
    return 0;
}
```

4.•连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

输入描述:

```
连续输入字符串(输入2次,每个字符串长度小于100)

abc
123456789
```

输出描述:

```
abc00000
12345678
90000000
```

**解题思路**:

```c++
#include<iostream>
using namespace std;

void Deal(string s){
    if(s.size()<=8){
        int judge= 8-s.size();
        for(int i=0; i<judge;i++){
            s += '0';
        }
        cout<<s<<endl;
    }else{
        string next(s,0,8);
        cout<<next<<endl;
        s.erase(s.begin(),s.begin()+8);
        Deal(s);
    }
}

int main(){
    string str1;
    string str2;
    cin>>str1;
    cin>>str2;
    Deal(str1);
    Deal(str2);
    return 0;
}
```

```python
# Python Version
while True:
    try:
        strs = input()
        if len(strs)<8:
            ans = strs+ '0'*(8-len(strs))
            print(ans)
        else:
            inter_time = int(len(strs)//8)
            if len(strs) % 8 == 0:
                for i in range(inter_time):
                    print(strs[i*8:i*8+8])
            else:
                for i in range(inter_time):
                    print(strs[i*8:i*8+8])
                print(strs[inter_time*8:]+'0'*(8-len(strs[inter_time*8:])))
    except:
        break
```

5.写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

输入

```
0xA
0xAA
```

输出

```
10
170
```

**解题思路**

```python
# Python
import math
while True:
    try:
        hex_str = input()
        hex_tobin = {
            "0": "0000",
            "1": "0001",
            "2": "0010",
            "3": "0011",
            "4": "0100",
            "5": "0101",
            "6": "0110",
            "7": "0111",
            "8": "1000",
            "9": "1001",
            "A": "1010",
            "B": "1011",
            "C": "1100",
            "D": "1101",
            "E": "1110",
            "F": "1111",
        }
        bin_num = ''
        bin_list = []
        ans = 0
        for i in range(len(hex_str)):
            if i==0 or i==1:
                continue
            if hex_str[i] in hex_tobin:
                bin_list.append(hex_tobin[hex_str[i]])   
        for j in range(len(bin_list)):
            bin_num = bin_num + bin_list[j]
        length = len(bin_num)
        for k in range(length):
            if bin_num[k] == "1":
                ans=math.pow(2,length-k-1)+ans
        print(int(ans))
    except:
        break
```

```c++
// C++
#include<iostream>
#include<string>
#include<cmath>
using namespace std;

int main(){
    string hex_value;
    while(cin>>hex_value){
        int bit=0;
        int ans=0;
        for(int i=hex_value.length()-1;i>1;i--){
            if(hex_value[i]>='0'&& hex_value[i]<='9')
                ans += (hex_value[i]-'0')*pow(16,bit++);
            else if(hex_value[i]>='A'&&hex_value[i]<='F')
                ans += (hex_value[i]-'A'+10)*pow(16,bit++);
        }
        cout<<ans<<endl;
    }
    return 0;
}
```

6.功能:输入一个正整数，按照从小到大的顺序输出它的所有质数的因子（如180的质数因子为2 2 3 3 5 ）

输入描述

```
180
```

输出描述

```
2 2 3 3 5
```

```c++
#include<iostream>
#include<string>
using namespace std;

int main(){
    long int num;
    cin>>num;
    for(int i=2;i<num+1;i++){
        while(num%i==0){
            cout<<i<<' ';
            num/=i;
        }
    }
    cout<<endl;
    return 0;
}
// Python 与此思想相似不予举例
```

7.写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。

输入描述

```
输入一个正浮点数值

5.5
```

输出描述

```
输出该数值的近似整数值

6
```

**解题思路**

```c++
#include<iostream>
using namespace std;

int main(){
    float num;
    cin>> num;
    int integar = num / 1.0;
    float decimal = num - integar;
    if(decimal<0.5){
        cout<<(integar)<<endl;
    }else{
        cout<<(integar+1)<<endl;
    }
    return 0;
}
```

8.数据表记录包含表索引和数值（int范围的整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。

输入描述:

```
先输入键值对的个数
然后输入成对的index和value值，以空格隔开
4
0 1
0 2
1 2
3 4
```

输出描述:

```
输出合并后的键值对（多行）
0 3
1 2
3 4
```

```c++
#include <iostream>
#include <set>
#include <map>
using namespace std;

int main(){
    int num;
    map<int, int> m;
    cin>>num;
    for(int i=0;i<num;i++){
      	//输入成对使用pair关键字
        pair<int,int> arr;
        cin>>arr.first;
        cin>>arr.second;
        if((m.find(arr.first))!=m.end())
            m[arr.first] += arr.second;
        else
            m[arr.first] = arr.second;
    }
    for(auto it=m.begin();it!=m.end();it++)
        cout<<it->first<<" "<<it->second<<endl;
    return 0;
}
```

```python
while True:
    try:
        num = int(input())
        mn = dict()
        for i in range(num):
            line = input().split(" ")
            key = int(line[0])
            value = int(line[-1])
            if key not in mn:
                mn[key] = value
            elif key in mn:
                mn[key] += value
        for each in sorted(mn.keys()):
            print(each,mn[each])
    except:
        exit(0)
```

9.字符串按8位输出，不足8位的补0输出 参见力扣的相关练习题，这里只给出代码:

```c++
#include <iostream>
#include <string>
using namespace std;
int main()
{
   // cout << "hello" << endl;
    int n;
    while(cin >> n) {
        while(n--) {
            string str1;
            cin >> str1;
            while(str1.size() > 8) {
                cout << str1.substr(0, 8) << endl;
                str1 = str1.substr(8);
            }
            while(str1.size() != 8) {
                str1 += '0';
            }
            cout << str1 << endl;
        }
 
   }
}
```

10.计算字符串最后一个单词的长度，单词以空格隔开。c

```c++
#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    getline(cin,str);
    int count = 0;
    int len = str.length();
    for(int i=len-1;i>=0;i--){
        if(str[i]!=' ') count++;
        else break;
    }
    cout<<count;
    return 0;
}
```

11.给定一个正整数N代表火车数量，0<N<10，接下来输入火车入站的序列，一共N辆火车，每辆火车以数字1-9编号，火车站只有一个方向进出，同时停靠在火车站的列车中，只有后进站的出站了，先进站的才能出站。要求以字典序排序输出火车出站的序列号。

```c++
#include <iostream>
#include <stack>
#include <algorithm>
using namespace std;

bool checkPoPRule(int* pop, int* push, int len){
    if(pop == NULL || push == NULL || len<=0) return false;
    stack<int>Stack;
    int i=0,j=0;
    for(i = 0; i<len; i++){
        Stack.push(push[i]);
        while(j<len && Stack.size() !=0 && pop[j]==Stack.top())
        {
            Stack.pop();
            j++;
        }
    }
    return Stack.empty();
}

int main(){
    int N;
    while (cin>>N){
        int *pop = new int [N];
        int *push = new int [N];
        for(int i=0; i<N; i++){
            cin>>push[i];
            pop[i] = push[i];
        }
        // 结束后为pop做一次排序来保证初始化的完全性
        sort(pop,pop+N);
        // 为输出预测的pop进行一次全排列
        do {
            if(checkPoPRule(pop,push,N)){
                for (int i = 0; i < N-1; ++i) {
                    cout<<pop[i]<<' ';
                }
                cout<<pop[N-1]<<endl;
            }

        }while (next_permutation(pop,pop+N));
    }
    return 0;
}
```

12.对字符串中的所有单词进行倒排。

说明：

1、构成单词的字符只有26个大写或小写英文字母；

2、非构成单词的字符均视为单词间隔符；

3、要求倒排后的单词间隔符以一个空格表示；如果原字符串中相邻单词间有多个间隔符时，倒排转换后也只允许出现一个空格间隔符；

4、每个单词最长20个字母；

```java
// Java
import java.util.*
public class Main{
    public String reverse(String str){
        String[] items = str.split("[^A-Za-z]");
        StringBuilder ans  = new StringBuilder();
        for(int i=items.length-1;i>=0;i--){
            ans.append(items[i]).append(" ");
        }
        return ans.toString().trim();
    }
    
    public static void main (String[] args){
        Main solution = new Main();
        Scanner in = new Scanner(System.in);
        while(in.hasNextLine()){
            String str = in.nextLine();
            String ans = solution.reverse(str);
            System.out.println(ans);
        }
    }
}
```

13.题目描述

输入一个链表，反转链表后，输出新链表的表头。

```c++
/*
struct ListNode {
	int val;
	struct ListNode *next;
	ListNode(int x) :
			val(x), next(NULL) {
	}
};*/
class Solution {
public:
  	// 用栈反转链表
    ListNode* ReverseList(ListNode* pHead) {
      if(pHead == nullptr || pHead->next == nullptr)
        return pHead;
      ListNode* p = pHead;
      stack<ListNode*>s;
      // 先进栈
      while(p->next){
        s.push(p);
        p = p->next;
      }
      p->next = nullptr;
      // 再出栈
      ListNode* q = p; // q 为头指针
      while(!s.empty()){
        p->next = s.top();
        p = p->next;
        s.pop();
      }
      p->next = nullptr;
      return q;
	}
  
  // 递归方法
  ListNode* ReverseList_Recursion(ListNode* pHead){
    if(pHead == nullptr || pHead->next == nullptr) return pHead;
    // 先进行反转 
    ListNode* ReverserNodes = ReverseList_Recursion(pHead->next);
    // 再将当前节点设置为后面节点的后续节点
		pHead->next->next = pHead;
    pHead->next = nullptr;
    return RecerserNodes;
  }
}
```









# 经典算法及其实现

## 1 快速排序法

```c++
#include <iostream>
using namespace std;
void quick_sort(int a[], int start, int end)
{
    if(start < end) {
        int base = a[start];
        int i = start;
        int j = end;
        while (i < j) {
            while (i < j && base <= a[j]) j--;
            if (i < j) a[i++] = a[j];
            while (i < j && base >= a[i]) i++;
            if (i < j) a[j--] = a[i];
        }
        a[i] = base;
        quick_sort(a, start, i - 1);
        quick_sort(a, i + 1, end);
    }
}

int main()
{
    int a[]={5,3,2,0,6,8,9,10,15,7};
    int length = sizeof(a) / sizeof(int);
    quick_sort(a,0,length-1);
    for (int i = 0; i < length; i++) {
        cout<<a[i]<<' ';
    }
    return 0;
}
```

## 2. 冒泡排序法













