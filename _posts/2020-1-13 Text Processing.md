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

>  Inverse document frequency( <u>**IDF**</u> )
>
> Term Weighting
>
> + ![08](/Pictures/Text Processing/08.png)
>
> + informativeness of terms
>
>   + Idea that less common terms are more useful to finding relevant docs
>   + document frequency(df) reflects this difference
>   + collection frequency(cf) fails to distinguish them (i.e. very similar counts)
>
> + Informativeness is inversely related to (document) frequency
>
>   + less common terms are more useful to finding relevant documents
>   + more common terms are less useful to finding relevant documents
>
> + Compute
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

#### Evalution:

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

    Neg. dimension ($\text{C_neg}$ ): {-5,...,-1},  Pos. dimension ($\tect{C_pos}$ ): {+1,...,+5}

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

  + example

    + 



