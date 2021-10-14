import { DoublyLinkedList } from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  let linkedList: DoublyLinkedList<number>;

  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });

  it('creates linked list with empty header and trailer', () => {
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.first()).toBeNull();
    expect(linkedList.last()).toBeNull();
  });

  describe('when list is empty', () => {
    it('properly adds new element to head', () => {
      linkedList.addFirst(5);
      expect(linkedList.isEmpty()).toBe(false);
      expect(linkedList.first()).toBe(5);
    });

    it('properly adds new element to tail', () => {
      linkedList.addLast(5);
      expect(linkedList.isEmpty()).toBe(false);
      expect(linkedList.last()).toBe(5);
    });

    it('properly removes element from head', () => {
      expect(linkedList.getSize()).toBe(0);
      expect(linkedList.isEmpty()).toBe(true);
      expect(linkedList.removeFirst()).toBeNull();
    });

    it('properly removes element from tail', () => {
      expect(linkedList.getSize()).toBe(0);
      expect(linkedList.isEmpty()).toBe(true);
      expect(linkedList.removeLast()).toBeNull();
    });
  });

  describe('when list has one or more elements', () => {
    it('properly adds new element to head', () => {
      linkedList.addFirst(5);
      linkedList.addFirst(4);
      expect(linkedList.getSize()).toBe(2);
      expect(linkedList.first()).toBe(4);
      expect(linkedList.last()).toBe(5);
    });

    it('properly adds new element to tail', () => {
      linkedList.addLast(5);
      linkedList.addLast(6);
      expect(linkedList.getSize()).toBe(2);
      expect(linkedList.last()).toBe(6);
      expect(linkedList.first()).toBe(5);
    });

    it('removes element from head and decreases size', () => {
      linkedList.addFirst(5);
      linkedList.addFirst(4);
      expect(linkedList.getSize()).toBe(2);
      expect(linkedList.first()).toBe(4);
      expect(linkedList.last()).toBe(5);
      linkedList.removeFirst();
      expect(linkedList.getSize()).toBe(1);
      expect(linkedList.first()).toBe(5);
      expect(linkedList.last()).toBe(5);
    });

    it('removes element from tail and decreases size', () => {
      linkedList.addFirst(5);
      linkedList.addFirst(4);
      expect(linkedList.getSize()).toBe(2);
      expect(linkedList.first()).toBe(4);
      expect(linkedList.last()).toBe(5);
      linkedList.removeLast();
      expect(linkedList.getSize()).toBe(1);
      expect(linkedList.first()).toBe(4);
      expect(linkedList.last()).toBe(4);
    });
  });
});
