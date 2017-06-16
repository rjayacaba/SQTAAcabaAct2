function countWords(inputWords){
return inputWords.reduce(function(countWords,word){
	countWords[word] = ++countWords[word] || 1
	return countWords
},{})
}

module.exports = countWords