# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @glitjch/lotide`

**Require it:**

`const _ = require('@glitjch/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: asserts two arrays are equal
* assertEqual: asserts two primitive type values are equal
* assertObjectsEqual: asserts equaity truthy or falsey of two given objects
* countLetters: returns the letter count of a string
* countOnly: counts the length of an array
* eqArrays: asserts the equality between two arrays
* eqObjects: asserts the equality between two objects
* findKey: finds the key
* findKeyByValue: finds the key based on the value of an object
* head: returns the first element of an array
* letterPositions: finds the letter position
* map: creates a new array with equally mutated elements
* middle: find the middle element of an array. Finds two if array length is even.
* tail: return the array without the first element
