---
title: "The Yoneda Lemma"
date: 2024-09-30
length: "∼1750 words"
---

The Yoneda lemma, according to Ravil Vakil in _Foundations of Algebraic Geometry_, is an "important exercise you should do once in your life." In this post, we give<!--more--> a slight variant of the usual proof and explain the idea behind the lemma.

## Presheaves

In category theory, a _presheaf_ is a mild generalization of the usual geometric notion of a presheaf. Instead of attaching data to each open set of a topological space, we attach data to each object in a category. More precisely, a _presheaf_ on a category $\mathscr{C}$ is a functor $\mathcal{F} \colon \mathscr{C}^{\rm op} \to \mathbf{Set}$. Morphisms between presheaves are defined to be natural transformations of these functors. Together, these form the category of presheaves on $\mathscr{C}$, denoted by $\mathbf{PSh}(\mathscr{C})$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example**. For a topological space $X$, let $\mathscr{C} = \mathbf{Open}(X)$ be the category of open subsets of $X$, whose morphisms are inclusions $\iota_{V, U} \colon V \hookrightarrow U$ of open sets. A typical example of a presheaf on this category is the presheaf of continuous real-valued functions, denoted by $\mathcal{F} = \mathrm{C}^0(-, \mathbb{R})$.

<div>
<tikz path="sections" desktop="1.75" mobile="1"></tikz>
</div>

This presheaf attaches to each open subset $U \subseteq X$ a set of _sections_ $\mathcal{F}(U) = \mathrm{C}^0(U, \mathbb{R})$, visualized as graphs lying over $U$. For each inclusion $\iota_{V, U}$, we define a _restriction_ map which takes a section over $U$ and restricts it to $V$. Specifically, we define

$$
\mathcal{F}(\iota_{V, U}) = \iota_{V, U}^* \colon \mathcal{F}(U) \to \mathcal{F}(V); \quad \quad f \mapsto f \circ \iota_{V, U}.
$$

In fact, any presheaf or sheaf on $\mathbf{Open}(X)$ can be interpreted as arising from the sheaf of continuous sections to a larger space sitting above $X$, known as the étale space, $\operatorname{Et}(\mathcal{F})$. The étale space comes with a natural projection $\pi \colon \operatorname{Et}(\mathcal{F}) \to X$, and sections over $U \subseteq X$ are given by continuous maps $\sigma \colon U \to \operatorname{Et}(\mathcal{F})$ such that $\pi \circ \sigma = \mathrm{id}_U$.

</div>

In the above example, $\mathrm{Hom}_{\mathbf{Open}(X)}(V\!, U)$ has at most one morphism, determining whether or not $V$ is contained in $U$. Using this as intuition for a general category $\mathscr{C}$, we similarly think of $\operatorname{Hom}_{\mathscr{C}}(V, U)$ as comprising all of the ways in which the structure of $V$ can "fit inside" the structure of $U$.

Given a presheaf $\mathcal{F}$ on $\mathscr{C}$, we think of each section over $U$ as a way of fitting the data of $U$ inside of $\mathcal{F}$, much like in the étale space viewpoint. Then for $f \in \operatorname{Hom}(V, U)$, the map $\mathcal{F}(f) \colon \mathcal{F}(U) \to \mathcal{F}(V)$ takes each occurrence of $U$ in $\mathcal{F}$ and "restricts" it to obtain a suboccurrence of $V$ in $\mathcal{F}$ (this is also the intuition suggested in [nLab article on presheaves](https://ncatlab.org/nlab/show/presheaf)).

In this article, we will call the map $\mathcal{F}(f)$ the _pullback_ by $f$ and denote it by $f^*$ when the presheaf $\mathcal{F}$ is understood.

### Representable Presheaves

Let $\mathcal{F} \in \mathbf{PSh}(\mathscr{C})$ be a presheaf and $U \in \mathcal{F}$. Given a section $s \in \mathcal{F}(U)$, what is the _minimal_ subpresheaf containing $s$? To construct this, we intuitively must "throw away" or "cut out" all sections of $\mathcal{F}$ which don't fit inside $s$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example.** Let $X$ be a topological space and $\mathcal{F}$ be a presheaf on $X$. Given an open set $U \subseteq X$ and a section $s \in \mathcal{F}(U)$ we may construct the subpresheaf $\mathcal{F}_{U, s}$ given by

$$
\mathcal{F}_{U, s}(V) =
\begin{cases}
\{s|_{V}\} &\text{if } V \subseteq U \\
\varnothing &\text{if } V \not\subseteq U \\
\end{cases}.
$$

This subpresheaf consists of all the restrictions of $s$, and nothing more.

</div>

In general, for every $f \in \operatorname{Hom}(V, U)$, we must include the pullback $f^* s$ as a section of the minimal subpresheaf. To formalize this notion, consider the functor $\operatorname{Hom}(-, U)$, which may be interpreted as the _presheaf of morphisms to_ $\hspace{0.5pt}U$. By definition, the sections of this presheaf over an object $V \in \mathscr{C}$ are given by $\operatorname{Hom}(-, U)(V)= \operatorname{Hom}(V, U)$, and the pullback along a morphism $f \in \operatorname{Hom}(V, W)$ is given by

$$
f^* \overset{\mathrm{def}}{=} \operatorname{Hom}(-, U)(f) \colon \operatorname{Hom}(W, U) \to \operatorname{Hom}(V, U); \quad\quad f^*s \overset{\mathrm{def}}{=} s \circ f.
$$

Given $U \in \mathscr{C}$, let us call a pair $(\mathcal{G}, s)$, where $\mathcal{G}$ is a presheaf on $\mathscr{C}$ and $s \in \mathcal{G}(U)$ a _presheaf on_ $\mathscr{C}$ _with a distinguished section on_ $\,U$. These form a category $\mathbf{PSh}_{\bullet}(\mathscr{C}, U)$ where a morphism between objects $(\mathcal{G}, s)$ and $(\mathcal{H}, t)$ is defined to be a morphism of presheaves $\mathcal{G} \Rightarrow \mathcal{H}$ which maps $s \mapsto t$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition.** The presheaf $\operatorname{Hom}(-, U)$ with distinguished section $\operatorname{id}_U$ is an initial object of $\mathbf{PSh}_{\bullet}(\mathscr{C}, U)$.

</div>

_Proof._ Let $\mathcal{F}$ be a presheaf with a distinguished section $s \in \mathcal{F}(U)$. Then there exists a morphism $\phi \colon \operatorname{Hom}(-, U) \Rightarrow \mathcal{F}$ given by $f \mapsto f^*s = [\mathcal{F}(f)] (s)$. In other words, $\phi$ maps a section $f \in \operatorname{Hom}(V, U)$ to the pullback of the distinguished section $s$, which is a once again section over $V$ (but in $\mathcal{F}$). To check that this defines a morphism of presheaves, consider a morphism $g \colon V \to W$ in $\mathscr{C}$. Then the diagram

$$
\begin{CD}
W @. @. \operatorname{Hom}(W,\, U) @>\phi>> \mathcal{F}(W) \\
@AgAA @. @Vg^*VV  @Vg^*VV \\
V @. @.\operatorname{Hom}(V,\, U) @>\phi>> \mathcal{F}(V)
\end{CD}
$$

commutes, since for all $f \in \operatorname{Hom}(W, U)$ we have $g^*(f^*s) = (f \circ g)^*s = (g^* f)^* s$. Moreover, the identity $\operatorname{id}_U$ is mapped to the distinguished section $s$, since ${\operatorname{id}_U}^* s = s$. Hence, $\phi$ defines a morphism $(\operatorname{Hom}(-, U), \operatorname{id}_U) \to ( \mathcal{F}, s)$.

Conversely, to show uniqueness, suppose that $\psi \colon (\operatorname{Hom}(-, U),\, \operatorname{id}_U) \to ( \mathcal{F}, s)$ is a morphism of presheaves with distinguished sections on $U$. Then $\psi_V(f)$ is automatically determined for all sections $f \in \operatorname{Hom}(V, U)$, since

$$
\psi_V(f) = \psi_V(f^*\operatorname{id}_U) = f^*\big(\psi_U(\operatorname{id}_U)\big) = f^*s.
$$

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

We call the initial object $\operatorname{Hom}(-, U)$ of $\mathbf{PSh}_{\bullet}(\mathscr{C}, U)$ the _presheaf represented by_ $\,U$ and denote it by $H_U$. In a sense, this is the "least specific" presheaf on $\mathscr{C}$ which contains a section over $U$. The map taking an object to the presheaf it represents is known as the _Yoneda embedding_, which we denote by $\!\text{よ}$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition**. The Yoneda embedding defines a functor as follows: given $f \in \mathrm{Hom}_{\mathscr{C}}(V, U)$ define $\!\text{よ}(f)$ to be the underlying map of the unique map $(H_V, \mathrm{id}_V) \to (H_U, f)$ in $\mathbf{PSh}_\bullet(\mathscr{C}, V)$.

</div>

_Proof_. Let $W \overset{g}{\to} V \overset{f}{\to} U$ be a sequence of morphisms. Then

$$
\mathrm{id}_W \overset{\!\text{よ}(g)_W}{\longmapsto} (g = g^*\operatorname{id}_V) \overset{\!\text{よ}(f)_V}{\longmapsto} (g^*f = f \circ g).
$$

By uniqueness of maps from initial objects, it follows that $\!\text{よ}(f \circ g) = \!\text{よ}(f) \circ \!\text{よ}(g)$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Explicitly, $\!\text{よ}(f)$ is the pushforward along $f$, taking $s \in \mathrm{Hom}(W, V)$ and mapping it to $f_*s = f \circ s \in \mathrm{Hom}(W, U)$. Indeed, the pushforward commutes with pullbacks, making it into a morphism of presheaves mapping the identity section over $V$ to $f$; by definition, this must be the Yoneda embedding.

## The Yoneda Lemma

We now state and prove the Yoneda lemma.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem** (Yoneda lemma). Let $\mathscr{C}$ be a category. If $\mathcal{F}$ is a presheaf on $\mathscr{C}$ and $U \in \mathscr{C}$, then there is an isomorphism of sets

$$
\mathrm{ev}_{U,\, \mathcal{F}}\colon \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathcal{F}) \xrightarrow{\cong} \mathcal{F}(U); \quad \phi \overset{\mathrm{}}\longmapsto \phi_U(\operatorname{id}_U).
$$

Moreover, this a natural isomorphism of bifunctors $\mathscr{C}^{\rm op} \times \mathbf{PSh}(\mathscr{C}) \to \mathbf{Set}$.

</div>

_Proof_. For any section $s \in \mathcal{F}(U)$, there exists a unique morphism $\phi \colon H_U \to \mathcal{F}$ such that $\phi_U(\operatorname{id}_U) = s$, since $(H_U, \operatorname{id}_U)$ is initial in $\mathbf{PSh}_{\bullet}(\mathscr{C}, U)$. It follows that the evaluation map $\mathrm{ev}_{U,\, \mathcal{F}}$ is a bijection.

For fixed $\mathcal{F}$, the map $U \mapsto \mathcal{F}(U)$ is functorial by the definition of a presheaf. Likewise, for fixed $U$, the map $\mathcal{F} \mapsto \mathcal{F}(U)$ is functorial by the definition of the presheaf category. Thus, $(U, \mathcal{F}) \mapsto \mathcal{F}(U)$ defines a _bifunctor_ $\mathscr{B}_{\rm pairing}$.

On the other hand, the Yoneda embedding $U \mapsto H_U$ is a functor, and $\operatorname{Hom}_{\mathbf{Psh}(\mathscr{C})}(-, -)$ is a bifunctor, which implies that $(U, \mathcal{F}) \mapsto \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathcal{F})$ also defines a bifunctor $\mathscr{B}_{\rm yoneda}$.

It remains to show that the two bifunctors are naturally isomorphic. For this, it suffices to check that they are natural on each factor. So, let $f \in \operatorname{Hom}(V, U)$. Then for all presheaf morphisms $\phi \in \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathcal{F})$, we have

$$
\mathrm{ev}_{V,\,\mathcal{F}} \Big( \big[\mathscr{B}_{\rm yoneda}(f, \operatorname{id}_{\mathcal{F}})\big] (\phi) \Big) = \mathrm{ev}_{V,\,\mathcal{F}}\big(\phi \circ \!\text{よ}(f)\big) = \phi_V\Big([\!\text{よ}(f)]_V (\operatorname{id}_V)\Big) = \phi_V(f).
$$

At the same time, we have

$$
\big[\mathscr{B}_{\rm pairing}(f, \operatorname{id}_\mathcal{F})\big] \big(\mathrm{ev}_{U, \,\mathcal{F}} (\phi)\big) = \big[\mathscr{B}_{\rm pairing}(f, \operatorname{id}_\mathcal{F})\big] \big(\phi_U(\operatorname{id}_U)\big) = f^*\phi_U(\operatorname{id}_U) = \phi_V(f).
$$

Therefore, the bifunctor isomorphism is natural in the first factor. For the second factor, consider a presheaf morphism $\psi \colon \mathcal{F} \Rightarrow \mathcal{G}$. Then for all presheaf morphisms $\phi \in \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathcal{F})$, we have

$$
  \mathrm{ev}_{U,\,\mathcal{G}} \Big( \big[\mathscr{B}_{\rm yoneda}(\operatorname{id}_{U}, \psi)\big] (\phi) \Big) = \mathrm{ev}_{U,\,\mathcal{G}} \big(\psi \circ \phi) = \big(\psi_U \circ \phi_U\big)(\operatorname{id}_U) .
$$

At the same time, we have

$$
\big[\mathscr{B}_{\rm pairing}(\operatorname{id}_U, \psi)\big] \big(\mathrm{ev}_{U, \mathcal{F}} (\phi)\big) = \big[\mathscr{B}_{\rm pairing}(\operatorname{id}_U, \psi)\big] \big(\phi_U(\operatorname{id}_U)\big) = \psi_U(\phi_U(\operatorname{id}_U))
.
$$

Therefore, the bifunctor isomorphism is also natural in the second factor. It follows that the evaluation bifunctor $\mathrm{ev}$ is natural, which concludes the argument.

<div class="w-full flex mt-[-20px] mb-[15px] justify-end">

$\blacksquare$

</div>

## The Yoneda Embedding

The Yoneda lemma implies that there is an isomorphism

$$
\mathrm{ev}_{U,\, V}\colon \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, H_V) \overset{\cong}{\longrightarrow} \operatorname{Hom}(U, V)
$$

which implies that the Yoneda embedding functor is fully faithful. In particular, an isomorphism of representable presheaves in $\mathbf{PSh}(\mathscr{C})$ must be induced by an isomorphism of their representing objects in $\mathscr{C}$. This can expressed as the following principle, whose importance cannot be understated:

> To understand an object $X$ in a category $\mathscr{C}$, it suffices to understand how $X$ relates to every other object in $\mathscr{C}$.
