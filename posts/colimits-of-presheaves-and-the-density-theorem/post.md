---
title: "Colimits of presheaves and the density theorem"
date: 2025-09-30
length: "∼1000 words"
---

The goal of this short note is to show how to compute the limit or colimit of a diagram of presheaves, and prove that every presheaf can be written as the colimit of representable<!--more--> presheaves, a result known as the _density theorem_.

## Limits and colimits of presheaves

Let $I$ and $\mathscr{D}$ be categories. Recall that a limit cone of a diagram $F \in [I, \mathscr{D}]$ is the same thing as a universal morphism from the _diagonal functor_

$$
\Delta \colon \mathscr{D} \to [I, \mathscr{D}]; \quad \quad Y \overset{\Delta}{\longmapsto} (i \mapsto Y)
$$

to $F$. If a limit exists for each diagram, then they may be assembled into a right adjoint $\lim_I^{\mathscr{D}} \colon [I, \mathscr{D}] \to \mathscr{D}$ to $\Delta$. This functor takes a diagram to the apex of its limiting cone in a _functorial_ way. The rest of the cone can be recovered from the counit $\epsilon$ of the adjunction $\Delta \dashv \lim_I$: for each diagram $F$, its limiting cone is $(\lim_I F, \epsilon_F)$. We call such a functor a _limit_ functor, which is unique up to natural isomorphism if it exists.

To compute the limit or colimit of a diagram of presheaves, we make use the fact that a diagram of presheaves is equivalent to a presheaf of diagrams, and then compute limits objectwise. This equivalence is a consequence of general fact related to currying, which we state without proof.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-4">

**Proposition.** Let $\mathscr{A}, \mathscr{B}, \,\mathscr{C}$ be categories. Then there exists an isomorphism of categories

$$
[\mathscr{A}, [\mathscr{B, C}]] \xrightarrow{\mathrm{swap}_{\mathscr{A}, \mathscr{B}}} [\mathscr{B}, [\mathscr{A}, \mathscr{C}]]
$$

given by $[\mathrm{swap}_{\mathscr{A}, \mathscr{B}} F](Y)(X) = F(X)(Y)$ for all $X \in \mathscr{A}$ and $Y \in \mathscr{B}$.

</div>

Using this isomorphism, limits and colimits of diagrams of presheaves may be computed as follows.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem**. Let $\mathscr{C}$ be a category. The category of presheaves $[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]$ is complete, and for every small category $I$, the limit functor is given by

$$
{\lim}_I^{[\mathscr{C}^\mathrm{op}, \mathbf{Set}]} \mathcal{F} = ({\lim}_{I}^{\mathbf{Set}})_* \widetilde{\mathcal{F}}
$$

where $\widetilde{\mathcal{F}} = \mathrm{swap}_{I, \mathscr{C}^\mathrm{op}} \mathcal{F}$.

</div>

_Proof._ It suffices to show that ${\lim}_I^{[\mathscr{C}^\mathrm{op}, \mathbf{Set}]}$ is the right adjoint to the diagonal functor $\Delta' \colon [\mathscr{C}^\mathrm{op}, \mathbf{Set}] \to [I, [\mathscr{C}^\mathrm{op}, \mathbf{Set}]]$. Since $\Delta' = \Delta_* \circ \mathrm{swap}^{-1}$, an adjunction exists if and only if $\Delta_* \dashv (\lim_I^{\mathbf{Set}})_*$. Now, there exists a natural isomorphism

$$
\Theta \colon \mathrm{Hom}_{[I, \mathbf{Set}]} (\Delta [-], -) \overset{\cong}{\longrightarrow} \mathrm{Hom}_{\mathbf{Set}} (-, {\lim}_I^{\mathbf{Set}}[-])
$$

via the adjunction $\Delta \dashv \lim_I^{\mathbf{Set}}$, which may be used to construct isomorphisms

$$
\widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}} \colon \mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, [I, \mathbf{Set}]]} (\Delta_*\mathcal{G}, \widetilde{\mathcal{F}}) \longrightarrow \mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]} (\mathcal{G}, ({\lim}_I^{\mathbf{Set}})_*\widetilde{\mathcal{F}}); \quad \quad \widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}}(\phi)_X = \Theta_{\mathcal{G}(X), \widetilde{\mathcal{F}}(X)}(\phi_X).
$$

These assemble into a natural isomorphism by naturality of $\Theta$. Indeed, given $g \colon \mathcal{G}' \to \mathcal{G}$, we have

$$
\widehat{\Theta}_{\mathcal{G}', \widetilde{\mathcal{F}}}(g^* \phi)_X = \widehat{\Theta}_{\mathcal{G}', \widetilde{\mathcal{F}}}(\phi \circ \Delta_* g)_X = \Theta_{\mathcal{G}'(X), \widetilde{\mathcal{F}}(X)}(\phi_X \circ \Delta g_X) = (g_X)^*\big[\Theta_{\mathcal{G}(X), \widetilde{\mathcal{F}}(X)}(\phi_X)\big] = (g_X)^* \big[\widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}}(\phi)_X\big],
$$

and given $f \colon \widetilde{\mathcal{F}} \to \widetilde{\mathcal{F}}'$, we have

$$
\widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}'}(f_* \phi)_X = \widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}'}(f \circ \phi)_X = \Theta_{\mathcal{G}(X), \widetilde{\mathcal{F}}'(X)}(f_X \circ \phi_X) = (f_X)_* \big[\Theta_{\mathcal{G}(X), \widetilde{\mathcal{F}}(X)}(\phi_X)\big] = (f_X)_*\big[\widehat{\Theta}_{\mathcal{G}, \widetilde{\mathcal{F}}}(\phi)_X\big].
$$

It follows that there exists an adjunction $\Delta' \dashv \lim_I^{[\mathscr{C}^\mathrm{op}, \mathbf{Set}]}$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>

The exact same argument may be carried out for colimits. As such, we state the analogous dual result without proof.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem**. Let $\mathscr{C}$ be a category. The category of presheaves $[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]$ is cocomplete, and for every small category $I$, the colimit functor is given by

$$
{\mathrm{colim}}_I^{[\mathscr{C}^\mathrm{op}, \mathbf{Set}]} \mathcal{F} = ({\mathrm{colim}}_{I}^{\mathbf{Set}})_* \widetilde{\mathcal{F}}
$$

where $\widetilde{\mathcal{F}} = \mathrm{swap}_{I, \mathscr{C}^\mathrm{op}} \mathcal{F}$.

</div>

_Proof._ Use the adjunction ${\mathrm{colim}}_{I}^{\mathbf{Set}} \dashv \Delta$ to show that $({\mathrm{colim}}_{I}^{\mathbf{Set}})_* \dashv \Delta_*$.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">
 
$\blacksquare$

</div>

## The density theorem

Let $\mathscr{C}$ be a category and let $\mathcal{F} \colon \mathscr{C}^\mathrm{op} \to \mathbf{Set}$ be a presheaf on $\mathscr{C}$. The Yoneda lemma implies that there exists an isomorphism of presheaves

$$
\mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]}(\!\text{よ}[-], \mathcal{F}) \cong \mathcal{F},
$$

where $\hspace{-1pt}\text{よ} \colon \mathscr{C} \to [\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]$ is the Yoneda embedding. In particular, morphisms from $\hspace{-1pt}\text{よ}$ to $\mathcal{F}$ correspond to sections of $\mathcal{F}$. As such, we call the comma category $(\!\text{よ} \downarrow \mathcal{F})$ the _category of elements_ of $\mathcal{F}$, which we also denote by $\int_{\mathscr{C}} \mathcal{F}$. The category of elements comes equipped with a canonical projection

$$
\pi \colon \int_{\mathscr{C}} \mathcal{F} \to \mathscr{C}; \quad \quad (X,\, \phi \colon \hspace{-3pt}\text{よ}(X) \to \mathcal{F}) \overset{\pi}{\longmapsto} X
$$

which may be interpreted as taking a section down to the object it lies over. Roughly speaking, the density theorem states that every presheaf $\mathcal{F}$ can be recovered as a colimit over $\int_{\mathscr{C}} \mathcal{F}$ of presheaves represented by these projections.

<div class="border border-black pt-4 pl-4 pr-4 pb-4 mb-8">

**Theorem**. Let $\mathscr{C}$ be a category and $\mathcal{F} \colon \mathscr{C}^{\mathrm{op}} \to \mathbf{Set}$ be a presheaf of sets. Then there exists a presheaf isomorphism

$$
\mathcal{F} \, \cong \,  \underset{{\int_\mathscr{C} \mathcal{F}}}{\operatorname{colim}} \, (\!\text{よ} \circ \pi),
$$

where $\pi \colon \!\int_\mathscr{C} \mathcal{F} \to \mathscr{C}$ is the canonical projection map.

</div>

_Proof._ For each $(X, \phi) \in \int_{\mathscr{C}} \mathcal{F}$, let $\rho_{X, \phi} = \phi$; we show that $(\mathcal{F}, \rho)$ is a universal cocone under $\!\text{よ} \circ \pi$. By the Yoneda lemma, there exists a natural isomorphism of profunctors

$$
\Theta \colon \mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]}(\!\text{よ}[-], -) \cong \langle -, - \rangle,
$$

where $\langle -, - \rangle \colon \mathscr{C}^{\mathrm{op}} \hspace{-1pt} \times \hspace{-1pt} [\mathscr{C}^\mathrm{op}, \mathbf{Set}] \to \mathbf{Set}$ is the canonical pairing. A cocone $(\mathcal{G}, \sigma)$ under $\!\text{よ} \circ \pi$ defines, for $X\hspace{-1pt} \in \hspace{-1pt} \mathscr{C}$, a map

$$
\sigma_X \colon \mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]}(\!\text{よ}(X), \mathcal{F}) \to \mathrm{Hom}_{[\mathscr{C}^{\mathrm{op}}, \mathbf{Set}]}(\!\text{よ}(X), \mathcal{G}); \quad \quad \sigma_X(\phi) = \sigma_{X, \phi}.
$$

By definition, a presheaf morphism $\psi \colon \hspace{-0.4pt} \mathcal{F} \to \mathcal{G}$ which induces a morphism of cocones must satisfy $\mathrm{Hom}(\!\text{よ}(X), \hspace{-0.2pt}\psi) \hspace{-0.2pt} = \hspace{-0.2pt} \sigma_X$. Since $\Theta$ is natural, the diagram

<div>
<tikz path="density-square" mobile="1" desktop="1.5"></tikz>
</div>

commutes, which determines each component of $\psi$, since $\psi_X$ is just the pushforward $\langle X, \psi \rangle$. It follows that

$$
\begin{equation*}
\psi_X = \Theta_{X, \mathcal{G}}^{-1} \circ \sigma_X \circ \Theta_{X, \mathcal{F}}. \tag{$\star$}
\end{equation*}
$$

It remains to show that such a presheaf morphism $\psi$ exists. Note that a morphism $f \colon Y \to X$ in $\mathscr{C}$ induces a morphism $f \colon (Y, \phi \circ \!\text{よ}(f)) \to (X, \phi)$ in the comma category, which implies

$$
\sigma_{Y}(\phi \circ \!\text{よ}(f)) = \sigma_{X}(\phi) \circ \text{よ}(f)
$$

as $(\mathcal{G}, \sigma)$ is a cocone under $\!\text{よ} \circ \pi$. It follows that $\sigma$ is natural when viewed as a map $\mathrm{Hom}(\!\text{よ}[-], \mathcal{F}) \to \mathrm{Hom}(\!\text{よ}[-], \mathcal{G})$. Furthermore, $\Theta$ is already natural in the first argument, so the formula $(\star)$ indeed defines a morphism of presheaves.

<div class="w-full flex mt-[-20px] mb-[25px] justify-end">

$\blacksquare$

</div>
