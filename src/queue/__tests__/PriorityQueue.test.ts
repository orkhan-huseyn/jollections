import { PriorityQueue } from '../PriorityQueue';

describe('PriorityQueue', () => {
  it('throws and error when comparator function is not provided', () => {
    expect(() => new PriorityQueue()).toThrowError();
  });

  it('creates empty queue when initialized with a comparator', () => {
    const heap = new PriorityQueue((a: number, b: number): number => a - b);
    expect(heap.isEmpty()).toBe(true);
    expect(heap.size()).toBe(0);
  });
});
