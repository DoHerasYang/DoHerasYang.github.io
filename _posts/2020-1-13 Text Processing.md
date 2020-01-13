---
layout: post
title: 'Text Processing'
date: 2019-12-19
author: DoHerasYang
color: rgb(255,210,32)
cover: '/Pictures/forensics.jpg'
tags: Lecture


---

# Text Processing - Lecture

>The content of this blog is based on the course COM6115(Text Processing (AUTUMN 2019~20)) at the University of Sheffield.
>
>**@All the konowledge rights are reserved by the owner of this course's materials,Dr Mark Hepple and Dr Chenghua Lin at the University of Sheffield.**



### 1. IR(Information Retrieval)

Information Retrieval (IR): concerned with developing algorithms and models for retrieving relevent documents from text collections.

+ Text collection = some set of ‘documents’ / Query: user indication of what s/he want。
+ Purpose:  Finding pages that contain the words in the query by “relevance” to the query and clever indexing.

#### Issues:

+ How can I formulate a query? 

  Normally keywords, could be natural language.

+ How are the documents represented? 

  indexing

+ How does the system find the best-matching document? 

  retrieval model

+ How are the results presented to me?

  unsorted list, ranked list, clusters

+ How do we know whether the system is any good?

  evalution

#### Indexing:

The task of finding terms that describe documents well

+ Manual: indexing by humans (using fixed vocabularies) / labour and training intensive
+ Automatic: Term manipulation (certain words count as the same term) / Term weighting (certain terms are more important than others) / Index terms must only derive from text

> MeSH — Medical Subject Headings
>
> a very large controlled vocabulary for describing/indexing medical documents, e.g. journal papers and books. It provides a hierarchy of descriptors (a.k.a. subject headings).
>
> hierarchy has a number of top-level categories, e.g.:
>  	Anatomy [A]
>  	Organisms [B]
>  	Diseases [C]
> 	 Chemicals and Drugs [D]
>  	Analytical, Diagnostic and Therapeutic Techniques and Equipment [E]
>  	Psychiatry and Psychology [F]
>  	Biological Sciences [G]
>
> And a number of subcategories (more specific/detailed terms):
>
> And a number of subsubcategories (even more specific/detailed
> terms):
>
> Evalution:
>
> + Advantage:  1)High precision searches 2)Works well for closed collections (books in a library).
> + Disadvantage: 1)Searchers need to know terms to achieve high precision. 2)Labellers need to be trained to achieve consistency. 3)Collections are dynamic → schemes change constantly.







