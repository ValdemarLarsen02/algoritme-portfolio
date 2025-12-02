/**
 * Searches for a value in an array of values.
 * Uses linear search algorithm
 * Returns an object with found, index and number of iterations used
 * 
 * @param {*} searchFor - The value to search for
 * @param {[*]} values  - The array of values to search in
 * @returns {object} An object containing `found`, `index` and `iterations`
 */
export function linearSearch(searchFor, values) {
  let found = false;
  let lookAtIndex = 0;
  let iterations = 0;

  while (!found && lookAtIndex < values.length) {
    iterations++;
    if (values[lookAtIndex] == searchFor) {
      found = true;
    } else {
      lookAtIndex++;
    }
  }

  return { found, iterations, index: found?lookAtIndex:-1 };
}
