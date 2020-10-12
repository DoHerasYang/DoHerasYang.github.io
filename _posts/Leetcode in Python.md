# Leetcode

>来源：力扣（LeetCode）

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

  

