export class TrieNode {
  edges: Map<string, TrieNode>;
  isWordEnd: boolean;

  constructor() {
    this.edges = new Map<string, TrieNode>();
    this.isWordEnd = false;
  }

  insert(root: TrieNode, word: string): void {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.edges.has(char)) {
        currentNode.edges.set(char, new TrieNode());
      }
      currentNode = currentNode.edges.get(char);
    }
    currentNode.isWordEnd = true;
  }

  search(root: TrieNode, word: string): boolean {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.edges.has(char)) {
        return false;
      }

      currentNode = currentNode.edges.get(char);
    }
    return currentNode.isWordEnd;
  }

  remove(root: TrieNode, word: string, deep = false): boolean {
    let currentNode = root;
    const nodes: TrieNode[] = [currentNode];
    for (let i = 0; i < word.length; i++) {
      if (!currentNode.edges.has(word[i])) return false;
      console.log(i, word[i], word, currentNode.edges.has(word[i]));

      currentNode = currentNode.edges.get(word[i]);
      nodes.push(currentNode);

      if (i === word.length - 1 && currentNode.isWordEnd === true) {
        currentNode.isWordEnd = false;

        if (deep === true) {
          for (let j = nodes.length - 1; j >= 0; j--) {
            const node = nodes[j];
            if (word[j] && node.edges.size > 1) return true;

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

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    const currentNode: TrieNode = this.root;
    currentNode.insert(currentNode, word);
  }
  public search(word: string): boolean {
    const currentNode: TrieNode = this.root;
    return currentNode.search(currentNode, word);
  }
  public remove(word: string, deep?: boolean): boolean {
    const currentNode: TrieNode = this.root;
    return currentNode.remove(currentNode, word, deep);
  }
}
