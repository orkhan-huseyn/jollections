import { UnionFind } from './UnionFind';

export class UnionByRank extends UnionFind {
  private ranks: number[];
  /**
   * Creates UnionByRank class with given size
   * @param {number} size size of the set, default size is 16
   */
  constructor(size = 16) {
    super(size);
    this.ranks = new Array(size).fill(1);
  }
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
      if (this.ranks[rootX] > this.ranks[rootY]) {
        this.roots[rootY] = rootX;
      } else if (this.ranks[rootX] < this.ranks[rootY]) {
        this.roots[rootX] = rootY;
      } else {
        this.roots[rootY] = rootX;
        this.ranks[rootX]++;
      }
      this.count--;
    }
  }
}
