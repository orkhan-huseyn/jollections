export class DoublyLinkedListNode<T> {
  private element: T;
  private prev: DoublyLinkedListNode<T> | null;
  private next: DoublyLinkedListNode<T> | null;
  /**
   * Creates new DoublyLinkedListNode
   * @param {T} element
   * @param {DoublyLinkedListNode} prev
   * @param {DoublyLinkedListNode} next
   */
  constructor(
    element: T,
    prev: DoublyLinkedListNode<T>,
    next: DoublyLinkedListNode<T>
  ) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
  /**
   * Returns node value
   * @returns {T} node value
   */
  public getElement(): T {
    return this.element;
  }
  /**
   * Returns next node
   * @returns {DoublyLinkedListNode} node
   */
  public getNext(): DoublyLinkedListNode<T> | null {
    return this.next;
  }
  /**
   * Sets next node to given node
   * @param {DoublyLinkedListNode} next
   */
  public setNext(next: DoublyLinkedListNode<T>): void {
    this.next = next;
  }
  /**
   * Returns previous node
   * @returns {DoublyLinkedListNode} previous node
   */
  public getPrev(): DoublyLinkedListNode<T> | null {
    return this.prev;
  }
  /**
   * Sets previous node to given node
   * @param {DoublyLinkedListNode} prev
   */
  public setPrev(prev: DoublyLinkedListNode<T>): void {
    this.prev = prev;
  }
}

export class DoublyLinkedList<T> {
  private header: DoublyLinkedListNode<T>;
  private trailer: DoublyLinkedListNode<T>;
  private size = 0;
  /**
   * Initializes header and trailer of the list
   */
  constructor() {
    this.header = new DoublyLinkedListNode(null, null, null);
    this.trailer = new DoublyLinkedListNode(null, this.header, null);
    this.header.setNext(this.trailer);
  }
  /**
   * Adds element to the head of the list
   * @param {T} element
   */
  public addFirst(element: T): void {
    this.addBetween(element, this.header, this.header.getNext());
  }
  /**
   * Adds element to the tail of the list
   * @param {T} element
   */
  public addLast(element: T): void {
    this.addBetween(element, this.trailer.getPrev(), this.trailer);
  }
  /**
   * Removes element from the head and returns it
   * @returns {T} removed node value
   */
  public removeFirst(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.remove(this.header.getNext());
  }
  /**
   * Removes element from the tail and returns it
   * @returns {T} removed node value
   */
  public removeLast(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.remove(this.trailer.getPrev());
  }
  /**
   * Inserts new node between two nodes
   * @param {T} element
   * @param {DoublyLinkedListNode} predecessor
   * @param {DoublyLinkedListNode} successor
   */
  private addBetween(
    element: T,
    predecessor: DoublyLinkedListNode<T>,
    successor: DoublyLinkedListNode<T>
  ): void {
    const newest = new DoublyLinkedListNode<T>(element, predecessor, successor);
    predecessor.setNext(newest);
    successor.setPrev(newest);
    this.size++;
  }
  /**
   * Removes given node and returns its value
   * @param {DoublyLinkedListNode} node
   * @returns {T}
   */
  private remove(node: DoublyLinkedListNode<T>): T {
    const predecessor = node.getPrev();
    const successor = node.getNext();
    predecessor.setNext(successor);
    successor.setPrev(predecessor);
    this.size--;
    return node.getElement();
  }
  /**
   * Returns value of the head
   * @returns {T} value of first node
   */
  public first(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.header.getNext().getElement();
  }
  /**
   * Returns value of the tail
   * @returns {T} value of last node
   */
  public last(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.trailer.getPrev().getElement();
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
