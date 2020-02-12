---
layout: post
title: 'ScalableML'
date: 2020-02-10
author: DoHerasYang
color: rgb(255,102,32)
cover: ''
tags: Notes

---

# ScalableML



### 1.Lab1 and Background Notes

#### 1.1 The Configuratiion problems and Fixes

> **Mac - Switch the Different JAVA version in the Mac** 
>
> 1.Firstly, you should specify your JAVA installed version in your mac, you could input this command into your computer.
>
> ```shell
> $ /usr/libexec/java_home -V
> Matching Java Virtual Machines (2):
>     13, x86_64:	"Java SE 13"	/Library/Java/JavaVirtualMachines/jdk-13.jdk/Contents/Home
>     1.8.0_241, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_241.jdk/Contents/Home
> ```
>
> 2.Next, visit the orcle website to install the JDK software NOT JRE in your mac, the default installation position is `/Library/JAVA/JavaVirtualMachines`, you could obtain all the effective JDK components from there.
>
> 3.Next, we should update the `~/.bash_profile` to add the command into the default environment.
>
> ```shell
> $ vi ~/.bash_profile
> # Add below lines into the end of this file
> export JAVA_8_HOME="$(/usr/libexec/java_home -v 1.8)"
> export JAVA_13_HOME="$(/usr/libexec/java_home -v 13)"
> 
> alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
> alias jdk13="export JAVA_HOME=$JAVA_13_HOME"
> # indicate the default jdk version
> export JAVA_HOME=$JAVA_8_HOME
> ```
>
> 4.Update the `~/.bash_profile` and switch your JAVA version.
>
> ```shell
> $ source ~/.bash_profile
> $ jdk8 && java -version
> java version "1.8.0_241"
> Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
> Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)
> $ jdk13 && java -version
> java version "13" 2019-09-17
> Java(TM) SE Runtime Environment (build 13+33)
> Java HotSpot(TM) 64-Bit Server VM (build 13+33, mixed mode, sharing)
> ```



> **Install the `Spark(2.3.2)` and Configure the Jupyter Notebook**
>
> 1.Go to this [Link](https://archive.apache.org/dist/spark/) to download all the history Apache Spark software. Select one specific version you want.
>
> 2.Extract the downloaded file into the location `/usr/local`, if you don't know how to access to this  path directly you can open the `finder` and press `Shift+Command+G`, open the `~/.bash_profile` to add the Spark documents into the system path.
>
> ```shell
> $ vim ~/.bash_profile
> # Change the command to accord with your situation
> export SPARK_HOME=/usr/local/{spark-2.3.2-bin-hadoop2.6}
> export PATH="$PATH:$SPARK_HOME/bin:$PATH"
> ```
>
> 3.Check the python version from your computer and You should add the the correspnding location information into the `~/.bash_profile` 
>
> ```shell
> $ which python3
> {Your Default Python Installation Location}
> $ vim ~/.bash_profile
> export PYSPARK_PYTHON="{Your Default Python Installation}"
> # e.g. "/Library/Frameworks/Python.framework/Versions/3.5/bin/python3.5"
> export PYSPARK_DRIVER_PYTHON="{Your Default iPython Installation}"
> # e.g. "/Library/Frameworks/Python.framework/Versions/3.5/bin/ipython3"
> export PYSPARK_DRIVER_PYTHON_OPTS="notebook"
> alias pysbook='$SPARK_PATH/bin/pyspark'
> ```
>
> 4.After that, you could open the `Jupyter Notebook` by `pyspark` command or `pysbook`. You can alter the kernel as you like.
>
> 5.Enjoy your `Pyspark`!

> **Disscussion on the Command `qrshx` on the HPC**
>
> 1.The details of the `qrshx`:
>
> ```shell
> $ qrshx -P rse \ #
> ```
>
> 

