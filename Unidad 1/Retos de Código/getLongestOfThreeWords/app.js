function getLongestOfThreeWords(word1, word2, word3) {

    if(word1.length === word2.length || word1.length === word3.length || word2.length === word3.length){
    return [word1, word2, word3].shift();

    }else{
     return word3 > word1 ? word3 : ((word1 > word2) ? word1 : ((word2 > word3) ? word2 : word3));

    }
}
