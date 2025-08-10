---
title: "The homotopy extension property"
date: 2025-08-09
length: "~2500 words"
---

In this post, we discuss equivalent characterizations of the homotopy extension property of a topological pair $(X, A)$, which states that a homotopy<!--more--> between two maps from $A$ to any target space $Y$ can be extended to the entire space given prescribed "initial data" on $X$. In the preliminary chapter of Hatcher's _Algebraic Topology_, an equivalent characterization is given for pairs where $A$ is closed in terms of the existence of a certain retract. In the appendix, a more general proof of this characterization due to Strøm is given which removes this restriction on the pair.

We provide a similar proof of this characterization and specifically investigate the case where $A$ is not necessarily closed, determining an additional necessary condition on the pair for the homotopy extension property to hold. To begin, we recall the definition of the property.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Definition.** Let $(X, A) \in \mathbf{Top}_2$ be a pair of topological spaces. We say $(X, A)$ has the _homotopy extension property_ if for any space $Y$ and map $f \colon X \to Y$, a homotopy $H \colon A \times [0, 1] \to Y$ of $f|_A$ can be extended to a homotopy $\widetilde{H} \colon X \times [0, 1] \to Y$ of $f$.

</div>

The data given in the above definition consists two pieces: a map $f \colon X \to Y$ and a homotopy $H \colon A \times [0, 1] \to Y$ which agrees with $f$ after making the identification $A \cong A \times \{0\}$. By forming the pushout, we may combine this data to obtain a _single_ continuous map $X \cup_A (A \times I) \to Y$. Similarly, the inclusion $X \to X \times I$ given by $x \mapsto (x, 0)$ and the inclusion $A \times I \to X \times I$ make the diagram

<div>
<tikz path="pushout_xi" desktop="1.75" mobile="1"></tikz>
</div>

commute, which by the universal property produces a map $j \colon X \cup_A (A \times I) \to X \times I$ which is injective and has image $(X \times \{0\}) \cup (A \times I)$. With these observations, one may rephrase the homotopy extension property for the pair $(X, A)$ in terms of the pushout.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. A pair $(X, A) \in \mathbf{Top}_2$ has the homotopy extension property if and only if for any space $Y$ and map $\phi \colon X \cup_A (A \times I) \to Y$, there exists a map $\widetilde{H} \colon X \times I \to Y$ such that $\phi = \widetilde{H} \circ j$.

</div>

As one might expect, this also gives an equivalent characterization of the homotopy extension property purely in terms of the map $j$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. A pair $(X, A) \in \mathbf{Top}_2$ has the homotopy extension property if and only if $j \colon X \cup_A (A \times I) \to X \times I$ has a continuous left inverse.

</div>

_Proof._ First, suppose that the pair $(X, A)$ has the homotopy extension property. Applying the previous proposition to ${Y = X \cup_A (A \times I)}$ and $\phi = \mathrm{id}$, we find that there exists a map $\widetilde{H}$ such that $\mathrm{id} = \widetilde{H} \circ j$. Thus, $j$ has a continuous left inverse.

Conversely, suppose $j$ has a continuous left inverse, $k$. Given a space $Y$ and map $\phi \colon X \cup_A (A \times I) \to Y$, let $\widetilde{H} = \phi \circ k$. Then $\phi = \widetilde{H} \circ j$, so the homotopy extension property holds.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

As noted before, the map $j$ has image $T = (X \times \{0\}) \cup (A \times I)$, so if a continuous left inverse $k$ to $j$ exists, the composition $j \circ k \colon X \times I \to X \times I$ is a retract to the subspace $T$, which gives us a necessary condition for the homotopy extension property to hold. It turns out the existence of a retract is also _sufficient_, but proving this requires a small amount of work. We first prove this under a mild hypothesis on $A$, and then examine what happens if this hypothesis does not hold.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $(X, A) \in \mathbf{Top}_2$ and let $A$ be closed. If there exists a retract $r \colon X \times I \to (X \times \{0\}) \cup A \times I$, then the pair has the homotopy extension property.

</div>

_Proof_. We recall the [_pasting lemma_](https://en.wikipedia.org/wiki/Pasting_lemma), which states that if a space $Y$ is the union of two closed subspaces $U$ and $V$, then $Y \cong U \cup_{U \cap V} V$. Clearly, this is the case in $\mathbf{Set}$, and given another space $Z$ and maps $f \colon U \to Z$ and $g \colon V \to Z$ which agree on the intersection, the induced pushout map $f \cup_{U \cap V} g$ is continuous: for every closed set $W \subseteq Z$,

$$
(f \cup_{U \cap V} g)^{-1}(W) = f^{-1}(W) \cup g^{-1}(W),
$$

which is closed in $Y$, implying $Y$ is also the pushout in $\mathbf{Top}$. To apply the lemma, note that $A \times I$ and ${X \times \{0\}}$ are both closed in $X \times I$, so

$$
(X \times \{0\}) \cup (A \times I) \cong (X \times \{0\}) \cup_{A \times \{0\}} (A \times I) \cong X \cup_{A} (A \times I),
$$

where the first isomorphism is set-theoretically the identity and the second is via the map $(x, 0) \mapsto x$. Post-composing these isomorphisms with the retract $r$ yields a left inverse to $j \colon X \cup_{A} (A \times I) \to X \times I$. Thus, the homotopy extension property holds.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Note that the hypothesis that $A$ is closed is automatically satisfied if $X$ is Hausdorff. Indeed, $(X \times \{0\}) \cup (A \times I)$ must be a closed subspace of $X \times I$, since it is equal to the equalizer $\mathrm{eq}(\mathrm{id}, r) = \{(x, t) = r(x, t)\}$ and the product $X \times I$ is also Hausdorff. Taking a slice (say, $t = 1$) shows that $A$ must be closed.

In the "pathological" case in where $A$ is not closed, $X$ cannot be Hausdorff, so there exists a pair of points in $X$ which are not Hausdorff-separable. As it turns out, the "frontier" $\mathrm{fr}_X(A) \overset{\text{def}}{=} \mathrm{cl}_X(A) - A$ solely consists of such points, which yields a necessary condition for a retract to exist.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $(X, A) \in \mathbf{Top}_2$ and $T = (X \times \{0\}) \cup A \times I$. If there exists a retract $r \colon X \times I \to T$, then every point $b \in \mathrm{fr}_X(A)$ is Hausdorff-inseparable from some point $a \in A$ (depending on $b$).

</div>

_Proof_. Let $\pi_X \colon X \times I \to X$ be the projection onto $X$ and let $\widetilde{r} = \pi_X \circ r$. Fix some $t \in (0, 1]$ and define $\widetilde{r}_t \colon X \to X$ by $x \mapsto \widetilde{r}(x, t)$. Since $r|_{A \times I}$ is the identity, $\widetilde{r}_{t}|_{A} = \mathrm{id}$ as well. Furthermore,

$$
r\big(\mathrm{fr}_X(A) \times \{t\}\big) \subseteq \mathrm{cl}_{X \times I}\big(A \times \{t\}\big) \cap T = \big(\mathrm{cl}_{X}(A) \times \{t\}\big) \cap T = A \times \{t\},
$$

so $\widetilde{r}_t$ sends the frontier $\mathrm{fr}_X(A)$ into $A$. Let $b \in \mathrm{fr}_X(A)$, and $a = \widetilde{r}_t(b) \in A$; we show that $a$ and $b$ are inseparable. To this end, let $U$ and $V$ be open sets containing $a$ and $b$ respectively. Then $W = V \cap \widetilde{r}_t^{-1}(U)$ is a nonempty open set containing $b$, which implies $W \cap A \neq \varnothing$, since $b$ is a limit point of $A$. Thus,

$$
\varnothing \subsetneq W \cap A = V \cap \big(\widetilde{r}_t^{-1}(U) \cap A\big) = V \cap \widetilde{r}_t|_{A}^{-1}(U) \subseteq V \cap U,
$$

so $a$ and $b$ are inseparable.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

For the sake of visualization, we give an example of a pair $(X, A)$ satisfying the hypotheses of the previous proposition, where $A$ is _not_ closed. Before doing so, we make some qualitative remarks on the pair which will motivate the subsequent construction. Note that if $x$ is a frontier point, then the path $\alpha(s) = \widetilde{r}(x, s)$ lies in $A$ for $s \in (0, 1]$. Fix some $t \in (0, 1]$ and let $\beta = \widetilde{r}_t \circ \alpha$. Then $\alpha|_{(0, 1]} = \beta|_{(0, 1]}$, but $\beta(0) = \alpha(t)$. If the path $\alpha$ were _injective_, this would imply the image of the path could be set-theoretically identified with the unit interval. Transporting the subspace topology on the path to the interval therefore yields a topology $\tau$ on $[0,1]$ with the property that the maps

$$
p_t \colon ([0, 1], \tau_{\rm standard}) \to ([0, 1], \tau); \quad \quad \quad p_t(s) =
\begin{cases}
t &\text{if } s = 0 \\
s &\text{if } s \neq 0
\end{cases}
$$

are continuous for all $t \in [0, 1]$. Here, the domain has the standard topology, and the codomain has topology $\tau$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example**. Let $X = ([0, 1], \tau)$ where $\tau$ is the _initial segment topology_ $\,\tau = \big\{\varnothing, [0,1]\big\} \cup \big\{[0, s) \mid s \in [0, 1]\big\}$, and let $A = (0, 1]$. We define a retract $r \colon X \times I \to (X \times \{0\}) \cup (A \times I)$ by

$$
r(s, t) =
\begin{cases}
(t, t) &\text{if } s = 0 \\
(s, t) &\text{if } s \neq 0
\end{cases}.
$$

Continuity only needs to be checked for each point on $\{0\} \times I$. Given a point $(0, t)$ and basic open neighborhood $V = [0, t + \epsilon_1) \times (t - \epsilon_2, t + \epsilon_2)$ of its image, we find a basic open neighborhood $U$ of $(0, t)$ which maps into $V$. To do this, take the minimum $\delta = \min(\epsilon_1, \epsilon_2)$ and let $U = [0, t + \delta) \times (t - \delta, t + \delta)$.

<div>
<tikz path="example" desktop="2" mobile="1"></tikz>
</div>

One easily checks that $r(U) \subseteq V$, so $r$ is indeed continuous. Furthermore, one can explicitly verify the statement of the previous proposition: the point $0 \in \mathrm{bd}_X(A)$ is Hausdorff-inseparable from every point in $A$.

</div>

With this picture in mind, we finally remove the condition that $A$ has to be closed to give a sufficient (and necessary) condition for the homotopy extension property to hold.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $(X, A) \in \mathbf{Top}_2$ and $T = (X \times \{0\}) \cup A \times I$. If there exists a retract $r \colon X \times I \to T$, then $(X, A)$ has the homotopy extension property.

</div>

_Proof_. In order to use the previous argument, we show that $(X \times \{0\}) \cup (A \times I) \cong (X \times \{0\}) \cup_{A \times \{0\}} (A \times I)$ via the identity map. Since $j$ is continuous, the pushout topology is at least as fine as the subspace topology. Thus, we only have to show that the subspace topology is at least as fine as the pushout topology.

Let $D \subseteq T$ be closed in the pushout topology; we need to show that it is also closed in the subspace topology. To begin, decompose $D$ into the subsets $D_0 = D \cap (X \cap \{0\})$ and $D_A = D \cap (A \cap I)$, which are closed in $X \times \{0\}$ and $A \times I$ respectively. We show that each term of the closure

$$
\mathrm{cl}_{T}(D) = \mathrm{cl}_{X \times I}(D) \cap T = \big(\mathrm{cl}_{X \times I}(D_0) \cap T \big) \cup \big(\mathrm{cl}_{X \times I}(D_A) \cap T \big)
$$

is contained in $D$.

1. Since $D_0$ is closed in $X \hspace{-0.6pt} \times \hspace{-0.6pt} \{0\}$, which is closed in $X \times I$, we have $\mathrm{cl}_{X \times I}(D_0)\hspace{-0.6pt} = \hspace{-0.6pt} D_0$. Thus, the first term lies in $D$.

2. First, write

   $$
   \mathrm{cl}_{X \times I}(D_A) \cap T = \underbrace{\Big(\mathrm{cl}_{X \times I}(D_A) \cap (X \times \{0\})\Big)}_{\overset{\text{def}}{=} \; Z} \cup \Big(\mathrm{cl}_{X \times I}(D_A) \cap (A \times I)\Big).
   $$

   Since $D_A$ is closed in $A \times I$, we have $\mathrm{cl}_{X \times I}(D_A) \cap (A \times I) = D_A$, so the second term lies in $D$. The first term is more difficult to handle; this is where the retract mentioned in the hypotheses is finally used. To begin, note that

   $$
   \mathrm{cl}_{X \times I}(D_A) \cap (X \times \{0\}) \subseteq \mathrm{cl}_{X \times I}(A \times I) \cap (X \times \{0\}) = \mathrm{cl}_{X}(A) \times \{0\},
   $$

   which implies $Z \subseteq \mathrm{cl}_X(A) \times \{0\}$. Furthermore,

   $$
   Z \cap (A \times \{0\}) = \mathrm{cl}_{X \times I}(D_A) \cap (A \times \{0\}) = \mathrm{cl}_{X \times I}(D_A) \cap (A \times I) \cap (X \times \{0\}) = D_A \cap (X \times \{0\}),
   $$

   which implies $Z \cap (A \times \{0\}) \subseteq D_0$. Now, let $\pi_X \colon X \times I \to X$ be the projection onto $X$ and define $\widetilde{r} = \pi_X \circ r$. To use the retract, we define an auxiliary map which "extends" each of the maps $x \mapsto \widetilde{r}(x, s)$ to all of $X \times I$. Specifically, define $\rho \colon X \times I \times I \to X \times I$ by $\rho\big((x, t), s\big) = \big(\widetilde{r}(x, s), t\big)$.

   Note that $\rho|_{D_A \times I}$ is just the projection onto the first factor, so $\rho(\mathrm{cl}_{X \times I}(D_A) \times [0,1]) \subseteq \mathrm{cl}_{X \times I}(D_A)$. Applying the definition, we also obtain $\rho\big((X \times \{0\}) \times [0, 1]\big) \subseteq X \times \{0\}$. Thus, by taking the intersection and using the fact that $Z \subseteq \mathrm{cl}_X(A) \times \{0\}$, we find

   $$
   \rho\big(Z \times (0, 1]\big) \subseteq Z \cap \rho\big(\mathrm{cl}_X(A) \times \{0\} \times (0, 1]\big) = Z \cap \Big(\widetilde{r}\big(\mathrm{cl}_{X}(A) \times (0, 1]\big) \times\{0\}\Big).
   $$

   Since the retract fixes each slice $A \times \{t\}$, we have for all $t \in (0, 1]$,

   $$
   r\big(\mathrm{cl}_{X}(A) \times \{t\}\big) =  r\big(\mathrm{cl}_{X \times I}(A \times \{t\})\big) \subseteq \mathrm{cl}_{X \times I}\big(A \times \{t\}\big) \cap T = \big(\mathrm{cl}_{X}(A) \times \{t\}\big) \cap T = A \times \{t\}.
   $$

   It follows that $\rho\big(Z \times (0, 1]\big) \subseteq Z \cap (A \times \{0\}) \subseteq D_0$. Finally, note that $\rho|_{Z \times \{0\}}$ is just the projection onto the first factor, so

   $$
   Z = \rho(Z \times \{0\}) \subseteq \rho\big(Z \times [0, 1]\big) =  \rho\Big(\mathrm{cl}_{X \times I \times I}\big(Z \times (0, 1]\big) \Big) \subseteq \mathrm{cl}_{X \times I}\Big(\rho\big(Z \times (0, 1]\big)\Big) \subseteq \mathrm{cl}_{X \times I}(D_0) = D_0.
   $$

   Thus $Z \subseteq D$, so the entire term $\mathrm{cl}_{X \times I}(D_A) \cap T$ lies in $D$.

It follows that $D$ is closed in $T$, so the subspace topology is at least as fine the pushout topology. Thus, the two topologies are equal, and the rest of the argument is carried out as before.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>
