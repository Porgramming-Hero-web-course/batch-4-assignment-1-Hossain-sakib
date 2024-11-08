"use strict";
{
    //
    const countWordOccurrences = (sentence, word) => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const words = lowerCaseSentence.split(" ");
        let wordCount = 0;
        for (const i of words) {
            if (i === lowerCaseWord) {
                wordCount++;
            }
        }
        return wordCount;
    };
    const res = countWordOccurrences("apple orange apple banana apple", "apple");
    console.log(res);
    //
}
