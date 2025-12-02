

function binarySearchRecursive(search, values, start, end, iterations = 0, comparator) {
    console.group(`binarySearchRecursive call #${iterations + 1}`);
    console.log('search:', search, 'start:', start, 'end:', end);

    //Hvis paramter for comparator ikke er fundet/sendt med da funktion er kaldet gør vi brug af standard
    const compare = comparator || ((a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    });

    //hvis ikke fundet
    if (start > end) {
        console.log('value not found');
        console.groupEnd();
        return { found: false, index: -1, iterations: iterations + 1 };
    }


    //Fidner midten
    const mid = Math.floor((start + end) / 2);
    const comparison = compare(search, values[mid]);

    if (comparison === 0) {
        console.log(`Value found at index ${mid}`);
        console.groupEnd();
        return { found: true, index: mid, iterations: iterations + 1 };
    } else if (comparison < 0) {
        console.log('Searching left half');
        const result = binarySearchRecursive(search, values, start, mid - 1, iterations + 1, comparator);
        console.groupEnd();
        return result;
    } else {
        console.log('Searching right half');
        const result = binarySearchRecursive(search, values, mid + 1, end, iterations + 1, comparator);
        console.groupEnd();
        return result;
    }
}

export { binarySearchRecursive };