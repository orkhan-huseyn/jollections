import { UnionFind } from './UnionFind';

export class QuickUnion extends UnionFind {
  /**
   * Returns root of given node
   * @param {number} x arbitrary node
   * @returns {number} root of give node
   */
  public find(x: number): number {
    this.validate(x);
    while (x !== this.roots[x]) {
      x = this.roots[x];
    }
    return x;
  }
  /**
   * Connects nodes x and y with quick union strategy
   * @param {number} x node x
   * @param {number} y node y
   * @returns {void}
   */
  public uion(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.roots[rootY] = rootX;
      this.count--;
    }
  }
}
