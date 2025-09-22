# ap-nth-term

[![npm version](https://img.shields.io/npm/v/ap-nth-term.svg)](https://www.npmjs.com/package/ap-nth-term)
[![npm downloads](https://img.shields.io/npm/dt/ap-nth-term.svg)](https://www.npmjs.com/package/ap-nth-term)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A tiny utility to find the **nth term** of an Arithmetic Progression (AP) given the first two terms.

---

## 🚀 Installation

```bash
npm install ap-nth-term
```
or with Yarn

```bash
yarn add ap-nth-term
```
JavaScript
```bash
const { findNthAP } = require("ap-nth-term");

console.log(findNthAP([ 2, 4 , 6 ] , 5)); // 10
console.log(findNthAP([ 3, 7 , 11 ] , 4)); // 15
```
TypeScript

```bash
import { findNthAP } from "ap-nth-term";

console.log(findNthAP([5, 10, 15], 6)); // 30
console.log(findNthAP([-3, -1, 1], 4)); // 5
```

📐 Formula Used

The nth term of an AP is given by:
```bash
a + (n - 1) * d
```
Where:
	•	a = first term
	•	d = common difference
	•	n = position of the term (1-based)

🧪 Running Tests

This project uses Jest for unit testing.
```bash
npm test
```

Sample Output
```bash
 PASS  tests/index.test.ts
  findNthAP
    ✓ should return correct nth term for positive sequence
    ✓ should work with negative numbers
    ✓ should throw error if array length < 2
    ✓ should throw error if n <= 0
    ✓ should work with decreasing AP

```

📦 Build

Compile TypeScript before publishing:

```bash
npm run build
```

Output will be in the dist/ folder.

🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to open a PR or issue.