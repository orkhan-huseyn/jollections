import { QuickUnion } from '../QuickUnion';

describe('QuickUnion', () => {
  it('starts with 16 disconnected components when size is not provided', () => {
    const unionFind = new QuickUnion();
    expect(unionFind.getCount()).toBe(16);
  });

  it('starts with 5 disconnected components when initialized with size 5', () => {
    const unionFind = new QuickUnion(5);
    expect(unionFind.getCount()).toBe(5);
  });

  it('throws error when trying to find node that is not in bound', () => {
    const unionFind = new QuickUnion(5);
    expect(() => unionFind.find(6)).toThrowError();
  });

  it('correctly connects two components', () => {
    const unionFind = new QuickUnion();
    expect(unionFind.isConnected(1, 15)).toBe(false);
    unionFind.uion(1, 15);
    expect(unionFind.isConnected(1, 15)).toBe(true);
  });

  it('returns number of connected components correctly', () => {
    const unionFind = new QuickUnion();
    unionFind.uion(1, 15);
    expect(unionFind.getCount()).toBe(15);
  });

  it('correctly sets root of connected components', () => {
    const unionFind = new QuickUnion();
    unionFind.uion(1, 15);
    expect(unionFind.find(1)).toBe(1);
    expect(unionFind.find(15)).toBe(1);
  });

  it('does not connect alredy connected components', () => {
    const unionFind = new QuickUnion();
    unionFind.uion(1, 15);
    expect(unionFind.getCount()).toBe(15);
    unionFind.uion(1, 15);
    unionFind.uion(1, 15);
    expect(unionFind.getCount()).toBe(15);
  });
});
