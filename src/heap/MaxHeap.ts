import { BinaryHeap } from './BinaryHeap';

export class MaxHeap<T> extends BinaryHeap<T> {
  constructor() {
    super((a: number, b: number): number => b - a);
  }
  /**
   * Returns maximum element from the heap
   * @returns {T} the maximum element
   */
  max(): T {
    return this.top();
  }
  /**
   * Removes maximum element from top of heap and returns it
   * @returns {T} maximum element from the heap
   */
  extractMin(): T {
    return this.removeTop();
  }
}
