//Sorterer et array med insertion sort

function insertionSort(arr, counter) {
    //Vi starter fra andet element, da vi går ud fra at index 0 er sorteret
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; 
    let position = i - 1;


    //Flytter elementer der er større end vores current en tak til højre
    while (position >= 0 && arr[position] > current) {
      counter.count++;
      arr[position + 1] = arr[position];
      position--;
    }
    
    //Tilføjer current på den korrekte plads
    arr[position + 1] = current;
  }
  return arr;
}



//Sortere array ved at dele det op i mindre blokke
//Her bruger vi blokcSize parameteren til at fortælle størrelsen på hver blok
function blockSort(arr, blockSize) {
  let counter = { count: 0 }; // Antal sammenligner vi udføre
  let sortedBlocks = []; 

  // Opret og sorter blokke
  for (let start = 0; start < arr.length; start += blockSize) {
    let block = []; // opretter dne nye block
    let end = Math.min(start + blockSize, arr.length); //Finder slutningen på af blokken
    
    for (let i = start; i < end; i++) {
      block.push(arr[i]);
    }
    
    insertionSort(block, counter);
    sortedBlocks.push(block);
  }

  // Flet blokkene sammen til det samlet sorteret array
  let merged = [];
  while (sortedBlocks.length > 0) {
    let smallestBlockIndex = 0; //Her antager vi at første block har mindste element
    
    //Finder den blok med det mindste(første element)
    for (let i = 1; i < sortedBlocks.length; i++) {
      counter.count++;
      if (sortedBlocks[i][0] < sortedBlocks[smallestBlockIndex][0]) {
        smallestBlockIndex = i;
      }
    }

    //Tilføjer det mindte element til vores resultat
    merged.push(sortedBlocks[smallestBlockIndex][0]);
    sortedBlocks[smallestBlockIndex].shift(); // Fjerner det brugte.

    if (sortedBlocks[smallestBlockIndex].length === 0) {
      sortedBlocks.splice(smallestBlockIndex, 1);
    }
  }

  return { sortedArray: merged, iterations: counter.count };
}
// Test
let arr = [1, 7, 8, 2, 3, 5, 4, 6];
let blockSize = 3;
let result = blockSort(arr, blockSize);

console.log("Input: " + arr.join(" "));
console.log("Output: " + result.sortedArray.join(" "));
console.log("Iterationer: " + result.iterations);
