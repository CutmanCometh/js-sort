const bubbleSort = require('./index');

describe('bubble sort', () => {
    it('sorts an empty array to an empty array', () => {
        expect(bubbleSort([], ()=>null)).toEqual([]);
    });

    it('sorts an array with a single item', () => {
        expect(bubbleSort(['foo'], ()=>null)).toEqual(['foo']);
    });

    it('sorts two items already in order', () => {
        expect(bubbleSort([1, 2], ()=>null)).toEqual([1, 2]);
    });

    it('sorts two items out of order', () => {
        expect(bubbleSort([2, 1], (a,b) => a - b)).toEqual([1, 2]);
    });

    it('sorts a longer array with an even number of elements', () => {
        const array = [261, 854, 137, 551, 578, 37, 241, 709, 482, 647, 637, 809, 936, 888, 563, 811, 839, 419, 730, 27];
        const sorted = [27, 37, 137, 241, 261, 419, 482, 551, 563, 578, 637, 647, 709, 730, 809, 811, 839, 854, 888, 936];
        expect(bubbleSort(array, (a,b) => a - b)).toEqual(sorted);
    });

    it('sorts a longer array with an odd number of elements', () => {
        const array = [797, 218, 669, 178, 455, 910, 87, 28, 780, 716, 817, 193, 577, 542, 387, 958, 531, 692, 38];
        const sorted = [28, 38, 87, 178, 193, 218, 387, 455, 531, 542, 577, 669, 692, 716, 780, 797, 817, 910, 958];
        expect(bubbleSort(array, (a,b) => a - b)).toEqual(sorted);
    });
});
