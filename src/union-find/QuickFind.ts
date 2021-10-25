export class QuickFind {
  private roots: number[];
  private count: number;
  /**
   * Creates QuickFind class with given size
   * @param {number} size size of the set, default size is 16
   */
  constructor(size = 16) {
    this.roots = new Array<number>(size);
    for (let i = 0; i < size; i++) {
      this.roots[i] = i;
    }
    this.count = size;
  }
  /**
   * Validates that p is a valid index
   * @param {number} p
   * @returns {void}
   */
  private validate(p: number): void {
    if (p < 0 || p >= this.roots.length) {
      throw new Error(
        'index ' + p + ' is not between 0 and ' + (this.roots.length - 1)
      );
    }
  }
  /**
   * Returns root of given node
   * @param {number} x arbitrary node
   * @returns {number} root of give node
   */
  public find(x: number): number {
    this.validate(x);
    return this.roots[x];
  }
  /**
   * Connects nodes x and y with quick find strategy
   * @param {number} x node x
   * @param {number} y node y
   * @returns {void}
   */
  public uion(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.roots.length; i++) {
        if (this.roots[i] === rootY) {
          this.roots[i] = rootX;
        }
      }
      this.count--;
    }
  }
  /**
   * Returns true if given nodes are connected
   * @param {number} x node x
   * @param {number} y node y
   * @returns {boolean} whether the given nodes are connected
   */
  public isConnected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
  /**
   * Returns number of connected components
   * @returns {number} number of connected components
   */
  public getCount(): number {
    return this.count;
  }
}
