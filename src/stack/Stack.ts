import { SinglyLinkedList } from '../linked-list/SinglyLinkedList';

export class Stack<T> {
  private linkedList: SinglyLinkedList<T>;
  /**
   * Creates new stack
   */
  constructor() {
    this.linkedList = new SinglyLinkedList<T>();
  }
  /**
   * Pushes element to the top of stack
   * @param {T} element
   */
  push(element: T): void {
    this.linkedList.addLast(element);
  }
  /**
   * Returns the element on top of the stack
   * @returns {T} element on top of the stack
   */
  top(): T {
    return this.linkedList.last();
  }
  /**
   * Removes element from top of stack and returns it
   * @returns {T} removed element
   */
  pop(): T {
    return this.linkedList.removeLast();
  }
  /**
   * Returns true if stack is empty, false otherwise
   * @returns {boolean} true if stack is empty
   */
  isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }
  /**
   * Returns size of the stack
   * @returns {number} size of the stack
   */
  getSize(): number {
    return this.linkedList.getSize();
  }
}
