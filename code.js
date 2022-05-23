//1) Sum Zero
let sampleArray = [1, 2, -5, 5, 8]

const sumToZero = (array) => {
    let equalsZero = false
    for (let i = 0; i < array.length; i++){
        for (let j =1; j<array.length; j++){
            let sumNumber = array[i] + array[j]
            if(sumNumber == 0){
                equalsZero = true
                break
            }
        }
    }
    return equalsZero
}

console.log(sumToZero(sampleArray))

//Runtime O(n)
//Space Complexity O(n)



//2) Unique Characters
function isUnique(phrase) {
    upperPhrase = phrase.toUpperCase()
    for (let i = 0; i < phrase.length; i++){
        for (let j = i+1; j < phrase.length; j++){
            if (upperPhrase[i] === upperPhrase[j]){
                return false
            }
        }
    }
    return true
}

console.log(isUnique("Monday"))

//Runtime O(n)
//Space Complexity O(n)



//3)Pangram Sentence
const isPangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    for (let i = 0; i < alphabet.length; i++){
        if(sentence.includes(alphabet[i])){
            continue
        }
        else{
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))

//Runtime O(n^2)
//Space Complexity O(n^2)



//4)Longest Word
const wordList = ["Hello", "Goodbye", "Apple", "Pear", "GrapeFruits"]
const longestWord = (wordArray) => {
    let longestWordIndex = wordArray[0]
    for (let i = 1; i < wordArray.length; i++){
        if(wordArray[i].length > longestWordIndex.length){
            longestWordIndex = wordArray[i]
        }
    }
    return longestWordIndex
}

console.log(longestWord(wordList))

//Runtime O(n)
//Space Complexity O(n)