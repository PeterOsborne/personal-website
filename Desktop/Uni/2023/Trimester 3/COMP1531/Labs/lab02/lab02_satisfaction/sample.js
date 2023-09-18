/*
  Please only look at this file AFTER attempting the lab yourself and following
  the other tips and hints from the specification!

  Below is an example of how to programmatically create a new sorted array of
  people of the form

  ```
  {
    age: number
    name: string
  }
  ```

  in "*ASCENDING*" order, without using the .sort() method for arrays.

  Copying/refactoring the code below to complete this lab is fair game :).
*/

/**
 * Compares 2 persons and return a number that is:
 * > 0 if person1 > person2
 * < 0 if person1 < person2
 * = 0 if person1 = person2
 *
 * An person is considered "greater" if, in this order
 *    1. They are older (higher age)
 *    2. Their name is lexiographically smaller (appear in the dictionary
 *       earlier, e.g. "a" is before "b")
 */
function comparePeopleAscending(person1, person2) {
  if (person1.age !== person2.age) {
    return person1.age - person2.age;
  }
  return person1.name.localeCompare(person2.name)
}

/**
 * Create and return a new array of sorted people.
 *
 * NOTE: Sorting in DESCENDING order or by different criteria will require
 *       a change in the compare function or this function, or both
 */
function sortedPeopleAscending(inputPeopleArray) {
  const sortedPeopleArray = [];
  for (const currentPerson of inputPeopleArray) {
    let index = 0;
    // Find the index position where the current person
    // is not "greater" than the next person
    while (
      index < sortedPeopleArray.length &&
      comparePeopleAscending(currentPerson, sortedPeopleArray[index]) > 0
    ) {
      index++;
    }

    // insert the current person at this index. They are considered greater
    // than everyone before them and less than everyone after them in the
    // sortedPeopleArray.
    // The 0 at the second argument means don't remove/replace any elements
    // after adding.
    sortedPeopleArray.splice(index, 0, currentPerson);
  }
  return sortedPeopleArray;
}

const people = [
  { name: 'Miyoung', age: 8 },
  { name: 'Danny', age: 7 },
  { name: 'Bill', age: 7 },
  { name: 'Aaron', age: 18 },
  { name: 'Aaron', age: 7 },
  { name: 'Miyoung', age: 20 },
  { name: 'Jack', age: 20 },
  { name: 'Cherrie', age: 7 },
  { name: 'Iktimal', age: 19 },
];

console.log(sortedPeopleAscending(people));
/*
Expected output:
  ```
  [
    { name: 'Aaron', age: 7 },
    { name: 'Bill', age: 7 },
    { name: 'Cherrie', age: 7 },
    { name: 'Danny', age: 7 },
    { name: 'Miyoung', age: 8 },
    { name: 'Aaron', age: 18 },
    { name: 'Iktimal', age: 19 },
    { name: 'Jack', age: 20 },
    { name: 'Miyoung', age: 20 }
  ]
  ```
*/
