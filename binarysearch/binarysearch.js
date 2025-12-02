export function binarySearch(searchFor, values) {
    let left = 0;
    let right = values.length- 1;
    let iterations = 0;


    while (left <= right) {
        iterations++;
        let mid = Math.floor((left + right) / 2);
        let midValue = values[mid];


        if (midValue === searchFor) {
            return {
                found: true,
                index: mid,
                iterations
            };
        } else if (midValue < searchFor) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        found: false,
        index: -1,
        iterations
    }
}