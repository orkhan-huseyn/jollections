export class QuickFind {
  private roots: number[];
  private count: number;
  /**
   * Creates QuickFind class with given size
   * @param {number} size size of the set
   */
  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.roots[i] = i;
    }
    this.count = 0;
  }
  /**
   * Returns root of given node
   * @param {number} x arbitrary node
   * @returns {number} root of give node
   */
  find(x: number): number {
    return this.roots[x];
  }
  /**
   * Connects nodes x and y with quick find strategy
   * @param {number} x node x
   * @param {number} y node y
   * @returns {void}
   */
  uion(x: number, y: number): void {
    const rootX = this.roots[x];
    const rootY = this.roots[y];
    if (rootX !== rootY) {
      for (let i = 0; i < this.roots.length; i++) {
        if (this.roots[i] === rootY) {
          this.roots[i] = rootX;
        }
      }
      this.count++;
    }
  }
  /**
   * Returns number of connected components
   * @returns {number} number of connected components
   */
  getCount(): number {
    return this.count;
  }
}
