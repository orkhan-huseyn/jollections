import { SinglyLinkedList } from '../linked-list/SinglyLinkedList';

export class Queue<T> {
  private linkedList: SinglyLinkedList<T>;
  /**
   * Creates new Queue instance
   */
  constructor() {
    this.linkedList = new SinglyLinkedList<T>();
  }
  /**
   * Adds new element to queue
   * @param {T} element element to be added
   */
  enqueue(element: T): void {
    this.linkedList.addFirst(element);
  }
  /**
   * Removes first element from queue that needs to be served
   * and returns its value
   * @returns {T} element to be served
   */
  dequeue(): T {
    return this.linkedList.removeLast();
  }
  /**
   * Returns first item in the queue
   * @returns {T} value of the first item
   */
  public first(): T {
    return this.linkedList.last();
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
