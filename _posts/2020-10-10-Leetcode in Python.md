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

**遍历一个链式结构**

> ```c++
> typedef struct Node
> {
>   int data;
>   struct Node *next;
> }Node;
> typedef struct Node *LinkList
> 
> bool getItemInChain(LinkList *L, int i, int *e){
>   int j;
>   LinkList p;
>   p = L->next;
>   j = 1;
>   while(p && j<1){
>     p = p->next;
>     j++;
>   }
>   *e = p->data;
>   return true;
> }
> ```

**插入删除**

> ```c++
> // 算法思想是在插入的位置记录一个指针，然后一个计数器设为 i ， 记录依次插入
> bool insertItemChain(LinkList *L, int i, int e){
>   int j = 1;
>   LinkList p,s;
>   p = *L;
>   // 开始遍历查找插入的节点地址
>   while(p && j<i){
>     p = p->next;
>     j++;
>   }
>   if(!p || j>i){
>     return ERROR;
>   }
>   s = (LinkList)malloc(sizeof(Node));
>   s->data = e;
>   s->next = p->next;
>   p->next = s;
>   return true;
> }
> ```
>
> 时间复杂度 $O(n)$,  优势是如果知道了插入位置，那么插入就变的非常的简单。
>
> ```c++
> // 删除与插入类似，找到需要删除的节点的上一个位置即可。
> bool deleteItemChain(LinkList *L, int i, int *e){
>   int j = 1;
>   LinkList p,q;
>  	p = *L;
>   while(p->next && j<i){
>     p = p->next;
>     j++;
>   }
>   if(!(p->next) || j>i)
>     return false;
>   q = p->next;
>   p->next = q->next;
>   *e = q->data;
>   free(q);
>   return true;
> }
> ```
>
> 

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

23.

















