---
title: "Finite arithmetic progressions in cyclic groups"
date: 2024-07-08
length: "15 min"
---

Here are two puzzles of my own invention concerning finite arithmetic progressions in cyclic (or monothetic) groups. An example this is a sequence of regularly scheduled meetings spread throughout multiple years (e.g. 10 meetings occuring once every 60 days)<!--more-->. Both questions involve determining when it is possible to find a progression disjoint from a given set of points (e.g. holidays). One of these problems is in a "discrete" setting while the other one is in a "continuous" setting.

<div class="border border-black pl-4 pr-4 pb-4 mb-8">

### Problem 1

Let $q$ be a prime number and $S \subseteq \mathbb Z / q \mathbb Z$ be a subset of size $n$. Devise an algorithm to determine the number of arithmetic progressions of length $k$ in $\mathbb Z / q \mathbb Z$ disjoint from $S$, with time complexity $\mathscr O (qn \log n)$.

</div>

<details class="mb-8">
<summary class="font-bold hover:underline cursor-pointer mb-4">Solution to Problem 1</summary>
<!-- have to be followed by an empty line! -->

For each $\Delta \in \mathbb{Z} q / \mathbb{Z}^\times$, we find the number of arithmetic progressions disjoint from $S$ of length $k$, with common difference $\Delta$, which we denote by $\nu_{k, \Delta}(S)$. When $\Delta = 0$, the number of constant arithmetic progressions disjoint from $S$ is simply $q - \abs{S}$.

Otherwise, note that multiplication by $\Delta^{-1}$ is an isomorphism of $\mathbb{Z}/q\mathbb{Z}$ taking an arithmetic progression with common difference $\Delta$ to a progression with common difference $1$. It follows that $\nu_{k, \Delta}(S) = \nu_{k,1}(\Delta^{-1} S)$, which is the number of contiguous subsets of length $k$ disjoint from $\Delta^{-1} S$. To calculate this, we write $\Delta^{-1} S = \{s_1, \ldots, s_n\}$, where each $s_i$ is a representative in $\{0, \ldots , q-1\}$ such that $s_1 < \cdots < s_n$, and let $\delta_i$ be the smallest positive integer such that $s_{i+1} = \delta_{i} + s_i$, taking indices modulo $n$. Then

$$
\nu_{k,\Delta}(S) = \nu_{k,1}(\{s_1, \ldots, s_{n}\}) =  \sum_{i=1}^{n} \max(\delta_{i} - k, 0).
$$

The time complexity of an algorithm following this procedure is $\mathscr{O}(q \cdot n \log n)$, since there are $q-1$ remaining values of $\Delta$ to iterate over, and for each value of $\Delta$, one must

1. sort $\Delta^{-1} S$, requiring at most $\mathscr{O}(n \log n)$ operations, and
2. compute $\nu_{k,1}(\Delta^{-1} S)$ using the given sum, requiring $\mathscr{O}(n)$ operations.

A potential implementation of this algorithm in Python is the following:

```python
def delta(a, b, q):
    return q if a == b else (a - b + q) % q

def nu(k, q, S):
    total = q - len(S)
    if k > 1:
        for d in range(1, q):
            dS = sorted([d * s for s in S])
            total += sum([max((delta(dS[(i + 1) % len(S)], dS[i], q) - k, 0)) for i in range(len(S))])
    return total
```

</details>

<div class="border border-black pl-4 pr-4 pb-4 mb-8">

### Problem 2

For each Fibonacci number $k$, determine whether or not there exists an arithmetic progression in $\mathbb{R}/\mathbb{Z}$ of length $k$ and common difference $\phi$ (the golden ratio) disjoint from some open ball of radius $1/k$.

</div>

<details class="mb-8">
<summary class="font-bold hover:underline cursor-pointer mb-4">Solution to Problem 2</summary>
<!-- have to be followed by an empty line! -->

The answer is **no.**

Let $F_n$ denote the $n$th Fibonacci number, and $I = B_{1/F_n}(x)$ be an arbitrary open ball of radius $\frac{1}{F_n}$. We show that any arithmetic progression with length $F_n$ and common difference $\phi$ must intersect $I$ at some point.

Given such a progression $(a_j)_{j=0}^{F_n-1}$, consider the progression $(b_j)_{j=0}^{F_n-1}$ given by $b_j = a_0 + j \cdot \frac{F_{n+1}}{F_n}$. Since $F_{n}$ and $F_{n+1}$ are relatively prime, we have

$$
    \{b_0, \ldots, b_{F_n - 1}\} = b_{\hspace{0.3pt}0} + \big\langle \tfrac{F_{n+1}}{F_n} \big\rangle = b_{\hspace{0.3pt}0} + \big\langle \tfrac{1}{F_n} \big\rangle.
$$

It follows that we can cover the circle with intervals of length $1/F_n$ centered at each element, that is,

$$
    \mathbb{R}/\mathbb{Z} = \bigcup_{k = 1}^{F_n} \overline{B_{1/F_n}}\big(\tfrac{k}{F_n}\big) = \bigcup_{k = 1}^{F_n} \overline{B_{1/F_n}}\big(b_{\hspace{0.3pt}0} + \tfrac{k}{F_n}\big) = \bigcup_{j = 1}^{F_n} \overline{B_{1/F_n}}\left(b_j\right)
$$

Hence, the center $x$ must lie in an interval $\overline{B_{1/F_n}}\left(b_j\right)$. Note that the successive ratio $\phi_n = F_{n+1}/F_n$ of Fibonacci numbers approximates $\phi$ very well, in the sense that

$$
    \left|\phi - \phi_n\right| = \lim_{m \to \infty} \left|\frac{F_{m+1}}{F_m} - \frac{F_{n+1}}{F_n}\right| = \lim_{m \to \infty} \left|\frac{F_{m+1}F_{n} - F_{n+1}F_m}{F_mF_n} \right| = \lim_{m \to \infty} \left| \frac{F_{m-n}}{F_m F_n} \right| = \frac{1}{\phi^{n}F_n} < \frac{1}{F_n^2\sqrt{5}}.
$$

Thus $d(a_j, b_j) \leq  |a_j - b_j| \leq j|\phi - \phi_n| \leq \frac{1}{F_n\sqrt{5}}$. Finally, by the triangle inequality, we must have

$$
    d(a_j, x) \leq d(a_j, b_j) + d(x, b_j) \leq \frac{1}{F_n\sqrt{5}} + \frac{1}{2F_n} < 2.
$$

Hence $a_j \in I$. Therefore, any arithmetic progression of length $F_n$ with common difference $\phi$ must intersect $I$ at some point.

</details>
