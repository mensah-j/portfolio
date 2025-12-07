---
title: "Counting symmetric scales in equal-temperament"
date: 2025-12-07
length: "∼1250 words"
---

In this post, we give two puzzles related to a concept in music theory referred to as scale symmetry. Roughly speaking, a symmetric scale is a musical scale which does not give a strong impression<!--more--> of tonality. Before stating the two problems, we give a brief overview of the relevant theory and establish some terminology.

## Equal-temperament

A musical note is an abstract label that represents a sound with a particular pitch. The current labeling system for pitch classes in Western music involves two components:

1. a _letter_ name from $\mathrm{A}$ to $\mathrm{G}$, and
2. optional _accidentals_ attached to the letter, represented by the flat symbol $\flat$ and the sharp symbol $\sharp$.

Within an octave, the notes rise in pitch from $\mathrm{A}$ to $\mathrm{G}$. The $\flat$ symbol slightly lowers the pitch of a note, and the $\sharp$ symbol slightly raises the pitch of a note. To distinguish notes in the same pitch class, a subscript may be used to distinguish the octave (for historical reasons, octaves start at $\mathrm{C}$ instead of $\mathrm{A}$).

The actual mapping between note labels to frequencies is only determined by general guidelines (which we omit for brevity), and is otherwise unspecified. The two main degrees of freedom in this mapping are a choice of _pitch standard_, which specifies the frequency of a single note, and a choice of _temperament_, which specifies the distances between each pair of notes.

In modern music, the typical pitch standard is $\mathrm{A}_4 = 440 \, \text{Hz}$, and the most common choice of temperament is _twelve-tone equal temperament_, which, as the name suggests, possesses only twelve pitch classes. The pitches in this system may each be labeled with a unique integer $k \in \mathbb{Z}$, and the pitch class that a pitch $k$ belongs to is represented by its residue class $[k]$ modulo $12$.

### $N$-tone equal temperament

This can be generalized to tuning systems with $N$ pitch classes. Instead of the traditional labeling system for notes, one labels each pitch with a unique integer $k \in \mathbb{Z}$, and represents the pitch class of $k$ by its residue class $[k]$ modulo $N$.

## Scales

A musical scale is an ordered collection of pitches spanning an octave, which defines the pitch classes in use for a piece or section of music.

The pitches in a scale may be obtained by starting at a initial note called the _tonic_ and applying a sequence of ascending intervals that collectively span a single octave, until the tonic is reached again. For our purposes, the only intervals we consider are _half steps_ ($\mathrm{H}$) and _whole steps_ ($\mathrm{W}$), which increase the label of a pitch by $1$ and $2$, respectively (this excludes scales such as the pentatonic scale). We call the sequence used to construct the scale its _type_ or _pattern_. For example, the following illustration depicts the pitch collection of a major scale with tonic $[0]$, obtained from the interval sequence $\mathrm{WWHWWWH}$.

<div>
<tikz path="major" mobile="1" desktop="1.25"></tikz>
</div>

When listening to tonal music, the brain subconsciously tries determines the tonic of the underlying scale currently used, which is the basis of solmization. This raises the following natural question:

- When can one determine the tonic of a known scale type only by hearing the notes in its pitch collection?

Note that one can always aurally determine the tonic of a major scale just by hearing its pitch collection, since no two major scales have identical pitch collections. However, for the whole-tone scale, there is ambiguity in the choice of tonic: the $\mathrm{C}$ whole-tone scale shares all the same notes as the $\mathrm{D}$ whole-tone scale, so a listener cannot determine the tonic solely from its pitch collection.

Scales for which this perceptual problem does not have a unique solution are said to be _tonally ambiguous_. With this established, we finally state the two problems and give their solutions.

<div class="border border-black pl-4 pr-4 pb-4 mb-8">

### Problem 1

Are there any tonally ambiguous seven-note scales in $12$-tone equal temperament?

</div>

<details class="mb-8">
<summary class="font-bold hover:underline cursor-pointer mb-4">Solution to Problem 1</summary>

The answer is **no.**

Let $\mathbf{P} = \mathbb{Z}/12\mathbb{Z}$ be the set of all pitch classes, which is a homogeneous space for the cyclic group $\mathbb{Z}/12\mathbb{Z}$. Note that a sequence of ascending intervals $j_1, \ldots, j_7 \in \{1, 2\}$ defining a scale pattern may be identified with a subset $\Sigma \subset \mathbb{Z}/12\mathbb{Z}$ of size $7$ by considering the set of partial sums

$$
\Sigma(j) = \left\{ \sum_{i=1}^{k} j_i \mid 0 \leq k \leq 7 \right\}.
$$

Then given a pitch class $\pi \in \mathbf{P}$, the set of pitches $\Sigma + \pi$ is a scale with type $j$ and tonic $\pi$. If there exists another tonic $\pi'$ producing the same pitch collection, then

$$
\Sigma + \pi = \Sigma + \pi' \implies \Sigma + (\pi - \pi') = \Sigma \implies  \pi - \pi' \in \mathrm{stab}(\Sigma),
$$

so the interval between the two tonics is in the stabilizer of $\Sigma$. Thus, the action of $\langle \pi - \pi' \rangle$ on $\mathbb{Z}/12\mathbb{Z}$ restricts to an action of $\langle \pi - \pi' \rangle$ on $\Sigma$. The orbits of this action are simply the orbits of the former action, which are the cosets of $\langle \pi - \pi' \rangle$. Since these partition $\Sigma$, it follows that the order of $\langle \pi - \pi' \rangle$ divides $|\Sigma|$. In particular, $\gcd(12, |\Sigma|) > 1$, which implies that tonally ambiguous scale cannot consist of seven elements.

</details>

<div class="border border-black pl-4 pr-4 pb-4 mb-8">

### Problem 2

Provide a general formula for the number of tonally ambiguous scale types in $m$-tone equal temperament.

</div>

<details class="mb-8">
<summary class="font-bold hover:underline cursor-pointer mb-4">Solution to Problem 2</summary>

Let $\mathcal{J}_{n, m}$ be the set of $n$-note scale patterns in $m$-tone equal temperament, that is,

$$
\mathcal{J}_{n, m} = \left\{ (j_1, \ldots, j_n) \bigm| j_i \in \{1, 2\}  \text{ and } \sum_{i=1}^{n} j_i = m \right\},
$$

and let $\mathcal{J}_m = \bigcup_{n} \mathcal{J}_{n, m}$. We may identify any sequence $j \in \mathcal{J}_{n, m}$ with a subset of $\mathbb{Z}/m\mathbb{Z}$ by considering its partial sums

$$
\Sigma(j) = \left\{ \sum_{i=1}^{k} j_i \mid 0 \leq k \leq n \right\}.
$$

As shown previously, a scale type $j \in \mathcal{J}_{m}$ is ambiguous if and only if $\Sigma(j)$ has a nontrivial stabilizer or, equivalently, the orbit of $\Sigma(j)$ has size less than $m$. So, let $\mathcal{S}_{k, m}$ be the number of scale patterns $\Sigma \subseteq \mathbb{Z}/m\mathbb{Z}$ such that $|\mathrm{orb}(\Sigma)| = k$. For an integer $k$ dividing $m$, we show that there exists a bijection between scale patterns in $k$-tone equal temperament and scale patterns in $m$-tone equal temperament whose orbit has size dividing $k$. To this end, consider the map

$$
\Phi \colon \mathcal{J}_{k} \to \bigcup_{d \mid k} \mathcal{S}_{d, m}; \quad \quad  j\, \overset{\Phi}{\longmapsto} \Sigma\big(\underbrace{\,j \cdots j\,}_{m/k\text{ times}}\big).
$$

This map is well-defined: if $j \in \mathcal{J}_{k}$, then repeating it $m/k$ times yields a sequence with a sum of $m$, and by construction, $k + \Phi(j) = \Phi(j)$, implying the orbit of $\Phi(j)$ has size dividing $k$.

Since $\Phi(j)$ is simply formed by repetition, it is injective. To show surjectivity, note that any pattern $\Sigma(j)$ whose orbit has size dividing $k$ must be invariant under translation by $k$. Since $0$ is a partial sum of $j$, we must also have $k$ as a partial sum. Hence, $j$ must contain a prefix $j' \in \mathcal{J}_k$ for which $j = \Phi(j')$. It follows from the Möbius inversion formula that

$$
|\mathcal{S}_{k, m}| = \sum_{d \mid k} \mu(d) |\mathcal{J}_{k/d}|,
$$

where $\mu \colon \mathbb{N} \to \mathbb{Z}$ is the Möbius function. The size of $\mathcal{J}_m$ is well-known: removing the last term of a sequence in $\mathcal{J}_m$ yields a sequence in either $\mathcal{J}_{m-1}$ or $\mathcal{J}_{m-2}$. Since the initial values are $|\mathcal{J}_1| = |\mathcal{J}_2| = 1$, this implies that $|\mathcal{J}_m|$ is the $m$th Fibonacci number, $F_m$. It follows that the number of ambiguous scales in $m$-tone equal temperament is

$$
\#\text{ambiguous} = \left| \mathcal{J}_m - \mathcal{S}_{m, m}\right| = - \vphantom{\sum^{.}_{,}}\sum_{\substack{d\hspace{0.5pt}\mid m \\ d \neq 1}} \mu(d) F_{m/d}\,.
$$

For example, in ordinary $12$-tone equal temperament, there are $1 \cdot 8 + 1 \cdot 3 + 0 \cdot 2 - 1 \cdot 1 + 0 \cdot 1 = 10$ types of tonally ambiguous scales.

</details>
