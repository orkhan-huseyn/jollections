import { PriorityQueue } from '../PriorityQueue';

describe('PriorityQueue', () => {
  it('throws and error when comparator function is not provided', () => {
    expect(() => new PriorityQueue<number>()).toThrowError();
  });

  it('creates empty queue when initialized with a comparator', () => {
    const queue = new PriorityQueue<number>(
      (a: number, b: number): number => a - b
    );
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  it('implements min heap correctly', () => {
    const queue = new PriorityQueue<number>(
      (a: number, b: number): number => a - b
    );
    queue.add(3);
    queue.add(2);
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(1);
    expect(queue.poll()).toBe(1);
    expect(queue.size()).toBe(2);
  });

  it('implements max heap correctly', () => {
    const queue = new PriorityQueue<number>(
      (a: number, b: number): number => b - a
    );
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(3);
    expect(queue.poll()).toBe(3);
    expect(queue.size()).toBe(2);
  });
});
