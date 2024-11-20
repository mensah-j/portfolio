---
title: "The Yoneda Lemma"
date: 2024-09-30
length: "∼1750 words"
---

The Yoneda lemma, according to Ravil Vakil in _Foundations of Algebraic Geometry_, is an "important exercise you should do once in your life." This fundamental result is often said to be difficult to conceptualize<!--more-->. In this post, we present a variant of the usual proof and explain in a plain manner the idea behind the lemma.

## Presheaves

In category theory, a _presheaf_ is a mild generalization of the usual geometric notion of a presheaf. Instead of attaching data to each open set of a topological space, we attach data to each object in a category. More precisely, let $\mathscr{C}$ be a small category. A **presheaf** on $\mathscr{C}$ is a functor $\mathscr{F} \colon \mathscr{C}^{\rm op} \to \mathbf{Set}$. We denote the category of presheaves on $\mathscr{C}$, with morphisms being natural transformations of functors, by $\mathbf{PSh}(\mathscr{C})$.

It is instructive to examine the prototypical case, where $\mathscr{C} = \mathbf{Open}(X)$ for some topological space $X$. Here, the objects of $\mathscr{C}$ are the open sets of $X$ and the morphisms are given by the inclusions of open sets. We can view $\mathbf{Open}(X)$ as a subcategory of $\mathbf{Top}$ by corresponding each inclusion $V \subseteq U$ to its associated embedding $\iota_{V, U} \colon V \to U$. In this setting, a presheaf $\mathscr{F}$ on $X$ attaches to each open subset $U \subseteq X$ a set of _sections_ $\mathscr{F}(U)$; furthermore, for each inclusion $\iota_{V, U}$, there is a corresponding _restriction_ map $\operatorname{res}_{U, V}$ which takes a section in $\mathscr{F}(U)$ and restricts it to obtain a section in $\mathscr{F}(V)$. Any presheaf or sheaf on a topological space can be interpreted as arising from the sheaf of continuous sections to a larger space sitting above $X$, known as the étale space, $\operatorname{Et}(\mathscr{F})$. Here, sections in $\mathscr{F}(U)$ correspond to subspaces of $\operatorname{Et}(\mathscr{F})$ which lie over $U$, and $\operatorname{res}_{V, U}(s)$ is just the set-theoretic restriction, which may also be written as the pullback $\iota_{V, U}^* s$.

In the general case, we can think of $\operatorname{Hom}_{\mathscr{C}}(V, U)$ as comprising all of the ways in which the structure of $V$ can "fit inside" the structure of $U$, and the set of sections $\mathscr{F}(U)$ can be thought as representing all the ways the data of $U$ fits inside of $\mathscr{F}$, much like in the étale space point-of-view; this is the viewpoint suggested on the [nLab article on presheaves](https://ncatlab.org/nlab/show/presheaf). Given a morphism $f \in \operatorname{Hom}(V, U)$, the analog of the restriction map is the morphism $\mathscr{F}(f) \colon \mathscr{F}(U) \to \mathscr{F}(V)$. In this article, we will call this map the _pullback_ by $f$ and denote it by $f^*$ when the presheaf $\mathscr{F}$ is understood.

### Representable Presheaves

Let $\mathscr{F} \in \mathbf{PSh}(\mathscr{C})$ be a presheaf and $U \in \mathscr{F}$ be an object. Given a section $s \in \mathscr{F}(U)$, we may ask what the _minimal_ subpresheaf of $\mathscr{F}$ containing $s$ is. To construct this, we intuitively must "throw away" or "cut out" all sections of $\mathscr{F}$ which don't fit inside $s$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Example.** Let $X$ be a topological space and $\mathscr{F}$ be a presheaf on $X$. Given an open set $U \subseteq X$ and a section $s \in \mathscr{F}(U)$ we may construct the subpresheaf $\mathscr{F}_{U, s}$ given by

$$
\mathscr{F}_{U, s}(V) =
\begin{cases}
\{s|_{V}\} &\text{if } V \subseteq U \\
\varnothing &\text{if } V \not\subseteq U \\
\end{cases}.
$$

This subpresheaf consists of all the restrictions of $s$, and nothing more.

</div>

In general, for every morphism $f \in \operatorname{Hom}(V, U)$, we must include the pullback $f^* s$ as a section of the minimal subpresheaf. To formalize this notion, consider the Hom-functor $\operatorname{Hom}(-, U)$, which may be interpreted as the _presheaf of morphisms to_ $\hspace{0.5pt}U$. By definition, the sections of this presheaf on $V \in \mathscr{C}$ are given by $\operatorname{Hom}(-, U)(V)= \operatorname{Hom}(V, U)$, and the pullback by a morphism $f \in \operatorname{Hom}(V, W)$ is given by

$$
f^* \overset{\mathrm{def}}{=} \operatorname{Hom}(-, U)(f) \colon \operatorname{Hom}(W, U) \to \operatorname{Hom}(V, U); \quad\quad f^*s \overset{\mathrm{def}}{=} s \circ f.
$$

**Definition.** Let $\mathscr{C}$ be a category and let $U \in \mathscr{C}$ be an object. Define a _presheaf on $\mathscr{C}$ with a distinguished section on $U$_ to be a pair $(\mathscr{G}, s)$, where $\mathscr{G} \in \mathbf{PSh}(\mathscr{C})$ is a presheaf and $s \in \mathscr{G}(U)$. These form a category $\mathbf{PSh}^{\bullet}(\mathscr{C}, U)$ where a morphism between objects $(\mathscr{G}, s)$ and $(\mathscr{H}, t)$ is defined to be a morphism of presheaves $\mathscr{G} \Rightarrow \mathscr{H}$ which maps $s \mapsto t$.

**Proposition.** The presheaf $\operatorname{Hom}(-, U)$ with distinguished section $\operatorname{id}_U$ is the initial object of $\mathbf{PSh}^{\bullet}(\mathscr{C}, U)$.

_Proof._ Let $\mathscr{F}$ be a presheaf with a distinguished section $s \in \mathscr{F}(U)$. Then there exists a morphism $\phi \colon \operatorname{Hom}(-, U) \Rightarrow \mathscr{F}$ given by $f \mapsto f^*s = [\mathscr{F}(f)] (s)$. In other words, $\phi$ maps a section $f \in \operatorname{Hom}(V, U)$ to the pullback of the distinguished section $s$, which is a once again section over $V$ (but in $\mathscr{F}$). To check that this defines a morphism of presheaves, consider a morphism $g \colon V \to W$ in $\mathscr{C}$. Then the diagram

$$
\begin{CD}
W @. @. \operatorname{Hom}(W,\, U) @>\phi>> \mathscr{F}(W) \\
@AgAA @. @Vg^*VV  @Vg^*VV \\
V @. @.\operatorname{Hom}(V,\, U) @>\phi>> \mathscr{F}(V)
\end{CD}
$$

commutes, since for all $f \in \operatorname{Hom}(W, U)$ we have $g^*(f^*s) = (f \circ g)^*s = (g^* f)^* s$. Moreover, the identity $\operatorname{id}_U$ is mapped to the distinguished section $s$, since ${\operatorname{id}_U}^* s = s$. Hence, $\phi$ defines a morphism $(\operatorname{Hom}(-, U), \operatorname{id}_U) \to ( \mathscr{F}, s)$.

Conversely, to show uniqueness, suppose that $\psi \colon (\operatorname{Hom}(-, U),\, \operatorname{id}_U) \to ( \mathscr{F}, s)$ is a morphism of presheaves distinguished on $U$. Then $\psi_V(f)$ is automatically determined for all sections $f \in \operatorname{Hom}(V, U)$, since $\psi_V(f) = \psi_V(f^*\operatorname{id}_U) = f^*\big(\psi_U(\operatorname{id}_U)\big) = f^*s$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

We call the initial object $\operatorname{Hom}(-, U)$ of $\mathbf{PSh}^{\bullet}(\mathscr{C}, U)$ the **presheaf represented by $U$** and denote it by $H_U$. In a sense, this is the "least specific" presheaf on $\mathscr{C}$ which contains a section over $U$. The map taking an object to the presheaf it represents is known as the **Yoneda embedding**, which we denote by $\text{よ}$.

**Proposition**. The mapping $\text{よ}\colon \mathscr{C} \to \mathbf{PSh}(\mathscr{C})$ defines a functor by mapping $f \in \operatorname{Hom}(V, U)$ to the underlying morphism $\text{よ}(f)$ of the unique morphism $(H_V, \mathrm{id}_V) \to (H_U, f)$ in $\mathbf{PSh}^\bullet(\mathscr{C}, V)$.

_Proof_. Let $W \overset{g}{\to} V \overset{f}{\to} U$ be a sequence of morphisms. Then

$$
\mathrm{id}_W \overset{\text{よ}(g)_W}{\longmapsto} (g = g^*\operatorname{id}_V) \overset{\text{よ}(f)_V}{\longmapsto} (g^*f = f \circ g).
$$

By uniqueness, it follows that $\text{よ}(f \circ g) = \text{よ}(f) \circ \text{よ}(g)$ <small> (this can also be proved directly, of course).</small>

<div class="w-full flex mt-[-20px] justify-end">

$\blacksquare$

</div>

## Yoneda's Lemma

We now state and prove Yoneda's lemma.

**Theorem** (Yoneda's lemma). Let $\mathscr{C}$ be a category. If $\mathscr{F}$ is a presheaf on $\mathscr{C}$ and $U \in \mathscr{C}$ is an object, then there is an isomorphism of sets

$$
\mathrm{ev}_{U,\, \mathscr{F}}\colon \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathscr{F}) \xrightarrow{\sim} \mathscr{F}(U); \quad \phi \overset{\mathrm{}}\longmapsto \phi_U(\operatorname{id}_U).
$$

Moreover, this a natural isomorphism of functors $\mathscr{C}^{\rm op} \times \mathbf{PSh}(\mathscr{C}) \to \mathbf{Set}$.

_Proof_. For any section $s \in \mathscr{F}(U)$, there exists a unique morphism $\phi \colon H_U \to \mathscr{F}$ such that $\phi_U(\operatorname{id}_U) = s$, since $(H_U, \operatorname{id}_U)$ is the initial object of $\mathbf{PSh}^{\bullet}(\mathscr{C}, U)$. It follows that the evaluation map $\mathrm{ev}_{U,\, \mathscr{F}}$ is a bijection.

For fixed $\mathscr{F}$, the map $U \mapsto \mathscr{F}(U)$ defines a functor taking $f \mapsto f^*$, which follows by the definition of a presheaf. Likewise, for fixed $U$, the assignment $\mathscr{F} \mapsto \mathscr{F}(U)$ defines a functor taking a presheaf morphism to its component at $U$, which follows by the definition of the presheaf category. It follows that the map $(U, \mathscr{F}) \mapsto \mathscr{F}(U)$ defines a bifunctor $\mathscr{B}_{\rm pairing}$ from the product category.

On the other hand, the Yoneda embedding $U \mapsto H_U$ is a functor, and $\operatorname{Hom}(-, -)$ is a bifunctor, so it follows that $(U, \mathscr{F}) \mapsto \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathscr{F})$ also defines a bifunctor $\mathscr{B}_{\rm yoneda}$ from the product category.

It remains to show that the two bifunctors are naturally isomorphic. For this, it suffices to check that they are natural on each factor. So, let $f \in \operatorname{Hom}(V, U)$. Then for all presheaf morphisms $\phi \in \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathscr{F})$, we have

$$
\mathrm{ev}_{V,\,\mathscr{F}} \Big( \big[\mathscr{B}_{\rm yoneda}(f, \operatorname{id}_{\mathscr{F}})\big] (\phi) \Big) = \mathrm{ev}_{V,\,\mathscr{F}}\big(\phi \circ \text{よ}(f)\big) = \phi_V\Big([\text{よ}(f)]_V (\operatorname{id}_V)\Big) = \phi_V(f).
$$

At the same time, we have

$$
\big[\mathscr{B}_{\rm pairing}(f, \operatorname{id}_\mathscr{F})\big] \big(\mathrm{ev}_{U, \,\mathscr{F}} (\phi)\big) = \big[\mathscr{B}_{\rm pairing}(f, \operatorname{id}_\mathscr{F})\big] \big(\phi_U(\operatorname{id}_U)\big) = f^*\phi_U(\operatorname{id}_U) = \phi_V(f).
$$

Therefore, the bifunctor isomorphism is natural in the first factor. For the second factor, consider a presheaf morphism $\psi \colon \mathscr{F} \Rightarrow \mathscr{G}$. Then for all presheaf morphisms $\phi \in \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, \mathscr{F})$, we have

$$
  \mathrm{ev}_{U,\,\mathscr{G}} \Big( \big[\mathscr{B}_{\rm yoneda}(\operatorname{id}_{U}, \psi)\big] (\phi) \Big) = \mathrm{ev}_{U,\,\mathscr{G}} \big(\psi \circ \phi) = \big(\psi_U \circ \phi_U\big)(\operatorname{id}_U) .
$$

At the same time, we have

$$
\big[\mathscr{B}_{\rm pairing}(\operatorname{id}_U, \psi)\big] \big(\mathrm{ev}_{U, \mathscr{F}} (\phi)\big) = \big[\mathscr{B}_{\rm pairing}(\operatorname{id}_U, \psi)\big] \big(\phi_U(\operatorname{id}_U)\big) = \psi_U(\phi_U(\operatorname{id}_U))
.
$$

Therefore, the bifunctor isomorphism is also natural in the second factor. It follows that the evaluation bifunctor $\mathrm{ev}$ is natural, which concludes the argument.

<div class="w-full flex mt-[-20px] mb-[15px] justify-end">

$\blacksquare$

</div>

Intuitively, the Yoneda lemma states that a morphism from a presheaf represented by $U$ to a general presheaf is completely determined by how it maps the identity section on $U$. The naturality condition can be rephrased as such:

1. In order to "shift back" the source of the evaluation from being at the identity $\operatorname{id}_U$ to another section $f$, we can either first evaluate at $\operatorname{id}_U$ as usual and then pullback to obtain $\phi_V(f)$, or precompose $\phi$ with the Yoneda embedding of $f$ and then evaluate $\operatorname{id}_V$.
2. In order to "shift forward" the destination of the evaluation from being in $\mathscr{F}$ to another presheaf $\mathscr{G}$, we can evaluate $\operatorname{id}_U$ as usual and then apply a component of the morphism $\mathscr{F} \Rightarrow \mathscr{G}$, or compose $\phi$ with the morphism $\mathscr{F} \Rightarrow \mathscr{G}$ and then evaluate at $\operatorname{id}_U$.

## The Yoneda Embedding

The Yoneda lemma implies that there is an isomorphism

$$
\mathrm{ev}_{U,\, V}\colon \operatorname{Hom}_{\mathbf{PSh}(\mathscr{C})}(H_U, H_V) \xrightarrow{\sim} \operatorname{Hom}(U, V)
$$

which implies that the Yoneda embedding functor is fully faithful. In particular, an isomorphism of representable presheaves in $\mathbf{PSh}(\mathscr{C})$ must be induced by an isomorphism of the underlying objects in $\mathscr{C}$. In other words, to understand an object in a category, it suffices to understand the presheaf of morphisms to that object.
