---
layout: post
title: 'Machine Learning'
date: 2019-12-11
author: DoHerasYang
color: rgb(255,210,32)
cover: '/Pictures/machineimage.jpg'
tags: python pytorch

---

# Machine Learning and Adaptive Intelligence -Review

> This blog is based on the COM6509 from the University of Sheffield Department of Computer Science. You can access the lab and lectures about the courses details by this [link](https://github.com/DoHerasYang/Machine-Learning-Labs).
>
> @All the knowledge rights reserverd by the Haiping Lu and Mauricio A. Álvarez.

### 1. Bascial Concepts on Machine Learning

#### 1.1 Terms

**Training set** : a set of $N$ target samples and their labels, $\mathbf{(x_1,y_1)\ldots(x_N,y_N)}$ to fit the predictive model.

**Estimation or training phase** : the process of getting the values of $w$ of the function $f(x,w)$ the best fits the data.

**Generalisation** : the ability to correctly predict the value label of the new test set.

**Supervised and unsupervised learning** : for supervising learning the model should receive the both the data and desired solution (label). Such as *classification* and *regression*. <br>For the unsupervised learning, the feeded data in algorithm don't have the label. Such as *clustering*,*density estimation*,*dimensionality reduction* and *feature selection*.

**Model** : the algorithm and method we want to utilise to transform the questions into various mathematical form to solve the practical questions.

**Objective function** : the criterion of the model to evaluate the precision of the model which is trained by input data and labels. Also it always provides the way for model to re-learn and re-fit the parameters.

**Normalization**:  The way to avoid the overfitting for the training dataset.

**Multivatiate differentiating and Integration** : . The derivative of a function at a chosen input value describes the rate of change of the function near that input value. The process of finding a derivative is called *differentiation*. For more details. follow this [link](http://www.columbia.edu/itc/sipa/math/calc_rules_multivar.html).

**Normal Vector** : the mean of normal is an object such as the line and vector thay is perpendicular to a given object such as the line and dimensions. The normal vector of a manifold is the set of the vectors which are orthogonal to the targeted space.

**Hyperplane** : a hyperplane is the subspace whose the dimensions is one less than that of its ambient space. For the 2-dimensional planes, the hyperplane is the sigle line.

#### 1.2 Operation

+   <a name="sign"> sign </a>
    in mathematics,the *sign* function or *signum* function (from signum, Latin for "sign") is an odd mathematical function that extracts the sign of a real number. In mathematical expressions the sign function is often represented as sgn.
    The signum function at a real number $x$ is defined as follows:
  $$
  sign(x)=\left\{
  \begin{aligned}
  x & = 1 & if\quad x<0\\
  y & = 0 & if\quad x=0\\
  z & = -1 & if\quad x<0\\
  \end{aligned}
  \right.
  $$

+ 



### 2. Bayes Rules

#### 2.1 Some Review about Bayes and Probality

| Terminology | Mathematical Notation |             Description              |
| :---------: | :-------------------: | :----------------------------------: |
|    joint    |     $P(X=x, Y=y)$     |     probability that X=x and Y=y     |
|  marginal   |      $P(X = x )$      | probability that X=x regardless pf Y |
| Conditional |    $P(X=x | Y=y)$     |  probablity that X=x given that Y=y  |

**Sum Rule for Bayes** 

1）$n_y = \sum_x{n_{x,y}}$ and let the $N\rightarrow\infty$ and you will get the $P(y)-\displaystyle{\sum_{\substack{x}}P(x,y)}$ <br>2)  $P(x|y) = \displaystyle{\lim_{N \to \infty}\frac{n_{x,y}}{n_y}}$  and $p(x,y) = \displaystyle{\lim_{N \to \infty}\frac{n_{x,y}}{n_y}\frac{n_y}{N}}$ , so we can get $p(x,y) = p(x|y)p(y)$.<br>3)  Bayes' rule:          
$$
P(y|x) = \frac{P(x|y)P(y)}{P(x)}
$$

**Concepts**

+ **Unbiased Variance**:  in the context of Machine Learning, is a type of error that occurs due to a model's sensitivity to small fluctuations in the training set.

  Process to calculate the variance:

  + Firstly, you should calculate the mean of the value of the distribution. If the distribution is the probability distribution, use the sum of the product of the label and probability
  + Secondly, substract the mean from each data point(product of label and probability), square the each result and sum the up.
  + Thirdly, divide the sum by $n-1$ where the $n$ is the number of data points.

  *Questions*: what is the difference between the unbiased variance and variance?

  For more details, click this [link](https://en.wikipedia.org/wiki/Bias_of_an_estimator).

+ **First moment and Scond moment **: In short, the first moment of a set of numbers is just the mean (that is, the average) and the second moment is usually just the variance. 

+ **Excepted Value**: in other words, "mean". 



### 3. Objective Function and Supervised Learning

#### 3.1 Classification 

  We obtain the data set which contains the class label $y_i$ and data point $x_i$ and use this prediction function:
$$
f(x_i) = \text{sign}(\mathbf{w}^\top \mathbf{x}_i + b)
$$

  So the <a href="#sign"> hyperplance </a> 














