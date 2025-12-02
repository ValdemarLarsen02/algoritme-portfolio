export function insertionSort(arr) {
    let iterations = 0; //Hvor mange gange udføre vi vores "løkke"


    //Hvordan ser array'et ud
    console.log("Start: ", [...arr]);

    for (let i = 1; i < arr.length; i++) {
        //Yderste element/første index
        console.group(`Ydre: i=${i}`)
        iterations++
        let current = arr[i];
        let j = i - 1;

        //Nurværende element
        console.log(`Nuværrende: ${current}`)

        //FLytter vores store elementer frem af rækken
        while (j >= 0 && arr[j] > current) {
            iterations++
            console.log(`Indre: j=${j}`)
            arr[j + 1] = arr[j];
            j--;
            console.groupEnd();
        }
        arr[j + 1] = current;
        console.log(`Array efter indsæt af ${current}:`, [...arr]);
        console.groupEnd();
    }

    //Tjekker om vores array er sorteret
    let sorted = true;
    console.group("Tjekker om vores array er sorteret")
    for (let k = 1; k < arr.length; k++) {
        iterations++;
        if (arr[k - 1] > arr[k]) {
            sorted = false;
            break;
        }
    }

    return {
        arr: arr,
        iterations: iterations,
        sorted: sorted
    }
}

//test af funktionen
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const result = insertionSort(list);
console.log("Samlet retunret objekt:", result);