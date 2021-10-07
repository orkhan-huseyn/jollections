import { SinglyLinkedList } from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {
  it('creates linked list with empty head and tail', () => {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.first()).toBeNull();
    expect(linkedList.last()).toBeNull();
  });
});
