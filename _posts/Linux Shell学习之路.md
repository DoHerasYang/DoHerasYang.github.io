---
layout: post
title: 'C/C++'
date: 2020-02-10
author: DoHerasYang
color: rgb(153,153,255)
cover: 
tags:

---

[TOC]



---

# Linux Shell 学习之路 - CentOS/Kali



> **写在前边**
>
> 本篇的内容不从类似其他我写过的博客更偏向编写一本书的角度来撰写，通常上来说，我希望我的每一篇博客的每一个主题都是可以对一个陌生的方向有一点点启示和帮助，其实这种编写和阅读方式对于完整地学习一个完全陌生的内容确实有很大的帮助，这种帮助是对于一个新的方向的全新的认识，但是对于记录平常的工作上学到的内容就变得非常不友好了。
>
> 因此，在这里，我想用一种全新的讲述、记录方式来记录我在工作中学到的知识以及问题解决方式，为了避免记录流水账让这篇回忆技术和工作的博客变得非常无聊，我尽量将每一部分的标题与我进行工作的思路相关，或者可以被理解成为什么我进行这部分的工作，希望能用这种特殊的方式为自己的工作留下一点点回忆。
>
> 



## 1. 开始学习 - 进行一点准备

















## 2. F5-CentOS Linux 环境下的问题以及其脚本学习

> 
>
> 根据业务需要，我们需要将一台价值60w的 F5设备接入到测试环境下，一般来说，F5作为数据中心中的核心网络设备部分，连接着资源池和后端服务，而我也是第一次接手这么重要的一台设备，我的现阶段的任务是了解 F5 设备的使用方式，下一步需要根据具体需求需要做后期的自动化部署和运维，因此前期的任务是尽可能去了解这台设备的特性和探索自动化运维的方式。
>
> 



### 2.1 开始了解这台F5设备

登录到 F5 设备需要在 IP 地址之前加上 `https`， 才能使用浏览器进行登录。

#### 2.1.1 前期准备

目前正式拿上了这台 F5 设备，这台设备已经被接入到了测试网的环境中，但是目前并没有实现和其他网络设备部分的互联，这部分需要下一步的工作支持，我必须很快地了解这台设备的基本操作环境以及配套软件环境。



**第一步，我需要知道 F5 设备的 Linux 内核版本是什么？这个对于之后的工作是非常重要的。**

参照附录的命令，我第一次选择了 `uname` 命令来打印内核信息和操作系统信息，`uname -srm`, 但是结果并不是让我非常满意，给出的信息是:

```shell
Linux 3.10.0-862.14.4.e17.x86_64 x86_64
```

我需要知道更详细的内核版本信息，我参考了这篇文章:	https://linuxize.com/post/how-to-check-linux-version/

第一个方法 `lsb_release -a` 在该Linux版本下无效。

第二个方法 查找 `/etc/os-release` 文件，并使用 `cat` 命令打印出来，目录下没有该文件。

第三个方法 查找 `/etc/issue` 文件， 并使用 `cat `命令打印出来，目录下没有该文件。

第四个方法 使用命令 `hostnamectl` 打印信息，环境下没有该命令。

第五个方法 查找文件 `/etc/*release`，并使用 `cat ` 命令打印出来。该方法奏效。

```shell
CentOS release 6.8 (Final)
BIG-IP release 13.1.3.4 (Final)
```

具体的版本信息参照	https://support.f5.com/csp/article/K3645

确定版本的 F5 文件	https://support.f5.com/csp/article/K14461



**第二步，了解 F5的具体软件及其配套服务**

首先必须了解到什么是 "BIG-IP"。

BIG-IP 是 F5 公司 为了方便用户来配置F5对应产品



























## 3.  Kali Linux 下的渗透学习















---

## 附录常用命令



`uname` 打印系统的关键信息 ,以下的参数可以放在一起组合

+ `-a` 查看全部的信息
+ `-s` 查看内核的名称
+ `-n` 查看当前网络节点的名称
+ `-r` 打印内核相关信息
+ `-v` 查看内核的版本
+ `-m` 查看机器硬件名称，一般为系统的位数
+ `-p` 与`-m`一致
+ `-i` 查看硬件平台
+ `-o` 打印操作系统信息











