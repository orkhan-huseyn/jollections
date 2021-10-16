import { CircularLinkedList } from '../CircularLinkedList';

describe('CircularLinkedList', () => {
  let linkedList: CircularLinkedList<number>;

  beforeEach(() => {
    linkedList = new CircularLinkedList<number>();
  });

  it('creates linked list with empty head and tail', () => {
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.first()).toBeNull();
    expect(linkedList.last()).toBeNull();
  });

  it('properly adds item to the head of the list', () => {
    linkedList.addFirst(5);
    linkedList.addFirst(4);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
    expect(linkedList.first()).toBe(4);
  });

  it('properly adds item to the end of the list', () => {
    linkedList.addFirst(5);
    linkedList.addLast(6);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
    expect(linkedList.last()).toBe(6);
  });

  it('properly removes element from the head', () => {
    linkedList.addFirst(5);
    linkedList.addLast(6);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
    expect(linkedList.last()).toBe(6);
    linkedList.removeFirst();
    expect(linkedList.first()).toBe(6);
  });

  it('properly rotates the list', () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    expect(linkedList.getSize()).toBe(4);
    expect(linkedList.isEmpty()).toBe(false);
    expect(linkedList.last()).toBe(4);
    linkedList.rotate();
    expect(linkedList.last()).toBe(1);
    linkedList.rotate();
    expect(linkedList.last()).toBe(2);
  });
});
