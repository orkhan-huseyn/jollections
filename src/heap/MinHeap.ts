import { BinaryHeap } from './BinaryHeap';

export class MinHeap<T> extends BinaryHeap<T> {
  constructor() {
    super((a: number, b: number): number => a - b);
  }
  /**
   * Returns minimum element from the heap
   * @returns {T} the minimum element
   */
  min(): T {
    return this.top();
  }
  /**
   * Removes minimum element from top of heap and returns it
   * @returns {T} minimum element from the heap
   */
  extractMin(): T {
    return this.removeTop();
  }
}
