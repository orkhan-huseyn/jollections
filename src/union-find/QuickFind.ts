import { UnionFind } from './UnionFind';

export class QuickFind extends UnionFind {
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
}
