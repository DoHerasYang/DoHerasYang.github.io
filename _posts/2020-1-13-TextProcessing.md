---
layout: post
title: 'Text Processing'
date: 2020-01-13
author: DoHerasYang
color: rgb(255,222,32)
cover: ''
tags: Lecture-Course



---

# Text Processing - Lecture

>The content of this blog is based on the course COM6115(Text Processing (AUTUMN 2019~20)) at the University of Sheffield.
>
>**@All the konowledge rights are reserved by the owner of this course's materials,Dr Mark Hepple and Dr Chenghua Lin at the University of Sheffield.**

---

[toc]

---

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

> MeSH — Medical Subject Headings (Manuall indexing)
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
> Evalution:
>
> + Advantage:  1)High precision searches 2)Works well for closed collections (books in a library).
> + Disadvantage: 1)Searchers need to know terms to achieve high precision. 2)Labellers need to be trained to achieve consistency. 3)Collections are dynamic → schemes change constantly.

> Automatic Indexing:
>
> + Use the <u>natural language</u> as indexing language
>
> + Implementation:  <u>inverted files</u> 
>
>   + record each term, the <u>ids</u> of thedocuments in which it appears
>   + only matters if it <u>does</u> or <u>does not</u> appear - not how many times
>   + (doc_id)
>
>   ![01](/Pictures/Text Processing/01.png)
>
>   + also recoed the count of occurrences within each document.
>   + help find documents more relevant to query.
>   + (doc_id : occurance_number )
>
>   ![02](/Pictures/Text Processing/02.png)

### Automated retrieval models:

#### Bag-of-words Approach

+ Standard approach to represent the documents
  + record what words are present
  + Usually, plus count of term in each document
+ Ignore the relation between words
  + order of the words / permutation of the words

#### Terms

Common to just use the words, but pre-process them for generalisation.

+ Method:

  + Tokenisation: split words from punctuation (get rid of punctuation)

    + e.g. word-based. → word based   three-issues: → three issues

  + Capitalisation: normalise all words to lower (or upper) case

    + e.g. Cat and cat should be seen as the same term, but should we conflate Turkey and turkey

  + Lemmatisation: conflate different inflected forms of a word to their basic form (singular, present tense, 1st person):

    + e.g. cats, cat → cat  have, has, had → have  worried, worries → worry

  + Stemming:

    + conflate morphological variants by chopping their affix

  + Normalisation: heuristics to conflate variants due to spelling, hyphenation, spaces, etc.

    + e.g. USA and U.S.A. and U S A → USA

      e.g. chequebook and cheque book → cheque book

      e.g. word-sense and word sense → word-sense

+ Problem of Single and Multi-words

  + To aid recognition of phrases, might allow multi-word terms
  + Solution
    + identify multi-word phrases during retrieval
    + Positional indexes, storing position terms in documents, can help

- Positional indexs:
  + ![07](/Pictures/Text Processing/07.png)
  + Approach:
    + Binary weights - 0/1: whether or not term is present in document
      + But documents with multiple occurrences of query keyword may be more relevant
    + Frequency of term in document: like the examples we have seen
      + Common terms: not very useful for discriminating relevant documents
    + Frequency in document vs in collection: weight terms highly if
      + They are frequent in relevant documents . . . but
      + They are infrequent in collection as a whole

#### Stop List

+ Use Stop list removal to exclude “non-content” words
+ Usually most frequent (and least useful for retrieval)
+ Effect:
  + greatly reduces the size of the inverted index

#### IR Method

> Boolean Method(Binary)
>
> + Purpose: 
>   + evaluate the relevance and suffience of term for match
>   + provides a simple logical basis for deciding whether any document should be returned.
>     + whether basic terms of query do/do not appear in the document
>     + the meaning of the logical operators
>
> + Algorithm:
>
>   + frequency of document terms
>   + not all search terms necessarily present in document
>   + vector space model
>
> + Approach:
>
>   + Basic search terms(keywords)
>   + using boolean operators
>
> + Boolean Operators:
>
>   + AND, OR, NOT, BUT, XOR (exclusive OR)
>   + E.g.:  Monte-Carlo AND (importance OR stratification) BUT gambling
>
> + Set-theoretic interpretation:
>
>   + $d(E)$ denote the document set for expression E
>   + $E$ either a basic term or boolean expression
>     + $d(E1 \,AND\, E2) = d(E1) ∩ d(E2)$
>     + $d(E1 \,OR\, E2) = d(E1) ∪ d(E2)$
>     + $d(NOT\, E) = d(E)^c$
>     + $d(E1 \,BUT\, E2) = d(E1) − d(E2)$
>   + Some example:
>     + ![03](/Pictures/Text Processing/03.png)
>     + ![04](/Pictures/Text Processing/04.png)
>     + ![05](/Pictures/Text Processing/05.png)
>
> + Conclusion:
>
>   + Advantage:
>     + Higher requirements for user: Expert knowledge needed to create high-precision queries
>     + Often used by bibliographic search engines (library)
>
>   + Disadvantage:
>     + Most users not familiar with writing Boolean queries → not natural
>     + Most users don’t want to wade through 1000s unranked result lists →
>       unless very specific search in small collections
>     + This is particularly true of web search → large set of docs

> Vector Space Model
>
> + Description:
>
>   + Documents are points in high-dimensional vector space
>     + each term in index is a dimension → sparse vectors
>     + values are frequencies of terms in documents, or variants of frequency
>   + Queries are also represented as vectors (for terms that exist in index)
>
> + Priori:
>
>   + Select document(s) with highest document–query similarity
>   + Document–query similarity is a model for relevance (ranking)
>   + With ranking, the number of returned documents is less relevant → users start at the top and stop when satisfied
>
> + Approach:
>
>   + compare vector of query against vector of each document
>
>     + to rank documents according to their similarity to the query
>     + ![06](/Pictures/Text Processing/06.png)
>
>   + Each document and query are represented as a vector of $n$ values:
>
>     $\vec{d^i} = (\vec{d_1^i},\vec{d_2^i},\vec{d_3^i}, \cdots,\vec{d_n^i} )$         $\vec{q} = (q_1,q_2,q_3, \cdots , q_n)$
>
>   + Similarity:
>     $$
>     \sqrt{\sum\limits_{k=1}^N}(q_k - d_k)^2
>     $$
>
>     + E.g.:
>
>       + Doc1 and Q
>
>         $\sqrt{(9-0)^2 + (0-1)^2 + (1-0)^2 + (0-1)^2} = 9.15$
>
>       + Doc2 and Q
>
>         $\sqrt{(0-0)^2 + (1-1)^2 + (0-0)^2 + (10-1)^2} = 9.15$
>
>   + Evalution:
>
>     + distance is large for vectors of different lengths, even if by only one
>       term (e.g. Doc2 and Q)
>
>     + means frequency of terms given too much impact
>
>     + Better similarity metric, used in vector-space model: cosine of the angle between two vectors $\vec{x}$ and $\vec{y}$: ( For the each value of text and query, when the term occurs, the value should be $1$ and if not, the value should be $0$ for each $x_i$ and $y_i$ )
>       $$
>       cos(\vec{x},\vec{y}) = \frac{\vec{x} \cdot \vec{y}}{\left|\vec{x}\right|    \left|\vec{y}\right|} = \frac{\sum\limits_{i=1}^{n}x_iy_i}{\sqrt{\sum\limits_{i=1}^{n}x^2}\sqrt{\sum\limits_{i=1}^{n}y^2}}
>       $$
>
>       + It can be interpreted as the <u>normalised correlation coefficient</u>:
>
>         i.e. it computes how well the $x_i$ and $y_i$ correlate, and then divides by the
>         length of the vectors, to scale for their magnitude.
>
>       + Value:
>
>         + range from:
>           + 1, for vectors pointing in the same direction, to
>           + 0, for orthogonal vectors, 
>           + -1, for vectors pointing in opposite directions

>  **Inverse document frequency**( <u>**IDF**</u> )
>
>  Term Weighting
>
>  + ![08](/Pictures/Text Processing/08.png)
>
>  + informativeness of terms
>
>   + Idea that less common terms are more useful to finding relevant docs
>   + document frequency(df) reflects this difference
>   + collection frequency(cf) fails to distinguish them (i.e. very similar counts)
>
>  + Informativeness is inversely related to (document) frequency
>
>   + less common terms are more useful to finding relevant documents
>   + more common terms are less useful to finding relevant documents
>
>  + Compute
>
>  $$
>   \frac{\left|D\right|}{df_w}
>  $$
>
>   + Value reduces as $df_w$ gets larger, tending to 1 as $df_w$ approaches $|D|$
>
>   + Value very large for small dfw— over-weights such cases
>
>   + To moderate this, take $\textbf{log}$: Inverse document frequency( <u>**IDF**</u> )
>     $$
>     idf_{w,D} = log\frac{\left|D\right|}{df_w}
>     $$
>
>     + ![09](/Pictures/Text Processing/09.png)
>     + ![10](/Pictures/Text Processing/10.png)
>
>   + BUT Not all terms describe a document equally well
>
>     + Putting it all together: **tf.idf**
>
>       + Terms which are frequent in a document are better:
>         $$
>         \mathbf{tf_{w,d} = freq_{w,d}}
>         $$
>
>       + Combine the two to give tf.idf term weighting:
>         $$
>         \mathbf{tf.idf_{w,d,D} = tf_{w,d}\cdot\,idf_{w,D}}
>         $$
>
>       + e.g.
>
>         ![11](/Pictures/Text Processing/11.png)
>
>       + e.g.
>
>         ![12](/Pictures/Text Processing/12.png)
>
>         ![13](/Pictures/Text Processing/13.png)

> PageRank Algorithm
>
> + Key method to exploit link structure of web: PageRank algorithm
>   + Assigns a score to each page on web: its PageRank score
>   + can be seen to represent the page’s authority (or quality)
> + Idea:
>   + Link from page A to page B confers authority on B
>   + how much authority is conferred depends on:
>     + the authority (PageRank score) of A, and its number of out-going links
>     + i.e. A’s authority is shared out amongst its out-going links
>   + note that this measure is recursively defined
>     + i.e. score of any page depends on score of every other page
>   + PageRank scores have an alternative interpretation:
>     + probability that a random surfer will visit that page
>   + its PageRank score: a measure of its authority

#### Summary

+ Component / technique

  + Ranking (cosine, dot-product, . . . )
  + Term selection  (stopword removal, stemming, . . . )
  + Term weighting  (binary, TF, TF.IDF, . . . )

+ Relevance

  + Evaluation of effectiveness in relation to the relevance of the documents retrieved
  + Relevance is judged in a binary way, even if it is in fact a continuous judgement
    + Impossible when the task is to rank thousands or millions of options: too subjective, too difficult
  + In IR research/development scenarios, one cannot afford humans looking at results of every system/variant of system
  + Instead, performance measured/compared using a pre-created benchmarking corpus, a.k.a. gold-standard dataset, which provides:
    + a standard set of documents, and queries
    + a list of documents judged relevant for each query, by human subjects
    + relevance scores, usually treated as binary

+ Evaluation of IR systems – Metrics

  + AIM

    + get as much good stuff as possible
    + get as little junk as possible

  + The two aspects of this aim are addressed by two separate measures — <u>recall</u> and <u>precision</u>.

    ![14](/Pictures/Text Processing/14.png)

    + Recall : $\frac{A}{A+C}$ proportion of relevant documents returned
    + Precision: $\frac{A}{A+B}$ proportion of retrieved documents that are relevant
    + Both measures have range: [0 . . . 1]
    + Precision and Recall address the relation between the retrieved and relevant sets of documents

  + Trade-off Between Recall and Precision

    + ![15](/Pictures/Text Processing/15.png)

  + Recall and Precision - Which is the better system?

    + ![16](/Pictures/Text Processing/16.png)

    + F-measure

      + F measure (also called F1):

        + combines precision and recall into a single figure, and it is a harmonic mean

        + gives equal weight to both:

          P = Precision     R = Retrievaled 
          $$
          \mathbf {F = \frac{2PR}{P + R}}
          $$

        + penalises low performance in one value more than arithmethic mean:

          ![17](/Pictures/Text Processing/17.png)

    + $F_\beta$

      + allows user to determine relative importance of P vs. R, by varying β
      + F1 is a special case of Fβ (where β = 1)

  + Precision at a cutoff

    + Measures how well a method ranks relevant documents before non-relevant documents。

      ![18](/Pictures/Text Processing/18.png)

  + Average Precision

    + Aggregates many precision numbers into one evaluation figure

    + Precision computed for each point a relevant document is found, and figures averaged

      ![19](/Pictures/Text Processing/19.png)

#### Evaluation

+ Strengths
  + Can search huge document collections very rapidly
  + Insensitive to genere and domain of the texts
  + Relatively straightforward to implement
    + challenges scaling to huge, dynamic document collections
+ Weakness:
  + Documents are returned not information/answers
    + user must further read texts to extract information
    + output is unstructured so limited possibilities for direct data mining/further processing

 

---

### 2. Sentiment Analysis

> **Abstract**
>
> + Explain the relevance of the topic
> + Differentiate between objective and subjective texts
> + List the main elements in a sentiment analysis system
> + Provide a critical summary of the main approaches to the problem
> + Explain how sentiment analysis systems are evaluated.
>
> **General Goal**:
>
> + Extract opinions, sentiments and emotions expressed by humans in texts and use this information for business, intelligence, etc. purposes. Can’t be done manually: huge volumes of opinionated text (esp. Big Data on the Web).
>   + Product review mining: Which features of the iPhone 11 customers like and which do they dislike?
>   + Review classification: Is a movie review positive or negative?
>   + Tracking sentiments toward topics over time: Is anger about the government policies growing or cooling down?
>   + Prediction (election outcomes, market trends): Will the Tories win the next election?
>
> **Sentient Analysis**
>
> ![20](/Pictures/Text Processing/20.png)
>
> + The task of opinion mining is: given an opinionated document:
>   + Discover all quintuples
>   + Discover some of these components
> + With that, one can structure the unstructured:
>   + Traditional data and visualisation tools can be used to slice, dice and visualise the results.
>   + Qualitative and quantitative analysis can be done.

#### Binary (lexicon-based)

+ Rule-based subjectivity classifier:  a sentence/document is subjective. 

  if it has at least n (say 2) words from the emotion words lexicon; a sentence/document is objective otherwise.

+ Rule-based sentiment classifier:  for subjective sentences/documents, count positive and negative words/phrases in the sentence/document.

  If more negative than positive words/phrases, then negative; otherwise, positive (if equal, neutral).

+ Rule-based sentiment classifier (feature-level): 

  + Assume features can be identified in previous step by information extraction techniques, e.g., battery, phone, screen.
  + For each feature, count positive and negative emotion words/phrases from the lexicon.
  + If <u>more negative than positive words/phrases, then negative; otherwise, positive (if equal, neutral).</u>

+ Rule-based sentiment classifier (feature-based)

  ![21](/Pictures/Text Processing/21.png)

#### Caveats

+ Other emotion words have context-dependent orientations, e.g.
  + small power consumption = positive
  + small screen = negative
+ Can store more fine-grained sentiment information in lexicon and add additional rules.

#### Gradable 

> + Use of ranges of sentiment instead of a binary system, to deal with intensifiers like:
>   + absolutely, utterly, completely, totally, nearly, virtually, essentially, mainly, almost, e.g.: absolutely awful
> + And grading adverbs like:
>   + Very, little, dreadfully, extremely, fairly, hugely, immensely, intensely, rather, reasonably, slightly, unusually, e.g.: a little bit cold

+ Rule-based gradable sentiment classifier

  + The lexicon: word-lists with pre-assigned emotional weights, e.g:

    Neg. dimension ($\text{C_neg}$ ): {-5,...,-1},  Pos. dimension ($\text{C_pos}$ ): {+1,...,+5}

    ![22](/Pictures/Text Processing/22.png)

  + Additional general rules to change the original weights:

    + Negation rule: <br>E.g.: “I am not good today”.
      Emotion(good)= +3; <br>“not” is detected in neighbourhood (of 5 words around); <br>so emotional valence of “good” is decreased by 1 and sign is inverted → Emotion(good) = −2
    + Capitalization rule:<br> E.g. “I am GOOD today”.<br>Emotion(good)= +3; Add +1 to positive words → Emotion(GOOD) = +4<br>Likewise, in “I am AWFUL today”.<br>

  + <u>**Intensifier rule**</u>:

    + Needs a list of intensifiers: “definitely”, “very”, “extremely”, etc. 
    + Each intensifiers has a weight
    + The weight is added to positive terms
    + The weight is subtracted from negative terms
    + E.g.: “I am feeling very good”.<br>Emotion(good)= +3; emotional valence of “good” increased by 1<br>→ Emotion(good) = +4
    + E.g. “This was an extremely boring game”<br>Emotion(boring)=−3; emotional valence of “boring” decreased by −2<br>→ Emotion(boring) = −5

  + **<u>Diminisher rule</u>**:

    + Need a list: “somewhat”, “barely”, “rarely”, etc.
    + Each intensifiers has a weight
    + The weight is subtracted from positive terms
    + The weight is added to negative terms
    + E.g.: “I am somewhat good”.
      Emotion(good)= +3; emotional valence of “good” decreased by 1 → Emotion(good) = +2
    + E.g. “This was a slightly boring game”
      Emotion(boring)=−3; emotional valence of “boring” increased by 1 → Emotion(boring) = −2

  + <u>**Exclamation rule**</u>: 

    + Functions like intensifiers. 
    + E.g.: “Great show!!!”.
      Emotion(great)= +3; Weight(!!!) = 2
      → Emotion(great) = 5

  + **<u>Emoticon rule</u>**:

    + Each has its own emotional weight, like an emotion word.

    + E.g.: Emotion(🙂) = +2; Emotion(🙁) = −2. 

      E.g.: “I can’t believe this
      product 😣

  + Decision

    + ![23](/Pictures/Text Processing/23.png)

      ![24](/Pictures/Text Processing/24.png)

  + Evalution:

    + Advantages:
      + Works effectively with different texts: forums, blogs, etc.
      + Language independent - as long as an up-to-date lexicon of emotion words is available
      + Doesn’t require data for training
      + Can be extended with additional lexica, e.g. for new emotion words/symbols as they become popular, esp. in social media
    + Disadvantages:
      + Requires a lexicon of emotion words, which should be fairly comprehensive, covering new words, abbreviations (LOL, m8, etc.), misspelled words, etc.

  + Collect relevant words/phrases that can be used to express sentiment. Determine the emotion of these subjective word/phrases.

    + Manually: word lists with pre-assigned emotional weights
    + Semi-automatically
      + Dictionary-based: find synonyms/antonyms of seed emotion words in dictionaries like WordNet
      + Corpus-based: find synonyms/antonyms of seed emotion words in corpora
    + Semi-automatically created from seed words: start with seed positive and
      negative words:
      + Search for synonyms/antonyms in dictionaries like WordNet; OR
      + Build patterns from seed words/phrases to search on large corpora,
        like the Web:
        + “beautiful and” (+)
        + "low cost but"(-)
        + "very nice and"(+)
    + Machine Learning 
      + Subjectivity classifier: first run binary classifier to identify and then eliminate objective segments
      + Sentiment classifier with remaining segments: learn how to combine and weight different attributes to make predictions. E.g. Naive Bayes

#### Corpus-based (Machine Learning)

> **Basic Knowledge**:
>
> ![25](/Pictures/Text Processing/25.png)
>
> ![26](/Pictures/Text Processing/26.png)
>
> ![27](/Pictures/Text Processing/27.png)
>
> ![28](/Pictures/Text Processing/28.png)
>
> ![29](/Pictures/Text Processing/29.png)
>
> ![30](/Pictures/Text Processing/30.png)
>
> ![31](/Pictures/Text Processing/31.png)

+ Example

  + ![32](/Pictures/Text Processing/32.png)

  + Prior:

    + P(positive) = count(positive)/N = 3/7 = 0.43
    + P(negative) = count(negative)/N = 4/7 = 0.57

  + Likelihoods

    + $$
      \mathbf{P(t_j|c_i) = \frac{count(t_j,c_i)}{count(c_i)}}
      $$

    + ![33](/Pictures/Text Processing/33.png)

  + Relative frequencies for prior (P(ci)) and likelihood($P(t_j|c_i$) makethe model in a Naive Bayes classifier.

  + At decision (test) time, given a new segment to classify, this model is applied to find the most likely class for the segment
    $$
    \mathbf{argmax\,P(c_i) = \prod\limits_{j=1}^nP(t_j|c_i) }
    $$

  + e.g.

    + ![34](/Pictures/Text Processing/34.png)

      + $P(positive) ∗ P(fantastic|positive) ∗ P(good|positive) ∗ P(lovely|positive)$
        3/7 ∗ 1/10 ∗ 1/10 ∗ 1/10 = 0.00043
      + $P(negative) ∗ P(fantastic|negative) ∗ P(good|negative) ∗ P(lovely|negative)$
        4/7 ∗ 0/8 ∗ 0/8 ∗ 0/8 = 0
      + sentiment = positive

    + ![35](/Pictures/Text Processing/35.png)

      + $P(positive) ∗ P(great|positive) ∗ P(great|positive) ∗ P(great|positive)$

        3/7 ∗ 1/10 ∗ 1/10 ∗ 1/10 = 0.00043

      + $P(negative) ∗ P(great|negative) ∗ P(great|negative) ∗ P(great|negative)$

        4/7 ∗ 2/8 ∗ 2/8 ∗ 2/8 = 0.00893

      + sentiment = negative

    + what if both the positive and negative value equals to zero



+ Add smoothing to feature counts (add 1 to every count).

  + Likelihoods
    $$
    \mathbf{P(t_j|c_i) = \frac{count(t_j,c_i)+1}{count(c_i)+\left|V\right|}}
    $$
    where the $\left|V\right|$ is the number of distinct attributes in training(all classes)

    number fo classes is the number of the total documents

  + example

    + ![36](/Pictures/Text Processing/36.png)

    + $P(positive) ∗ P(boring|positive) ∗ P(annoying|positive) ∗ P(unimaginative|positive)$

      3/7 ∗ ((0 + 1)/(10 + 12)) ∗ ((0 + 1)/(10 + 12)) ∗ ((0 + 1)/(10 + 12)) = 0.000040

    + $P(negative) ∗ P(boring|negative) ∗ P(annoying|negative) ∗ P(unimaginative|negative)$

      4/7 ∗ ((0 + 1)/(8 + 12)) ∗ ((0 + 1)/(8 + 12)) ∗ ((1 + 1)/(8 + 12)) = 0.000143

    + sentiment = negative

+ Evaluation:

  + It’s simple and will work well if data is not sparse

  + How can we improve?

    + Using all words (in Naive Bayes) works well in some tasks
    + Finding subsets of words may help in other tasks
    + Using only adjectives can be limiting. Verbs like hate, dislike; nouns like love; words for inversion like not; intensifiers like very
    + Pre-built polarity lexicons can be helpful
    + Negation is important

  + Can contrast direct opinions versus more complex comparative opinions:

    + Direct sentiment expressions on target objects
      + “the picture quality of this camera is great.”
    + Comparisons expressing similarities or differences between objects,
      + e.g., “car x is cheaper than car y.”

  + How do we quantify how well our Sentiment Analysis systems work?

    + Create experimental datasets (aka test corpora)

    + Compare (positive vs negative) system to human classifications

    + Compute metrics like

      ![37](/Pictures/Text Processing/37.png)

---

### 3.Natural Language Generation

>Scanerio:
>
>![38](/Pictures/Text Processing/38.png)
>
>![39](/Pictures/Text Processing/39.png)

>**Goals**:
>
>+ Decide on content: to determine what information to communicate
>+ Decide on rhetorical structure: to determine how to structure the information to make a coherent text

#### How to Choose Content

+ Theoretical approach: deep reasoning based on deep knowledge of user, task, context, etc
+ Pragmatic approach: write schemas which try to imitate human-written texts in a corpus
+ Statistical approach: use learning techniques to learn content rules from corpus

#### Theoretical Approach

+ Deduce what the user needs to know, and communicate this
+ in-depth knowledge
  + User(knowledge,task,etc)
  + Context, domain,world
+ AI 
  + applies logical rules to the knowledge base to deduce new information
+ Evaluation
  + Lack knowledge about user
  + Lack knowledge of context
  + Hard to do in practice because we don't have good models of the effects of choices
  + Very hard to maintain knowledge base
    like new usersm new regulations, etc.

#### Statistical Approach

+ Statistical/learning techniques (including deep learning)
  + Parse corpus, align with source data, use machine learning algorithms to learn content selection rules/schemas/cases
+ Worth considering if large corpora available

#### Pragmatic Approach: Schema

+ Analyse corpus texts (after aligning them to data), and manually infer content and structure rules.
+ Typically based on imitating patterns seen in human-written texts
  + Revised based on user feedback
+ Specify structure as well as content
+ Evaluation:
  + Sometimes corpus texts may not be very good from a microplanning perspective

#### Text structure

+ Rhetorical Relations: describe how the parts of a text are linked to each other.
+ Example:
  + ![40](/Pictures/Text Processing/40.png)
  + ![41](/Pictures/Text Processing/41.png)
  + ![42](/Pictures/Text Processing/42.png)

#### Lexical Choice

+ the task of choosing the right words or lemmas to express the contents of the message
+ Issues:
  + Frequency (affects readability) 
  + Formality
  + Focus, expextations
  + Technical terms
  + Convention



#### Statistics-Based Lexical Choice for NLG from Quantitative Information
+ Goal 
  + Systems need to “know” what expressions are most suitable for expressing a given piece of information.
  + To develop a statistical algorithm for lexical choice for quantitative information, which can
    + Detect the relationship between data dimensions (aka. attributes) and words
    + Does not rely on hand-crafted rules;
    + Predict both when and which words should be used
    + One word can refer to multiple dimensions
+ ![43](/Pictures/Text Processing/43.png)
+ Methodology(Vector)
  + We represent each attribute (e.g. wind speed) as a combination of some weighted <u>key-points</u>.
    + Taking the min and max values of the attribute (from training data)
    + Key-points are evenly spaced between the min and max values
  + The number of the key-points for an attribute are fixed
  + An example of deriving the key point weights for the attribute value ws=9 (i.e., wind speed dimension).
    + ![44](//Pictures/Text Processing/44.png)
  + Similarly, a data record (i.e., a set of attribute-value pairs) can be represented by multiple groups of key-points, e.g.:
    + ws = 9 → [0.1, 0.9, 0, 0, 0]
    + dir = 2 → [0.97, 0.03, 0, 0, 0]
  + Thus, to represent a set of attribute-value pairs, we concatenate the individual weight vectors, e.g.:
    + {ws = 9, dir = 2} → [0.1, 0.9, 0, 0, 0, 0.97, 0.03, 0, 0, 0]
  + The entire data-text corpus can then be represented with a vector matrix (K), whose row corresponds to the weight vector of a data record.
    + ![45](/Pictures/Text Processing/45.png)
  + We use a column vector (namely ei)to represent the text of a datarecord Each element of $ei$
    indicates whether a word appears in the data record, e.g.:
    + ![46](/Pictures/Text Processing/46.png)
  + We represent words in the corpus using the same weight vectors whose values are unknown.
  + To estimate $vi$ for word $i$ given a data-to-text corpus as input
  + $v_i$ and $v_d$ should be close to each other in the vector space if word $i$ appears in data record $d$
    + ![47](/Pictures/Text Processing/47.png)
    + appear $(i, d1) = 1$ if word $i$ appears in data record $d$ and $0$ otherwise.
  + Our task is to find the weight vector vi for each word i, such that the similarity of $v_i$ and $v_d$ is close to appear $(i, d)$ as much as possible for each data record $(d)$.
    + ![48](/Pictures/Text Processing/48.png)

#### Microplanning

+ Decide how to best express a message in language
+ Imitating corpus works to some degree, but not perfectly
+ Key is better understanding of how linguistic choices affected readers
  + Our SumTime weather-forecast generator microplans better than human forecasters

#### Relisation 

+ Creating linear text from (typically) structured input; ensuring syntactic correctness
+ Take care of details of language
+ Problem
  + There are lots of finicky details of language which most people developing NLG systems don’t want to worry about
  + Solution:
    + Automate this using a realiser

#### Morphology

+ In linguistics, morphology is the study of words, how they are <u>formed</u>, and their <u>relationship</u> to other words in the same language.
+ Variations of a root form of a word
+ Inflectional morphology
+ Derivational morphology - change meaning



---

### 4.Information Extraction(IE)

> **Definition**
>
> From each text in a set of unstructured natural language texts identify information about predefined classes of <u>entities, relationships or events</u> and record this information in a structured form by either:
>
> + Annotating the source text, e.g. using XML tags;
> + Filling in a data structure separate from the text, e.g a template or database record or “stand-off annotation”
> + The activity of populating a structured information repository (database) from an unstructured, or free text, information source
> + The activity of creating a semantically annotated text collection (cf.“The Semantic Web”)
>
> **Purpose:**
>
> + searching or analysis using conventional database queries
> + data-mining;
> + generating a summary (perhaps in another language);
>
> **Task** 
>
> + Given: a document collection and a predefined set of entities, relations
>   and/or events
> + Return: a structured representation of all mentions of the specified entities, relations and/or events
>
> **Evaluation**:
>
> + Strengths
>   + Extracts facts from texts, not just texts from text collections
>   + Can feed other powerful applications( databases, semantic indexing engines, data mining tools)
> + Weakness:
>   + Systems tend to be genre/domain specific and porting to new genres and domains can be time-consuming/requires expertise
>   + Limited accuracy
>   + Computationally demanding, so performance issues on very large collections

#### Entity Extraction

+ For each textual mention of an entity of one of a fixed set of types identify its extent and its type
+ Coreference
  + Multiple references to the same entity in a text are rarely made using the same string:
    + Pronouns – Tony Blair . . . he
    + Names/definite descriptions - Tony Blair
    + Abbreviated forms
    + Orthographic variants
  + Different textual expressions that refer to the same real world entity are said to corefer.
  + Clearly IE systems are more useful if they can recognise which text mentions are coreferential.
  + **Coreference Task**: link togther all textual references to the same real world entity, regardless of whether the surface form is a name or not

#### Relation Extraction

+ Task:
  + identify all assertions of relations, usually binary, between entities identified in entity extraction
+ May be divided into two subtasks:
  + <u>Relation detection</u>: find pairs of entities between which a relation holds
  + <u>Relation classification</u>: for pairs of entities between which a relation holds, determine what the relation is
+ Challenging 
  + Discovering relations frequently depends upon being able to follow coreference links.
  + The same relation may be expressed in many different ways:

#### Event Detection

+ Task
  + identify all reports of event instances, typically of a small set of classes
+ May be divided into two subtasks
  + Event detection: find mentions of events in text
  + Event classification: assign detected events to one of a set of classes
+ Events may be simply viewed as relations. However they are typically complex relations that
  + Are temporally situated and often of relatively short duration
  + Involve multiple role players
  + Are often expressed across multiple sentences

#### Approach

+ Knowledge Engineering Approaches
+ Supervised Learning Approaches
+ Bootstrapping Approaches
+ Distant Supervision Approaches

> **Knowledge Engineering Approaches**
>
> ![49](/Pictures/Text Processing/49.png)

> **Supervised Learning Approach**
>
> + Systems are given texts with manually annotated entities + relations
> + For each entity/relation create a training instance
>   + k words either side of an entity mention
>   + k words to the left of entity 1 and to the right of entity 2 plus the words in between
> + Training instances represented in terms of features
>   + words, parts of speech, orthographic characteristics, syntactic info
> + Systems may learn
>   + patterns that match extraction targets
>   + Classifiers that classify tokens as beginning / inside / outside a tage type
> + Learning techniques include: covering algorithms, HMMs, SVMs

> **Bootstrapping Approaches**
>
> + A technique for relation extraction that requires only minimal supervision
> + Systems are given
>   + seed tuples
>   + seed patterns
> + System searches in large corpus for 
>   + occurences of seed tuples and then extracts a pattern that matches the context of the seed tuple
>   + matches of seed patterns from which it harvests new tuples
> + New tuples are assumed to stand in the required relation and are added to the tuple store

> **Distant Supervision Approaches**
>
> + Sometimes also called “weakly labelled” approaches
> + Assumes a (semi-)structured data source, such as
>   + which contains tuples of entities standing in the relation of interest and, ideally, a pointer to a source text
> + Tuples from data source are used to label
>   + the text with which they are associated, if available
>   + documents from the web, if not
> + Labelled data is used to train a standard supervised named entity or relation extraction system

#### Evaluation

+ **keys**
  + Correct answers, called <u>keys</u>, are produced manually for each extraction task (filled templates or SGML annotated texts)
+ **responses**
  + Scoring of system results, called responses, against keys is done automatically.
+ **interannotator agreement**
  + At least some portion of the answer keys are multiply produced by different humans so that interannotator agreement figures can be computed.
+ Principal metrics – borrowed from information retrieval
  + Precision (how much of what system returns is correct)
  + Recall(how much of what is correcrt system returns)
  + F-measure(a weighted combination of precision and recall)
+ **Shared Task challenges**
  + Shared Task challenges are community wide exercises in which groups of researchers engage in a friendly competition to build systems to address a common task.



#### Named Entity Recognition

+ **Tasks**
  + for each textual mention of an entity of one of a fixed set of types identify its <u>extent</u> and its <u>type</u>.
+ **Recap**
  + Types of entities which have been addressed by IE systems
    + Named individuals 
      + Organisations, persons, locations, books, films, ships, restaurants . . .
    + Named Kinds
      + Proteins, chemical compounds/drugs, diseases, aircraft components . . .
    + Times
      + temporal expressions – dates, times of day
    + Measures
      + temporal expressions – dates, times of day
  + Multiple references to the same entity in a text are rarely made using the same string:
    + Pronouns – They . . . he
    + Names/defiinite descriptions  - Tony Blair . . . the Prime Minister
    + Abbreviated forms - Theresa May ... May; United Nations ... UN
    + Orthographic variants 
  + Different textual expressions that refer to the same real world entity are said to <u>corefer</u>
  + **Coreference Task**: link togther all textual references to the same real world entity, regardless of whether the surface form is a name or not

> **Knowledge Engineering Approaches to NER**
>
> + Such systems typically use
>   + named entity lexicons and
>   + Manually authored pattern / action rules or regular expression
> + System has three main stages:
>   + Lexical processing
>   + NE parsing
>   + Discourse interpretation
> + Lexical processing
>   + Many rule-based NER systems made extensive use of specialised lexicons of proper names, such as <u>gazetteers</u> – lists of place names
>   + **Why not use even larger gazetteers?**
>     + Many NEs occur in multiple categories - the larger the lexicons the greater ambiguity
>     + the listing of names is never complete, so need some mechanism to type unseen NEs in any case
>   + **Principles**
>     + Tokenisation, sentence splitting, morphological analysis
>     + Part-of-speech tagging 
>       + tags known proper name words andunknown uppercase-initial words as proper names (NNP, NNPS)  NNP = Proper nouns
>     + Name List / Gazetter Lookup and Tagging (organisations, locations, persons, company designators. person titles)
>     + Trigger Word Tagging
>       + certain words in multi-word names function as trigger words, permitting classification of the name
>       + system has trigger words for various orgs,gov't institutions,locations
> + **NE Parsing**
>   + Using the presetrules to identify the unclassified proper name 
>   + ![50](/Pictures/Text Processing/50.png)
> + Discourcse Interpretation - Coreference Resolution
>   + When the name class of an antecedent (anaphor) is known thenestablishing coreference allows the name class of the anaphor (antecedent) to be established.
>   + An unclassified PN may be co-referential with a variant form of a classified PN. (PN = Pronoun)
>     + **** Ford – Ford Motor Co.
>   + An unclassified PN may be co-referential with a definite NP which permits the PN’s class to be inferred
>     + E.g. Kellogg ... the breakfast cereal manufacturer
>   + Semantic type information
>     + noun-noun qualification
>       + When an unclassified PN qualifies an organisation-related object then the PN is classified as an organisation; e.g. Erickson stocks
>     + Possessives
>       + when an unclassified PN stands in a possessive relationto an organisation post, then the PN is classified as an organisation; e.g. vice president of ABC, ABC’s vice president
>     + Apposition
>       + when an unclassified PN is apposed with a known orgnisation post, the former name is classified as a person name; e.g. Miodrag Jones, president of XYZ
> + Evaluation
>   + Strengths
>     + High performance - only several points behind human annotators
>     + Transparent - easy to understand what system is doing/why
>   + Weakness
>     + Porting to another domain requires substantial rule re-engineering
>     + Acquisition of domain-specific lexicons
>     + Rule writing requires high levels of expertise

> **Supervised learning approaches to NER**
>
> + **Task**
>   + Supervised learning approaches aim to address the portability problems inherent in knowledge engineering NER
>     + Instead of manually authoring rules, systems learn from annotated examples
>     + Moving to new domain requires only annotated data in the domain – can be supplied by domain expert without need for expert computational linguist
> + **Sequence Labelling**
>   + Systems may learn
>     + <u>patterns</u> that match extraction targets
>     + <u>classifiers</u> that label tokens as beginning/inside/outside a tage type
>   + In sequence labelling for NER, each token is given one of three label
>     types:
>     + ![51](//Pictures/Text Processing/51.png)
>     + Scheme is called `BIO` or sometimes `IOB`
>   + Each training instance(token) is typically represented as a set of **features**
>   + **Features** can be not only the characteristics of the token itxself but of neighbouring tokens as well
>     + the classifier extracts features from
>       + input string
>       + left predictions
> + **Carreras et al.(2003)**
>   + NE detection: in a first pass over the text BIO tags are assigned without regard to type.
>   + NE classification: in a second pass the NE’s detected in the first pass are assigned a class (organisation, person, location, etc.)
>   + **Adaboost classifier**
>   + Type pattern of consecutive words in context 
>     + functional (f)
>     + capitalized (C)
>     + lowercased (l)
>     + punctuation mark (.)
>     + quote ()
>     + other(x)
> + **Entity Linking**
>   + KBP: Knowlege base population
>     + Facts are gathered from open access web sources and used to build a
>       structuted information repository.
>   + Entity Linking Task: Given a text with a recognised NE mention in that text and a knowledge base (KB), such as Wikipedia, link the NEs to the matching entry in the KB if there is one, else create an entry.
>     + Very Difficult Task
>   + Approach:
>     + Given a text T containing an NE mention m and using Wikipedia as a KB
>       + index all pages in the KB using an information retrieval system
>       + Build a query from T (e.g. use the sentence/paragraph/whole text) containing m and search the KB
>       + From the ranked list of KB pages returned by step 2 pick the high ranked page whose name matches m and return it
>     + Doesn’t work very well

+ Conclusion:
  + Named Entity Recognition (NER) is a core IE technology that is now relatively mature and at “usable” performance levels.
  + NER aims to detect and classify all mentions of named entities of a given set of entity types within a given text.
  + Techniques used have included:
    + Knowledge engineering approaches
    + Supervised Learning Approach
  + Challenge:
    + Reducing the amount of training data needed via, e.g. bootstrapping techniques.
    + Exploiting existing structured data sources to generate “weakly labelled” training data (aka distant supervision)
    + Expanding the classes of entities addressed
    + Developing NERs for languages other than English.

#### Relation Extraction

+ Task:
  + given a text T and a set of relations R, identify all assertions of relations from R in T, holding between entities identified in entity extraction.
+ Relations in R are usually binary
+ Reations in are assumed to be a subset of those identifed in the entity extraction process
+ Challenge:
  + The same relation may be expressed in many different ways:
  + The information required may be spread across multiple sentences and discovering relations may depend upon following coreference links.
  + The information to be extracted may be implied by the text, rather than explicitly asserted, and extracting it may require inference

> ##### Knowledge Rngineering Approach
>
> Use the authored rules and can be divided into
>
> + Shallow: using the pattern-action rules
> + Deep: linguinstically inspired "language understanding" systems
>   + typically parse input using broad coverage NL parser to identify key grammatical relations, like subject and object
>   + use transduction rules to extract relations of interest from parser output
>   + Extraction rules over parser output allow a wider set of expressions to be captured than with regex's over words and NE tags alone
>
> Strengths:
>
> + high precision
> + System behaviour is human-comprehensible
>
> Weakness:
>
> + The writing of rules has no end
> + New rules needed for every new domain( pattern action rules for shallow approaches; transduction rules for deep approaches)

> ##### Suppervised Learning Approaches
>
> What to be learned?
>
> + **Rules** that
>   +  Match to all and only relation bearing sentences
>   + Capture sunstrings within the matched text that correspond to relation arguments
> + **Binary classifier** 
>   + containing instances of the entity types between which the relation holds
>   + As with NER can be divided into detection and classification stages:
>
> Process:
>
> + Assume entities to be related already tagged
> + Use any algorithm for learning binary classifiers to learn to distinguishinstances (typically sentences) where
>   + entities co-occur and relation holds (positive instances)
>   + entities cooccur anreation os (positive instances)
> + Features used fall into 3 broad classes:
>   + Features of the named entities
>   + Features from the words in the text, usually words from 3 locations
>   + Features about the entity pair within the sentence
>
> Strengths:
>
> + No need to write extensive/complex rule sets for each domain
> + Same system straightforwardly adapts to any new domain, provided training data is supplied.
>
> Weakness:
>
> + Quality of relation extraction dependent on quality and quantity of training data, which can be difficult and time consuming to generate
> + Developing feature extractors can be difficult and they may be noisy (e.g. parsers) reducing overall performance

> ##### Bootstrapping Approaches
>
> Motivation:
>
> + reduce number of manually labelled examples needed to build a system
>
> Key Idea:
>
> + set of trusted tuples T (e.g. pairs of entities known to stand in the relation of interest)
>
> + set of trusted patterns P (i.e. patterns known to extract pairs of entities in the given relation with high accuracy)
>
>   The if 
>
>   + then find tuples from T in sentences S in D, extract patterns from context of sentences in S, add patterns to P and then use P to find new tuples in D and add to T; repeat until convergence.
>   + then match patterns from P in sentences S in D, extract tuples from pattern matches in sentences in S, add tuples to T and then use tuples in T to find new patterns in D and add to P; repeat until convergence.
>
> **DIPRE(Dual Iterative Pattern Relation Expansion)**
>
> + Aim
>   + to extract useful relational tuples from the Web, of the form
> + Method
>   + Exploit “duality of patterns and relations”
>     + Good tuples help find good patterns
>     + Good patterns help find good tuples
>   + Starting with user-supplied tuples, iteratively
>     + Use these tuples to find patterns
>     + Use the patterns to find more tuples
> + Patterns are defined as 5-tuples:
>   (order, urlprefix, prefix, middle,suffix)
> + Occurrences are defined as 7-tuples:
>   (author,title, order, url, prefix, middle,suffix)
> + An algorithm for generating a pattern given a set of occurrences is described
>   + Algorithm inisists order and middle of all occurrences is the same – they form part of the generated pattern
>   + Additionally pattern contains
>     + longest matching prefix of the url of all the occurrences
>     + longest matching suffix of the prefix of all the occurrences
>     + longest matching prefix of the suffix of all the occurrences
>     + See Brin (1999) for details
> + Patterns are assessed for specificity and rejected if their specificity is too low, i.e. if they are too general.
> + Conclusion
>   + Strengths:
>     + Need for manually labelled training data is eliminated
>   + Weaknesses:
>     + Can suffer from <u>semantic drift</u> – when an erroneous pattern introduces erroneous tuples, which in turn lead to erroneous patterns
>     + Works well when significant redudancy in assertion of specific tuples an in use of specific patterns to express a relation
>     + Issues when multiple relations hold between the same pair of entities

> ##### Distant Supervision Approaches
>
> Aim:
>
> + reduce/eliminate the need for manually labelled training data
>
> Key Idea:
>
> + Suppose we have a large document collection D plus a structured data source (e.g. a database) R that contains
>   + many instances of a relation of interest in, e.g., a relational table
>   + optionally, for each relation instance a link to a document in D providing evidence for the relation
>
> Method:
>
> + search for sentences in D containing the entity pairs that occur in relation instances (tuples) in R
> + label these sentences as positive occurrences of the relation instance
> + use the labelled sentences as training data to train a standard supervised relation extractor
>
> **Freebase** - a free on-line database of structured semantic data
>
> **Distant Supervision Assumption**
>
> if two entities participate in a relation, any sentence that contains those two entities might express
> that relation.
>
> + combine features from multiple mentions to get a richer feature vector
> + use multiclass logistic regression as a learning framework
> + At test time features are combined from all occurrences of a given entity pair in the test data and the most likely relation is assigned
>
> **Negative instances**
>
> + to get these, randomly select entity pairs that do not appear in any Freebase relation and extract features for them
> + Freease reation anextract eatures or tem these rare occurrences should be low
>
> Conclusion:
>
> + Strengths:
>   + Need for manually labelled training data is eliminated
>   + Can very rapidly get extractors for a wide range of relations
> + Weakness:
>   + Precision still lags behind best knowledge-engineered/directly supervised learning approaches
>   + Only works if a good supply of structured data is available for the relation(s) of interest

---

## Past Paper



### 2013-2014

**Section A**

**a) In the context of Information Retrieval, explain the <u>difference between algorithms that perform boolean search and algorithms that perform a ranked search</u>. <u>What type of algorithm would be better for a regular user (such as an undergraduate student in the Humanities area) who is using a search query with multiple terms, which he/she expects to appear in many documents?</u> Explain the reasons behind your choice of algorithm type.**

Answer: 

​	For the boolean search model, the model just needs to decide the whether the document is relevant or not.  And the presence of the terms is very essential and suffient for the search. For the operator, the boolean search model exploits the boolean operators like AND and OR. The boolean query provides the logical result for deciding whether the document should be returned. 

​	For the ranked search method like the vector space model, it relys on the frequency of terms and maybe some weight of terms could affect the result of the search. The documents are point in high-dimension vector space and its value is the frequency of the terms. Also, the query should be represented as the vectors. This method record the vectors for each documents and queries, finally calculate the similarity metrics which can be interpreted as the normalised correlation coefficient.

​	For the choice of the searching algorithm, the ranked algorithm should be chosen.  Because the boolean algorithm is difficult and unnatural for the newbies. And the users don't want the plenty of ranked results list. For the ranked algorithm, it's very easy to generate the result lists and pick up the relevant documents.

**b) Compression techniques are important due to the growth in volume of the data that must be stored and transmitted.**

​	**(i) Explain the difference between lossy and lossless forms of compression. Discuss the suitability of these alternative forms of compression for different media types (e.g. for text vs. image data).**

Answer:

​	Data Compression is a technique in which the size of data is reduced without loss of information. **Lossy compression** and **Lossless compression** are the categories of data compression method.

​	The main difference between the two compression techniques (lossy compression and Lossless compression) is that, The <u>lossy compression technique</u> does not restored the data in its original form, after decompression on the other hand l<u>ossless compression</u> restores and rebuilt the data in its original form, after decompression.

​	![01](/Pictures/Text Processing Exam/01.png)

​	(**ii)Explain the difference between <u>static, semi-static and adaptive techniques</u> for text compression, noting their key advantages and disadvantages.**

Answer:

​	A static model is a fixed model that is known by both the encoder and thedecoder and does not depend on the specific data that is beingcompressed.

​	A semiadaptive or semistatic model is a fixed model that is constructed from the data to be compressed. 

​	An adaptive model changes during the compression.  At a given point incompression, the model is a function of the previously compressed part ofthe data.  Since that part of the data is available to the decoder at thecorresponding point in decompression, there is no need to store the model.

**c)The two main model components in Statistical Machine Translation are the Translation Model and the Language Model. Explain the role of each of these components.Describe the type of data that is necessary to build each of them. Mention one way in which these components can be combined to build a translation system.**

**d)Assume we have a small set of seed words with positive and negative opinions, e.g.: positive = {good, fast, cheap} and negative = {slow, boring, fragile}. Explain the two most common (semi-)automated approaches to <u>expand these sets</u> with more opinion words or phrases to create lexica for Sentiment Analysis, providing examples whenever possible. Give one advantage and one disadvantage of each approach. **

Answer:

​	 This model is created from the seed words which comes from the supervised seed positive and negative words. It can be divided into two parts ways, <u>Dictionary-based and Corpus-based approach</u>. For the Dictionary-based, the users should find the synonyms/antonyms of seed emotion words in dictionaries like WordNet. Otherwise, users can build the patterns from the seed words/phrases to search on large corpora. For the <u>Corpus-based approach</u>, the examples are annotated with sentiment are used withe machine learning algorithms to learn a classifier for each sentence and document. The users can rely on the manully way (gold-standards) and crow-annotated resources like Amazon Product Resource. This approach can be divided into the two steps: <u>subjectivity classifier</u> : first run binary classifier to identify and then eliminate objective segments.  <u>Subjectivity Classifier with remaining segments</u>: learn how to combine and weight different attributes to make predictions.

​	For the advantages for the <u>Dictionary-based</u> approach, it doesn't need the labelled data and the  procedure of learning is not required. For disadvantages, it requires powerful linguistic resources which is not always available, so users cannot guarantee the efficiency of this approach.

​	For the advantages for the <u>Corpus-based approach</u>, it really easy to implement anf usually works well. As for the disvantage, the assumption of this approach is hard to estimate.

**Section B**

2.In the context of Information Retrieval, given the following documents:

Document 1: Sea shell, buy my sea shell!
Document 2: You may buy lovely SEA SHELL at the sea produce market.
Document 3: Product marketing in the Shelly sea is an expensive market.
and the query:
Query 1: sea shell produce market

**a)Apply the following term manipulations on document terms: stoplist removal, capitalisation and stemming, showing the transformed documents. Explain each of these manipulations. Provide the stoplist used, making sure it includes punctuation, but no content words.**

Answer:

​	For the stop removal list, it should exclude the "non-content" words, so the stop list should be "my, may ,at, you ,the, in, is, an, , , ! , .".

​	For the capitalisation, turn all the words to lower case.

​	For the stemming, turn the `marketing` to `market`. `product` to `produce`

​	So the transformed document should be:

Document 1: sea shell  buy sea shell

Document 2: buy lovely sea shell sea produce market

Document 3: produce market shelly sea expensive market

**b)Show how Document 1, Document 2 and Document 3 would be represented using an inverted index which includes term frequency information.**

Answer:

​	sea: (1,1) (1,4) (2,3) (2,5) (3,4)

​	shell: (1,2) (1,5) (2,4) 

​	buy: (1,3) (2,1) 

​	lovely:(2,2) 

​	produce: (2,6) (3,1)

​	market: (2,7) (3,2) (3,6)

​	shelly:(3,3)

​	expensive: (3,5)

**c)Using term frequency (TF) to weight terms, represent the documents and query as vectors. Produce rankings of Document 1, Document 2 and Document 3 according to their relevance to Query 1 using two metrics: <u>Cosine Similarity</u> and <u>Euclidean Distance</u>. Show which document is ranked first according to each of these metrics.**

Answer:

​	**TF:** 

​	Query: sea(1) shell(1) produce(1) market(1)

​	Document1: sea(2) shell(2) produce(0) market(0) buy(1)

​	Document2: sea(2) shell(1) produce(1) market(1) buy(1) lovely(1)

​	Document3: sea(1) shell(0) produce(1) market(2) expensive(1)

​	**Evaluation:**

​	<u>Similarity cosine</u>:

​	Document1: (2×1+2×1+0×1+0×1+0×1) / (2× √(4+4+0+0+1)) = 4/6

​	Document2: (2×1+1×1+1×1+1×1+0×1+0×1) / (2×√(4+1+1+1+1+1)) = 5/6

​	Document3: (1×1+0×1+1×1+2×1+0×1) / (2×√(1+0+1+4+1) = 4/5.29

​	<u>Euclidean Distance</u>：

​	Document1: √(1+1+1+1+1) = √5

​	Document2: √(1+0 +0 + 0 + 1 + 1) = √3

​	Document3: √(0+1+0+1+1) = √3

​	For the best similarity, we should choose the lowest value document.

**d)Explain the intuition behind using TF.IDF (term frequency inverse document frequency) to weight terms in documents. Include the formula (or formulae) for computing TF.IDF values as part of your answer. For the ranking in the previous question using cosine similarity, discuss whether and how using TF.IDF to weight terms instead of TF only would change the results.**

Answer:

​	For using the Terms frequency, the result of the model may be affected by the freqency of the terms in documents, so we should consider the less common terms could be more useful to find the relevant documents, so we use the inverse document frequency to avoid this situation happening.

​	we need the document frequency (df) which include the key terms from the query.

​	sea : idf:0 log1 = 0

​	shell: idf: log(3/2)=0.17609125905

​	buy: idf: log(3/2)=0.17609125905

​	lovely: idf: log(3/1)=0.477

​	produce: idf: log(3/2)=0.17609125905

​	market: idf: log(3/2)=0.17609125905

​	shelly: idf: log(3/1) = 0.477

​	expensive: idf: log(3/1)=0.477

​	**Evaluation**:

|   Terms   |   Query   | Document1 | Document2 | Document3 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
|    Sea    |   0×1/4   |   0×2/5   |   0×2/6   |   0×1/5   |
|   Shell   | 0.18×1/4  | 0.18×2/5  | 0.18×1/6  |  0.18×0   |
|    Buy    |     0     | 0.18×1/5  | 0.18×1/6  |  0.18×0   |
|  Lovely   |     0     |  0.477×0  | 0.477×1/6 |  0.477×0  |
|  Produce  | 0.176×1/4 |  0.176×0  | 0.176×1/6 | 0.176×1/5 |
|  Market   | 0.176×1/4 |     0     | 0.176×1/6 | 0.176×1/5 |
|  Shelly   |     0     |     0     |     0     | 0.477×1/5 |
| Expensive |     0     |     0     |     0     | 0.477×1/5 |
|           |  0.20925  |   0.108   |  0.1975   |  0.0892   |

​	Document1: (0+(0.045×0.072)) / 0.20925×0.108

​	Document2: (0+(0.03×0.045)+(0.044×0.0293)×2) / 0.20925×0.1975

​	Document3: (0+(0.044×0.0352)) / 0.20925×0.0892

**e)Explain the metrics Precision, Recall and F-measure in the context of evaluation in Information Retrieval against a gold-standard set, assuming a boolean retrieval model. Discuss why it is not feasible to compute recall in the context of searches performed on very large collections of documents, such as the Web.**

Answer:

​	**Recall**： the proportion of the relevant documents 

​	**Precision**: the proportion of retrieved documents that are relevant

​	Precision and Recall address the relation between the retrieved and relevant sets of documents.

​	**F-measure**: combines precision and recall into a <u>single figure</u>,gives equal weight to both. It is the F is a harmonic mean which penalises low performance in one value more than arithmethic mean.

​	Because the there are tremendous web pages which is included in the Internet, the mount of the retrieved pages is pretty small because of the assumption and limitation of algorithms.



4.

**a) Differentiate subjectivity from sentiment. How are the tasks of Subjectivity Classification and Sentiment Analysis related?**

Answer:

​	As for the rule-based subjectivity classifier, the task is to search for the emotion words lexicon and determine the sentence/document is objective or subjective.

​	As for the rule-based sentiment classifier, the task is to determine the document/sentence shows the positive sentiment or negative sentiment by counting the value of lexicons and build the judgement model.

**b)Explain the steps involved in the lexicon-based approach to Sentiment Analysis of features in a sentence (e.g. features of a product, such as the battery of a mobile phone). Discuss the limitations of this approach.**

Answer:

​	As for the binary approach, the input is the sentences s and product features f, the output is the attitude of this feature is positive,negative or netural.

​	Step1: the model should pick up all the sentences which contains the fratures and lexicons about the attitude.
​	Step2: the model should select all the emotion words in sentence
​	Step3: assign the values of emotion words, 1=positive, 0=netural, -1=negative
​	Step4: sum up the orientation and assign the orientation to (f,s)

​	As for the shortcoming for intensifiers, the gradable approach assign the different levels to the emotional content. The process is similar to the binary approach, the final decision is based on the all emotion words.

​	The disadvantage is requiring a lexicon of emotion words which should be fairly comprehensive,covering new words.abbreviations,misspelled words.

**c)Explain the graded lexicon-based approach for Sentiment Analysis.Given the following sentences and opinion lexicon (adjectives only), apply the weighted lexical-based approach to classify EACH sentence as positive, negative or objective. Show the final emotion score for each sentence. In addition to use of the lexicon, make sure you consider any general rules that have an impact in the final decision. Explain these rules when they are applied.**

**Lexicon:**
		**boring  -3**
		**brilliant  2**
		**good 3**
		**horrible -5**
		**happy  5**

Graded lexicon-based Approach:

​	

(S1)He is brilliant but boring.**

<u>Diminisher rule</u>:  the weight should be substracted from the positive terms.

emotion(brilliant) = 2  emotion(boring) = -3 , so the decision value is 2-3 = -1

**(S2) I am not good today.**	

<u>Negation rule</u>: when the neighbourhood area occurs the negation words, the value should be decreased by 1 and inverted. 

emotion(good) = 3,  the decision value is -(3-1) = -2

**(S3) I am feeling HORRIBLE today, despite being happy with my achievement.**

<u>Capitalization rule</u> : the value of emtions words should be increased by 1 for positive words,-1 for negative words. Diminisher rule:  the weight should be substracted from the positive terms.

emotion(horrible) = -5, capitalization rules -> emotion(horrible) = -6 emotion(happy) = 5

Decision value = -1

**(S4) He is extremely brilliant but boring, boring.**

<u>Intensifier rule</u>: the weight of extremely is 2, so the emotion(brilliant) = 4, emotion(boring) =  -3, so the decision value is -2.

**d)Specify the five elements of Bing Liu’s model for Sentiment Analysis, and exemplify them with respect to the following text. Identify the features present in the text, and for each indicate its sentiment value as either positive or negative. Discuss two language processing challenges in automating the identification of such elements.**		

> “I am in love with my new Toshiba Portege z830-11j. With its i7 core processors,
> it is extremely fast. It is the lightest laptop I have ever had, weighting only 1 Kg.
> The SSD disk makes reading/writing operations very efficient. It is also very silent,
> the fan is hardly ever used. The only downside is the price: it is more expensive
> than any Mac. Lucia Specia, 10/04/2012.”

Answer:

​	As for the five elements, they should be:

>  `e_i` : the name of the entity
>
> `a_ij`: an aspect of the `e_i`
>
> `oo_ijkl`: the orientation of the opinion about the aspecrt `a_ij` of the entity.
>
> `h_k`: the opinion holder
>
> `t_l`: the time when opinion is expressedx by `h_k`

​	The name of the entity is `Toshiba Portege z830-11j`. For the many aspects, they should be `i7 core processors`,`SSD disk`,`weighting`,`fan`,`price`.The orientation of each opinion about the aspect, for the general idea about this product, the holders said `love`, it's the positive. For the aspect `i7 core processors`, the holder said `fast`, it is positive. For the `weight`, the holder said it's`the lightest`, the orientation is positive. As for the `SSD disk`, the holder said `efficient and silent`, so the positive.  For the `fan`, it said `hardly ever used`, it's netural. The aspect `privr`, the `more expensive`, so it's negative.	Aslo, you can generate the quintuple to show the result, like below:

​	(`Toshiba Portege z830-11j`, i7 core processors, positive,Lucia Specia,10/04/2012)

​	Challenge: 1) Maybe it's very difficult to comfirm the entity name because of variations and abbreviation. 2) It's very difficult to distinguish the subjective and objective sentences because of the language.

**e) Differentiate direct from comparative Sentiment Analysis. What are the elements necessary in comparative models of Sentiment Analysis?**

The comparative SA can contrast direct opinion verusu more comparativve opinions such as direct sentiment expressions on target objects and comparisons expressing similarities or differences.

---

### 2016-2017

**Section A**

**a)Explain briefly the intuition behind the PageRank algorithm. Discuss how it can documents that are ranked equally “relevant” according to the similarity score given by the vector space model.**

PageRank is designed to use the structure of a graph to quantify the importance of each node in that graph. Accordingly, every usage of PageRank outside of a web context must maintain some notion of importance, even if the interpretation of the importance of a node varies from application to application.

PageRank can be thought of as a fluid that circulates throughout a network, passing from node to node across edges, and pooling at the nodes that are the most important

Intuition: PageRank works by counting the number and quality of links to a page to determine a rough estimate of how important the website is. The underlying assumption is that more important websites are likely to receive more links from other websites.

**Section B**

**d) A second approach to Sentiment Analysis is the corpus-based supervised learning approach.**

**(i) Explain the corpus-based supervised learning approach to Sentiment Analysis in general terms, i.e. in terms of inputs, outputs and processes involved.**