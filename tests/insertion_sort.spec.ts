import { InsertionSort } from "../src/insertion_sort";
import { unsortedArray, sortedArray, inverseSortedArray } from "../src/mocks/arrays";

const sort = new InsertionSort(unsortedArray);

describe("Tests for Insertion Sort Ascending", () => {
  it("should return a sorted integer array", () => {
    expect(sort.sortAscending()).toStrictEqual(sortedArray);
  });
});

describe("Tests for Insertion Sort Descending", () => {
  it("should return a sorted integer array", () => {
    expect(sort.sortDescending()).toStrictEqual(inverseSortedArray);
  });
});
