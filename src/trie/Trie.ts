export class TrieNode {
  public edges: Map<string, TrieNode>;
  public isWordEnd: boolean;

  /**
   * Creates a TrieNode instance
   */
  constructor() {
    this.edges = new Map<string, TrieNode>();
    this.isWordEnd = false;
  }
  /**
   * Inserts a new word to given node
   * @param {string} root root node to insert
   * @param {string} word word to insert
   */
  public insert(root: TrieNode, word: string): void {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.edges.has(char)) {
        currentNode.edges.set(char, new TrieNode());
      }
      currentNode = currentNode.edges.get(char);
    }
    currentNode.isWordEnd = true;
  }
  /**
   * Searches the given word inside Trie
   * @param {TrieNode} root node to search from
   * @param {string} word word to search
   * @returns {boolean} true if word found, false otherwise
   */
  public search(root: TrieNode, word: string): boolean {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.edges.has(char)) {
        return false;
      }
      currentNode = currentNode.edges.get(char);
    }
    return currentNode.isWordEnd;
  }
  /**
   * Removes given word from Trie
   * @param {TrieNode} root node to start search from
   * @param {string} word word to be removed
   * @param {boolean} deep deep remove
   * @returns {boolean} whether or not the word removed
   */
  public remove(root: TrieNode, word: string, deep = false): boolean {
    let currentNode = root;
    const nodes: TrieNode[] = [currentNode];
    for (let i = 0; i < word.length; i++) {
      if (!currentNode.edges.has(word[i])) {
        return false;
      }
      currentNode = currentNode.edges.get(word[i]);
      nodes.push(currentNode);
      if (i === word.length - 1 && currentNode.isWordEnd === true) {
        currentNode.isWordEnd = false;
        if (deep === true) {
          for (let j = nodes.length - 1; j >= 0; j--) {
            const node = nodes[j];
            if (word[j] && node.edges.size > 1) {
              return true;
            }
            node.edges.delete(word[j]);
          }
        }
        return true;
      }
    }
    return false;
  }
}

export class Trie {
  private root: TrieNode;
  /**
   * Creates a Trie instance
   */
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * Inserts a new word into Trie
   * @param {string} word word to be inserted
   */
  public insert(word: string): void {
    const currentNode: TrieNode = this.root;
    currentNode.insert(currentNode, word);
  }
  /**
   * Searches given word in the Trie
   * @param {string} word word to be searched
   * @returns {boolean}
   */
  public search(word: string): boolean {
    const currentNode: TrieNode = this.root;
    return currentNode.search(currentNode, word);
  }
  /**
   * Removes word from thee Trie
   * @param {string} word word to be removed
   * @param {boolean} deep deep remove
   * @returns {boolean} whether or not the word removed
   */
  public remove(word: string, deep?: boolean): boolean {
    const currentNode: TrieNode = this.root;
    return currentNode.remove(currentNode, word, deep);
  }
}
