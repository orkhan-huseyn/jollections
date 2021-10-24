export type ComparableObject = {
  compareTo: (to: ComparableObject) => number;
};
export type Comparable = number | string | Date | ComparableObject;
export type ComparatorFn = (a: Comparable, b: Comparable) => number;

export class PriorityQueue<T extends Comparable> {
  private heap: Array<T>;
  private compare: ComparatorFn;
  /**
   * Initializes a PriorityQueue class with given comparator function
   * @param {Function} comparator comparator function to compare heap entries
   */
  constructor(comparator?: ComparatorFn) {
    if (!comparator) {
      throw new TypeError('Comparator function is not defined');
    }
    this.compare = comparator;
    this.heap = [];
  }
  /**
   * Returns index of parent node
   * @param {number} index arbitrary index
   * @returns {number} index of parent node
   */
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  /**
   * Returns index of the left child
   * @param {number} index arbitrary index
   * @returns {number} index of left child
   */
  private left(index: number): number {
    return 2 * index + 1;
  }
  /**
   * Returns index of the rigth  child
   * @param {number} index arbitrary index
   * @returns {number} index of right child
   */
  private right(index: number): number {
    return 2 * index + 2;
  }
  /**
   * Returns true if node has left child
   * @param {number} index arbitrary index
   * @returns {boolean} whether node has left child
   */
  private hasLeft(index: number): boolean {
    return this.left(index) < this.size();
  }
  /**
   * Returns true if node has right child
   * @param {number} index arbitrary index
   * @returns {boolean} whether node has right child
   */
  private hasRight(index: number): boolean {
    return this.right(index) < this.size();
  }
  /**
   * Swaps two elements at given indices
   * @param {number} i first index
   * @param {number} j second index
   * @returns {void}
   */
  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  /**
   * Moves property at index to higher to restore heap property
   * @param {number} index arbitrary index
   * @returns {void}
   */
  private upheap(index: number): void {
    while (index > 0) {
      const parent = this.parent(index);
      if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
        break;
      }
      this.swap(index, parent);
      index = parent;
    }
  }
  /**
   * Moves property at index to lower to restore heap property
   * @param {number} index arbitrary index
   * @returns {void}
   */
  private downheap(index: number): void {
    while (this.hasLeft(index)) {
      const leftIndex = this.left(index);
      let smallChildIndex = leftIndex;
      if (this.hasRight(index)) {
        const rightIndex = this.right(index);
        if (this.compare(this.heap[leftIndex], this.heap[rightIndex]) > 0) {
          smallChildIndex = rightIndex;
        }
      }
      if (this.compare(this.heap[smallChildIndex], this.heap[index]) >= 0) {
        break;
      }
      this.swap(index, smallChildIndex);
      index = smallChildIndex;
    }
  }
  /**
   * Returns the heap size
   * @returns {number} size of the heap
   */
  public size(): number {
    return this.heap.length;
  }
  /**
   * Returns true if heap size is zero, false otherwise
   * @returns {boolean} true if heap is empty
   */
  public isEmpty(): boolean {
    return this.size() === 0;
  }
  /**
   * Returns top element from the heap
   * @returns {T} the top element
   */
  public peek(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0];
  }
  /**
   * Inserts new value to the heap
   * @param {T} element value to insert
   * @returns {T} newly inserted value
   */
  public add(element: T): T {
    this.heap.push(element);
    this.upheap(this.size() - 1);
    return element;
  }
  /**
   * Removes top element from top of heap and returns it
   * @returns {T} top element from the heap
   */
  public poll(): T {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.downheap(0);
    return min;
  }
}
