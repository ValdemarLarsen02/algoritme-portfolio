function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    let iterations = 0; // tæller hvor mange gange vi sammenligner/loop'er

    console.group("Merge start");
    console.log("Left:", left, "Right:", right);

    while (i < left.length && j < right.length) {
        iterations++;
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // tilføj resterende elementer fra venstre eller højre array
    while (i < left.length) {
        iterations++;
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        iterations++;
        result.push(right[j]);
        j++;
    }

    console.log("Merged:", result);
    console.groupEnd();

    return { result, iterations };
}

function mergeSort(arr) {
    console.group(`mergeSort start: [${arr}]`);

    if (arr.length <= 1) {
        console.groupEnd();
        return { arr: [...arr], iterations: 1, sorted: true };
    }

    let mid = Math.floor(arr.length / 2);
    const leftPart = arr.slice(0, mid);
    const rightPart = arr.slice(mid);

    // rekursive funktion/kald. 
    const leftSorted = mergeSort(leftPart);
    const rightSorted = mergeSort(rightPart);

    // merge de to sorterede arrays
    const merged = merge(leftSorted.arr, rightSorted.arr);

    // Samler iterationer: iterationer fra venstre, højre og selve merge-kaldet
    let totalIterations = leftSorted.iterations + rightSorted.iterations + merged.iterations;


    // Tjekker om arrayet er sorteret
    let sorted = true;
    for (let i = 1; i < merged.result.length; i++) {
        totalIterations++; // tæller tjek som iteration
        if (merged.result[i - 1] > merged.result[i]) {
            sorted = false;
            break;
        }
    }

    console.log("Resultat af mergeSort:", merged.result);
    console.groupEnd();

    return {
        arr: merged.result,
        iterations: totalIterations,
        sorted: sorted
    };
}


const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const result = mergeSort(list);
console.log("Samlet resultat:", result);