# Block Sort

## Ide
Block Sort ses som en avanceret form af merge sort, hvor vi først deler arrayet i blokke, bestemt ud fra en fast værdi 
Hver blok sorteres individuelt, og derefter fletter vi dem sammen igen.

## Fakta
- Kendt for at bruge lav hukommelse.

## Beskrivelse af algoritmen
1. Del vores array i blokke af en bestemt størrelse (x).  
2. Sorter hver blok individuelt (typisk med insertion sort).  
3. Flet blokke sammen igen til et fuldt sorteret array.

## Kilde til beskrivelse

## Plan til implementering
1. Funktion til **insertion sort** til små blokke.  
2. Funktion til **merge**, som fletter to delarrays.  
3. **Block sort-funktion** der holder styr på iterationer.


## Tidskompleksitet (Big-O)
- **Sortering af blokke:** 
Hver blok sorteres med insertion sort. Små blokke er hurtigere at sortere, så her går det hurtigt
- **Fletning af blokke:**
Efter bloksortering skal vi flette blokke sammen. Vi finder altid det mindste element balndt de blokke, der endnu ikke er færdige
Desto flere blokke jo flere sammenligner.
- **Worst case:**
 - Sortering og fletning giver i væreste fald O(n²) for den simple udgave
 - I praksis er det hurtigere end insertion sort på hele array fordi vi kun sorterer små blokke ad gangen
- **Best case:**
 - Hvis array allerede er næsten sorteret kan vi opleve det næsten er linært med bloksorteringen, dog vil vores fletning kræve lidt krafter og tid



## Kilder
- [Wikipedia: Block Sort](https://en.wikipedia.org/wiki/Block_sort)
- [GeeksforGeeks: Introduction to Block Sort](https://www.geeksforgeeks.org/dsa/introduction-to-block-sort/)
