export class SinglyLinkedListNode<T> {
  private element: T;
  private next: SinglyLinkedListNode<T> | null;

  constructor(element: T, next: SinglyLinkedListNode<T>) {
    this.element = element;
    this.next = next;
  }

  public getElement(): T {
    return this.element;
  }

  public getNext(): SinglyLinkedListNode<T> | null {
    return this.next;
  }

  public setNext(next: SinglyLinkedListNode<T>): void {
    this.next = next;
  }
}

export class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> = null;
  private tail: SinglyLinkedListNode<T> = null;
  private size = 0;

  public addFirst(element: T): void {
    const newest = new SinglyLinkedListNode<T>(element, this.head);
    this.head = newest;
    if (this.isEmpty()) {
      this.tail = this.head;
    }
    this.size++;
  }

  public addLast(element: T): void {
    const newest = new SinglyLinkedListNode<T>(element, null);
    if (this.isEmpty()) {
      this.head = newest;
    } else {
      this.tail.setNext(newest);
    }
    this.tail = newest;
    this.size = 0;
  }

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
    return this.head.getElement();
  }

  public last(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.getElement();
  }
}
