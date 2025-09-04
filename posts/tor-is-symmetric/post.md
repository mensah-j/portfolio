---
title: "$\\mathrm{Tor}_i(-, -)$ is symmetric"
displayTitle: "Tor is symmetric"
date: 2025-09-03
length: "∼1000 words"
---

The $\mathrm{Tor}$ functors, which are ubiquitous in algebraic topology and more generally homological algebra, encode the failure of the tensor product to be an exact functor. As a derived functor, one typically defines<!--more--> $\mathrm{Tor}_i^R(M, N)$ by taking a projective resolution of the first argument $M$ and computing the homology of the tensored chain complex. Surprisingly, this seemingly asymmetric process produces a _symmetric_ bifunctor; in this short note we give a short explanation of why this is so and describe the natural isomorphism $\mathrm{Tor}_i^R(M, N) \cong \mathrm{Tor}_i^R(N, M)$.

For what follows, we let $R$ be a commutative ring.

## Projective resolutions and $\mathrm{Tor}$ functors

In order to define the $\mathrm{Tor}$ functors, we first need to fix a _projective resolution_ $\mathscr{P}_{\bullet}(M)$ for every $R$-module $M$. For the unacquainted, this means we first regard
$L$ as the chain complex $L_{\bullet}$ given by

$$
M_{i} =
\begin{cases}
M &\text{if } i = 0 \\
0 &\text{if } i \neq 0
\end{cases}
$$

and choose a complex of projective modules $\mathscr{P}_{\bullet}(M)$ _quasi-isomorphic_ to $M_{\bullet}$ (which we denote using $\sim$). By quasi-isomorphic, we mean that both complexs have isomorphic homology, which in particular implies that $\mathscr{P}_\bullet(M)$ is exact at all positive degrees except possibly $0$.

Finally, given an $R$-module $N$, we define $\mathrm{Tor}_{i}(M, N) = \mathrm{H}_{i}(\mathscr{P}_{\bullet}(M) \otimes_R N)$ to be the homology of the tensored complex (which is no longer necessarily exact). It is a fundamental result of homological algebra that this process does _not_ depend on the specific choice of projective resolutions: any two choices result in naturally isomorphic functors. Furthermore, since $- \otimes_R -$ is symmetric, one obtains a naturally isomorphic functor if one chooses to use the left tensor product $N \otimes_R -$ instead.

The failure for $\mathscr{P}_{\bullet}(M) \otimes_R N$ to be exact is because $- \otimes_R N$ is typically only _right_ exact. As it is both instructive and useful for later arguments, we highlight the specific obstruction to a right exact functor preserving long exact sequences.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Proposition.** Let $F \colon \mathbf{Mod}_{R} \to \mathbf{Mod}_{R}$ be a right exact functor and let $(A_{\bullet}, \mathrm{d}_\bullet)$ be a chain complex of $R$-modules. If $A_\bullet$ is exact at the $i$th degree, then

$$
\mathrm{H}_i(F(A_\bullet)) \cong \ker(F(\mathrm{d} A_i \hookrightarrow A_{i-1})),
$$

where $\mathrm{d} A_i = \operatorname{im} \mathrm{d}_i$ is the image of the $i$th differential.

</div>

_Proof_. By inserting the images of each differential, we obtain a short exact sequence $0 \to \mathrm{d}A_{i+1} \to A_i \to \mathrm{d}A_i \to 0$ fitting into the diagram

<div>
<tikz path="splice" desktop="1.45" mobile="1"></tikz>
</div>

Since $F$ is right exact, $F(A_{i+1}) \twoheadrightarrow F(\mathrm{d}A_{i+1})$ is surjective, and $F(\mathrm{d}A_{i+1}) \to F(A_i) \to F(\mathrm{d}A_i) \to 0$ is exact. Consider the diagram

<div>
<tikz path="splice_functor" desktop="1.45" mobile="1"></tikz>
</div>

By exactness and surjectivity, we have $\ker \big(F(A_i) \to F(\mathrm{d}A_i)\big) = \operatorname{im} \big(F(\mathrm{d}A_{i+1}) \to F(A_i)\big) = \operatorname{im} F(\mathrm{d}_{i+1})$. Finally, since $F(A_i) \to F(\mathrm{d}A_{i})$ is also surjective, it follows that

$$
\ker\big(F(\mathrm{d} A_i) \to F(A_{i-1})\big) \cong \ker\left(\frac{F(A_i)}{\operatorname{im} F(\mathrm{d}_{i+1})} \to F(A_{i-1})\right) = \frac{\ker F(\mathrm{d}_i)}{\operatorname{im} F(\mathrm{d}_{i+1})} = \mathrm{H}_i(F(A_\bullet)).
$$

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

In other words, for all $i > 0$, the preceding proposition says that $\mathrm{Tor}_i^R(M, N)$ measures the failure of $- \otimes_R N$ to preserve the injectivity of the map $\mathrm{d}P_i \hookrightarrow P_{i-1}$ for any given projective resolution $P_\bullet$ of $M$.

## Symmetry of $\mathrm{Tor}^R_i(-, -)$

To show that $\mathrm{Tor}_i$ is symmetric, we split into cases based on whether or not $i$ is positive or not. For $i = 0$, note that by right-exactness, we have

$$
\mathrm{Tor}_0^R(M, N) = \operatorname{coker}(\mathscr{P}_1(M) \otimes_R N \to \mathscr{P}_1(M) \otimes_R N) = \operatorname{coker}(\mathscr{P}_1(M) \to \mathscr{P}_0(M)) \otimes_R N \cong M \otimes_R N,
$$

since $\mathscr{P}_\bullet(M) \sim M$. Since the tensor product is symmetric, it follows that

$$
\mathrm{Tor}_0^R(M, N) \cong M \otimes_R N \cong N \otimes_R M \cong \mathrm{Tor}_0^R(N, M).
$$

For $i > 0$, we take projective resolutions of both arguments. Let $P_\bullet \simeq M$ and $Q_\bullet \simeq N$ be projective resolutions of $M$ and $N$; we show that ${\mathrm{H}_i(P_\bullet \otimes_R N) \cong \mathrm{H}_i(M \otimes_R Q_\bullet)}$. By the previous proposition, for all $i > 0$ we have

$$
\mathrm{H}_i(M \otimes_R Q_\bullet) \cong \ker \big(M \otimes_R \mathrm{d}Q_i \to M \otimes_R Q_{i-1}\big).
$$

The trick now is to realize that $\mathrm{Tor}$ can _also_ measure the failure for $M \otimes_R -$ to preserve injections in a second way: the $\mathrm{Tor}$ long exact sequence. To see, take the inclusion $\mathrm{d}Q_{i} \hookrightarrow Q_{i-1}$ and "complete" it to a short exact sequence. Then tensoring with $P_\bullet$ yields a short exact sequences of complexes

$$
0 \to P_\bullet \otimes_R \mathrm{d}Q_{i} \to P_\bullet \otimes_R Q_{i-1} \to P_\bullet \otimes_R \mathrm{d}Q_{i-1} \to 0. \tag{$\star$}
$$

Applying the zig-zag lemma yields the _$\mathrm{Tor}$ long exact sequence_, which ends with

$$
\cdots \to \underbrace{\mathrm{Tor}_{1}^R(M, Q_{i-1})}_{= \, 0} \to \mathrm{Tor}_{1}^R(M, \mathrm{d}Q_{i-1}) \to M \otimes_R \mathrm{d}Q_{i} \to M \otimes_R Q_{i-1} \to M \otimes_R \mathrm{d}Q_{i-1} \to 0.
$$

By flatness, the first term vanishes. It follows by exactness that ${\ker \big(M \otimes_R \mathrm{d}Q_i \to M \otimes_R Q_{i-1}\big) \cong \mathrm{Tor}_1^R(M, \mathrm{d}Q_{i-1})}$. To finish the argument, we prove a simple lemma involving the suspension of a chain complex. Recall that for a chain complex $(M_\bullet, \mathrm{d}_\bullet)$, the _suspension_ $(\Sigma M_\bullet,  \Sigma \mathrm{d}_\bullet)$ is defined by $\Sigma M_i = M_{i-1}$ and $\Sigma \mathrm{d}_i = \mathrm{d}_{i-1}$.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Lemma.** Let $0 \hspace{-0.6pt} \to \hspace{-0.6pt} L_\bullet \hspace{-0.6pt} \to \hspace{-0.6pt} M_\bullet \hspace{-0.6pt} \to \hspace{-0.6pt} N_\bullet \hspace{-0.6pt} \to \hspace{-0.6pt} 0$ be an exact sequence of chain complexes. If $M_\bullet$ is acyclic, then $N \sim \Sigma L$.

</div>

_Proof._ The connecting homomorphism of the zig-zag lemma provides a natural isomorphism $\delta \colon \mathrm{H}_{i}(N_\bullet) \to \mathrm{H}_{i-1}(L_\bullet)$, since $H_i(M_\bullet) = 0$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

Applying this lemma to $(\star)$ yields a chain of quasi-isomorphisms

$$
P_\bullet \otimes_R N = P_\bullet \otimes_R \mathrm{d}Q_0 \sim \Sigma (P_\bullet \otimes_R \mathrm{d}Q_1) \sim \Sigma^2 (P_\bullet \otimes_R \mathrm{d}Q_{2}) \sim \cdots \sim \Sigma^{i-1}(P_\bullet \otimes_R \mathrm{d}Q_{i-1}) \sim \cdots
$$

Finally, taking the $i$th homology of the first and $(i-1)$th term yields

$$
\mathrm{H}_i(P_\bullet \otimes_R N) \cong \mathrm{H}_1(P_\bullet \otimes \mathrm{d}Q_{i - 1}) = \mathrm{Tor}_1^{R}(M, \mathrm{d}Q_{i-1}) \cong  \ker \big(M \otimes_R \mathrm{d}Q_i \to M \otimes_R Q_{i-1}\big) \cong \mathrm{H}_i(M \otimes_R Q),
$$

so $\mathrm{Tor}_i^R(-, -)$ is symmetric for all $i > 0$.
