class Trie {
    
  private data: Record<string, any> = {}

  constructor() {

  }

  insert(word: string): void {
      let nodeHead = this.data

      for (let c of word ) {
          if (!nodeHead[c]) {
              nodeHead[c] = {}
          }
          nodeHead = nodeHead[c]
      }

      nodeHead.isEnd = true
  }

  searchContent (str: string) {
      let nodeHead = this.data

      for (let c of str) {
          if (!nodeHead[c]) {
              return null
          }
          nodeHead = nodeHead[c]
      }

      return nodeHead
  }

  search(word: string): boolean {
      const searchResult = this.searchContent(word)
      return searchResult && searchResult.isEnd ? true : false
  }

  startsWith(prefix: string): boolean {
      return this.searchContent(prefix) ? true : false
  }
}