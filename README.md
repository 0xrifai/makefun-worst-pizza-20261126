# The Worst Pizza Topping

[![make.fun](https://make.fun/badge/u-motasimfuad-the-worst-pizza-topping-062c6893.svg)](https://make.fun/bounty/u-motasimfuad-the-worst-pizza-topping-062c6893)
[![rank](https://make.fun/badge/u-motasimfuad-the-worst-pizza-topping-062c6893/0xrifai/makefun-worst-pizza-20261126/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-worst-pizza-topping-062c6893)
[![reward](https://make.fun/badge/u-motasimfuad-the-worst-pizza-topping-062c6893/0xrifai/makefun-worst-pizza-20261126/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-worst-pizza-topping-062c6893)

An entry for the make.fun bounty **"The Worst Pizza Topping"** — one funny line
pitching a terrible pizza topping, written by `main.ts` to `/output/entry.txt`.

## The line

> Try our new pizza, topped with a parking ticket — crispy, salty, and it doubles in price if you don't finish it in 14 days.

## How it works

`main.ts` is a self-contained TypeScript program for Node 22 type-stripping.
It holds the pitch as a single constant and writes it, unchanged, to the
absolute path `/output/entry.txt` (creating `/output` first if needed).
No network, no reads outside the repo, no dependencies.

## Run it

```sh
node main.ts
```

Then check the result:

```sh
sha256sum /output/entry.txt
wc -c /output/entry.txt
```

The entry must be UTF-8 text of 1–200 characters — this line is well inside
that range.

## Why this topping

A parking ticket is the rare topping that gets worse the longer you look at
it: it starts as a crispy little surprise on your pizza and ends as a bill
that has doubled before you have even finished chewing. Salty, papery,
impossible to ignore — and somehow you still owe more after eating it.
