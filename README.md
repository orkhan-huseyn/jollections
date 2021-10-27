# Jollections

The missing standard template library for JavaScript. The package contains common data structures and algorithms.
To install the package, run `npm install --save jollections` or `yarn add jollections --dev`.

If you want to import it into your HTML via `script` tag then you can use [unpkg](https://unpkg.com/) link like below:

```html
<script src="https://unpkg.com/jollections@0.0.8/dist/bundle.umd.js"></script>
```

## Usage

With ES6 modules:

```js
import { SinglyLinkedList } from 'jollections';

const list = new SinglyLinkedList();
list.addFirst(1);
list.addFirst(0);
list.addLast(2);
```

Using in CommonJs environment:

```js
const { PriorityQueue } = require('jollections');

const queue = new PriorityQueue((a, b) => a.weight - b.weight);

queue.enqueue({ vertex: 'A', weight: 2 });
queue.enqueue({ vertex: 'B', weight: 6 });
queue.enqueue({ vertex: 'C', weight: 1 });
queue.enqueue({ vertex: 'D', weight: 3 });

const nearestNeighbor = queue.dequeue();
console.log(nearestNeighbor); // { vertex: 'C', weight: 1 }
```

To use it in browser just import `script` from [unpkg](https://unpkg.com/) inside your HTML and use it under `Jollections` namespace:

```html
<script src="https://unpkg.com/jollections@0.0.8/dist/bundle.umd.js"></script>
<script>
  const { CircularLinkedList } = Jollections;
  const linkedList = new CircularLinkedList();

  linkedList.addLast(1);
  linkedList.addLast(2);
  linkedList.addLast(3);
  linkedList.addLast(4);

  console.log(linkedList.last()); // 4
  linkedList.rotate();
  console.log(linkedList.last()); // 1
  linkedList.rotate();
  console.log(linkedList.last()); // 2
</script>
```

## Documentation

Soon...

## Contribution

If you want to contribute, fork the repo, create your own branch (name does not matter as long as it makes sense) and start working.
If Husky files are not executable by default make sure you make give them execute permission. It can be done by using following commands on Linux or Linux like environments:

```sh
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

It will make sure that our Git hooks work properly. Hooks will check your commit messages and will run linter on each commit.
Make sure your commits match [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) or your changes will not be accepted.
