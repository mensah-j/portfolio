---
title: "Counting symmetric scales in equal-temperament"
date: 2025-12-07
length: "∼1250 words"
---

In this post, we give two puzzles related to a concept in music theory referred to as scale symmetry. Roughly speaking, a symmetric scale is a musical scale which does not give a strong impression<!--more--> of tonality. Before stating the two problems, we give a brief overview of the relevant theory and establish some terminology.

## Equal-temperament

A tuning system is a method of defining which pitches to use in music and how to label them. The most common of these in use today is _equal temperament_, which divides the octave into $m$ (typically twelve) equally spaced notes. Theoretically, we may label the pitches in this system by integers in order of increasing pitch height.

An _interval_&nbsp; is a measure of the difference in pitch height between two pitches. In equal-temperament, these form a group isomorphic to $\mathbb{Z}$ which acts on the set of pitches by addition. The _pitch class_ of a pitch $k \in \mathbb{Z}$ is the set of pitches which are some number of octaves apart; in other words, it is the residue class $[k]$ modulo $m$.

## Scales

A musical scale is an ordered collection of pitches spanning an octave, which defines the pitch classes in use for a piece or section of music.

The pitches in a scale may be obtained by starting at a initial note called the _tonic_ and applying a sequence of ascending intervals that collectively span a single octave, until the tonic is reached again. For our purposes, the only intervals we consider are _half steps_ ($\mathrm{H}$) and _whole steps_ ($\mathrm{W}$), which increase the label of a pitch by $1$ and $2$, respectively. We call the sequence used to construct the scale its _type_ or _pattern_. For example, the following illustration depicts the pitch collection of a major scale with tonic $[0]$, obtained from the interval sequence $\mathrm{WWHWWWH}$.

<div>
<tikz path="major" mobile="1" desktop="1.25"></tikz>
</div>

When listening music using a certain scale, the brain subconsciously tries to determine the tonic, a process which forms the basis of [solmization](https://en.wikipedia.org/wiki/Solmization) systems such as movable-do solfège. This leads to the following natural question:

- When can one determine the tonic of a given scale type only by hearing the notes in its pitch collection?

For example, one can always aurally determine the tonic of a major scale from just its pitch collection, since no two major scales have identical pitch collections. However, for the [whole-tone scale](https://en.wikipedia.org/wiki/Whole-tone_scale), there is ambiguity in the choice of tonic: music written in the $\mathrm{C}$ whole-tone scale could plausibly be heard as being in the $\mathrm{D}$ whole-tone scale, since both scales share the same notes.

Scales for which this perceptual problem does not have a unique solution are said to be _tonally ambiguous_. We now state the two problems and give their solutions.

<div class="border border-black pl-4 pr-4 pb-4 mb-8">

### Problem 1

Are there any tonally ambiguous seven-note scales in $12$-tone equal temperament?

</div>

<details class="mb-8">
<summary class="font-bold hover:underline cursor-pointer mb-4">Solution to Problem 1</summary>

The answer is **no.**

Let $\mathbf{P} = \mathbb{Z}/12\mathbb{Z}$ be the set of all pitch classes, which is a homogeneous space for the cyclic group $\mathbb{Z}/12\mathbb{Z}$. Note that a sequence of ascending intervals $j_1, \ldots, j_n \in \{1, 2\}$ defining a scale pattern may be identified with a subset $\Sigma \subset \mathbb{Z}/12\mathbb{Z}$ of size $n$ by considering the set of partial sums

$$
\Sigma(j) = \left\{ \sum_{i=1}^{k} j_i \mid 1 \leq k \leq n \right\}.
$$

Then given a pitch class $\pi \in \mathbf{P}$, the set of pitch classes $\Sigma + \pi$ is a scale with type $j$ and tonic $\pi$. If there exists a different tonic $\pi'$ producing the same pitch collection, then

$$
\Sigma + \pi = \Sigma + \pi' \implies \Sigma + (\pi - \pi') = \Sigma \implies  \pi - \pi' \in \mathrm{stab}(\Sigma).
$$

Thus, the action of $\langle \pi - \pi' \rangle$ on $\mathbb{Z}/12\mathbb{Z}$ restricts to an action of $\langle \pi - \pi' \rangle$ on $\Sigma$. The orbits of this action are simply the orbits of the former action, which are the cosets of $\langle \pi - \pi' \rangle$. Since the orbits also partition $\Sigma$, it follows that the order of $\langle \pi - \pi' \rangle$ divides $|\Sigma|$. In particular, $\gcd(12, |\Sigma|) > 1$, which implies that a tonally ambiguous scale cannot consist of a number of notes coprime to $12$.

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
\Sigma(j) = \left\{ \sum_{i=1}^{k} j_i \mid 1 \leq k \leq n \right\}.
$$

As shown previously, a scale type $j \in \mathcal{J}_{m}$ is ambiguous if and only if $\Sigma(j)$ has a nontrivial stabilizer or, equivalently, the orbit of $\Sigma(j)$ has size less than $m$. So, let $\mathcal{S}_{k, m}$ be the number of scale patterns $\Sigma \subseteq \mathbb{Z}/m\mathbb{Z}$ such that $|\mathrm{orb}(\Sigma)| = k$. For an integer $k$ dividing $m$, we show that there exists a bijection between scale patterns in $k$-tone equal temperament and scale patterns in $m$-tone equal temperament whose orbit has size dividing $k$. To this end, consider the map

$$
\Phi \colon \mathcal{J}_{k} \to \bigcup_{d \mid k} \mathcal{S}_{d, m}; \quad \quad  j\, \overset{\Phi}{\longmapsto} \Sigma\big(\underbrace{\,j \cdots j\,}_{m/k\text{ times}}\big).
$$

This map is well-defined: if $j \in \mathcal{J}_{k}$, then repeating it $m/k$ times yields a sequence with a sum of $m$, and by construction, $k + \Phi(j) = \Phi(j)$, implying the orbit of $\Phi(j)$ has size dividing $k$.

Since $\Phi$ is defined by repetition, it is injective. To show surjectivity, note that any pattern $\Sigma(j)$ whose orbit has size dividing $k$ must be invariant under translation by $k$. By definition, $0$ is a partial sum of $j$, which implies that $k$ must also be a partial sum. Thus, $j$ contains a prefix $j' \in \mathcal{J}_k$ such that $j = \Phi(j')$, so $\Phi$ is also surjective. It follows from the Möbius inversion formula that

$$
|\mathcal{S}_{k, m}| = \sum_{d \mid k} \mu(d) |\mathcal{J}_{k/d}|,
$$

where $\mu \colon \mathbb{N} \to \mathbb{Z}$ is the Möbius function. The size of $\mathcal{J}_m$ is well-known: removing the last term of a sequence in $\mathcal{J}_m$ yields a sequence in either $\mathcal{J}_{m-1}$ or $\mathcal{J}_{m-2}$. Since the initial values are $|\mathcal{J}_1| = |\mathcal{J}_2| = 1$, this implies that $|\mathcal{J}_m|$ is the $m$th Fibonacci number, $F_m$. Therefore, the number of ambiguous scales in $m$-tone equal temperament is

$$
\#\text{ambiguous} = \left| \mathcal{J}_m - \mathcal{S}_{m, m}\right| = - \vphantom{\sum^{.}_{,}}\sum_{\substack{d\hspace{0.5pt}\mid m \\ d \neq 1}} \mu(d) F_{m/d}\,.
$$

For example, in ordinary $12$-tone equal temperament, there are $1 \cdot 8 + 1 \cdot 3 + 0 \cdot 2 - 1 \cdot 1 + 0 \cdot 1 = 10$ types of tonally ambiguous scales.

</details>
