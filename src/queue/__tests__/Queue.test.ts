import { Queue } from '../Queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('creates an empty queue with size of zero', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  it('correctly adds element to back of queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.first()).toBe(1);
  });

  it('correctly removes element from front of queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(1);
    expect(queue.first()).toBe(2);
  });
});
