/**
 * NOTE: If you are having difficulty completing this exercise,
 * please take a look at our example in the file "sample.js"!
 */

/**
 * Given an array of fast food restaurants, return a new sorted
 * array in descending order by:
 *
 *   1. customerService
 *   2. foodVariety
 *   3. valueForMoney
 *   4. timeToMake
 *   5. taste
 *   6. name (in lexicographical order, case-insensitive)
 *
 * For example, if two restaurant have the same customerService
 * and foodVariety, the one with a higher valueForMoney will be
 * in front (nearer to the start of the returned array).
 *
 * If the all other fields are equal and the name is compared,
 * "hungry Jacks" will be before "KFC" because "h" is before "K".
 *
 * WARNING: You should NOT modify the order of the original array.
 *
 * @param {
 *   Array<{
 *     name: string,
 *     customerService: number,
 *     foodVariety: number,
 *     valueForMoney: number,
 *     timeToMake: number,
 *     taste: number
 *   }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns array with the same items, sorted by the key-order given.
 */
function sortedFastFood(fastFoodArray) {
  // TODO: Observe the return type from the stub code
  // FIXME: Replace the stub code with your implementation

  return fastFoodArray.sort((p1, p2) => {
    const customerServiceComparison = compareValues(p1.customerService, p2.customerService);
    if (customerServiceComparison !== 0) {
      return customerServiceComparison;
    }

    const foodVarietyComparison = compareValues(p1.foodVariety, p2.foodVariety);
    if (foodVarietyComparison !== 0) {
      return foodVarietyComparison;
    }

    const valueForMoneyComparison = compareValues(p1.valueForMoney, p2.valueForMoney);
    if (valueForMoneyComparison !== 0) {
      return valueForMoneyComparison;
    }

    const timeToMakeComparison = p1.timeToMake - p2.timeToMake;
    if (timeToMakeComparison !== 0) {
      return timeToMakeComparison;
    }

    const tasteComparison = p1.taste - p2.taste;
    if (tasteComparison !== 0) {
      return tasteComparison;
    }

    return p1.name.localeCompare(p2.name);
  });
}

function compareValues(value1, value2) {
  if (value1 === value2) {
    return 0;
  }
  if (value1 < value2) {
    return 1;
  }
  return -1;
}

/**
 * Given an array of fast food restaurants, return a new sorted
 * array ranked by the overall satisfaction.
 *
 * The satisfaction of a restaurant is the average score between
 * customerService, foodVariety, valueForMoney, timeToMake and taste.
 *
 * You do not need to round the satisfaction value.
 *
 * If two restaurants have the same satisfaction, the names
 * are compared in lexigraphical order (case-insensitive).
 * For example, "hungry Jacks" will appear before "KFC" because
 * "h" is before "K".
 *
 * WARNING: you should NOT modify the order of the original array.
 *
 * @param {
 *   Array<{
 *     name: string,
 *     customerService: number,
 *     foodVariety: number,
 *     valueForMoney: number,
 *     timeToMake: number,
 *     taste: number
 *  }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns {
 *   Array<{
 *     restaurantName: string,
 *     satisfaction: number,
 *   }>
 * } a new sorted array based on satisfaction. The restaurantName
 * will be the same as the original name given.
 */
function sortedSatisfaction(fastFoodArray) {

  let sortedArray = []
  fastFoodArray.forEach((fastFood) => {
    const obj = new Object();
    obj.restaurantName = fastFood.name;
    obj.satisfaction = 0;
    Object.keys(fastFood).forEach((key, index) => {
      obj.satisfaction += (key === 'name' ? 0 : Object.values(fastFood)[index])
    })
    obj.satisfaction = obj.satisfaction / (Object.keys(fastFood).length - 1)
    sortedArray.push(obj);
  })



  return sortedArray.sort((p1, p2) => {
    const comparedValues = compareValues(p1.satisfaction, p2.satisfaction)
    if (comparedValues !== 0) {
      return comparedValues;
    }
    return p1.restaurantName.localeCompare(p2.restaurantName);
  })
}

// ========================================================================= //

/**
 * Execute the file with:
 *     $ node satisfaction.js
 *
 * The expected/sample output for the starter code is in the README.md.
 * Feel free to modify the code below to further test your functions.
 */

// Note: do not use this "fastFoods" global variable directly in your function.
// Your function has the parameter "fastFoodArray".
const fastFoods = [
  {
    name: 'Second fastFood, third satisfaction (4.6)',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4,
  },
  {
    // Same as above, but name starts with "f"
    // which is before "S" (case-insensitive)
    name: 'First fastFood, second satisfaction (4.6)',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4
  },
  {
    // Worse foodVariety, but better overall
    name: 'Third fastFood, first satisfaction (4.8)',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5
  },
];

// Note: We are using console.log because arrays cannot be commpared with ===.
// There are better ways to test which we will explore in future weeks :).
console.log('========================');
console.log('1. Testing Fast Food');
console.log('===========');
console.log(sortedFastFood(fastFoods));
console.log();

console.log('========================');
console.log('2. Testing Satisfaction');
console.log('===========');
console.log(sortedSatisfaction(fastFoods));
console.log();
