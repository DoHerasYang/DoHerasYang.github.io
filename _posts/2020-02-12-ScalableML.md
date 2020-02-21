---
layout: post
title: 'ScalableML'
date: 2020-02-10
author: DoHerasYang
color: rgb(255,102,32)
cover: ''
tags: Pyspark

---

# ScalableML - Pyspark

### 1. Lab1 and Background Notes

#### 1.1 The Configuratiion problems and Fixes

> **Mac - Switch the Different JAVA version on Mac** 
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
> 2.Next, visit the orcle website to install the JDK software NOT JRE in your mac, the default installation position is `/Library/JAVA/JavaVirtualMachines`, you could obtain all the effective JDK components from [there](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html).
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

---

> **Install the `Spark(2.3.2)` and Configure the Jupyter Notebook on local Machine(MAC)**
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

---

> **Disscussion on the Command `qrshx` on the HPC**
>
> 1.The details of the `qrshx`:
>
> ```shell
> $ qrshx -P {Parameters} 
> #gpu: GPU-equipped nodes (public)
> #rse: Research Software Engineering group's CPU-only nodes (restricted access)
> #rse-training: For training courses run by the Research Software Engineering group (restricted access)
> #insigneo-imsb: Insigneo Integrative Musculo-Skeletal Biomechanics (IMSB) subgroup's nodes (restricted access)
> #security: Computer Science Security project (restricted access)
> #cstest: CiCS testing only
> 				-pe openmp 4
> #The numebr of cores
> #The amount of cores should be below the 4
> 				-l rmem=16G
> #obtain the real memory
> 				-M {Your email address}
> 				-j y
> #normal and error outputs into a single file (the file above)
> 				-gpu=1
> #the GPU numbers you want to use
> #https://docs.hpc.shef.ac.uk/en/latest/sharc/GPUComputingShARC.html#gpucomputing-sharc
> $./{my_programe} --num-cores=2
> ```
>
> 2.The command should accod with the [JupyterHub Server](https://jupyter-sharc.shef.ac.uk/) interface information. If not, you will not be allowed to distribute the resource.

---

> **The Command `spark-submit`**
>
> The `spark-submit` script in Spark’s `bin` directory is used to launch applications on a cluster.
>
> For Python, you can use the `--py-files` argument of `spark-submit` to add `.py`, `.zip` or `.egg` files to be distributed with your application.
>
> For General use, we could rely on this command to submit the jobs to the could clusters by requesting the resources.
>
> Essential Parameters:
>
> + **--master MASTER_URL**: The [master URL](https://spark.apache.org/docs/latest/submitting-applications.html#master-urls) for the cluster.<br>
>
>   There are two different modes:<br>
>
>   + Spark On Mesos : mesos://host:port
>   + Spark On YARN: yarn://host:port
>   + local
>
> + **--class**: The entry point for your application (e.g. `org.apache.spark.examples.SparkPi`)
>
>   Only used for JAVA and Scala Application.
>
> + **--py-files**: The equivalent `--py-files` option can be used to distribute `.egg`, `.zip` and `.py` libraries to executors.



#### 1.2 Background Information

##### **Recap**:

![Spark-Overview](/Pictures/Spark/Spark-Overview.png)

The Spark application can be interpretered into two parts: Driver Program and Application Master with the high level consisting of the **SparkContext** , Creating the RDDS and Performing the remain processes to achieve the final result.These transformations of RDDs are then translated into DAG and submitted to Scheduler to be executed on set of worker nodes.

The Spark application can handle with the user program request and separate process to excute user application, it can also creates SparkContext to control the cluster manager and schedule job execution.

![Spark-Core](/Pictures/Spark/Spark-Core.png)



##### **RDDs(Resilient Distributed Dataset)**:

<u>RDD</u> could be regarded as the immutable parallel data structure with failure recovery possibilities. The Spark provides the APIs for materializations of data as well as for control over caching and partitioning of elements to optimize data placement. RDD stores information about its parents to optimize execution (via pipelining of operations) and recompute partition in case of failure. Each RDD is split into multiple partitions (similar pattern with smaller sets).
which may be computed on different nodes of the cluster.

- Resilient

Fault-tolerant, is able to recomputer missing or damaged partitions due to node failures.

+ Distributed

Data residing on multiple nodes in a cluster.

+ Dataset

A collection of partitioned elements, e.g. tuples or other objects(that represent records of the data you work with)



RDD has five main properties in Pyspark:

```python
#a list of partitions (e.g. splits in Hadoop)
#i.e. the data inside a RDD is partitioned (split into Partitions) and then distributed across nodes in a cluster(one partition per JVM that may not correspnd to a single node)
def getPartitions: Array[Partition]

#a list of dependencies on other RDDs 
# Immutaable or Read-only
# - it does bot change once created and can be transformed using transformations to Rew RDD
def getDependencies: Seq[Dependency[_]]

#a function for computing each split
def compute(split: Partition, context: TaskContext): Iterator[T]

#(optional) a list of preferred locations to compute each split on
def getPreferredLocations(split: Partition): Seq[String] = Nil

//(optional) a partitioner for key-value RDDs
partitioner: Option[Partitioner] = None  
```

Next, we will talk about the details and demenstration of functions in initialing pyspark RDD.

```python
# Two main ways to create RDDs:
# 		+ load an external dataset(SQL/Hadoops)
# 		+ distributing a set of objects

from pyspark.sql import SparkSession
spark = SparkSession \
      .builder \
      .appName("Demo RDD Example") \
      .config("spark.some.config.option","some-value") \
      .master("local") \
      .getOrCreate()
      

sc = spark.sparkContext      
df = spark.sparkContext.parallelize([(1,2,3,'a b c')]).toDF(['col1','col2','col3','col4'])

# output
+----+----+----+-----+
|col1|col2|col3| col4|
+----+----+----+-----+
|   1|   2|   3|a b c|
+----+----+----+-----+

```

The `SparkSession` is the entry point and can be created DataFrame as the input data frame. 

The `.builder` allows users to construct a new SparkSession instance. 

The `.config` could allow system to select a config about the application users created which can use this method are automatically propagated to both `SparkConf` and [`SparkSession`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=sparksession#pyspark.sql.SparkSession)’s own configuration. In other words, it is the the configuration of the Spark application, used to set various Spark parameters as key-value pairs.

```python
from pyspark import SparkConf
new_instance = SparkConf()
spark = SparkSession.builder.config(new_instance)
```

The `.master` sets the Spark master URL to connect to, such as “local” to run locally, “local[4]” to run locally with 4 cores, or `'spark://master:7077'` to run on a Spark standalone cluster.

For more details, you can click [here](https://www.javatpoint.com/pyspark-rdd) to learn more actions and transformations about the RDD.





#### 1.3 Some Actions and Transformations in PySpark

`pyspark.sql.functions.split`(*str*, *pattern*)  [[source]](https://spark.apache.org/docs/latest/api/python/_modules/pyspark/sql/functions.html#split)

+ This function's object is the `DataFrame`, and this function requires a returned variable instead of changing the original DataFrame.
+ The **returned variable's type** is `pyspark.sql.column.Column`, we can't use the normal pyspark function like `collect() / show()` to handle with this type's variable. But we can use the `pyspark.sql.Column.getItem(num)`

```python
df = spark.createDataFrame([('slppp6.intermind.net - - [01/Aug/1995:00:00:11 -0400] "GET /history/skylab/skylab-small.gif HTTP/1.0" 200 9202',)],['value'])
split_logFile = split(df['value'], '- -')
```

<br>

`pyspark.sql.DataFrame.select()`

+ Projects a set of expressions and returns a new `DataFrame`, and the the parameters: **cols** – list of column names (string) or expressions (Column). If one of the column names is ‘*’, that column is expanded to include all columns in the current DataFrame.
+ The returned variable is the **`pyspark.sql.dataframe.DataFrame`**.

<br>

`pyspark.sql.DataFrame.withColumn(colName,col)`

+ Returns a new **DataFrame** by adding a column or replacing the existing column that has the same name.
+ The column expression must be an expression over this **DataFrame**; attempting to add a column from some other [`DataFrame`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=read text#pyspark.sql.DataFrame) will raise an error.
+ Parameters:
  - **colName** – string, name of the new column.
  - **col** – a [`Column`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=read text#pyspark.sql.Column) expression for the new column.

```python
df = spark.createDataFrame([('slppp6.intermind.net - - [01/Aug/1995:00:00:11 -0400] "GET /history/skylab/skylab-small.gif HTTP/1.0" 200 9202',)],['value'])
split_logFile = df.split(df.value,r'- -')
new_logFile = new_object.withColumn('URL', split_logFile.getItem(0))
```

<br>

`pyspark.sql.DataFrame.dropDuplicates()`

+ Return a new **DataFrame** with duplicate rows removed, optionally only considering certain columns. If you want to select the specifical row or columns to handle, you should use the `select` function.

```python
new_logFile.select('URL').dropDuplicates().count()
```

<br>

`pyspark.sql.DataFrame.orderBy()`

+ There are various ways to use this fuction, the directly way is to just import this function.
+ Returns a new `DataFrame` sorted by the specified column(s).
+ The Parameters:
  + **cols** – list of [`Column`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=orderby#pyspark.sql.Column) or column names to sort by.
  + Ascending:  both the boolean and list. Boolean parameters are used for ONE row, the list can be used to process the multiply rows.

```python
result = new_logFile.orderBy("count", ascending = False).take(1)
# the type of result is Row
result[0][0]
```

<br>

`pyspark.sql.DataFrame.limit(num)`

+ Limits the result count to the number specified. The returned variable's type is `DataFrame`

<br>

`pyspark.sql.DataFrame.collect()`

+ Returns all the records as a list of [`Row`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=collect#pyspark.sql.Row).
+ If you want to access the value in the list, you can access by `{list_name[0]}`

<br>

 `pyspark.sql.Row`

+ A row in [`DataFrame`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=read text#pyspark.sql.DataFrame). The fields in it can be accessed:  `row.key` and `row['key']`.
+ The Row object in pyspark's type is the `list`, so if you want to assess the content of `Row` object, you could follow the rules of python `List`.
+ From the `DataFrame`, you can use `take()` function to generate `Row` variable.

```python
>>>>result? 
Type:        list
String form: [Row(URL='edams.ksc.nasa.gov ', count=6530)]
Length:      1
Docstring:  
list() -> new empty list
list(iterable) -> new list initialized from iterable's items
```

<br>

`pyspark.sql.DataFrame.groupBy() `

+ This function can <u>delete the repeated variables</u> in each row, so sometimes it can be treated as another way to reduce the complexity of the DataFrame.
+ The returned variable's type is `pyspark.sql.group.GroupedData`. If you want to show the details of this data structure, you should convert this to DataFrame like `count / avg / agg etc functions`.
+ [pyspark.sql.GroupedData.agg](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.agg) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.apply](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.apply) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.avg](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.avg) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.count](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.count) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.max](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.max) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.mean](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.mean) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.min](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.min) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.pivot](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.pivot) (Python method, in pyspark.sql module)
+ [pyspark.sql.GroupedData.sum](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=group#pyspark.sql.GroupedData.sum) (Python method, in pyspark.sql module)

```python
v = sc.parallelize([(1,'a','bn'),(2,'b','mn'),(2,'a','nm')]).toDF(['num','rule','str'])
v.groupby('rule').count().collect()
# output
[Row(rule='b', count=1), Row(rule='a', count=2)]
```

<br>

`pyspark.SparkContext.parallelize(c, numSlices=None)`

+ The first parameters can be assigned as `list/array` type.
+ The second parameter is the `numSlices` which indicates the number of slice in `DataFrame`.

<br>

`pyspark.sql.DataFrmae.filter()`

+ Parameters:

  **condition** – a [`Column`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=filter#pyspark.sql.Column) of [`types.BooleanType`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=filter#pyspark.sql.types.BooleanType) or a string of SQL expression.

<br>

`pyspark.RDD.map()`

+ Return a new RDD by applying a function to each element of this RDD.

```python
>>>>demo = spark.sparkContext.parallelize([1,2,3,4,5,6])
>>>>demo.map(lambda x: x+1).collect()
[2, 3, 4, 5, 6, 7]
```

<br>

`pyspark.sql.DatFrame.regexp_extract(str,pattern,idx)`

+ returned type is `pyspark.sql.column.Column` which can be used as the parameters of function `select`.

+ Parameters:<br>

  + `str`: the name of the `DataFrame`'s Column and Object of  Column

  + `pattern`: the regular expression in Java. usually starts with `r'{_regx_}'`

  + `index`: the index of the string from the regx. 

    For example, we use `r'(\d+)(\c)(\d+)'` to illustrate the meaning of this parameters.

    In regx, the bracket `()` is used to match the pattern and obtain the results which follow this regulation.

    The `index of 0` the function will return all the corresponding mathes strings, in the example string which is `(200 9202)`. Attention: the string includes the character space.

    The `index of 1` the function will return the first match pattern's result which is `(200)`. That indicates that the index should follow the sequence of the regx pattern.

```python
>>>>df = spark.createDataFrame([('slppp6.intermind.net - - [01/Aug/1995:00:00:11 -0400] "GET /history/skylab/skylab-small.gif HTTP/1.0" 200 9202',)],['value'])
>>>>df.select(regexp_extract('value',r'(\d+)(\c)(\d+|-)',1)).collect()
# You can change this line with below line
# df.select(regexp_extract(df['value'],r'(\d+)\c(\d+|-)',1)).collect()
```

<br>

`pyspark.RDD.reduceByKey(func, numPartitions=None, partitionFunc=<function portable_hash>) `

+ Parameters:<br>
  + `fun`: mapping function which indicates the operation of the RDD datastracture. It will generate hash-partitioned output with existing partitioner.
  + `numPartitions`: Output will be partitioned with `numPartitions` partitions, or the default parallelism level if `numPartitions` is not specified. Default partitioner is hash-partition. Default value is `HashPartitioner`
  + `partitioner`: the partition function.

```python
# The Example about the partition
list_v = [("a",1),("b",1),("a",1)]
rdd = sc.parallelize(list_v)
rdd.reduceByKey(_ + _).collect()
# output
# [('a',2)('b',1)]
```

<br>

`pyspark.RDD.distinct() `

+ The type of object in this function is `RDD`, also you can use the `DataFrame` in one correct way.

```python
df = spark.sparkContext.parallelize([1,2,1])
df.distinct().collect()
# output
[1,2]
```

<br>

`pyspark.RDD.persist()`

+ This function can be assigned to set a new storage level if the RDD does not have a storage level set yet.

+ What's the difference between the `persist()` and `cache()`?

  + `cache()` has only one default cache level, `MEMORY_ONLY`, and persist can set other cache levels according to the situation.

  + Fore more details, you can check the source of spark.

  + `def cache(): this.type = persist()`

    `def persist(): this.type = persist(StorageLevel.MEMORY_ONLY)`

```scala
val lines = sc.textFile("hdfs://…")
val errors = lines.filter(_.startsWith(“Error”))
errors.persist()
errors.count()
//If you do errors.count() again, the file will be loaded again and computed again
//Persist will tell Spark to cache the data in memory, to reduce the data loading cost of further actions on the same data
//erros.persist() will do nothing. It is a lazy operation. But now the RDD says "read this file and then cache the contents" The action will trigger compution and data caching.                      
```

<br>





### 2. Lab2 and Background Informatiom

#### 2.1 [MLlib](https://spark.apache.org/docs/2.3.2/ml-guide.html) - Spark’s machine learning (ML) library.

`MLlib` allows easy combination of numerous algorithms into a single pipeline using standardized APIs for machine learning algorithms. The key concepts are:

- **Dataframe**. Dataframes can hold a variety of data types.
- **Transformer**. Transforms one dataframe into another.
- **Estimator**. Algorithm which can be fit on a DataFrame to produce a Transformer.
- **Pipeline**. A Pipeline chains multiple Transformers and Estimators together to specify an ML workflow.
- **Parameter**. Transformers and Estimators share a common API for specifying parameters.

A list of some of the available ML features is available [here](http://spark.apache.org/docs/2.3.2/ml-features.html).

**Clarification on whether Estimator is a transformer**. See [Estimators](https://spark.apache.org/docs/2.3.2/ml-pipeline.html#estimators)

In this part, I want to analyse the function and datastructure I met about the *MLlib*.

---

`pyspark.ml.linalg.Vector.dense`

+ Create a dense vector of 64-bit floats from a Python list or numbers. 
+ You can use the lists or `pyspark.sql.DataFrame`.

<br>

`pyspark.RDD.randomSplit`

+ Parameters
  - **weights** – list of doubles as weights with which to split the [`DataFrame`](https://spark.apache.org/docs/latest/api/python/pyspark.sql.html?highlight=randomsplit#pyspark.sql.DataFrame). Weights will be normalized if they don’t sum up to 1.0.
  - **seed** – The seed for sampling.
+ The returned varibale type is `DataFrame`.

<br>

`pyspark.ml.regression import LinearRegression`

```python
>>>>df = spark.createDataFrame([
    (1.0, 2.0, Vectors.dense(1.0)),
    (0.0, 2.0, Vectors.sparse(1, [], []))], ["label", "weight", "features"])
>>>>lr = LinearRegression(maxIter=5, regParam=0.0, solver="normal", weightCol="weight")
>>>>model = lr.fit(df)
>>>>model.transorm(test_set)
```

<br>

`pyspark.ml.evaluation.RegressionEvaluator()`

+ Parameters:
  + *predictionCol='prediction'* -- The output of training model.
  + **labelCol='label'* -- The label of test dataset, the type is string and should be indicated the name of column.
  + **metricName='rmse'* -- The name of Metric used for Java.
+ The returned value's type is `RegressionEvaluator`.

<br>

`pyspark.ml.feature.Tokenizer (*inputCol=None*, *outputCol=None*)`

+ A tokenizer that converts the input string to lowercase and then splits it by white spaces.

```python
>>>>df = spark.createDataFrame([("a b c",)], ["text"])
>>>>tokenizer = Tokenizer(inputCol="text", outputCol="words")
>>>>tokenizer.transform(df).head()
Row(text='a b c', words=['a', 'b', 'c'])
```

<br>

`pyspark.ml.feature.HashingTF(numFeatures=262144, binary=False, inputCol=None*, outputCol=None)`

+ Maps a sequence of terms to their term frequencies using the hashing trick. Currently we use Austin Appleby’s MurmurHash 3 algorithm (`MurmurHash3_x86_32`) to calculate the hash code value for the term object. 

<br>



#### 2.2 HDFS(Hadoop Distributed File System)

`HDFS` is a distributed file system designed to store large files spread across multiple physical machines and hard drives. Spark is a tool for running distributed computations over large datasets. Spark is a successor to the popular `Hadoop MapReduce computation framework`. Together, Spark and HDFS offer powerful capabilites for writing simple code that can quickly compute over large amounts of data in parallel.

`HDFS` is comprised of interconnected clusters of nodes where files and directories reside. An HDFS cluster consists of a single node, known as a `NameNode`, that manages the file system namespace and regulates client access to files. In addition, data nodes (`DataNodes`) store data as blocks within files.

Within HDFS, a given name node manages file system namespace operations like opening, closing, and renaming files and directories. A name node also maps data blocks to data nodes, which handle read and write requests from HDFS clients. Data nodes also create, delete, and replicate data blocks according to instructions from the governing name node.

![HDFS](/Pictures/Spark/HDFS.gif)



#### 2.3 [Pipelines](https://blog.insightdatascience.com/spark-pipelines-elegant-yet-powerful-7be93afcdd42)

ML Pipelines: high-level APIs to create and tune machine learning pipelines.

![ml-PipelineModel](/Pictures/Spark/ml-PipelineModel.png)

![pipeline_model](/Pictures/Spark/pipeline_model.png)

<br>



#### 2.4 Word Count in Spark

![word_count](/Pictures/Spark/word_count.png)

<br>











