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
});