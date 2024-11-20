---
title: "The Snake Morphism and Long Exact Sequences"
date: 2024-11-17
length: "30 min"
---

The snake lemma is a fundamental tool of homological algebra which is primarily used in the construction of the homology long exact sequence. It's proof, like many others in homological algebra, amounts to a diagram chase<!--more-->. Although simple, the act of diagram chasing does not immediately give insight into why the snake lemma must be true. In this post, we aim to make the Snake Lemma more apparent and clarify its application to the long exact sequence.

## Preliminaries

For simplicity, we will work in the category $\mathbf{Ab}$ of abelian groups, although the result holds more generally for any abelian category. Recall that a (finite) **chain complex** is a sequence

$$
A_0 \overset{\phi_0}{\longrightarrow} A_1 \overset{\phi_1}{\longrightarrow} \cdots \overset{\phi_{n-2}}{\longrightarrow} A_{n-1} \overset{\phi_{n-1}}{\longrightarrow} A_n
$$

of abelian groups and morphisms such that the composition of consecutive morphisms is zero. In particular, this implies that the image of one morphism is contained in the kernel of the subsequent morphism. The sequence is called **exact** if for each $k$, we have $\operatorname{im} \phi_k = \ker \phi_{k+1}$. A **short exact sequence** is an exact sequence of the form $0 \to A \to B \to C \to 0$, the data of which is equivalent to stating that

1.  $A$ is a subobject of $B$ and
2.  $C$ is the corresponding quotient object of $B$, that is, $C \cong B/A$.

In other words, a short exact sequence is really just a way to "decompose" $B$ into two related pieces. A simple example of this that we will use to build intuition is the sequence $0 \to \mathbb{Z} \to \mathbb{R} \to \mathbb{S}^{1} \to \mathbb{0}$, illustrated below.

<div>
  <tikz path="covering_map" desktop="1.5" mobile="1"></tikz>
</div>

## The Snake Morphism

Let $B_1$ and $B_2$ be abelian groups. For each $i \in \{1, 2\}$, let $A_i \leq B_i$ be a subobject of $B_i$, and $C_i = B_i / A_i$ be the corresponding quotient object. Suppose that $\psi \colon B_1 \to B_2$ is a morphism which "respects the decomposition" of each $B_i$, meaning that $\psi$ maps $A_1$ to $A_2$, so that it also induces a map between $C_1$ and $C_2$. In our example, we may take $B_i = \mathbb{R}$ and consider the "multiplication-by-$n$" map $n_{\times} \colon \mathbb{R} \to \mathbb{R}$. This gives us a commutative diagram

$$
\begin{CD}
0 @>>> \mathbb{Z} @>>> \mathbb{R} @>>> \mathbb{S}^1 @>>> 0 \\
@. @Vn_{\times}VV @Vn_{\times}VV @Vn_{\times}VV @. \\
0 @>>> \mathbb{Z} @>>> \mathbb{R} @>>> \mathbb{S}^1 @>>> 0
\end{CD}
\quad.
$$

A natural question is to ask how these three multiplication maps relate to each other. Note that while the middle map is an isomorphism, the left map is only injective and the right map is only surjective. The deviation from being an isomorphism is can therefore measured by the cokernel $\operatorname{coker} (n_\times \colon \mathbb{Z} \to \mathbb{Z})$ and the kernel $\ker(n_\times \colon \mathbb{S}^1 \to \mathbb{S}^1)$. Note that we may relabel the top sequence, replacing the left mutliplication map by an inclusion $\iota$ as follows:

$$
\begin{CD}
0 @>>> n\mathbb{Z} @>>> \mathbb{R} @>>> \mathbb{R}/n\mathbb{Z} @>>> 0 \\
@. @V{\iota}VV @| @V{\pi}VV @. \\
0 @>>> \mathbb{Z} @>>> \mathbb{R} @>>> \mathbb{R}/\mathbb{Z} @>>> 0
\end{CD}
\quad.
$$

Since $\mathbb{Z}$ corresponds to the zero subgroup in $\mathbb{R}/\mathbb{Z}$, the kernel of $\pi$ is what you get if you _pull back_ (since the middle map is the identity, this isn't strictly necessary) the "larger" group $\mathbb{Z}$ up into $\mathbb{R}$ and then quotient by the "smaller" group $n\mathbb{Z}$. It's clear this does not depend on the ambient group; for example, we obtain the same kernel if we replace $\mathbb{R}$ by $\mathbb{Z}$ in the above diagram. To summarize, $\ker(n_\times \colon \mathbb{S}^1 \to \mathbb{S}^1) \cong \operatorname{coker} (n_\times \colon \mathbb{Z} \to \mathbb{Z})$, which means the deviations of the left and right maps from being isomorphism are in some sense "the same". One of the assertions of the Snake Lemma is that in such a situation, there is always a connection between the cokernel and kernel, given by a map known as the _snake morphism_.

To show how this arises, we state a lemma which captures the ideas discussed for the example given earlier.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Lemma.** For $i \in \{1, 2\}$, let $B_i$ be an abelian group, and $A_i \leq B_i$ be a subgroup. If $\phi \colon B_1 \to B_2$ is a homomorphism which also maps $A_1$ to $A_2$, then $\phi$ induces a homomorphism $B_1/A_1 \to B_2/A_2$ such that the diagram

$$
\begin{CD}
0 @>>> A_1 @>>> B_1 @>>> B_1/A_1 @>>> 0 \\
@. @VVV @V{\phi}VV @VVV @. \\
0 @>>> A_2 @>>> B_2 @>>> B_2/A_2 @>>> 0
\end{CD}
$$

commutes. Furthermore, $\ker (B_1/A_1 \to B_2/A_2) = \phi^{-1}(A_2)/A_1.$

</div>

Reapplying the first part of this lemma to the map $\phi^{-1}(A_2) \overset{\phi}{\to} A_2$, which carries $A_1$ to $\phi(A_1)$, we obtain a map

$$
\delta \colon \ker(B_1/A_1 \to B_2/A_2) \to \operatorname{coker}(A_1 \to A_2); \quad \quad [b]_{A_1} \longmapsto [\phi(b)]_{\phi(A_1)},
$$

where the notation $[\cdot]_H$ means the equivaluence class of an element in the quotient by a subgroup $H$. Note that $\delta$ is _not_ just the restriction of the induced map on the right, which would take $[b]_{A_1} \to [\phi(b)]_{A_2}$. This is just the zero map!

In other words, $\delta$ is much like the map induced by $\phi$, but in some sense "preserves" as much information as the original map $\phi$ will allow. For example, if $\phi$ is an isomorphism, then $\delta$ is also an isomorphism, whereas the induced map on the quotients may not be. This notion is formalized by the second assertion of the Snake Lemma, which states that the kernels and cokernels of the maps induced by $\phi$ join to form an exact sequence.

## The Snake Lemma

We now state and prove the complete Snake Lemma.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem.** Consider a commutative diagram of abelian groups

$$
\begin{CD}
 @. A_1 @>\iota_1>> B_1 @>\pi_1>> C_1 @>>> 0 \\
@. @VV\alpha V @VV\beta V @VV\gamma V \\
0 @>>> A_2 @>\iota_2>> B_2 @>\pi_2>> C_2
\end{CD}
\quad.
$$

If the rows are exact, then the diagram extends to a commutative diagram

<div>
  <tikz path="snake_lemma" desktop="1.5" mobile="1.2"></tikz>
</div>

where $\overline{\vphantom{+}\iota_1}$ and $\overline{\vphantom{+}\iota_2}$ are the maps induced by $\iota$, and $\overline{\vphantom{+}\pi_1}$, and $\overline{\vphantom{+}\pi_2}$ are the maps induced by $\pi$. Moreover, there exists a natural _connecting homomorphism_ $\delta \colon \ker \gamma \to \operatorname{coker} \alpha$ such that

$$
\ker \alpha \overset{\overline{\vphantom{+}\iota_1}}{\longrightarrow} \ker \beta \overset{\overline{\vphantom{+}\pi_1}}{\longrightarrow} \ker \gamma \overset{\delta}{\longrightarrow} \operatorname{coker} \alpha \overset{\overline{\vphantom{+}\iota_2}}{\longrightarrow} \operatorname{coker} \beta \overset{\overline{\vphantom{+}\pi_2}}{\longrightarrow} \operatorname{coker} \gamma
\tag{$\star$}
$$

is an exact sequence.

</div>

_Proof_. It is more or less straightforward to show that $\ker \alpha \overset{\overline{\vphantom{+}\iota_1}}{\longrightarrow} \ker \beta \overset{\overline{\vphantom{+}\pi_1}}{\longrightarrow} \ker \gamma$ and $\operatorname{coker} \alpha \overset{\overline{\vphantom{+}\iota_2}}{\longrightarrow} \operatorname{coker} \beta \overset{\overline{\vphantom{+}\pi_2}}{\longrightarrow} \operatorname{coker} \gamma$ are chain complexes, so we will show that these are both exact.

<ol>
<li>

To show that the first complex is exact at $\ker \beta$, note that we may write $\ker \overline{\vphantom{+}\pi_1} = \ker \pi_1 \cap \ker \beta$. However, by exactness, we have $\ker \pi_1 = \operatorname{im} \iota_1$, which implies

$$
\operatorname{im} \iota_1 \cap \ker \beta = \iota_1 (\iota_1^{-1} (\ker \beta)) =\iota_1\big((\beta \circ\iota_1)^{-1} \{0\}\big) = \iota_1\big((\iota_2 \circ \alpha)^{-1}\{0\}\big) = \iota_1(\ker\alpha),
$$

so $\ker \overline{\vphantom{+}\pi_1} = \operatorname{im} \overline{\vphantom{+}\iota_1}$.

</li>

<li>

To show that the second complex is exact at $\operatorname{coker} \beta$, note that by exactness, we have $\ker \pi_2 = \operatorname{im} \iota_2$, which implies

$$
\ker \overline{\vphantom{+}\pi_2} = \frac{\pi_2^{-1} (\operatorname{im} \gamma)}{\operatorname{im} \beta} = \frac{\pi_2^{-1} (\operatorname{im} (\gamma \circ \pi_1))}{\operatorname{im} \beta} = \frac{\pi_2^{-1} (\operatorname{im} (\pi_2 \circ \beta))}{\operatorname{im} \beta} = \frac{\operatorname{im} \beta + \ker \pi_2}{\operatorname{im} \beta} = \frac{\operatorname{im} \beta + \operatorname{im} \iota_2}{\operatorname{im} \beta}  = \operatorname{im}  \overline{\vphantom{+}\iota_2}.
$$

</li>
</ol>

We now construct the connecting homomorphism $\delta$ and show that $(\star)$ is exact (we omit the proof of naturality). Since $\pi_1$ is surjective, the image of $\gamma$ is contained in the image of $\pi_2$, which means we may as well replace $C_2$ with $B_2/A_2$ without disturbing $\ker \gamma$. Therefore, we may apply the previous lemma to the diagram

$$
\begin{CD}
 @. A_1 @>>> B_1 @>>> B_1/\iota_1(A_1) @>>> 0 \\
@. @VVV @VVV @VVV @. \\
0 @>>> A_2 @>>> B_2 @>>> B_2/A_2
\end{CD}\quad,
$$

which yields $\ker \gamma = \beta^{-1}(A_2)/\iota_1(A_1)$, viewing $A_2$ as a subgroup of $B_2$. Furthermore, the map $\beta^{-1}(A_2) \to A_2$ takes $\iota_1(A_1)$ to $A_2$, which yields the connecting homomorphism $\delta \colon \ker \gamma \to \operatorname{coker} \alpha$. We now show that $(\star)$ is exact.

<ol>
<li>

To show that $(\star)$ is exact at $\ker \gamma$, we use the lemma once more and write

$$
\ker \delta =  \frac{\beta^{-1}\big(\!\operatorname{im} (\iota_2 \circ \alpha)\big)}{\operatorname{im} \iota_1} = \frac{\beta^{-1}\big(\!\operatorname{im} (\beta \circ \iota_1)\big)}{\operatorname{im} \iota_1} = \frac{\operatorname{im}\iota_1 + \ker \beta}{\operatorname{im} \iota_1} = \operatorname{im}\overline{\vphantom{+}\pi_1}.
$$

</li>

<li>

To show that $(\star)$ is exact at $\operatorname{coker} \alpha$, we apply the lemma again, which yields

$$
\operatorname{im} \delta = \frac{\operatorname{im}\alpha + \beta(\beta^{-1} (A_2))}{\operatorname{im}\alpha} = \frac{\operatorname{im} \beta \cap A_2}{\operatorname{im} \alpha}= \frac{\iota_2^{-1}(\operatorname{im} \beta)}{\operatorname{im} \alpha} = \ker \overline{\vphantom{+}\iota_2}.
$$

</li>

</ol>

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

## The Homology Long Exact Sequence

The most well-known application of the snake lemma is in the construction of the homology long exact sequence. We give a brief overview of its construction and give a visual description of what the connecting morphism $\delta$ does in this scenario.