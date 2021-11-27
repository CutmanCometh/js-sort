function bubbleSort(array, comparator) {
    for (let leftIndex = 0; leftIndex < array.length - 1; leftIndex ++) {
        for (let rightIndex = leftIndex + 1; rightIndex < array.length; rightIndex++ ) {
            const leftValue = array[leftIndex];
            const rightValue = array[rightIndex];
            const comparison = comparator(array[leftIndex], array[rightIndex]);
            if (comparison > 0) {
                const temp = rightValue;
                array[rightIndex] = leftValue;
                array[leftIndex] = temp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
