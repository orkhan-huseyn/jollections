export class SinglyLinkedListNode<T> {
  private element: T;
  private next: SinglyLinkedListNode<T> | null;
  /**
   * Creates new SinglyLinkedListNode
   * @param {T} element value of list node
   * @param {SinglyLinkedListNode<T>} next reference to the next node
   */
  constructor(element: T, next: SinglyLinkedListNode<T>) {
    this.element = element;
    this.next = next;
  }
  /**
   * Returns the value of the node
   * @returns {T} value of the node
   */
  public getElement(): T {
    return this.element;
  }
  /**
   * Returns reference to the next node
   * @returns {SinglyLinkedListNode<T> | null} reference to the next node
   */
  public getNext(): SinglyLinkedListNode<T> | null {
    return this.next;
  }
  /**
   * Sets next of current node to provided node
   * @param {SinglyLinkedListNode<T>} next next list node
   */
  public setNext(next: SinglyLinkedListNode<T>): void {
    this.next = next;
  }
}

export class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> = null;
  private tail: SinglyLinkedListNode<T> = null;
  private size = 0;
  /**
   * Adds new node to the head of the list
   * @param {T} element value to be added
   */
  public addFirst(element: T): void {
    const newest = new SinglyLinkedListNode<T>(element, this.head);
    this.head = newest;
    if (this.isEmpty()) {
      this.tail = this.head;
    }
    this.size++;
  }
  /**
   * Adds new node to the tail of the list
   * @param {T} element value to be added
   */
  public addLast(element: T): void {
    const newest = new SinglyLinkedListNode<T>(element, null);
    if (this.isEmpty()) {
      this.head = newest;
    } else {
      this.tail.setNext(newest);
    }
    this.tail = newest;
    this.size++;
  }
  /**
   * Removes node from the head of the list
   * @returns {T} value of first node
   */
  public removeFirst(): T {
    if (this.isEmpty()) {
      return null;
    }
    const first = this.head.getElement();
    this.head = this.head.getNext();
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return first;
  }
  /**
   * Removes node from the tail of the list
   * @returns {T} value of the last node
   */
  public removeLast(): T {
    if (this.isEmpty()) {
      return null;
    }
    let penultimate = this.head;
    while (penultimate.getNext().getNext() !== null) {
      penultimate = penultimate.getNext();
    }
    this.tail = penultimate;
    const oldTail = penultimate.getNext();
    penultimate.setNext(null);
    this.size--;
    return oldTail.getElement();
  }
  /**
   * Returns value of the first node
   * @returns {T} value of the first node
   */
  public first(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.getElement();
  }
  /**
   * Returns value of the last node
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
   * @returns {number} size of the list
   */
  public getSize(): number {
    return this.size;
  }
  /**
   * Returns true if list size is zero, false otherwise
   * @returns {boolean} true if list is empty
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }
}
