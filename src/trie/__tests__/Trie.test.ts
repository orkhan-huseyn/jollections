import { Trie } from '../Trie';

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('does not find word if it is not inserted', () => {
    expect(trie.search('hello')).toBe(false);
  });

  it('does not remove word if it is not inserted', () => {
    expect(trie.search('hello')).toBe(false);
  });

  it('correctly adds words to trie', () => {
    trie.insert('hello');
    expect(trie.search('hello')).toBe(true);
  });

  it('properly removes wors from trie', () => {
    trie.insert('hello');
    expect(trie.remove('hello')).toBe(true);
    expect(trie.search('hello')).toBe(false);
  });

  it('does not find incomplete words', () => {
    trie.insert('amsterdam');
    trie.insert('america');
    expect(trie.search('am')).toBe(false);
  });
});
