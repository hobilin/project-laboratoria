function findShortestOfThreeWords(word1, word2, word3) {
  return word1 > word2 ? word2 : ((word3 > word1) ? word1 : ((word2 > word3) ? word3 : word2));
}
