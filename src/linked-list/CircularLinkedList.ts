import { SinglyLinkedListNode } from './SinglyLinkedList';

export class CircularLinkedList<T> {
  private tail: SinglyLinkedListNode<T> = null;
  private size = 0;
  /**
   * Rotates the first element to the back of the list
   * @returns {void}
   */
  public rotate(): void {
    if (this.tail !== null) {
      this.tail = this.tail.getNext();
    }
  }
  /**
   * Adds new node to the head of the list
   * @param {T} element value to be added
   */
  public addFirst(element: T): void {
    if (this.isEmpty()) {
      this.tail = new SinglyLinkedListNode<T>(element, null);
      this.tail.setNext(this.tail);
    } else {
      const newest = new SinglyLinkedListNode<T>(element, null);
      newest.setNext(this.tail.getNext());
      this.tail.setNext(newest);
    }
    this.size++;
  }
  /**
   * Adds new node to the tail of the list
   * @param {T} element value to be added
   */
  public addLast(element: T): void {
    this.addFirst(element);
    this.tail = this.tail.getNext();
  }
  /**
   * Removes node from the head of the list
   * @returns {T} value of first node
   */
  public removeFirst(): T {
    if (this.isEmpty()) {
      return null;
    }
    const head = this.tail.getNext();
    if (head === this.tail) {
      this.tail = null;
    } else {
      this.tail.setNext(head.getNext());
    }
    this.size--;
    return head.getElement();
  }
  /**
   * Returns value of the head
   * @returns {T} value of first node
   */
  public first(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.getNext().getElement();
  }
  /**
   * Returns value of the tail
   * @returns {T} value of last node
   */
  public last(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.getElement();
  }
  /**
   * Returns size of the list
   * @returns {number} size of list
   */
  public getSize(): number {
    return this.size;
  }
  /**
   * Returns true if the list is empty, fasle otherwise
   * @returns {boolean} true if the list is empty
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }
}
