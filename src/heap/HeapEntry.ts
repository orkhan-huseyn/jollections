export abstract class HeapEntry<K, V> {
  private key: K;
  private value: V;
  /**
   *
   * @param {K} key heap entry key
   * @param {V} value heap enrty value
   */
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
  /**
   * Comparator method
   * @param {HeapEntry<K, V>} entry entry to compare with
   */
  abstract compareTo(entry: HeapEntry<K, V>): number;
  /**
   * Returns key of current entry
   * @returns {K} key of the entry
   */
  public getKey(): K {
    return this.key;
  }
  /**
   * Returns value of current entry
   * @returns {V} value of the entry
   */
  public getValue() {
    return this.value;
  }
  /**
   * Sets key of the key
   * @param {K} key
   */
  protected setKey(key: K): void {
    this.key = key;
  }
  /**
   * Sets value of the entry
   * @param {V} value
   */
  protected setValue(value: V): void {
    this.value = value;
  }
}
