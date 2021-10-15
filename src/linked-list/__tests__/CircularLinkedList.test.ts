import { CircularLinkedList } from '../CircularLinkedList';

describe('CircularLinkedList', () => {
  let linkedList: CircularLinkedList<number>;

  beforeEach(() => {
    linkedList = new CircularLinkedList();
  });

  it('creates linked list with empty head and tail', () => {
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.first()).toBeNull();
    expect(linkedList.last()).toBeNull();
  });
});
