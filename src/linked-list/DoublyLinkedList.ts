export class DoublyLinkedListNode<T> {
  private element: T;
  private prev: DoublyLinkedListNode<T> | null;
  private next: DoublyLinkedListNode<T> | null;

  constructor(
    element: T,
    prev: DoublyLinkedListNode<T>,
    next: DoublyLinkedListNode<T>
  ) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }

  public getElement(): T {
    return this.element;
  }

  public getNext(): DoublyLinkedListNode<T> | null {
    return this.next;
  }

  public setNext(next: DoublyLinkedListNode<T>): void {
    this.next = next;
  }

  public getPrev(): DoublyLinkedListNode<T> | null {
    return this.prev;
  }

  public setPrev(prev: DoublyLinkedListNode<T>): void {
    this.prev = prev;
  }
}

export class DoublyLinkedList<T> {
  private header: DoublyLinkedListNode<T> = null;
  private trailer: DoublyLinkedListNode<T> = null;
  private size = 0;

  public addFirst(element: T): void {
    this.addBetween(element, this.header, this.header.getNext());
  }

  public addLast(element: T): void {
    this.addBetween(element, this.trailer.getPrev(), this.trailer);
  }

  public removeFirst(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.remove(this.header.getNext());
  }

  public removeLast(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.remove(this.trailer.getPrev());
  }

  public addBetween(
    element: T,
    predecessor: DoublyLinkedListNode<T>,
    successor: DoublyLinkedListNode<T>
  ): void {
    const newest = new DoublyLinkedListNode<T>(element, predecessor, successor);
    predecessor.setNext(newest);
    successor.setPrev(newest);
    this.size++;
  }

  public remove(node: DoublyLinkedListNode<T>): T {
    const predecessor = node.getPrev();
    const successor = node.getNext();
    predecessor.setNext(successor);
    successor.setPrev(predecessor);
    this.size--;
    return node.getElement();
  }

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public first(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.header.getNext().getElement();
  }

  public last(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.trailer.getPrev().getElement();
  }
}
