---
title: "The Snake Lemma and Long Exact Sequences"
date: 2024-11-17
length: "30 min"
---

The snake lemma is a fundamental tool of homological algebra which is primarily used in the construction of the homology long exact sequence. It's proof, like many others in homological algebra, is nothing more than a diagram chase. Although simple, the act of diagram chasing does not immediately give any insight into _why_ the snake lemma must be true. This can be remedied by Bergman's [Salamander Lemma](https://arxiv.org/abs/1108.0958), which is also discussed by Anton Geraschenko on the [Secret Blogging Seminar](https://sbseminar.wordpress.com/2007/11/13/anton-geraschenko-the-salamander-lemma/). In the introduction, Bergman states

> Diagram-chasing arguments frequently lead to “magical” relations between distant points of diagrams: exactness implications, connecting morphisms, etc. These long connections are usually composites of short “unmagical” connections, but the latter, and the objects they join, are not visible in the proofs...

Although the Salamander Lemma can be used to prove the Snake Lemma and a plethora of similar results, we will not focus on it here. As Geraschenko states, applying the lemma doesn't _completely_ get rid of the mechanical nature of chasing arguments&mdash;you have to now chase "salamanders" around, instead of individual elements. In this post, we aim to make the Snake Lemma more apparent and clarify its application to the long exact sequence.

## Preliminaries

For simplicity, we will work in the category $\mathbf{Ab}$ of abelian groups, although the result holds more generally for any abelian category. Recall that a (finite) **chain complex** is a sequence

$$
A_0 \overset{\phi_0}{\longrightarrow} A_1 \overset{\phi_1}{\longrightarrow} \cdots \overset{\phi_{n-2}}{\longrightarrow} A_{n-1} \overset{\phi_{n-1}}{\longrightarrow} A_n
$$

of abelian groups and morphisms such that the composition of consecutive morphisms is zero. In particular, this implies that the image of one morphism is contained in the kernel of the subsequent morphism. The sequence is called **exact** if for each $k$, we have $\operatorname{im} \phi_k = \ker \phi_{k+1}$. A **short exact sequence** is an exact sequence of the form $0 \to A \to B \to C \to 0$, the data of which is equivalent to stating that

1.  $A$ is a subobject of $B$ and
2.  $C$ is the corresponding quotient object of $B$, that is, $C \cong B/A$.

In other words, a short exact sequence is really just a way to "break" $B$ into two related pieces. A simple example of this that we will use to build intuition is the sequence $0 \to \mathbb{Z} \to \mathbb{R} \to \mathbb{S}^{1} \to \mathbb{0}$.

<tikz path="snake_lemma">
