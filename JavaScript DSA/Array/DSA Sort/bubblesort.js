// Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.

function bubblesort(arr){
    let n =arr.length;
    let swapped;

    for (let i = 0; i<n - 1; i++){
        swapped = false

        for (let j = 0; j<n-1; j++){
            if(arr[j]> arr[j +1]){
                //swap

                [arr[j], arr[j+1]] =[arr[j+1], arr[j]]
            }
        }

        if(swapped) break;

    }

    return arr;

}
numbers = [3, 45,6,67,3,24,5,78,5,54,45,45]

console.log("Sorted:",bubblesort(numbers))