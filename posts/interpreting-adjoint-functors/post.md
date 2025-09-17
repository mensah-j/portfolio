---
title: "Interpreting adjoint functors"
date: 2025-09-17
length: "∼4000 words"
---

The notion of an adjunction between categories is a fundamental idea in category theory whose utility is so great that it appears in virtually every field of mathematics. Roughly speaking, an adjunction is<!--more--> a weaker form of equivalence between two categories, often allowing one to translate problems in one category to problems in another category. In this post, we provide multiple equivalent interpretations of adjunctions, and demonstrate how they are all interrelated.

To start, we give the "standard" definition of adjunction.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Definition I.** Let $F \colon \mathscr{C} \to \mathscr{D}$ and $G \colon \mathscr{D} \to \mathscr{C}$ be a pair of functors. If there exists a natural isomorphism

$$
\mathrm{Hom}_{\mathscr{D}}(F[-], -) \cong \mathrm{Hom}_{\mathscr{C}}(-, G[-]),
$$

between functors $\mathscr{C}^{\mathrm{op}} \times \mathscr{D} \to \mathbf{Set}$, then we say that $F$ is a _left adjoint_ of $G$ and that $G$ is a _right adjoint_ of $F$, and write $F \dashv G$.

</div>

Intuitively, this definition states that morphisms $F(X) \to Y$ are equivalent to morphisms $X \to G(Y)$. Typically, arguments leveraging the fact that two functors are adjoint will make use of this standard definition. For the remainder of the article, we discuss three equivalent alternative definitions of adjunction, each one providing a unique perspective on what it means for a pair of functors to be mutually adjoint.

While the primary definition given above defines adjunction as a binary relation, it turns out that if a functor has a right or left adjoint, then that adjoint is determined up to natural isomorphism. Thus, it is perfectly acceptable to define what it means for a functor to be a left (or right) adjoint, and later show how to recover the corresponding adjoint functor. Two of the interpretations we discuss are these so called "asymmetric" ways to formulate adjunction:

1. _Representability_. Roughly speaking, a functor has an adjoint if and only if a certain family of presheafs (or copresheafs) defined by the functor consists only of representable functors. The role of the adjoint in this viewpoint is to describe the representing object of each presheaf or copresheaf.

2. _Approximations_. In certain cases, one might describe a morphism in a category as a way of approximating one object by another. A functor has an adjoint if for every object in the target category, one can find a "universal" approximation of it by an object in the image of the functor. The role of the adjoint in this viewpoint is describe which objects in the source category produce these approximations.

For a given functor $F \colon \mathscr{C} \to \mathscr{D}$, suppose $G \colon \mathscr{D} \to \mathscr{C}$ is the "solution" to the representability or approximation problem posed by $F$. As a consequence of the symmetry inherent the original definition, one can show that $F$ must also be the solution to the "dual" representability or approximation problem posed by $G$. It turns out that this phenomenom implies a type of idempotence in the construction of optimal solutions, which may be expressed as a pair of equations referred to as the _counit-unit equations_. These equations yield a third equivalent formulation of adjunction.

## Representability

For an object $Y \in \mathscr{D}$ the representable presheaf $\mathrm{Hom}_{\mathscr{D}}(-, Y)$ describes all the ways objects in $\mathscr{D}$ can fit their structure into $Y$. Part of the Yoneda lemma implies that this presheaf "encodes" all the data of $Y$; in particular, an isomorphism of representable presheaves corresponds an to isomorphism of their representing objects. Precomposing by $F \colon \mathscr{C} \to \mathscr{D}$, we obtain a presheaf $\mathrm{Hom}_{\mathscr{D}}(F[-], Y)$ describing all the ways objects in $\mathscr{C}$ can fit their structure into $Y$ via $F$. A natural question to ask is if this functor is also representable: does this presheaf encode the information of some object $X \in \mathscr{C}$? Note that this representing object, if it exists, is determined up to isomorphism by the Yoneda lemma.

Similarly, one may also pose the "dual" representability problem: for $X \in \mathscr{C}$, when is the copresheaf $\mathrm{Hom}_{\mathscr{D}}(X, G[-])$ representable? As we show shortly, the data of an adjunction is equivalent to the existence of solutions to either representability problem. First, note that an adjunction $\Psi$ already provides natural isomorphisms

$$
\begin{align*}
\theta_Y \colon \mathrm{Hom}_{\mathscr{D}}(F[-], Y) \to \mathrm{Hom}_{\mathscr{C}}(-, GY) \\
\xi_X \colon \mathrm{Hom}_{\mathscr{C}}(X, G[-]) \to \mathrm{Hom}_{\mathscr{D}}(FX, -)
\end{align*}
$$

given by $\theta_{Y, X}(\phi) = \Psi_{X, Y}(\phi)$ and $\xi_{Y, X}(\psi) = \Phi_{X, Y}(\psi)$, so an adjunction yields solutions to both representability problems. Before proving the converse implication, we establish some helpful notation that will be used throughout the rest of the article:

- Suppose $H \colon \mathscr{C}^{\text{op}} \to \mathbf{Set}$ is a presheaf. Given $s \in H(X)$ and morphism $f \colon X' \to X$, we say that $f^*s \overset{\text{def}}{=} [H(f)](s)$ is the _pullback_ of $s$ along $f$.

- Suppose $H \colon \mathscr{D} \to \mathbf{Set}$ is a copresheaf. Given $s \in H(Y)$ and morphism $g \colon Y \to Y'$, we say that $g_*s \overset{\text{def}}{=} [H(g)](s)$ is the _pushforward_ of $s$ along $g$.

- Suppose $H \colon \mathscr{C}^{\text{op}} \times \mathscr{D} \to \mathbf{Set}$ be a profunctor. Given $s \in H(X, Y)$ and morphisms $f \colon X' \to X$ and $g \colon Y \to Y'$, we say that

  $$
  \begin{align*}
  f^*s &\overset{\text{def}}{=} [H(f, \mathrm{id}_Y)](s),\\
  g_*s &\overset{\text{def}}{=} [H(\mathrm{id}_X, g)](s)
  \end{align*}
  $$

  are the _pullback_ and _pushforward_ of $s$ along $f$ and $g$, respectively.

With this established, we now demonstrate how a solution to the representability problem for $F$ gives rise to an adjunction.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories and $F \colon \mathscr{C} \to \mathscr{D}$ be a functor such that for all $Y \in \mathscr{D}$, the presheaf $\mathrm{Hom}_{\mathscr{D}}(F[-], Y)$ is representable. A collection of presheaf isomorphisms

$$
\Theta = \{\theta_Y \colon  \mathrm{Hom}_{\mathscr{D}}(F[-], Y) \to \mathrm{Hom}_{\mathscr{C}}(-, G_Y) \}_{Y \in \mathscr{D}}
$$

defines a functor $G_\Theta \colon \mathscr{D} \to \mathscr{C}$ by

$$
G_\Theta(Y) = G_Y; \quad \quad G_\Theta(g \colon Y \to Y') = \theta_{Y', G_Y}  \Big( g \circ \theta_{Y, G_Y}^{\,-1} (\mathrm{id}_{G_Y}) \Big),
$$

for which $F \dashv G_\Theta$. For any other collection of isomorphisms $\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}$, the functors $G_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Theta}}$ and $G_{\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}}$ are naturally isomorphic.

</div>

_Proof._ We first check that $G_{\Theta}$ is functorial. Denote the Yoneda embedding by $\text{よ} \colon \mathscr{C} \to [\mathscr{C}^{\text{op}}, \mathbf{Set}]$. Given a morphism $g \colon Y \to Y'$, consider the square (to be shown commutative)

<div><tikz path="g-functoriality-square" desktop="1.5" mobile="1">
</tikz></div>

consisting of natural transformations. By the Yoneda lemma, a morphism of presheaves $\mathrm{Hom}(-, G_Y) \Rightarrow \mathrm{Hom}(-, G_{Y'})$ is determined by where the identity section $\mathrm{id}_{G_Y}$ is mapped. But by definition,

$$
[\text{よ}(G_\Theta(g))]_{\mathrm{id}_{G_Y}} = G_\Theta(g) \circ \mathrm{id}_{G_Y} = G_\Theta(g) = \theta_{Y', G_Y}  \Big( g \circ \theta_{Y, G_Y}^{\,-1} (\mathrm{id}_{G_Y}) \Big) = \big[(\theta_{Y'} \circ \text{よ}(g) \circ \theta_Y^{-1})\big]_{\mathrm{id}_{G_Y}},
$$

so the above square commutes. Thus, if $h \colon Y' \to Y''$ is another morphism, we may paste together the corresponding squares to obtain the commutative diagram

<div><tikz path="g-functoriality-square-pasted" desktop="1.5" mobile="1">
</tikz></div>

Taking the component at $\mathrm{id}_{G_Y}$ and using the fact that $\text{よ}$ is functorial implies that $G_\Theta(h \circ g) = G_\Theta(h) \circ G_\Theta(g)$. To show that $F$ and $G_{\Theta}$ are adjoints, consider the map

$$
\Psi \colon \mathrm{Hom}_\mathscr{D}(F[-], -) \to \mathrm{Hom}_{\mathscr{C}}(-, G[-]); \quad \quad \Psi_{X\hspace{-1pt},\,Y}(\phi) = \theta_{Y\!,\, X}(\phi).
$$

To show this is a natural isomorphism, it suffices to show that $\Psi$ is natural in the second argument, since $\theta_Y$ is already a natural isomorphism. Indeed,
for any morphism $g \colon Y \to Y'$, we have

$$
g_*\Psi_{X, Y'}(\phi) = G_\Theta(g) \circ \theta_{Y, X}(\phi) =  \theta_{Y, X}(g \circ \phi) = \Psi_{X, Y}(g_* \phi),
$$

where the middle equalities follow from the commutativity of the above square. Finally, we show that any other collection $\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt} = \{\widetilde{\theta}_Y\}_{Y \in \mathscr{\mathscr{D}}}$ yields a functor $G_{\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}}$ naturally isomorphic to $G_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Theta}}$. By the Yoneda lemma, the isomorphism

$$
\widetilde{\theta}_{Y} \circ \theta_Y^{-1} \colon \mathrm{Hom}_\mathscr{C}(-, G_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Theta}} Y) \overset{\cong}{\longrightarrow}  \mathrm{Hom}_\mathscr{C}(-, G_{\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}} Y)
$$

is induced by a unique isomorphism $\tau_Y \colon G_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Theta}}(Y) \to G_{\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}}(Y)$ via the Yoneda embedding $\text{よ} \colon \mathscr{C} \mapsto [\mathscr{C}^{\text{op}}, \mathbf{Set}]$. It follows that the diagram

<div><tikz path="g-isomorphism-collection-square" desktop="1.55" mobile="1">
</tikz></div>

commutes. Taking the identity component implies that $\tau \colon G_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Theta}} \Rightarrow G_{\hspace{1pt}\widetilde{\hspace{-1pt}\Theta\hspace{-1pt}}\hspace{1pt}}$ is a natural isomorphism.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

As one should expect, one may recover an adjunction between $\mathscr{C}$ and $\mathscr{D}$ from a solution to the "dual" representability problem for the copresheafs $\mathrm{Hom}_{\mathscr{C}}(-, G[-])$. We omit the proof as it is essentially the same as the previous argument.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories and $G \colon \mathscr{D} \to \mathscr{C}$ be a functor such that for all $X \in \mathscr{C}$, the copresheaf $\mathrm{Hom}_{\mathscr{D}}(X, G[-])$ is representable. A collection of copresheaf isomorphisms

$$
\Xi = \{\xi_X \colon  \mathrm{Hom}_{\mathscr{C}}(X, G[-]) \to \mathrm{Hom}_{\mathscr{D}}(F_X, -) \}_{Y \in \mathscr{C}}
$$

defines a functor $F_\Xi \colon \mathscr{C} \to \mathscr{D}$ by

$$
F_\Xi(X) = F_X; \quad \quad F_\Xi(f \colon X' \to X) = \xi_{X', F_X}  \Big({\xi_{X, F_X}}^{-1} (\mathrm{id}_{F_X}) \circ f\Big),
$$

for which $F_\Xi \dashv G$. For any other collection of isomorphisms $\hspace{1pt}\widetilde{\hspace{-1pt}\Xi\hspace{-1pt}}\hspace{1pt}$, the functors $F_{\hspace{4.5pt}\widetilde{\hspace{-5pt}\Xi}}$ and $F_{\hspace{0.5pt}\widetilde{\hspace{-0.5pt}\Xi\hspace{-0.5pt}}\hspace{0.5pt}}$ are naturally isomorphic.

</div>

_Proof._ Repeat the above argument, this time making use of the "contravariant" Yoneda lemma.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

## Approximations

Occasionally, morphisms in a category can be interpreted as approximations of the structure of the target by the source of the morphism, or vice versa. Given a functor $F \colon \mathscr{C} \to \mathscr{D}$ and an object $Y \in \mathscr{D}$, a natural question to ask is if there exists "universal" approximation of $Y$ by objects in the image of $F$.

To be precise, let us call a pair $(X, \phi \colon F(X) \to Y)$ a _morphism from_ $F$ _to_ $\hspace{1pt}Y$, or a _left approximation of_ $\hspace{1pt}Y$ _by_ $F(X)$. Since there is no confusion if $F$ is understood, we may call this a left approximation of $Y$ by $X$ as well. Together, these approximations form the _comma category_ $\hspace{1pt}(F \downarrow Y)$; a morphism $(X, \phi) \to (X', \phi')$ is given by a morphism $X \to X'$ which makes the triangle

<div><tikz path="morphism-comma-fy" desktop="1.5" mobile="1">
</tikz></div>

commute. The existence of a morphism $(X, \phi) \to (X', \phi')$ essentially states that $\phi'$ captures at least as much of the structure of $Y$ as $\phi$ does: by precomposing with the map induced by $X \to X'$, one may recover $\phi$ from $\phi'$, but not vice versa necessarily. This suggests that the desired "universal" left approximation should be a terminal object of $(X \downarrow F)$ if one exists; this is called a _universal morphism_ from $F$ to $Y$. In more concrete terms, a universal morphism is an object $(X_0, \phi_0)$ satisfying the following property:

- Given any morphism $\phi \colon F(X) \to Y$, there exists a unique morphism $\psi \colon X \to \hat{X}$ such that $\phi = \phi_0 \circ F(\psi)$.

As a word of caution, a universal morphism might not coincide with what one might consider the "best" approximation of $Y$. For example, if $Y = F(X)$ for some $X \in \mathscr{C}$, it is usually _not_ the case that $(X, \mathrm{id}_Y)$ is a universal morphism. Rather, one should think of a universal morphism as containing the data of all other approximations of $Y$ and nothing else. In special cases, such as when $\mathscr{C}$ and $\mathscr{D}$ are posets, these notions do coincide, as illustrated in the following example.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example**. Let $\mathscr{C}$ and $\mathscr{D}$ be posets and let $F \colon \mathscr{C} \to \mathscr{D}$ be an order-preserving map. For instance, we may take $\mathscr{C} = \mathbb{Z}$ and $\mathscr{D} = \mathbb{R}$, and let $F$ be the inclusion map.

<div><tikz path="monotone_map" desktop="2" mobile="1"></tikz></div>

Given an element $y \in \mathscr{D}$, a left approximation is given by any element $x \in \mathscr{C}$ such that $F(x) \leq_{\mathscr{D}} y$. If it exists, the universal approximation to $y$ is $x_0 = \max_{\mathscr{C}}\, \{ x \mid F(x) \leq_{\mathscr{D}} y \}$, whose image is the "best" approximation of $y$ from the left. In the example above, a universal left approximation to $y$ is given by its _floor_ $\lfloor y \rfloor \in \mathbb{Z}$.

</div>

Instead of approximating objects from the left, we may try to solve the dual problem of approximating objects from the right, given a functor $G \colon \mathscr{D} \to \mathscr{C}$ and an object $X \in \mathscr{C}$.

In this case, let us call a pair $(Y, \psi \colon X \to G(Y))$ a _morphism from_ $X$ _to_ $\hspace{1pt}G$, or a _right approximation of_ $\hspace{1pt}X$ _by_ $\,G(Y)$. Since there is no confusion if $G$ is understood, we may call this a right approximation of $X$ by $Y$ as well. Together, these approximations form the _comma category_ $\hspace{1pt}(X \downarrow G)$; a morphism $(Y, \psi) \to (Y', \psi')$ is given by a morphism $Y \to Y'$ which makes the triangle

<div><tikz path="morphism-comma-xg" desktop="1.5" mobile="1">
</tikz></div>

commute. The existence of a morphism $(Y, \psi) \to (Y', \psi')$ says that $\psi$ captures at least as much structure as $\psi'$ does: one may recover $\psi'$ from $\psi$ but not necessarily vice versa. Ths suggests the desired "universal" right approximation to $X$ should be an _initial_ object of $(X \downarrow G)$; this is called a _universal morphism from_ $X$ _to_ $G$. In more concrete terms, a universal morphism $(Y_0, \psi_0)$ satisfies the following property:

- Given any morphism $\psi \colon X \to G(Y)$, there exists a unique morphism $\phi \colon Y_0 \to Y$ such that $\psi = G(\phi) \circ \psi_0$.

These viewpoints offer another way to define adjunction equivalent to the previous formulation in terms of representability.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories, $F \colon \mathscr{C} \to \mathscr{D}$ be a functor, and let $Y \in \mathscr{D}$. The presheaf $\mathrm{Hom}_\mathscr{D}(F[-], Y)$ is representable if and and only if there exists a universal morphism from $F$ to $Y$.

</div>

_Proof_. To begin, suppose that $\mathrm{Hom}_\mathscr{D}(F[-], Y)$ is represented by some $X_0 \in \mathscr{C}$. Then there exists a natural isomorphism

$$
\theta \colon \mathrm{Hom}_\mathscr{D}(F[-], Y) \overset{\cong}{\longrightarrow} \mathrm{Hom}_{\mathscr{C}}(-, X_0)
$$

which must map some morphism $\phi_0 \colon F(X_0) \to Y$ to the identity $\mathrm{id}_{X_0}$. We show that $(X_0, \phi_0)$ is a universal morphism from $F$ to $Y$. For this, it suffices to show that for every morphism $\phi \colon F(X) \to Y$, there exists a unique map $\psi \colon X \to X_0$ such that the diagram

<div><tikz path="degenerate-triangle-pullback" desktop="1.5" mobile="1"></tikz></div>

commutes. The leftmost "degenerate" triangle in the diagram states that $\psi \in \mathrm{Hom}_\mathscr{C}(X, X_0)$ is the _pullback_ of $\mathrm{id}_{X_0}$ via $\psi$. Since $\theta$ is a presheaf morphism, $\theta_X^{-1}(\psi)$ is the pullback of $\phi_0$ via $\psi$ as well, and the rightmost triangle in the diagram states that this pullback is equal to $\phi$. It follows that $\psi = \theta_X(\phi)$ is uniquely determined.

Conversely, suppose that there exists a universal morphism $\phi_0 \colon F(X_0) \to Y$. Then for every morphism $\phi \colon F(X) \to Y$, there exists a unique morphism $(X, \phi) \to (X_0, \phi_0)$ induced by a unique morphism $\theta_X(\phi) \colon X \to X_0$. This defines a map

$$
\theta \colon \mathrm{Hom}_\mathscr{D}(F[-], Y) \to \mathrm{Hom}_{\mathscr{C}}(-, X_0)
$$

which we show is a presheaf isomorphism. By definition, each component of $\theta$ is an isomorphism, since for every morphism $\phi \colon F(X) \to Y$, there exists a unique morphism $\psi \colon X \to X_0$ such that $\theta_X(\phi) = \psi$.

To show that $\theta$ is a presheaf morphism, let $f \colon X' \to X$ and $\phi \in \mathrm{Hom}_\mathscr{D}(FX, Y)$ and consider the diagram

<div><tikz path="theta-natural-isomorphism" desktop="1.5" mobile="1"></tikz></div>

It follows that $\theta_{X'}(f^* \phi) = \theta_X(\phi) \circ f = f_* \theta_X(\phi)$, so $\theta$ respects pullbacks. Thus, $\theta$ is an presheaf isomorphism.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

The above argument shows that a representing object of the presheaf $\mathrm{Hom}_{\mathscr{D}}(F[-], Y)$ is the same as a universal left approximation to $Y$. Thus, by an earlier proposition, the approximation problem can be solved for every $Y \in \mathscr{D}$ if and only if there is a _right_ adjoint functor $G \colon \mathscr{D} \to \mathscr{C}$. If so, the solution for $Y$ will be given by $G(Y)$.

Furthermore, as one should expect, one obtains an analogous result for the right approximation problem. As such, we omit the proof of the following proposition.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories, $G \colon \mathscr{D} \to \mathscr{C}$ be a functor, and let $X \in \mathscr{C}$. The copresheaf $\mathrm{Hom}_\mathscr{C}(X, G[-])$ is representable if and and only if there exists a universal morphism from $X$ to $G$.

</div>

_Proof._ Reverse all the arrows in the previous argument and replace "pullback" with "pushforward".

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Similarly, the proof of this proposition implies that representing object of the copresheaf $\mathrm{Hom}_{\mathscr{D}}(X, G[-])$ is the same as a universal right approximation to $X$. Thus, by the same earlier proposition, the approximation problem can be solved for every $X \in \mathscr{C}$ if and only if there is a _left_ adjoint functor $F \colon \mathscr{C} \to \mathscr{D}$. If so, the solution for $X$ will be given by $F(X)$.

## The counit-unit equations

As discussed before, for an adjunction $F \dashv G$, there is a certain symmetry between the representability or approximation problems posed by $F$ and $G$, which we paraphrase as follows:

> If $\,F$ is the solution to the problem posed by $\hspace{1pt}G$, then $\hspace{1pt}G$ is the solution to the "dual" problem posed by $\hspace{1pt}F$.

To illustrate this phenomenon, consider the case where both $\mathscr{C}$ and $\mathscr{D}$ are posets and $F \colon \mathscr{C} \to \mathscr{D}$ is a left adjoint. Then the best left approximation of each element $y \in \mathscr{D}$ exists, and is equal to the maximum of all left approximations to $y$. Packaging together all these approximations yields a map $G \colon \mathscr{D} \to \mathscr{C}$ defined by $G(y) = \mathrm{max}_{\mathscr{C}} \{x \mid F(x) \leq y\}$. Note that $G$ is also order-preserving: if $y \leq_{\mathscr{D}} y'$, then

$$
G(y) = \max_{\mathscr{C}} \{ x \mid F(x) \leq_{\mathscr{D}} y\} \leq  \max_{\mathscr{C}} \{ x \mid F(x) \leq_{\mathscr{D}} y'\} = G(y').
$$

Furthermore, $G$ is a right adjoint. For $x \in \mathscr{C}$, the set of all right approximations to $x$ is $\{y \mid x \leq_{\mathscr{C}} G(y)\}$. However, $G(y)$ was _defined_ to be the best left approximation to $y$, which means anything less than that is _just_ a left approximation to $y$. Explicitly, we have

$$
\{y \mid x \leq_{\mathscr{C}} G(y)\} = \Big\{y \bigm| x \leq_{\mathscr{C}} \max_{\mathscr{C}} \{x' \mid F(x')_{\mathscr{D}} \leq y \} \Big\} = \{ y \mid F(x) \leq_{\mathscr{D}} y \}.
$$

This identifies the set of all right approximations to $x$ with the set of all element greater than or equal to $F(x)$. Thus, $\min_{x \in \mathscr{D}} \{y \mid x \leq_{\mathscr{C}} G(y)\} = F(x)$, so $G$ is indeed a right adjoint, with $F$ solving the approximation problem posed by $G$.

As a consequence of this duality, one obtains a kind of idempotence in taking best approximations. If $x \in \mathscr{C}$, then

- $F(x)$ is a right approximation of $x$, which means that $x \leq_{\mathscr{C}} G(F(x))$, and
- $G(F(x))$ is a left approximation of $F(x)$, which means that $G(x) \leq_{\mathscr{D}} F(G(F(x)))$.

Together, this implies that $F \leq_{\mathscr{D}} F\hspace{0pt}GF \leq_{\mathscr{D}} F$, so $F\hspace{0pt}GF = F$. Similarly, if $y \in \mathscr{D}$,

- $G(y)$ is a left approximation of $y$, which means that $F(G(y)) \leq_{\mathscr{D}} y$, and
- $F(G(y))$ is a right approximation of $G(y)$, which means that $G(y) \leq\_{\mathscr{C}} G(F(G(y)))$.

Together, this implies that $G \leq_{\mathscr{C}} GF\hspace{0pt}G \leq_{\mathscr{C}} G$, so $GF\hspace{0pt}G = G$. In other words, once one takes the best approximation of an object, taking a second approximation does not improve the result.

In the context of posets, the adjunction between $\mathscr{C}$ and $\mathscr{D}$ is called a _Galois connection_, and the maps $GF \colon \mathscr{C} \to \mathscr{C}$ and $F\hspace{0pt}G \colon \mathscr{D} \to \mathscr{D}$ are referred to as the _closure_ operator and _kernel_ operator of the connection, respectively. The closure yields the best right approximation to an element in $\mathscr{C}$ by elements in the image of $G$, while the kernel yields the best left approximation to an element in $\mathscr{D}$ by elements in the image of $F$. Both operators are idempotent.

For general categories, one has a similar result, which can be used to give another equivalent formulation of adjunctions.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories and let $F \colon \mathscr{C} \to \mathscr{D}$ be a functor with right adjoint $G \colon \mathscr{D} \to \mathscr{C}$. There exists a natural transformation $\epsilon \colon F\hspace{0pt}G \Rightarrow \mathrm{id}_{\mathscr{D}}$ and natural transformation $\eta \colon \mathrm{id}_{\mathscr{C}} \Rightarrow GF$ such that the diagrams

<div><tikz path="counit-unit" desktop="1.5" mobile="1"></tikz></div>

commute.

</div>

_Proof._ There exists a natural isomorphism

$$
\Psi \colon \mathrm{Hom}_\mathscr{D}(F[-], -) \overset{\cong}{\Longrightarrow} \mathrm{Hom}_\mathscr{C}(-, G[-])
$$

defining the adjunction. Given $Y \in \mathscr{D}$, the representing object of the presheaf $\mathrm{Hom}_{\mathscr{D}}(F[-], Y)$ is $G(Y)$; from this, we may obtain a universal morphism from $F$ to $Y$ by defining $\epsilon_Y = \Psi^{-1}(\mathrm{id}_{G(Y)})$. These are the components of a natural transformation $\epsilon \colon F\hspace{0pt}G \Rightarrow \mathrm{id}_\mathscr{D}$: for any morphism $g \colon Y \to Y'$ we have

$$
g \circ \epsilon_Y = \Psi^{-1}(g_* [\mathrm{id}_{G(Y)}]) = \Psi^{-1}(G(g)) = \Psi^{-1}(G(g)^* [\mathrm{id}_{G(Y')}]) = \epsilon_{Y'} \circ F\hspace{0pt}G(g),
$$

since $\Psi^{-1}$ respects both pullbacks and pushforwards. Similarly, given $X \in \mathscr{D}$, the representing object of the copresheaf $\mathrm{Hom}_{\mathscr{C}}(X, G[-])$ is $F(X)$; from this, we may obtain a universal morphism from $X$ to $G$ by defining $\eta_X = \Psi(\mathrm{id}_{F(X)})$. These are the components of a natural transformation $\eta \colon \mathrm{id}_\mathscr{C} \Rightarrow GF$: for any morphism $f \colon X \to X'$ we have

$$
GF(f) \circ \eta_X = \Psi(f_* [\mathrm{id}_{F(X)}]) = \Psi(F(f)) = \Psi (F(f)^* [\mathrm{id}_{F(X')}]) = \eta_{X'} \circ f,
$$

since $\Psi$ respects both pullbacks and pushforwards. With this established, we show that the diagrams given above commute. For all $X \in \mathscr{C}$, we have

$$
\epsilon_{F(X)} \circ F(\eta_X) = F(\eta_X)^* [\Psi^{-1}(\mathrm{id}_{GF(X)})] = \Psi^{-1}\big( (\eta_X)^* \mathrm{id}_{GF(X)}\big) = \Psi^{-1} (\eta_X) = \mathrm{id}_{F(X)}
$$

so the first diagram commutes. Similarly, for all $Y \in \mathscr{D}$,

$$
G(\epsilon_Y) \circ \eta_{G(Y)} = G(\epsilon_Y)_* \big[ \Psi(\mathrm{id}_{F\hspace{0pt}G(Y)}) \big] = \Psi\big( (\epsilon_Y)_* \mathrm{id}_{F\hspace{0pt}G(Y)} \big) = \Psi(\epsilon_Y) = \mathrm{id}_{G(Y)}.
$$

so the second diagram commutes.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Given a pair of functors $(F,G): \mathscr{C} \;\substack{\xrightarrow{F} \\[-0.6ex] \xleftarrow[\;G]{}\;}\; \mathscr{D}$, a pair of natural transformations $\epsilon \colon F\hspace{0pt}G \Rightarrow \mathrm{id}_{\mathscr{D}}$ and $\eta \colon \mathrm{id}_{\mathscr{C}} \Rightarrow GF$ which make the diagrams in the previous proposition commute are called a _counit-unit pair_, and the corresponding equations $\epsilon F \circ F\eta = \mathrm{id}_F$ and $G \epsilon \circ \eta G = \mathrm{id}_G$ are the _counit-unit equations_ of the pair. If these equations are satisfied, then either one of these natural transformations may be thought of as an explicit solution to the representability or approximation problems described earlier, giving rise to an adjunction between $F$ and $G$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. Let $\mathscr{C}$ and $\mathscr{D}$ be categories and $(F, G) \colon \mathscr{C} \;\substack{\xrightarrow{F} \\[-0.6ex] \xleftarrow[\;G]{}\;}\; \mathscr{D}$ be a pair of functors. If there exists a pair $(\epsilon, \eta)$ satisfying the counit-unit equations, then there exists an adjunction $F \dashv G$.

</div>

_Proof._ We wish to construct a natural isomorphism $\mathrm{Hom}_{\mathscr{D}}(F[-], -) \cong \mathrm{Hom}_{\mathscr{C}}(-, G[-])$ using the counit-unit pair. So, define

$$
\begin{align*}
\Psi \colon \mathrm{Hom}_{\mathscr{D}}(F[-], -) &\Rightarrow \mathrm{Hom}_{\mathscr{C}}(-, G[-]); \quad \quad &\Psi_{X, Y}(\phi) = G(\phi) \circ \eta_X, \\
\Phi \colon \mathrm{Hom}_{\mathscr{C}}(-, G[-]) &\Rightarrow \mathrm{Hom}_{\mathscr{D}}(F[-], -); \quad \quad &\Phi_{X, Y}(\psi) = \epsilon_Y \circ F(\psi).
\end{align*}
$$

For any morphism $f \colon X' \to X$, we have

$$
f^*\Psi_{X, Y}(\phi) = G(\phi) \circ \eta_X \circ f = G(\phi) \circ GF(f) \circ \eta_{X'}  = G (f^* \phi) \circ \eta_{X'} = \Psi_{X', Y} (f^* \phi),
$$

so $\Psi$ respects pullbacks. Furthermore, for any morphism $g \colon Y \to Y'$ we have

$$
g_*\Psi_{X, Y}(\phi) = G(g) \circ G(\phi) \circ \eta_X = G(g_* \phi) \circ \eta_X   = \Psi_{X, Y'}(g_* \phi),
$$

so $\Psi$ also respects pushforwards. Thus, $\Psi$ is a natural transformation, and by a similar argument, so is $\Phi$. It remains to show that these natural transformations are inverses. Indeed, for each $\phi \in \mathrm{Hom}(FX, Y)$, we have

$$
\Phi_{X, Y} \Psi_{X, Y} (\phi) = \Phi \big(G(\phi) \circ \eta_X\big) = \epsilon_{Y} \circ F\hspace{0pt}G(\phi) \circ F(\eta_X) = \phi \circ \epsilon_{F(X)} \circ F(\eta_X)= \phi
$$

by the counit-unit equation for $F$. Similarly, for each $\psi \in \mathrm{Hom}(X, GY)$, we have

$$
\Psi_{X, Y} \Phi_{X, Y} (\psi) = \Psi \big(\epsilon_Y \circ F(\psi)\big) = G(\epsilon_{Y}) \circ GF(\psi) \circ \eta_X = G(\epsilon_Y) \circ \eta_{G(Y)} \circ \psi = \psi
$$

by the counit-unit equation for $G$. It follows that $\Psi$ and $\Phi$ are natural isomorphisms, so $F \dashv G$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>
