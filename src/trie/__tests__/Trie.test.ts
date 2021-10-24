import { Trie } from '../Trie';

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('adds words to trie', () => {
    trie.insert('hello');
    expect(trie.search('hello')).toBe(true);
    expect(trie.remove('hello')).toBe(true);
    expect(trie.search('hello')).toBe(false);
    expect(trie.remove('hello')).toBe(false);
  });
});
