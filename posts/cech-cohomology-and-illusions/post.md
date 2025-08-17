---
title: "Čech cohomology and illusions"
date: 2025-01-19
length: "∼2500 words"
---

This post builds off of Roger Penrose's article _On the Cohomology of Impossible Figures_, in which he shows a remarkable connection between impossible drawings, such as the [Penrose triangle](https://en.wikipedia.org/wiki/Penrose_triangle), and nontrivial cohomology groups<!--more-->. In simple terms, the fact these perceptual illusions work is due to an obstruction preventing one from synthesizing the local information in the figure into a consistent global construct; this is precisely what cohomology measures. We give a brief introduction to Čech cohomology and show how a well-known auditory illusion, the [Shepard tone](https://en.wikipedia.org/wiki/Shepard_tone), works by the same principles discussed by Penrose.

## Čech cohomology

Let $X$ be a topological space and $\mathscr{U} = \{U_i\}_{i\in I}$ be an open cover of $X$. We can build a simplicial complex $\mathrm{N}(\mathscr{U})$ out of $\mathscr{U}$ by imagining the open sets $U_i$ as "thickened" vertices, as follows. Let $\mathrm{N}_0(\mathscr{U})$ be the set of all $1$-tuples $[U_i]$ for $i \in I$, which we call _vertices_ or _$0$-simplices_. Intuitively, two vertices $[U_i]$ and $[U_j]$ bound a "line segment" or a _$1$-simplex_ $[U_i, U_j]$ if $U_i$ and $U_j$ have nonempty intersection. Continuing, we say that three $1$-simplices $[U_i, U_j]$, $[U_j, U_k]$, $[U_k, U_i]$ bound a "triangle" or a _$2$-simplex_ if $U_i \cap U_j \cap U_k \neq \varnothing$. In general, we may define the set of _$k$-simplices_

$$
\mathrm{N}_{k}(\mathscr{U}) = \left\{ (U_{0}, \ldots, U_{k}) \in \mathscr{U}^{k+1} \bigm| \bigcap_{i=0}^{k} U_i \neq \varnothing \right\}.
$$

We call $\mathrm{N}(\mathscr{U}) = \bigcup_{k = 0}^{\infty} \mathrm{N}_k(\mathscr{U})$ the _nerve complex_ of $\mathscr{U}$. Define partial boundary maps $\partial_{k, i} \colon \mathrm{N}_k(\mathscr{U}) \to  \mathrm{N}_{k-1}(\mathscr{U})$ by

$$
\partial_{k, i}([U_0, \ldots, U_k]) = [U_0, \ldots, \widehat{U_i}, \ldots, U_k]
$$

where $\widehat{\,\, \cdot \,\,}$ signifies removal of an open set. As a direct consequence of our construction, every $2$-simplex $[U_i, U_j, U_k]$ is "bounded" by three $1$-simplices $[U_i, U_j]$, $[U_i, U_j]$, and $[U_i, U_k]$, which are in turn bounded a total of six $0$-simplices (counting duplicates), as demonstrated below.

<div>
  <tikz path="boundary" desktop="4" mobile="3"></tikz>
</div>

Notice that each $0$-simplex $[U_i]$ is counted twice, since the $1$-simplices bounding $[U_i, U_j, U_k]$ join together at the vertices. This suggests that by appropriately giving each simplex in the boundary a "sign coefficient" and summing them together, we may make the double boundary of a simplex vanish. To formalize this idea, we consider the space of _Čech $k$-chains_ $\v{\mathrm{C}}_k(\mathscr{U}) = \mathbb{Z}\mathrm{N}_k(\mathscr{U})$ formed by all finite formal combinations of simplices with integer coefficients. Then we may define (oriented) boundary maps

$$
\partial_{k} \colon \v\mathrm{C}_{k}(\mathscr{U}) \to \v\mathrm{C}_{k-1}(\mathscr{U}); \quad \quad \partial_k ([U_0, \ldots, U_{k}]) = \sum_{i=0}^{k} (-1)^{i} \partial_{k,i} ([U_0, \ldots, U_k]).
$$

One can then check that these choice of coefficients correctly eliminates the duplicate second boundaries. In other words, $\partial_{k} \circ \partial_{k+1} = 0$, so $\v\mathrm{C}_\bullet(\mathscr{U})$ forms a _chain complex_.

### Čech cochains

Recall that a _presheaf_ of abelian groups on a topological space $X$ is a functor $\mathscr{F} \colon \mathbf{Open}(X) \to \mathbf{Ab}$. In other words, $\mathscr{F}$ assigns to every open set $U \subseteq X$ an abelian group $\mathscr{F}(U)$ of _sections_, and for every inclusion $V \subseteq U$ of open sets, there is a _restriction morphism_ $\operatorname{res}_{U, V} \colon \mathscr{F}(U) \to \mathscr{F}(V)$ which takes a section over $U$ and restricts it to a section over $V$. A simple example of a presheaf of abelian groups is given by the sheaf $\mathrm{C}(-, \mathbb{R})$ of continuous real-valued functions on a space $X$. Here, addition of sections is just given by pointwise addition of functions, and restriction is given by the usual defintion of function restriction.

Given a presheaf of abelian groups $\mathscr{F}$, we may define a _Čech $k$-cochain_ with coefficients in $\mathscr{F}$ to be a map which assigns each $k$-simplex $\sigma \in \mathrm{N}_k(\mathscr{U})$ to a section $f(\sigma) \in \mathscr{F}(|\sigma|)$, where $|\sigma|$ is the intersection of all open sets in the simplex. This extends to a homomorphism

$$
f \colon \v\mathrm{C}_{k}(\mathscr{U}) \to \prod_{\sigma \in \mathrm{N}_k(\mathscr{U})} \mathscr{F}(|\sigma|),
$$

which we also refer to as a $k$-cochain. These form an abelian group $\v\mathrm{C}^k(\mathscr{U}, \mathscr{F})$ and between these we have similarly defined _coboundary maps_

$$
\delta_{k} \colon \v\mathrm{C}^{k}(\mathscr{U}, \mathscr{F}) \to \v\mathrm{C}^{k+1}(\mathscr{U}, \mathscr{F}); \quad \quad (\delta_kf) (\sigma) = \sum_{i=0}^{k+1} (-1)^{i} f(\partial_{k+1, i}\sigma)|_{|\sigma|},
$$

where $\cdot|_{|\sigma|}$ denotes the restriction of any of the above sections to the common support $|\sigma|$. To define this for all integers, for $k < 0$ we set $\v\mathrm{C}^{k}(\mathscr{U}, \mathscr{F}) = 0$. As before, one can also check that $\delta_{k} \circ \delta_{k - 1} = 0$, so these groups form a _cochain complex_. We say that cochains in the image of $\delta_k$ are _$k$-coboundaries_ and cochains in the kernel of $\delta_k$ are _$k$-cocycles._ Then the quotient

$$
\v\mathrm{H}_k(\mathscr{U}, \mathscr{F}) \overset{\rm def}{=} \frac{\ker \delta_k}{\operatorname{im} \delta_{k-1}},
$$

is the _$k$th Čech cohomology group_ of $X$ with respect to the open cover $\mathscr{U}$ and values in $\mathscr{F}$. It will be non-trivial when there exist $k$-cocycles which are not equal to the coboundary of any $(k-1)$-cocyle.

We can describe low-dimensional cocycles and coboundaries as follows. A $0$-simplex is just determined by an open set $U \in \mathscr{U}$, and so a $0$-cochain just assigns a section in $\mathscr{F}(U)$ over each open set $U \in \mathscr{U}$. The coboundary of a $0$-cochain $f$ is given by the $1$-cochain

$$
(\delta f)([U, V]) = f([U])|_{U \cap V} - f([V])|_{U \cap V}.
$$

In other words, $\delta f$ _compares_ the sections over $U_0$ and $U_1$ on their common intersection $U_0 \cap U_1$. By definition, the condition for $f$ to be a cocycle is that $\delta f = 0$, which states that the sections given by $f$ must all agree on their common intersections. In principle, this means that they can be "glued" together to form a global section on $X$ (however, since $\mathscr{F}$ is only a presheaf, we do not know that such an object is actually a section). On the other hand $\v\mathrm{C}^{-1}(\mathscr{U}, \mathscr{F}) = 0$, so there are no nontrivial $0$-coboundaries. It follows that when $\mathscr{F}$ is a sheaf, we have $\v\mathrm{H^0}(\mathscr{U}, \mathscr{F}) \cong \mathscr{F}(X)$.

A $1$-simplex is given by a pair of intersecting open sets, so a $1$-cochain assigns for each pair $[U, V]$ a section in $\mathscr{F}(U \cap V)$. The coboundary of a $1$-cochain $g$ is given by the $2$-cochain

$$
(\delta g)([U, V, W]) = g([V, W])|_{U \cap V \cap W} - g([U, W])|_{U \cap V \cap W} + g([U, V])|_{U \cap V \cap W}.
$$

Intuitively, this evaluates $g$ on the "triangle" formed by taking the boundary of the $2$-simplex $[U, V, W]$. If $g$ is a $1$-cocyle, then this vanishes, which implies that evaluating $g$ on the "path" formed by $1$-simplices $[U, V]$ and $[V, W]$ is the same as evaluating $g$ on the path from $U$ to $W$. In other words,

$$
g([U, W])|_{U \cap V \cap W} = g([U, V])|_{U \cap V \cap W} + g([V, W])|_{U \cap V \cap W},
$$

which is commonly called the _cocycle condition_.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example.** Let $X$ be a manifold and $\pi \colon L \to X$ be a real line bundle on $X$ with a trivializing open cover $\mathscr{U} = \{U_i\}_{i \in I}$. Then for each $i \in I$ there exists a chart $\phi_i \colon \pi^{-1}(U_i) \to U_i \times \mathbb{R}$, and for any two indices $i, j \in I$ such that $U_i \cap U_j$, the transition map is of the form

$$
\tau_{ji} = \phi_{j} \circ \phi_i^{-1} \colon (U_i \cap U_j) \times \mathbb{R} \to (U_j \cap U_i) \times \mathbb{R}; \quad \tau_{ij}(x, v) = \Big(x, [g_{ij}(x)] (v)\Big),
$$

where $g_{ij} \colon U_i \cap U_j \to \mathrm{GL}(1, \mathbb{R})$ is a continuous function. One may check that these functions satisfy the cocycle condition $g_{ki} = g_{kj} \cdot g_{ji}$ where defined. Hence, the $1$-cochain $g$, with values in the sheaf of continuous $\mathrm{GL}(1, \mathbb{R})$-valued functions, defined by $g([U_i, U_j]) = g_{ij}$ is a $1$-cocycle.

If $X = \mathbb{S}^1$ and $L$ is the Möbius strip, then we may cover the circle by two intervals $U$ and $V$, such that their intersection $U \cap V$ becomes a disjoint union of two intervals $I$ and $J$. Moreover, we may choose charts such that $g_{UV} = +1$ on $I$ and $g_{UV} = -1$ on $J$, with the change in sign representing the $180^\circ$ twist throughout the strip.

<div>
  <tikz path="circle_cover" desktop="1.5" mobile="1"></tikz>
</div>

Suppose, for the sake of contradiction, that $g = \delta f$ for some $0$-cochain $f$. Then, without loss of generality, we can take $f([U]) = 1$, which implies $f([V])$ is positive on $I$ and negative on $J$. By continuity, this implies that $f([V])$ must vanish at some point in $V$, which is disallowed as $0 \not \in \mathrm{GL}(1, \mathbb{R})$. It follows that $\v{\mathrm{H}}^1(\mathscr{U}, \mathscr{F})$ is nontrivial.

</div>

## Shepard tones

A Shepard tone is an auditory illusion consisting of a periodic tone whose pitch appears to rise or fall indefinitely. The illusions works by exploiting the manner in which we perceive _pitch color_ from a combination of raw frequencies.

A pure tone is simply a sinusoidal pressure wave $\rho \colon \mathbb{R} \to \mathbb{R}$ of the form $\rho(t) = A\sin(ft + \phi)$. Perceptually, pure tones with frequencies $f$ and $2f$ are thought of as having the same "color". In common musical terms, we say that the two pure tones are separated by an octave. For example, in standard tuning the note $\mathrm{A}_4$ is defined to be $440 \, \mathrm{Hz}$, and the note $\mathrm{A}_5$, which is at $880\,\mathrm{Hz}$, sounds the "same", even though they have different frequencies. This partitions the set of pure frequencies, denoted by $\mathbf{F} = \mathbb{R}_{>0}$, into _pitch classes_ $[f] = \{ 2^n f\mid n \in \mathbb{Z} \}$, which we denote by the quotient $\mathbf{P} = \mathbf{F}/{\sim}$.

In nature, a pure tone by itself is almost never encountered. Instead, they are often produced along with a set of _overtones_, which have frequencies at rational multiples of a lowest _fundamental frequency_. Our brains detect this fundamental frequency, which determines a single pitch color for the tone, despite being made up of a combination of different frequencies. A Shepard tone consists of an infinite superposition of tones separated by octaves (with decaying amplitudes), so that there is no one true fundamental frequency; such a tone can not be canonically modeled by any point in $\mathbf{F}$. Despite this, the brain still makes an arbitrary choice, lifting a point $p \in \mathbf{P}$ to a frequency $f \in \mathbf{F}$. A continuously changing Shepard tone $\gamma \colon I \to \mathbf{P}$ is lifted to a continuous curve $\overline{\gamma} \colon I \to \mathbf{F}$.

### The ambiguity group

Write $\mathbb{S}^1 = \mathbb{R}/\mathbb{Z}$ and let $\gamma \colon \mathbb{S}^1 \to \mathbf{P}$ be the periodic Shepard tone given by $\gamma(t) = [2^t]$. If $I \subseteq \mathbb{S}^1$ is an open interval, then a partial lift $\widetilde{\gamma} \colon I \to \mathbf{F}$ is completely determined by its value on a single point $t_0 \in I$. If $\alpha$ and $\beta$ are two lifts of $\gamma|_{I}$, then for all $t \in I$,

$$
\log_{2} \alpha(t) - \log_2 \beta(t) = \log_{2} \alpha(t_0) - \log_2 \beta(t_0) \in \mathbb{Z}.
$$

In other words, the ambiguity in the lift of $\gamma|_{I}$ is determined by a single integer. Two observers listening to $\gamma|_I$ may perceive two different frequency curves, but they must "differ" by an integer. This is what Penrose refers to as the _ambiguity group_, which acts on the set possible observations, or lifts, of $\gamma|_I$. Formally, since $\mathbf{F} \to \mathbf{P}$ is a principal $\mathbb{Z}$-bundle, each fiber is a homogeneous $\mathbb{Z}$-space, for which subtraction is defined. Then the ambiguity group of an open set $U \subsetneq \mathbb{S}^1$ is defined to be

$$
\mathscr{A}(U) = \Big\{ \log_2 \alpha - \log_2 \beta \bigm| \alpha \text{ and } \beta \text{ are lifts of } \gamma|_{U} \Big\}.
$$

For example, if $U$ is the disjoint union of two intervals, then $\mathscr{A}(U) \cong \mathbb{Z} \times \mathbb{Z}$, since a lift is determined by a single point in each interval. If a lift exists over $U$, then $\mathscr{A}(U)$ is the set of locally constant functions $U \to \mathbb{Z}$. Assigning the zero group for $U = X$, this forms a presheaf of abelian groups on $\mathbb{S}^1$.

### Cocycles and coboundaries

Let $\mathscr{U} = \{U_i\}_{i \in I }$ be an open covering of $\mathbb{S}^1$ by subintervals such that there do not exist any triple intersections consisting of distinct open sets. For example, we may cover $\mathbb{S}^1$ by two intervals, as done in the previous example. Now, imagine that a listener focuses on each interval $U_i$ separately, locally observing a lift $\gamma_i = \gamma|_{U_i}$ (which does not necessarily have to agree with neighboring lifts). This defines a $1$-cochain $s \in \v\mathrm{C}^1(\mathscr{U}, \mathscr{A})$ given by $s([U_i, U_j]) = \log_2 \gamma_j|_{U_i \cap U_j} - \log_2 \gamma_i|_{U_i \cap U_j}$. Since every $2$-simplex $[U_i, U_j, U_k]$ can be assumed to be of the form $[U_i, U_i, U_j]$ without loss of generality, $s$ must be a cocycle, since

$$
(\delta s) ([U_i, U_i, U_j]) = s([U_i, U_j]) - s([U_i, U_j]) + s([U_i, U_i])|_{U_i \cap U_j} = 0.
$$

Intuitively, this condition says that a listener can locally adjust parts of their observations on $U_i$ and $U_j$ by an element of the ambiguity group $\mathscr{A}(U_i \cap U_j)$ so that they agree. A natural question is if a listener can adjust each _whole_ observation on (i.e, not just on the intersections) by elements of the ambiguity groups $\mathscr{A}(U_i)$ so that the lifts all agree. Such an adjustment corresponds to a $0$-cochain $a \in \v\mathrm{C}^0(\mathscr{U}, \mathscr{A})$ with the property that

$$
\log_2 \gamma_{i}|_{U_i \cap U_j} - a([U_i])|_{U_i \cap U_j} = \log_2 \gamma_{j}|_{U_j \cap U_i} - a([U_j])|_{U_j \cap U_i}
$$

whenever $U_i$ and $U_j$ intersect. It follows that

$$
(\delta a)([U_i, U_j]) = a([U_j])|_{U_j \cap U_i} - a([U_i])|_{U_i \cap U_j} = \log_2 \gamma_{j}|_{U_i \cap U_j} - \log_2 \gamma_{i}|_{U_j \cap U_i} = s([U_i, U_j]).
$$

Hence, the individual lifts can be made to agree if and only if $s$ is a coboundary. Perceptually, this would imply that one could listen to the entire periodic Shepard tone $\gamma \colon \mathbb{S}^1 \to \mathbf{P}$ and observe a genuine _periodic_ "melody" $\gamma \colon \mathbb{S}^1 \to \mathbf{F}$. Of course, this is not the case, which can be seen intuitively by [observation](https://www.youtube.com/watch?v=u9VMfdG873E), or by the fact that $\mathbf{F} \to \mathbf{P}$ is a nontrivial principal bundle, and hence does not admit any global sections.

Alternatively, one may directly show $[s]$ is a nonzero element of the first Čech cohomology group $\v\mathrm{H}^1(\mathscr{U}, \mathscr{A})$. For example, if $\mathscr{U}$ is a covering of the circle by two intervals $U$ and $V$, then the intersection $U \cap V$ consists of two disjoint intervals, so $\mathscr{A}(U \cap V) = \mathbb{Z} \times \mathbb{Z}$. One can check that $s([U, V])$ is of the form $(k, k \pm 1)$, while $(\delta a)([U, V])$ is of the form $(k, k)$, implying that $s$ cannot be coboundary.

### Other illusions

The fact that the Shepard tone works as an illusion can be seen as a consequence of the fact that $\v\mathrm{H}^1(\mathbb{S}^1, \mathbb{Z})$ is nontrivial. In essence this is the same obstruction described by Penrose for the tribar, whose paradoxical nature is connected to the fact that $\v\mathrm{H}^1(\mathbb{S}^1, \mathbb{R}^\times)$ is nontrivial. As suggested in the conclusion of Penrose's article, it may be possible to construct more interesting visual and auditory illusions by considering more complicated ambiguity groups (for example, the [Necker cube](https://en.wikipedia.org/wiki/Necker_cube) and $\mathbb{Z}/2\mathbb{Z}$).
