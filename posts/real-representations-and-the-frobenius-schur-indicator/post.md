---
title: "Real representations and the Frobenius-Schur indicator"
date: 2025-07-06
length: "~5000 words"
---

In this post, we discuss an invariant of a complex representation of a finite group, and show how this yields a connection between irreducible real and complex representations<!--more-->. The story begins with trying to determine whether or not an irreducible complex representation admits an equivariant bilinear form; in trying to solve this problem, we arrive at an invariant of a complex representation known as the _Frobenius-Schur indicator_. Surprisingly, however, this invariant reveals a lot more about the structure of an irreducible complex representation, and ultimately allows us to classify both real and complex irreducible representations.

Throughout this post, let $G$ be a finite group.

## Equivariant bilinear forms

Let $V$ be a complex representation of $G$. An _equivariant bilinear form_ on $V$ is a form $b \colon V \times V \to \mathbb{C}$ such that $b(gv, gw) = b(v, w)$ for all $g \in G$ and $v, w \in V$. For each bilinear form $b$, we may define the _left_ and _right_ kernels

$$
\begin{align*}
\ker_{\rm L} (b) &= \{v \mid b(v, w) \text{ for all } w \in V \}, \\
\ker_{\rm R} (b) &= \{w \mid b(v, w) \text{ for all } v \in V \},
\end{align*}
$$

which are easily seen to both be $G$-invariant subspaces of $V$. In particular, they are the kernels of the partial evaluation maps $b_{\mathrm{L}}, b_{\mathrm{R}} \colon V \to V^\vee$ defined by $b_{\mathrm{L}}(v) = [w \mapsto b(v, w)]$ and $b_{\mathrm{R}}(w) = [v \mapsto b(v, w)]$. Recall that there is an "evaulation" isomorphism $\mathrm{eval} \colon V \to V^{\vee\vee}$, which takes a vector $v$ and produces an evaluator $\mathrm{eval}_v \colon V^{\vee} \to \mathbb{C}$ defined by $\mathrm{eval}_v(\phi) = \phi(v)$. Using this isomorphism, we obtain

$$
b_L^\vee (w) = \mathrm{eval}_w  \circ b_{\mathrm{L}} = [v \mapsto b_{\mathrm{L}}(v)(w)] = [v \mapsto b(v, w)] = b_R(w).
$$

It follows that both the left and right evaluation maps are dual, and thus have kernels of the same dimension. Thus, if $V$ is irreducible, either both the left and right kernels are the entire space, in which case $b = 0$, or zero, in which case we say that $b$ is _nondegenerate_.

It turns out that if $V$ is irreducible, there is at most one (up to scaling) equivariant bilinear form on $V$. To see, suppose that $a, b \colon V \times V \to \mathbb{C}$ are two nonzero equivariant bilinear forms. Then $b_{\mathrm{L}}^{-1} \circ a_{\mathrm{L}}^{\vphantom{-1}} \colon V \to V$ is endomorphism over $\mathbb{C}$ and thus has an eigenvector $v$ with eigenvalue $\lambda$. Unpacking, this means that for all $w \in V$, we have $a(v, w) = \lambda b(v, w)$, so $a - \lambda b$ is an equivariant bilinear form with a nonzero left kernel, implying $a = \lambda b$.

For a complex representation $V$, the Frobenius-Schur indicator determines whether or not such an equivariant bilinear form exists and if it does, what _type_ of bilinear form it is. It is instructive to compare this situation with that of Hermitian forms on $V$.

### Equivariant Hermitian forms

Every complex representation admits an equivariant nondegenerate Hermitian form through the use of the "averaging trick": take any positive-definite Hermitian form $h_0 \colon V \times V \to \mathbb{C}$ and define a new map $h \colon V \times V \to \mathbb{C}$ by

$$
h(v, w) = \frac{1}{\abs{G}} \sum_{g \in G} h_0(gv, gw).
$$

By construction, this is an equivariant Hermitian form; moreover for $v \neq 0$ we have $h(v, v) = \frac{1}{\abs{G}} \sum_{g \in G} h_0(gv, gv) > 0$, so $h$ is positive-definite. In particular, $h$ is nondegenerate. This type of argument does not work for bilinear forms $V$, as there are no positive-definite bilinear forms $b \colon V \times V \to \mathbb{C}$: if $b(v, v) > 0$, then $b(iv, iv) = -b(v, v) < 0$.

## Symmetric and alternating bilinear forms

For a complex vector space $V$, denote by $\mathrm{T}^{2}(V^\vee)$ the space of bilinear maps $V \times V \to \mathbb{C}$. Special types of bilinear forms which are of interest to us are the _symmetric_ forms $\mathrm{Sym}^2(V^\vee)$, which satisfy $b(v, w) = b(w, v)$, and the _alternating_ forms $\mathrm{Alt}^{2}(V^\vee)$, which satisfy $b(v, w) = -b(w, v)$. Basic examples of forms can be constructed from linear forms $\phi, \psi \in V^\vee$ in the following ways:

1. the outer (or tensor) product $\phi \otimes \psi$, defined by $(\phi \otimes \psi)(v, w) = \phi(v)\psi(w)$,
2. the symmetric product $\phi \odot \psi$, defined by $(\phi \odot \psi)(v, w) = \frac{1}{2} (\phi(v)\psi(w) + \phi(w)\psi(v))$, and
3. the antisymmetric (or alternating or wedge) product $\phi \wedge \psi$, defined by $\frac{1}{2} (\phi(v)\psi(w) - \phi(w)\psi(v))$.

One may easily verify that these produce bilinear forms and, as the names suggest, that $\phi \odot \psi$ is symmetric and $\phi \wedge \psi$ is alternating. Given a basis $e_1, \ldots, e_n$ of $V$ with dual basis $e_1^\vee, \ldots, e_n^\vee$, the products $e_i^\vee \otimes e_j^\vee$ form a basis of $\mathrm{T}^{2}(V^\vee)$, since a bilinear form $b$ can be written as

$$
b(v, w) = b \left(\sum_{i=1}^{n} v^i e_i,\,  \sum_{j=1}^{n} w^j e_j\right)= \sum_{i, j} b(e_i, e_j)v^iw^j = \sum_{i, j} b(e_i, e_j) \cdot (e_i^\vee \otimes e_j^\vee) (v, w),
$$

so the outer products are at least spanning, and a linear combination $\sum_{i,j} b_{ij} \cdot (e_i^\vee \otimes e_j^\vee)$ vanishes only if for each $k, \ell$ we have

$$
\sum_{i,j} b_{ij} \cdot (e_i^\vee \otimes e_j^\vee) (e_k, e_\ell) = \sum_{i,j} b_{ij} \cdot e_i^\vee (e_k) \cdot  e_j^\vee (e_\ell) = b_{k\ell} = 0,
$$

so the outer products are also independent. It follows that $\dim \mathrm{T}^{2}(V^\vee) = (\dim V) ^2$.

One may also determine bases for the spaces of symmetric and alternating forms through a similar argument, although the situation is better illuminated by studying how each subspace sits inside $\mathrm{T}^{2}(V^\vee)$. To do this, we define two operators:

1. a _symmetrization_ operator $\mathrm{sym} \colon \mathrm{T}^{2}(V^\vee) \to \mathrm{Sym}^2(V^\vee)$ given by $(\operatorname{sym} b)(v, w) = \frac{1}{2} (b(v, w) + b(w, v))$, and
2. an _antisymmetrization_ operator $\mathrm{alt} \colon \mathrm{T}^{2}(V^\vee) \to \mathrm{Alt}^2(V^\vee)$ given by $(\operatorname {alt} b)(v, w) = \frac{1}{2}(b(v,w) - b(w,v))$.

Note that both operators are projectors, since

$$
(\operatorname{sym} \operatorname{sym} b)(v, w) = \frac{1}{2} \Big(\tfrac{1}{2} ( b(v,w) + b(w, v)) + \tfrac{1}{2} ( b(w, v) + b(v, w)) \Big) = \frac{1}{2} (b(v, w) + b(w, v))  = (\operatorname{sym} b)(v,w)
$$

and

$$
(\operatorname{alt} \operatorname{alt} b)(v, w) = \frac{1}{2} \Big(\tfrac{1}{2} ( b(v,w) - b(w, v)) - \tfrac{1}{2} ( b(w, v) - b(v, w)) \Big) = \frac{1}{2} (b(v, w) - b(w, v))  = (\operatorname{alt} b)(v,w).
$$

Moreover, every bilinear form can be written as the sum of its symmetric and alternating projections, since

$$
(\operatorname{sym} b)(v, w) + (\operatorname{alt} b)(v, w) = \tfrac{1}{2} (b(v,w) + b(w,v)) + \tfrac{1}{2}(b(v,w) - b(w,v)) = b(v, w).
$$

Thus, the space of bilinear forms splits the a direct sum $\mathrm{T}^{2}(V^\vee) = \mathrm{Sym}^{2}(V^\vee) \oplus \mathrm{Alt}^{2}(V^\vee)$. The fact that each operator is a projector implies that the products $e_i^\vee \odot e_j^\vee = \operatorname{sym} (e_i^\vee \otimes e_j^\vee)$ and $e_i^\vee \wedge e_j^\vee = \operatorname{alt} (e_i^\vee \otimes e_j^\vee)$ span $\mathrm{Sym}^{2}(V^\vee)$ and $\mathrm{Alt}^{2}(V^\vee)$, respecitively.

Simple combinatorics yield that $\dim \mathrm{Sym}^2(V^\vee) \leq \binom{n + 1}{2}$ and $\dim \mathrm{Alt}^2(V^\vee) \leq \binom{n}{2}$, since there are at most $\binom{n + 1}{2}$ distinct nonzero symmetric products and $\binom{n}{2}$ distinct nonzero antisymmetric products. However, the direct sum composition also implies that $\dim \mathrm{Sym}^2(V^\vee) + \dim \mathrm{Alt}^{2}(V^\vee) = n^2$, so we must have $\dim \mathrm{Sym}^2(V^\vee) = \binom{n + 1}{2}$ and $\dim \mathrm{Alt}^2(V^\vee) = \binom{n}{2}$. To summarize, the dimension and corresponding basis of each space is given below.

| Space                      | Dimension             | Basis                                                  |
| -------------------------- | --------------------- | ------------------------------------------------------ |
| $\mathrm{T}^{2}(V^\vee)$   | $n^2$                 | $e_i^\vee \otimes e_j^\vee$ for $1 \leq i, j \leq n$   |
| $\mathrm{Sym}^{2}(V^\vee)$ | $\tfrac{1}{2} n(n+1)$ | $e_i^\vee \odot e_j^\vee$ for $1 \leq i \leq j \leq n$ |
| $\mathrm{Alt}^{2}(V^\vee)$ | $\frac{1}{2} n(n-1)$  | $e_1^\vee \wedge e_j^\vee$ for $1 \leq i < j \leq n$   |

## The Frobenius-Schur indicator

If $G$ has a linear representation on a complex vector space $V$, then we also obtain representations on $\mathrm{T}^{2}(V^\vee)$ and the spaces of symmetric and alternating bilinear forms given by $(gb) (v, w) = b(g^{-1}v, g^{-1}w)$. Note that the set $G$-equivariant bilinear forms is simply the set of invariants of $\mathrm{T}^{2}(V^\vee)$, so

$$
\{\text{$G$-equivariant forms $V \times V \to \mathbb{C}$}\} = \mathrm{T}^{2}(V^\vee)^G = \mathrm{Sym}^{2}(V^\vee)^G \oplus \mathrm{Alt}^{2}(V^\vee)^G.
$$

If $V$ is irreducible, then $\mathrm{T}^{2}(V^\vee)^G$ is either zero or one-dimensional, and thus lies entirely in one of the two summands. This yields three cases:

1. $\dim \mathrm{Sym}^{2}(V^\vee)^G = 0$ and $\dim \mathrm{Alt}^{2}(V^\vee)^G = 0$,
2. $\dim \mathrm{Sym}^{2}(V^\vee)^G = 1$ and $\dim \mathrm{Alt}^{2}(V^\vee)^G = 0$,
3. $\dim \mathrm{Sym}^{2}(V^\vee)^G = 0$ and $\dim \mathrm{Alt}^{2}(V^\vee)^G = 1$.

To distinguish between these cases, we construct the quantity $\dim \mathrm{Sym}^{2}(V^\vee)^G - \dim \mathrm{Alt}^{2}(V^\vee)^G$, which takes on the values $-1, 0, +1$. Recall that for a representation $W$, dimension of the set of invariants $W^G$ is given by the inner product the character $\chi_W$ with the trivial character $\chi_{\mathrm{triv}}$; this simply reads off how many copies of the trivial representation there are in $W$. Thus,

$$
\inner{\chi_{\mathrm{triv}}, \chi_{\mathrm{Sym}^{2}(V^\vee)}} - \inner{ \chi_{\mathrm{triv}}, \chi_{\mathrm{Alt}^{2}(V^\vee)}} =
\begin{cases}
+1 &\text{if there exists a nondegenerate \textit{symmetric} bilinear form on $V$} \\
-1 &\text{if there exists a nondegenerate \textit{alternating} bilinear form on $V$} \\
\hphantom{+}0 &\text{if there does not exist a nondegenerate bilinear form on $V$} \\
\end{cases}.
$$

To compute this, we determine the characters of $\mathrm{Sym}^{2}(V^\vee)$ and $\mathrm{Alt}^{2}(V^\vee)$. Since the action of each element $g \in G$ is always diagonalizable, we may assign to each $g$ a eigenbasis $e_1(g), \ldots, e_n(g)$ of $V$ with corresponding eigenvalues $\lambda_1(g), \ldots, \lambda_n(g)$. Then one may easily check that the bases listed above are also eigenbases for $g$ on the each space of bilinear forms. Specifically, we have

$$
[g (e_i(g)^\vee \otimes e_j(g)^\vee)](v,w) = e_i(g)^\vee(g^{-1}v) \cdot e_j(g)^\vee(g^{-1}w) = (\lambda_{i} \lambda_{j})^{-1} (e_i(g)^\vee \otimes e_j(g)^\vee).
$$

Since each eigenvalue has unit norm, $\lambda_i^{-1}(g) = \overline{\lambda_i(g)}$, so the character of the representation on $\mathrm{T}^{2}(V^\vee)$ is

$$
\chi_{\mathrm{T}^{2}(V^\vee)}(g) = \sum_{i, j} \overline{\lambda_i(g) \lambda_j(g)} = \left( \sum_{i=1}^{n} \overline{\lambda_i(g)} \right)^2 = \overline{\chi_V(g)^2},
$$

and the characters of the representations on the $\mathrm{Sym}^{2}(V^\vee)$ and $\mathrm{Alt}^{2}(V^\vee)$ are

$$
\begin{align*}
\chi_{\mathrm{Sym}^{2}(V^\vee)}(g) = \sum_{i \leq j} \overline{\lambda_i(g) \lambda_j(g)} = \frac{1}{2}\left[\left( \sum_{i=1}^{n} \overline{\lambda_i(g)} \right)^2 + \sum_{i=1}^{n} \overline{\lambda_i(g)^2} \right] = \frac{1}{2} \cdot \overline{\chi_V(g)^2 + \chi_V(g^2)}, \\
\chi_{\mathrm{Alt}^{2}(V^\vee)}(g) = \sum_{i < j} \overline{\lambda_i(g) \lambda_j(g)} = \frac{1}{2}\left[\left( \sum_{i=1}^{n} \overline{\lambda_i(g)} \right)^2 - \sum_{i=1}^{n} \overline{\lambda_i(g)^2} \right] = \frac{1}{2} \cdot \overline{\chi_V(g)^2 - \chi_V(g^2)}. \\
\end{align*}
$$

Finally, we compute

$$
\inner{\chi_{\mathrm{triv}}, \chi_{\mathrm{Sym}^{2}(V^\vee)}}\hspace{-0.3pt} - \hspace{-0.3pt}\inner{ \chi_{\mathrm{triv}}, \chi_{\mathrm{Alt}^{2}(V^\vee)}} = \frac{1}{\abs{G}}\sum_{g \in G} \frac{\chi_V(g)^2 + \chi_V(g^2)}{2} - \frac{1}{\abs{G}}\sum_{g \in G} \frac{\chi_V(g)^2 - \chi_V(g^2)}{2} = \frac{1}{|G|}\sum_{g \in G} \chi_V(g^2).
$$

The last expression is what we refer to as the _Frobenius-Schur indicator_, and will be denoted here by $\mathrm{FS}(\chi_V)$.

## Real representations

The Frobenius-Schur indicator can also be used to understand the real representations of a finite group $G$. When working with real representations, results which depend on the base field being algebraically closed no longer directly apply. The most basic of these is Schur's Lemma, which states that all endomorphisms of an irreducible representation over an algebraically closed field are scalar multiples of the identity. For real representations, we state a more general version of the result.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem** (_Schur's Lemma_). Let $G$ be a finite group, $k$ be a field, and $W$ be an irreducible $kG$-representation. Then $\mathrm{End}_{kG}(V)$ is a division algebra over $k$.

</div>

_Proof._ Since $\mathrm{End}_{kG}(W)$ is already a unital ring, it suffices to show that inverses exist for nonzero elements. If $\phi \colon W \to W$ is a nonzero $kG$-equivariant endomorphism, then $\ker \phi$ and $\operatorname{im} \phi$ are subrepresentations of $W$. Moreover, since $\phi \neq 0$, the kernel is not the entire space, and the image is not just $\{0\}$. Therefore, by irreducibility, we must have $\ker \phi = \{0\}$ and $\operatorname{im} \phi = W$. It follows that $\phi$ is invertible.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

A theorem of Frobenius classifies all the possible finite-dimensional division algebras over $\mathbb{R}$; we will only state the theorem here for brevity.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem** (_Frobenius_). Every finite-dimensional division algebra over $\mathbb{R}$ is isomorphic to either the real numbers, the complex numbers, or the quaternions.

</div>

Thus, if $W$ is an irreducible real representation, then $\mathrm{End}_{\mathbb{R}G}(W)$ is either $\mathbb{R}$, $\mathbb{C}$, or $\mathbb{H}$.

- If $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{R}$, then $W$ just has the structure of a $\mathbb{R}$-vector space, so we say $W$ is _real type_.

- If $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{C}$, then we may give $W$ the structure of a $\mathbb{C}$-vector space, so we say that $W$ is _complex type_.

- If $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{H}$, then we may give $W$ the structure of a left $\mathbb{H}$-vector space, so we say that $W$ is _quaternionic type_.

### Real and quaternionic structures

In the previous section, we showed how a real representation $W$ can "ascend" into either a complex or quaternionic representation by means of an isomorphism $\mathbb{C} \to \mathrm{End}_{\mathbb{R}G}(W)$ or $\mathbb{H} \to \mathrm{End}_{\mathbb{R}G}(W)$.

Similarly, a complex representation $V$ can "ascend" to a quaternionic representation or "descend" to a real representation under certain circumstances. We will call the necessary ascent data a _quaternionic structure_ and the necessary descent data a _real structure_ on $V$. To make the situation clearer, we first work in a bit more generality.

Let $k \subseteq k'$ be a (possibly skew) field extension. A representation on a $k$-vector space $W$ can be transformed into a representation on the $k'$-vector space $W^{k'} = W \otimes_k k'$ via a process called _extension of scalars_. Specifically, define the $k'$-action by $\beta \cdot (w \otimes \alpha) = w \otimes \alpha\beta$ and define the $G$-action by $g(w \otimes \alpha) = gw \otimes \alpha$.

The "inverse" of this process transforms a representation on a $k'$-vector space $V$ into a representation on a $k$-vector space $V_{k}$ with the same underlying set, but with a $k$-action $k \to \mathrm{End}(V)$ given by restricting to $k'$-action $k' \to \mathrm{End}(V)$ to $k$. This process is called _restriction of scalars_.

When working with the extension $\mathbb{R} \subset \mathbb{C}$, extension of scalars is called _complexification_, and restriction of scalars is called _realification_.

With these two operations defined, we can rephrase the ascent and descent problems as follows:

- **Ascent**. When is a $kG$-representation $W$ the restriction of scalars of some $k'G$ representation $V$?
- **Descent**. When is a $k'G$-representation $V$ the extension of scalars of some $kG$-representation $W$?

Suitable descent data is described by the following proposition.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition.** Let $k \subseteq k'$ be a Galois field extension. If $V$ is a $k'G$-representation, define a $k$-structure on $V$ to be a equivariant _semilinear_ action of $\Gamma = \mathrm{Gal}(k'/k)$ on $V$; that is, an equivariant action satisfying $\sigma(\alpha v) = \sigma(\alpha)\sigma(v)$ for all $\sigma \in \mathrm{Gal}(k'/k)$, $\alpha \in k$, and $v \in V$. Then the following categories are equivalent:

$$
\{ \text{$kG$-representations} \} \cong \{\text{$k'G$-representations with a $k$-structure}\}.
$$

In particular, given a $k'G$-representation $V$ with a $k$-structure, there is a natural isomorphism $V^\Gamma \otimes_{k} k' \cong V$ given by $v \otimes \lambda \mapsto \lambda v$, where $V^\Gamma$ is the invariant subspace of $V$ under the action of the Galois group.

</div>

To descend from a complex representation $V$ to a real representation, the data needed is an equivariant semilinear action of $\mathrm{Gal}(\mathbb{R}/\mathbb{C})$, which has group presentation $\inner{\sigma \mid \sigma^2 = 1}$. Therefore, the data of a real structure on $V$ is equivalent to the existence of an equivariant map $\sigma \colon V \to V$ such that $\sigma^2 = \mathrm{id}$ and $\sigma(zv) = \overline{z}\sigma(v)$ for all $z \in \mathbb{C}$ and $v \in V$ (this is known as $\mathbb{C}$-_antilinearity_), so we also call such a map a _real structure_. If such a map exists, then $V$ is isomorphic to the complexification of some real representation, and we say that $V$ (or its character $\chi_V$) is _defined over_ $\mathbb{R}$ and is a _real type_ representation.

To ascend from a complex representation $V$ to a quaternionic representation, one needs to equip $V$ with a left $\mathbb{H}$-action which extends the $\mathbb{C}$-action, while remaining compatible with the group action. Denote the ring of $G$-equivariant endomorphisms of $V$ (as an abelian group) by $\mathrm{End}_G(V)$. Then one seeks a ring homomorphism

$$
\mathbb{H} \cong \mathbb{C}\inner{j}/\Big(j^2 + 1, jz - \overline{z}j \text{ (for all $z \in \mathbb{C}$)}\Big) \to \mathrm{End}_G(V)
$$

which extends the $\mathbb{C}$-action $\mathbb{C} \to \mathrm{End}_G(V)$. Since this map is entirely determined by where $j$ is sent, it follows that the existence of such a map is equivalent to the existence of an additive endomorphism $j \colon V \to V$ such that $j^2 = -\mathrm{id}$ and $j(zv) = \overline{z}j(v)$ for all $z \in \mathbb{C}$ and $v \in V$; we call such a map a _quaternionic structure_. If such a map exists, we say that $V$ is a _quaternionic type_ representation.

If $V$ is neither real type or quaternionic type, we say that $V$ is a _complex type_ representation.

### Real-valued characters

If a complex representation $V \cong W \otimes_{\mathbb{R}} \mathbb{C}$ is defined over $\mathbb{R}$, then the matrix elements of each element $g \in G$ are all real, since

$$
\rho_V(g)(e_j \otimes 1) = \rho_W(g)e_j \otimes 1 = \sum_{i = 1}^{n} [\rho_W(g)]_{ij} e_i \otimes 1,
$$

and the matrix elements of $\rho_W(g) \colon W \to W$ are all real. In particular, the character of a complex representation defined over $\mathbb{R}$ will be real-valued. However, it is not the case that every real-valued character is defined over $\mathbb{R}$. As we will shortly see, complex representations with a quaternionic structure also have real-valued characters despite not being defined over $\mathbb{R}$; for this reason we also call such representations _pseudoreal_. To distinguish between these types of representations, we can use the Frobenius-Schur indicator to determine when a complex representation $V$ has a real-valued character, and if it arises from a real or quaternionic structure on $V$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem.** If $V$ be an irreducible complex representation. A nondegenerate equivariant bilinear form exists on $V$ if and only if $\chi_V$ is real-valued.

</div>

_Proof._ First, suppose that that a nondegenerate equivariant bilinear form $b$ exists on $V$. For each $g \in G$, let $e_1(g), \ldots, e_n(g)$ be an eigenbasis of $V$ for $g$ with eigenvalues $\lambda_1(g), \ldots, \lambda_n(g)$. By nondegeneracy, for each each $e_i$, there must exist some $e_j$ such that $b(e_i, e_j) \neq 0$. Since $b$ must either be symmetric or alternating, this also implies $b(e_j, e_i) \neq 0$. Thus, we may partition the set of eigenvectors into "anisotropic" singletons $\{e_i\}$ with $b(e_i, e_i) \neq 0$ and "isotropic" pairs $\{e_i, e_j\}$ with $b(e_i, e_j) \neq 0$ and $b(e_j, e_i) \neq 0$. By equivariance, each anisotropic eigenvector $e_i$ satsifies

$$
b(e_i, e_i) = b(g^{-1}e_i, g^{-1}e_i) = \lambda_i^{-2} \cdot b(e_i, e_i),
$$

which implies that $\lambda_i = \pm 1$. Similarly, by equivariance, each isotropic pair $\{e_i, e_j\}$ satisfies

$$
b(e_i, e_j) = b(g^{-1}e_i, g^{-1}e_j) = \lambda_{i}^{-1} \lambda_{j}^{-1} \cdot b(e_i, e_j).
$$

which implies that $\lambda_i = \lambda_j^{-1}$. Since each eigenvalue has unit norm, this implies that $\lambda_i = \overline{\lambda_j}$, so $\lambda_i + \lambda_j$ is real. Thus,

$$
\chi_V(g) = \sum_{i=1}^{n} \lambda_i(g) = \sum_{\substack{\text{anisotropic} \\ \text{singletons}}} \pm 1 \; + \sum_{\substack{\text{isotropic}\\\text{pairs}}} \lambda_i + \overline{\lambda_{i}},
$$

which is real. Conversely, suppose that $\chi_V$ is real-valued. The dimension of the set of invariants $\mathrm{T}^2(V^\vee)^G$ is given by the inner product of $\chi_{\mathrm{T}^2(V^\vee)}$ with the trivial character $\chi_{\mathrm{triv}}$, so

$$
\dim \mathrm{T}^2(V^\vee)^G = \inner{\chi_{\mathrm{triv}}, \chi_{\mathrm{T}^2(V^\vee)}} = \frac{1}{\abs{G}}\sum_{g \in G} \chi_V(g)^2 = \frac{1}{\abs{G}} \left[\chi_V(1_G)^2 + \sum_{g \neq 1_G} \chi(g)^2 \right] > 0,
$$

since $\chi_V(1_G) = \dim V > 0$ and $\chi_V(g)^2 \geq 0$. Thus, there must exist some equivariant bilinear form on $V$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Thus, if $\mathrm{FS}(\chi_V) = 0$, the representation $V$ does not have a real-valued character and is consequently not defined over $\mathbb{R}$. The two remaining possible values of the indicator correspond to the existence real and quaternionic structures on $V$, as we now show.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem.** Let $V$ be an irreducible complex representation. A nondegenerate equivariant symmetric bilinear form exists if and only if $V$ admits a real structure, and a nondegenerate equivariant alternating bilinear form exists if and only if $V$ admits a quaternionic structure.

</div>

_Proof._ Suppose there exists a nondegenerate equivariant bilinear form $b \colon V \times V \to \mathbb{C}$. Since $b$ must either be symmetric or alternating, we have $b(v, w) = \epsilon b(w,v)$, where $\epsilon = \pm 1$. Now fix an equivariant positive-definite Hermitian form $h \colon V \times V \to \mathbb{C}$. Then the partial evaluation map $h_{\mathrm{R}} \colon V \to V^\vee$ is $\mathbb{C}$-antilinear while $b_{\mathrm{R}} \colon V \to V^\vee$ is $\mathbb{C}$-linear, which implies that the composition $\sigma = b_{\mathrm{R}}^{-1} \circ h_{\mathrm{R}} \colon V \to V$ is an equivariant $\mathbb{C}$-antilinear isomorphism. Thus, $\sigma^2 \colon V \to V$ is a $\mathbb{C}$-_linear_ isomorphism, which means it is equal to a scalar $\lambda \in \mathrm{End}_{\mathbb{C}G}(V) \cong \mathbb{C}$. By the previous construction, we have $b(v, \sigma w) = h(v, w)$, so

$$
h(\sigma v, \sigma w) = b(\sigma v, \sigma^2w) = b(\sigma v, \lambda v) = \lambda\epsilon \cdot b(v, \sigma v) = \lambda\epsilon \cdot h(v, v).
$$

Since $h$ is positive-definite, this implies $\lambda\epsilon > 0$. We now analyze two cases.

- If $b$ is symmetric, $\epsilon = 1$, which implies that $\lambda > 0$. It follows that $\lambda^{1/2}\sigma \colon V \to V$ is a real structure on $V$.
- If $b$ is alternating, $\epsilon = -1$, which implies that $\lambda < 0$. It follows that $\lambda^{1/2}\sigma \colon V \to V$ is a quaternionic structure on $V$.

Since these cases are mutually exclusive and exhaust all possibilites for $b$ and structures on $V$, the reverse implications also hold.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

We summarize this consequences of this theorem in the following table.

<div class="relative w-full overflow-auto" style="scrollbar-width: thin;">

| $\mathrm{FS}(\chi_V)$ | Representation type | What nonzero equivariant bilinear forms exist on $V$? |
| --------------------- | ------------------- | ----------------------------------------------------- |
| $+1$                  | real                | nondegenerate symmetric forms unique up to scaling    |
| $-1$                  | quaternionic        | nondegenerate alternating forms unique up to scaling  |
| $\hphantom{+}0$       | complex             | none                                                  |

</div>

## Classifying irreducible representations

By using complexification and realification, one can create a correspondence between irreducible real representations with irreducible complex representations with the help of the Frobenius-Schur indicator. The following sections illustrate this procedure.

### Complexifying real representations

Given all the irreducible real representations of a finite group $G$, it is natural to wonder if we can somehow determine all the irreducible complex representations of $G$, and if there is relationship between their characters. To do this, we

1. show that every irreducible complex representation occurs in some complexified irreducible real representation, and
2. complexify each irreducible real representation and write it as sum of irreducible complex representations.

Before continuing, recall that the _complex conjugate representation_ $\overline{V}$ has the same underlying set and group action, but has a $\mathbb{C}$-action given by $z \ast v = \overline{z}v$. It is irreducible if and only if $V$ is, and its character satisfies $\chi_{\overline{V}} = \overline{\chi_V}$. Now for the first step, observe that the map

$$

(V_{\mathbb{R}})^{\mathbb{C}} = V_{\mathbb{R}} \otimes_{\mathbb{R}} \mathbb{C} \overset{\cong}{\longrightarrow} V \oplus \overline{V}; \quad \quad v \otimes z \mapsto (z \cdot v) \oplus (\overline{z} \cdot v)


$$

is an isomorphism of complex representations with an inverse given by $v \oplus w \mapsto \tfrac{1}{2} (v + w) \otimes 1 + \tfrac{1}{2i}(v - w) \otimes i$. Let $V_{\mathbb{R}} \cong U_1 \oplus \cdots \oplus U_n$ be the decomposition of the realifcation into irreducible real represenations. Then $V$ occurs as a subrepresentation of $(V_{\mathbb{R}})^{\mathbb{C}} \cong (U_1)^{\mathbb{C}} \oplus \cdots \oplus (U_n)^{\mathbb{C}}$. By irreducibility of $V$, it belongs entirely to one summand $(U_i)^{\mathbb{C}}$, so $V$ occurs in the complexification of some irreducible real representation.

For the second step, let $W$ be an irreducible real representation and let $V \subseteq W^{\mathbb{C}}$ be an irreducible complex subrepresenation. There exists an equivariant complex conjugation map $\sigma \in \mathrm{End}_{\mathbb{C}G} (W^\mathbb{C})$ given by $\sigma(w \otimes z) = w \otimes \overline{z}$; the existence of this just says the complexification is defined over $\mathbb{R}$. Since this map is an automorphism, it follows that $\sigma(V)$ is also an irreducible subrepresentation of $W^\mathbb{C}$, so $V \cap \sigma(V)$ is either $V$ or $\{0\}$. Note that $\sigma(V)$ is isomorphic to the conjugate representation $\overline{V}$, via the map $\sigma(v) \mapsto v$. Indeed, $z\sigma(v) = \sigma(\overline{z}v) \mapsto \overline{z}v$. We now analyze both cases:

<ol>
<li>

Suppose $V \cap \sigma(V) = V$. Then $\sigma$ corestricts to a map $\sigma \in \mathrm{End}_G(V)$ such that $\sigma^2 = \mathrm{id}$ and $\sigma(zv) = \overline{z}\sigma(v)$ for all $z \in \mathbb{C}$ and $v \in V$. It follows that $V$ is defined over $\mathbb{R}$ via the same real structure that defines $W^\mathbb{C}$ over $\mathbb{R}$. In particular, there are isomorphisms

$$
\Phi \colon V^{\sigma} \otimes_{\mathbb{R}} \mathbb{C} \overset{\cong}{\longrightarrow} V; \quad \Psi \colon (W^\mathbb{C})^{\sigma} \otimes_{\mathbb{R}} \mathbb{C} \overset{\cong}{\longrightarrow} W^\mathbb{C}
$$

such that $\Phi$ is the restriction of $\Psi$, viewing $V^{\sigma} \otimes_{\mathbb{R}} \mathbb{C}$ as a subrepresentation of $(W^\mathbb{C})^{\sigma} \otimes_{\mathbb{R}} \mathbb{C}$. However, $(W^\mathbb{C})^{\sigma} \cong W$ is irreducible and $V^\sigma$ is a nonzero real subrepresentation, so $V^\sigma = (W^\mathbb{C})^{\sigma}$. It follows that $W^{\mathbb{C}} = V$, which means $V$ is a real type representation. Furthermore, since $V$ is irreducible, we have

$$
\mathbb{C} \cong \mathrm{End}_{\mathbb{C}G}(V) \cong \mathrm{End}_{\mathbb{C}G}(W^\mathbb{C}) \cong \mathrm{End}_{\mathbb{R}G}(W) \otimes_\mathbb{R} \mathbb{C},
$$

which implies $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{R}$.

</p>

</li>

<li>

Suppose that $V \cap \sigma(V) = \{0\}$. Then $\sigma$ restricts to a complex conjugation map $\sigma \in \mathrm{End}_G(V \oplus \sigma(V))$ as before, so $V \oplus \sigma(V)$ is defined over $\mathbb{R}$ via the same real structure that defines $W^\mathbb{C}$ over $\mathbb{R}$. In particular, there are isomorphisms

$$
\Phi \colon (V \oplus \sigma(V))^{\sigma} \otimes_{\mathbb{R}} \mathbb{C} \overset{\cong}{\longrightarrow} V \oplus \sigma(V); \quad \Psi \colon (W^\mathbb{C})^{\sigma} \otimes_{\mathbb{R}} \mathbb{C} \overset{\cong}{\longrightarrow} W^\mathbb{C}
$$

such that $\Psi$ restricts to $\Phi$. But $(W^\mathbb{C})^{\sigma} \cong W$ is irreducible and $(V \oplus \sigma(V))^\sigma$ is a nonzero subrepresentation, so $(V \oplus \sigma(V))^\sigma = (W^\mathbb{C})^{\sigma}$. Thus $W^{\mathbb{C}} = V \oplus \sigma(V)$, which is reducible. In particular, we have

$$
\dim_{\mathbb{C}} \mathrm{End}_{\mathbb{C}G} (W^\mathbb{C}) = \dim_{\mathbb{C}} \mathrm{End}_{\mathbb{C}G} (V \oplus \overline{V}) = \inner{\chi_V + \chi_{\overline{V}}, \chi_V + \chi_{\overline{V}}} =
\begin{cases}
2 &\text{if } V \not\cong \overline{V} \\
4 &\text{if } V \cong \overline{V} \\
\end{cases}.
$$

Also, since $W^{\mathbb{C}}$ is reducible, we have $\mathrm{End}_{\mathbb{R}G}(W) \otimes_{\mathbb{R}} \mathbb{C} \cong \mathrm{End}_{\mathbb{C}G}(W^{\mathbb{C}}) \not\cong  \mathbb{C}$. Thus, $\mathrm{End}_{\mathbb{R}G}(W)$ must be $\mathbb{C}$ or $\mathbb{H}$, which yields two subcases.

<ul>

<li>

If $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{C}$, then $\mathrm{End}_{\mathbb{C}G}(W^{\mathbb{C}}) \cong \mathbb{C} \otimes_{\mathbb{R}} \mathbb{C}$, which is a $2$-dimensional $\mathbb{C}$-vector space. Thus $V \not\cong \overline{V}$, which means that

$$
\mathrm{End}_{\mathbb{C}G}(W^{\mathbb{C}}) \cong \mathrm{End}_{\mathbb{C}G}(V \oplus \overline{V}) \cong \mathrm{End}_{\mathbb{C}G}(V) \times \mathrm{End}_{\mathbb{C}G}(\overline{V}) \cong \mathbb{C} \times \mathbb{C}.
$$

Furthermore, since $V \not\cong \overline{V}$, the character $\chi_V$ is not real-valued (or else $\chi_V$ would equal $\chi_{\overline{V}}$). Thus $V$ is a complex type representation.

</li>
<li>

If $\mathrm{End}_{\mathbb{R}G}(W) \cong \mathbb{H}$, then $\mathrm{End}_{\mathbb{C}G}(W^{\mathbb{C}}) \cong \mathbb{H} \otimes_{\mathbb{R}} \mathbb{C}$, which is a $4$-dimensional $\mathbb{C}$-vector space. Thus $V \cong \overline{V}$, which means that

$$
\mathrm{End}_{\mathbb{C}G}(W^{\mathbb{C}}) \cong \mathrm{End}_{\mathbb{C}G}(V \oplus V) \cong \mathrm{Mat}_{2 \times 2} (\mathbb{C}).
$$

Furthermore, since $V \cong \overline{V}$, the character $\chi_V$ is real-valued (since $\chi_V$ equals $\chi_{\overline{V}}$). Thus $V$ is a quaternionic type representation.

</li>
</ul>

</li>
</ol>

We now relate the character of $W$ to the character of $V$. For a real type representation, $V \cong W^\mathbb{C}$, so the character $\chi_W$ is equal to the character on the complexification $\chi_V$. On the other hand, for complex and quaternionic type representations, $\chi_{W^\mathbb{C}} \cong \chi_{V} + \chi_{\overline{V}} = 2\Re \chi_V$ (in the quaternionic case, this is just $2\chi_V$, since $\chi_V$ is real-valued). To summarize, we may build a dictionary between real and complex representations, where $W$ is an irreducible real representation and $V$ is any irreducible real subrepresentation of $W^{\mathbb{C}}$:

<div class="relative w-full overflow-auto" style="scrollbar-width: thin;">

| $\mathrm{End}_{\mathbb{R}G}(W)$ | $\mathrm{End}_{\mathbb{C}G}(V)$          | $W^\mathbb{C}$          | $\chi_W$      | Is $\chi_V$ real? | Is $V$ defined over $\mathbb{R}$? | $\mathrm{FS}(\chi_V)$ |
| ------------------------------- | ---------------------------------------- | ----------------------- | ------------- | ----------------- | --------------------------------- | --------------------- |
| $\mathbb{R}$                    | $\mathbb{C}$                             | $V$                     | $\chi_V$      | **yes**           | **yes**                           | $+1$                  |
| $\mathbb{C}$                    | $\mathbb{C} \times \mathbb{C}$           | $V \oplus \overline{V}$ | $2\Re \chi_V$ | **no**            | **no**                            | $\hphantom{+}0$       |
| $\mathbb{H}$                    | $\mathrm{Mat}_{2 \times 2} (\mathbb{C})$ | $V \oplus V$            | $2\chi_V$     | **yes**           | **no**                            | $-1$                  |

</div>

### Realifying complex representations

We can also solve the inverse problem: given all the irreducible complex representations of a finite group $G$, how can we determine all the irreducible real representations of $G$, and what is the relationship between their characters? To do this, we

1. show that every irreducible real representation occurs in some realifed irreducible complex representation, and
2. realify each irreducible complex representation and write it as sum of irreducible real representations.

Again, the first step is simple: first, note that for any irreducible real representation $W$, the complexification $W^{\mathbb{C}}$ when treated as a real representation decomposes as

$$
(W^{\mathbb{C}})_{\mathbb{R}} = (W \otimes_\mathbb{R} \mathbb{C})_{\mathbb{R}} = W \otimes_\mathbb{R} (\mathbb{R} \oplus i\mathbb{R}) = (W \otimes_\mathbb{R} \mathbb{R}) \oplus (W \otimes_{\mathbb{R}} i\mathbb{R}).
$$

Let $W^{\mathbb{C}} \cong U_1 \oplus \cdots \oplus U_n$ be the decomposition of $W^{\mathbb{C}}$ into irreducible complex representations. Then $W \cong W \otimes_\mathbb{R} \mathbb{R}$ occurs as a subrepresentation of $(W^\mathbb{C})_{\mathbb{R}} \cong (U_1)_{\mathbb{R}} \oplus \cdots \oplus (U_n)_{\mathbb{R}}$. By irreducibility of $W$, it must belong entirely to one summand $(U_i)_{\mathbb{R}}$, so $W$ occurs in the realification of some irreducible complex representation.

For the second step, let $V$ be an irreducible complex representation and let $W \subseteq V_{\mathbb{R}}$ be an irreducible real subrepresentation. The imaginary unit $i \in \mathbb{C}$ acts on $V_{\mathbb{R}}$ by "remembering" the complex action on $V$, yielding an equivariant automorphism $i \colon V_{\mathbb{R}} \to V_{\mathbb{R}}$. It follows that $iW$ is also irreducible, so $W \cap iW$ is either $W$ or $\{0\}$. We analyze both cases.

<ol>

<li>

Suppose $W \cap iW = W$. Then $i$ corestricts to a map $i \in \mathrm{End}_G(W)$ which satisfies $i^2 = -\mathrm{id}$, so $W$ can be given the structure of a nonzero complex subrepresentation of $V$. By irreducibility, $V$ must equal $W$. It also follows that $\mathrm{End}_{\mathbb{R}G}(W)$ must be equal to $\mathbb{C}$ or $\mathbb{H}$, which yields two subcases.

- An isomorphism $\mathbb{H} \cong \mathrm{End}_{\mathbb{R}G}(W) \cong \mathrm{End}_{\mathbb{R}G}(V)$ is the same thing as a quaternionic structure $\mathbb{H} \to \mathrm{End}_{G}(V)$ on $V$, so the latter case occurs if and only if $V$ is of quaternionic type.

- An isomorphism $\mathbb{C} \cong \mathrm{End}_{\mathbb{R}G}(W) \cong \mathrm{End}_{\mathbb{R}G}(V)$ is the same thing as saying $V$ has a complex structure but not a quaternionic structure, which means $V$ is of complex type.

</li>

<li>

Suppose $W \cap iW = \{0\}$. Then $i$ corestricts to a map $i \in \mathrm{End}_G(W \oplus iW)$ which satisfies $i^2 = -\mathrm{id}$, so $W \oplus iW$ can be given the structure of a nonzero complex subrepresenation of $V$. By irreducibility, $V$ must equal $W \oplus iW$. Thus, we have the isomorphism of complex representations

$$
V \cong W \oplus iW \cong (W \otimes_{\mathbb{R}} \mathbb{R}) \oplus (W \otimes_{\mathbb{R}} i\mathbb{R}) \cong W^{\mathbb{C}}.
$$

Note that the individual summands $W$ and $iW$ are _not_ complex subrepresentations, but the direct sum (as real representations) is a complex representation, as the action of $i$ moves between summands. Since $V$ is irreducible, we have

$$
\mathbb{C} \cong \mathrm{End}_{\mathbb{C}G}(V) \cong \mathrm{End}_{\mathbb{C}G}(W^\mathbb{C}) \cong \mathrm{End}_{\mathbb{R}G}(W) \otimes_\mathbb{R} \mathbb{C},
$$

which implies $\mathrm{End}_{\mathbb{C}G}(W) = \mathbb{R}$. This is not isomorphic to $\mathrm{End}_{\mathbb{R}G}(V)$ as in the last case; instead, we have

$$
\mathrm{End}_{\mathbb{R}G}(V) \cong \mathrm{End}_{\mathbb{R}G}(W \oplus iW) \cong \mathrm{End}_{\mathbb{R}G}(W \oplus W) \cong \mathrm{Mat}_{2 \times 2}(\mathbb{R}).
$$

Finally, since $V \cong W^{\mathbb{C}}$ is the complexification of a real representation, it is of real type.

</li>

</ol>

We now relate the character of $W$ to the character of $V$. For a real type representation, $V \cong W^\mathbb{C}$, so the character $\chi_W$ is equal to the character on the complexification $\chi_V$. On the other hand, for complex and quaternionic type representations, $V \cong W$, so assign an eigenbasis $e_1(g), \ldots, e_n(g) \in V$ to each $g \in G$ and let $g e_k = (x_k + iy_k)e_k$. Since $V_{\mathbb{R}}$ has basis $e_1(g), ie_1(g), \ldots, e_n(g), ie_n(g)$, the matrix elements for $g$ on $W$ is

$$
\begin{bmatrix}
x_1 & -y_1 & & & \\
y_1 & \hphantom{+}x_1 & & & \\
& & \ddots & & \\
& & & x_n & -y_n \\
& & & y_n & \hphantom{+}x_n
\end{bmatrix}.
$$

It follows that the real character is $\chi_W = 2 \Re \chi_V$ (in the quaternionic case, this is just $2\chi_V$, since $\chi_V$ is real-valued). To summarize, we may build another dictionary between complex and real representations, where $V$ is an irreducible complex representation and $W$ is any irreducible real subrepresentation of $V_{\mathbb{R}}$:

<div class="relative w-full overflow-auto" style="scrollbar-width: thin;">

| $\mathrm{End}_{\mathbb{R}G}(W)$ | $\mathrm{End}_{\mathbb{R}G}(V)$         | $V_\mathbb{R}$ | $\chi_W$      | Is $\chi_V$ real? | Is $V$ defined over $\mathbb{R}$? | $\mathrm{FS}(\chi_V)$ |
| ------------------------------- | --------------------------------------- | -------------- | ------------- | ----------------- | --------------------------------- | --------------------- |
| $\mathbb{R}$                    | $\mathrm{Mat}_{2 \times 2}(\mathbb{R})$ | $W \oplus iW$  | $\chi_V$      | **yes**           | **yes**                           | $+1$                  |
| $\mathbb{C}$                    | $\mathbb{C}$                            | $W$            | $2\Re \chi_V$ | **no**            | **no**                            | $\hphantom{+}0$       |
| $\mathbb{H}$                    | $\mathbb{H}$                            | $W$            | $2\chi_V$     | **yes**           | **no**                            | $-1$                  |

</div>
