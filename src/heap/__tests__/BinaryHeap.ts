import { BinaryHeap } from '../BinaryHeap';

describe('BinaryHeap', () => {
  it('throws and error when comparator function is not provided', () => {
    expect(() => new BinaryHeap()).toThrowError();
  });

  it('creates empty heap when initialized with a comparator', () => {
    const heap = new BinaryHeap((a: number, b: number): number => a - b);
    expect(heap.isEmpty()).toBe(true);
    expect(heap.size()).toBe(0);
  });
});
