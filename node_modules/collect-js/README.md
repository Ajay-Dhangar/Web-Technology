# Collect.js

A JavaScript library for collecting data from tree data structures.

[![Build Status](https://travis-ci.org/sunesimonsen/collect-js.png?branch=master)](https://travis-ci.org/sunesimonsen/collect-js)

## Install

You can install the collect-js using npm the following way:

    npm install collect-js

You can require the Factory.js using require.js the following way:
``` js
define('path/to/collect-js', function (collect) {
    // define you're module that uses the collect function
});
```

If you choose to use the library directly in the browser the
```collect``` function will be installed in the global namespace under
the name:

    weknowhow.collect

## Usage

Given the following test data the examples below shows how the library can be used.

```js
var store = {
  store: {
    book: [
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
        tags: [
          "fiction"
        ]
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99
      },
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
        tags: [
          "fiction",
          "adventure"
        ]
      },
      {
        category: "programming",
        author: ["Andrew Hunt", "David Thomas"],
        title: "The Pragmatic Programmer: From Journeyman to Master",
        isbn: "0-201-61622-X",
        price: 33.68,
        tags: [
          "programming",
          "apprenticeship",
          "best practices"
        ]
      }
    ],
    bicycle: {
      color: "red",
      price: 19.95
    }
  }
};
```

### Collecting an array of all books in the store

```js
expect(collect('store.book', store), 'to equal', store.store.book);
```

### Collecting an array of all bicycles in the store

```js
expect(collect('store.bicycle', store), 'to equal', [store.store.bicycle]);
```

### Collecting the isbn of all books in the store

```js
expect(collect('store.book.isbn', store), 'to equal', [
  "0-553-21311-3", "0-395-19395-8", "0-201-61622-X"
]);
```

```js
expect(collect('..isbn', store), 'to equal', [
  "0-553-21311-3", "0-395-19395-8", "0-201-61622-X"
]);
```

```js
expect(collect('..book.isbn', store), 'to equal', [
  "0-553-21311-3", "0-395-19395-8", "0-201-61622-X"
]);
```

```js
expect(collect('store', 'book', 'isbn', 'store'), 'to equal', [
  "0-553-21311-3", "0-395-19395-8", "0-201-61622-X"
]);
```

### Collecting the price of all items in the store

```js
expect(collect('store..price', store), 'to equal', [
  8.95, 12.99, 8.99, 22.99, 33.68, 19.95
]);
```

### Collecting the price of all books in the store

```js
expect(collect('store..book.price', store), 'to equal', [
  8.95, 12.99, 8.99, 22.99, 33.68
]);
```

### Collecting the price of all books and bicycles in the store

```js
expect(collect('store', /book|bicycle/, 'price'), 'to equal', [
  8.95, 12.99, 8.99, 22.99, 33.68
]);
```

### Collecting all books that has an isbn

```js
var booksWithIsbn = collect('..book', store).filter(function (book) {
  return collect('isbn', book).length > 0;
});

expect(booksWithIsbn, 'to equal', [
  store.store.book[2],
  store.store.book[3],
  store.store.book[4]
]);
```

### Collecting all books without an isbn

```js
var booksWithoutIsbn = collect('..book', store).filter(function (book) {
  return collect('isbn', book).length > 0;
});

expect(booksWithoutIsbn, 'to equal', [
  store.store.book[0],
  store.store.book[1]
]);
```

### Answering whether any books are present of a given author

```js
var authors = collect('..author', store);
expect(authors.indexOf('David Thomas'), 'to not be', -1);
expect(authors.indexOf('J. R. R. Tolkien'), 'to not be', -1);
expect(authors.indexOf('Robert C. Martin'), 'to be', -1);
```

### Collecting all books with a price below 10

```js
var cheapBooks = collect('..book', store).filter(function (book) {
  return book.price < 10;
});

expect(cheapBooks, 'to equal', [
  store.store.book[0],
  store.store.book[2]
]);
```

### Collecting all books with more than one author

```js
var booksWithMoreThanOneAuthor = collect('..book', store).filter(function (book) {
  return collect("author", book).length > 1;
});

expect(booksWithMoreThanOneAuthor, 'to equal', [
  store.store.book[4]
]);
```

### Collecting all book categories without any duplicates

```js
var result = collect('..book.category', store).reduce(function (categories, category) {
  if (categories.indexOf(category) === -1) {
    categories.push(category);
  }
  return categories;
}, []);

expect(result, 'to equal', [
  'reference', 'fiction', 'programming'
]);
```

## License

    Copyright 2013 Sune Simonsen
    https://github.com/sunesimonsen/collect-js

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
