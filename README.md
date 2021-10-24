# Jollections

The missing standard template library for JavaScript. The package contains common data structures and algorithms.
To install the package, run `npm install --save jollections` or `yarn add jollections --dev`.

If you want to import it into your HTML via `script` tag then you can use [unpkg](https://unpkg.com/) link like below:

```html
<script src="https://unpkg.com/jollections@0.0.2/dist/bundle.umd.js"></script>
```

## Examples

```js
import { SinglyLinkedList } from 'jollections';

const list = new SinglyLinkedList();
list.addFirst(1);
list.addFirst(0);
list.addLast(2);
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
