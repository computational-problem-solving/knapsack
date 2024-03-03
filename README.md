:school_satchel: [@problem-solving/knapsack](https://computational-problem-solving.github.io/knapsack)
==

<p align="center">
<a href="https://xkcd.com/287">
<img src="https://imgs.xkcd.com/comics/np_complete.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Knapsack problem algorithms for JavaScript.
See [docs](https://computational-problem-solving.github.io/knapsack/index.html).

```js
import {
	knapsackGreedy,
	knapsackApprox,
} from '@problem-solving/knapsack';

knapsackGreedy(n, v, w, W); // 1/2 approximation
knapsackApprox(eps, n, v, w, W); // 1-eps approximation
```

[![License](https://img.shields.io/github/license/computational-problem-solving/knapsack.svg)](https://raw.githubusercontent.com/computational-problem-solving/knapsack/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@problem-solving/knapsack.svg)](https://www.npmjs.org/package/@problem-solving/knapsack)
[![Tests](https://img.shields.io/github/actions/workflow/status/computational-problem-solving/knapsack/ci.yml?branch=main&event=push&label=tests)](https://github.com/computational-problem-solving/knapsack/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/computational-problem-solving/knapsack.svg)](https://github.com/computational-problem-solving/knapsack/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/computational-problem-solving/knapsack.svg)](https://github.com/computational-problem-solving/knapsack/issues)
[![Downloads](https://img.shields.io/npm/dm/@problem-solving/knapsack.svg)](https://www.npmjs.org/package/@problem-solving/knapsack)

[![Code issues](https://img.shields.io/codeclimate/issues/computational-problem-solving/knapsack.svg)](https://codeclimate.com/github/computational-problem-solving/knapsack/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/computational-problem-solving/knapsack.svg)](https://codeclimate.com/github/computational-problem-solving/knapsack/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/computational-problem-solving/knapsack/main.svg)](https://codecov.io/gh/computational-problem-solving/knapsack)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/computational-problem-solving/knapsack.svg)](https://codeclimate.com/github/computational-problem-solving/knapsack/trends/technical_debt)
[![Documentation](https://computational-problem-solving.github.io/knapsack/badge.svg)](https://computational-problem-solving.github.io/knapsack/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@problem-solving/knapsack)](https://bundlephobia.com/result?p=@problem-solving/knapsack)

## :book: References

  - The [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem)
    explained at Wikipedia.
