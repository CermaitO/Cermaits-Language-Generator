
//@collapse
import {consonants, selectedSyllables, allNasalsArray, selectFricatives} from './generatePhonology.js';
import {spell} from './orthography.js'
let addedConsonants = consonants;

// function soundChange(word) {

//     //let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];
//     //let longVowels = ["ā", "ē", "ō", "ū", "ī", "ə"];
//     //let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

//     let letterArray = Array.from(word); /*turns string into an array of individual letters*/

//     /*---------SYNCOPE-----------*/
//     //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
//     if(vowels.includes(letterArray[0])) {
//         if (letterArray.length > 4) {
//             if (letterArray[1] == letterArray[3]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([4], 1); // 2nd parameter means remove one item only
//                 if (letterArray[2] == "o") {
//                     letterArray[2] = "ō"
//                 } else if (letterArray[2] == "u") {
//                     letterArray[2] = "ū"
//                 } else if (letterArray[2] == "i") {
//                     letterArray[2] = "ī"
//                 } else if (letterArray[2] == "e") {
//                     letterArray[2] = "ē"
//                 } else if (letterArray[23] == "a") {
//                     letterArray[2] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[4])) {
//                 letterArray.splice([2], 1);
//                 if (letterArray[0] == "o") {
//                     letterArray[0] = "ō"
//                 } else if (letterArray[0] == "u") {
//                     letterArray[0] = "ū"
//                 } else if (letterArray[0] == "i") {
//                     letterArray[0] = "ī"
//                 } else if (letterArray[0] == "e") {
//                     letterArray[0] = "ē"
//                 } else if (letterArray[0] == "a") {
//                     letterArray[0] = "ā"
//                 }
//             }
//     }
//     } else { //else if letterArray[0]'s value is a consonant
//         if (letterArray.length > 4) {
//             if (letterArray[2] == letterArray[4]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([5], 1); // 2nd parameter means remove one item only
//                 if (letterArray[3] == "o") {
//                     letterArray[3] = "ō"
//                 } else if (letterArray[3] == "u") {
//                     letterArray[3] = "ū"
//                 } else if (letterArray[3] == "i") {
//                     letterArray[3] = "ī"
//                 } else if (letterArray[3] == "e") {
//                     letterArray[3] = "ē"
//                 } else if (letterArray[3] == "a") {
//                     letterArray[3] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[3])) {
//                 letterArray.splice([3], 1);
//                 if (letterArray[1] == "o") {
//                     letterArray[1] = "ō"
//                 } else if (letterArray[1] == "u") {
//                     letterArray[1] = "ū"
//                 } else if (letterArray[1] == "i") {
//                     letterArray[1] = "ī"
//                 } else if (letterArray[1] == "e") {
//                     letterArray[1] = "ē"
//                 } else if (letterArray[1] == "a") {
//                     letterArray[1] = "ā"
//                 }
//             }
//     }
//     }
    
//     let syncopedString = letterArray.join(""); //turns the array back into a string

//     let lenitionString0 = syncopedString.replace("pb", "fp");
//     let lenitionString1 = lenitionString0.replace("bp", "fp");
//     let lenitionString2 = lenitionString1.replace("gk", "hk");
//     let lenitionString3 = lenitionString2.replace("kg", "hk");
//     let lenitionString4 = lenitionString3.replace("dt", "st");
//     let lenitionString5 = lenitionString4.replace("td", "st");
//     let lenitionString6 = lenitionString5.replace("bm", "mb");
//     let lenitionString7 = lenitionString6.replace("mt", "md");
//     let lenitionString8 = lenitionString7.replace("mp", "mb");
//     let lenitionString9 = lenitionString8.replace("mk", "mg");

//     let furtherChanges = Array.from(lenitionString9);

//     let rejoinedString = furtherChanges.join(""); //turns the array back into a string

//     //removes "h" if it occurs both after another consonant and before "k". Due to interference with the "h" in the accusative prefix, I had to make this rather clunky workaround. This turns "hk" clusters into "X" (all cases of post-consonantal "h" occur befor "h") and then check if "X" if after a consonant, if it is, then "X" becomes "k", else, it becomes "hk" again
//     let hKtoX = rejoinedString.replace("hk", "X");
//     let beforeX = consonants.includes(hKtoX.charAt(hKtoX.indexOf("X") - 1));
//     let removeCX = hKtoX.includes("X") && beforeX ? hKtoX.replace("X", "k") : hKtoX;
//     let returnXtoHK = removeCX.replace("X", "hk");
    
//     //checks if "r" is before and after a consonant, and turns it into schwa if so
//     let syllabliseR = returnXtoHK.includes("r") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") + 1)) && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") - 1)) ? returnXtoHK.replace("r", "ə") : returnXtoHK;

//     //checks if "l" is before and after a consonant, and turns it into schwa if so
//     let syllabliseL = syllabliseR.includes("l") && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") + 1)) && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") - 1)) ? syllabliseR.replace("l", "ə") : syllabliseR;

//     //turns geminates into singletons
//     let reduceGeminate = syllabliseL.replace("pp", "p");
//     let reduceGeminate1 = reduceGeminate.replace("bb", "b");
//     let reduceGeminate2 = reduceGeminate1.replace("tt", "t");
//     let reduceGeminate3 = reduceGeminate2.replace("dd", "d");
//     let reduceGeminate4 = reduceGeminate3.replace("kk", "k");
//     let reduceGeminate5 = reduceGeminate4.replace("gg", "g");
//     let reduceGeminate6 = reduceGeminate5.replace("ss", "s");
//     let reduceGeminate7 = reduceGeminate6.replace("ll", "l");
//     let reduceGeminate8 = reduceGeminate7.replace("rr", "r");
//     let reduceGeminate9 = reduceGeminate8.replace("nn", "n");
//     let reduceGeminate10 = reduceGeminate9.replace("mm", "m");
//     let reduceGeminate11 = reduceGeminate10.replace("hh", "h");
    
//     let syllabliseJ = reduceGeminate11.includes("j") && consonants.includes(reduceGeminate11.charAt(reduceGeminate11.indexOf("j") + 1)) || reduceGeminate11[reduceGeminate11.length - 1] == "j" ? reduceGeminate11.replace("j", "i") : reduceGeminate11;

//     let syllabliseW = syllabliseJ.includes("w") && consonants.includes(syllabliseJ.charAt(syllabliseJ.indexOf("w") + 1)) || syllabliseJ[syllabliseJ.length - 1] == "w" ? syllabliseJ.replace("w", "u"): syllabliseJ;

//     let fixMacronUPlusU = syllabliseW.replace("ūu", "ū");
//     let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
//     let fixUPlusU = fixUPlusMacronU.replace("uu", "ū");
//     let fixMacronUPlusU2 = fixUPlusU.replace("ūu", "ū"); //because "uuw" becomes "uuu" then "ūu" which happens after the first "ūu" > "ū"

//     let fixMacronIPlusI = fixMacronUPlusU2.replace("īi", "ī");
//     let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");
//     let fixIPlusI = fixIPlusMacronI.replace("ii", "ī");

//     let fixMacronEplusE = fixIPlusI.replace("ēe", "ē");
//     let fixEPlusMacronE = fixMacronEplusE.replace("eē", "ē");
//     let fixEPlusE = fixEPlusMacronE.replace("ee", "ē");

//     let fixMacronOplusO = fixEPlusE.replace("ōo", "o");
//     let fixOPlusMacronO = fixMacronOplusO.replace("oō", "ō");
//     let fixOPlusO = fixOPlusMacronO.replace("oo", "ō");

//     let fixMacronAplusA = fixOPlusO.replace("āa", "ā");
//     let fixAPlusMacronA = fixMacronAplusA.replace("aā", "ā");
//     let fixAPlusA = fixAPlusMacronA.replace("aa", "ā");

//     return fixAPlusA;
// }

let voiced = ["b", "d", "g", "z", "bʰ", "dʰ", "gʰ", "ʐ", "ɖ", "ɣ", "v", "ɦ", "dʒ", "ɟ", "ʁ", "ʒ", "ɟ", "ʕ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "ð", "ɮ"];
let unvoiced = ["p", "t", "k", "s", "pʰ", "tʰ", "kʰ", "ʂ", "ʈ", "x", "f", "h", "tʃ", "c", "χ", "ʃ", "ç", "ħ", "pʲ", "tʲ", "kʲ", "pʷ", "tʷ", "kʷ", "pʰʲ", "tʰʲ", "kʰʲ", "pʷʰ", "tʷʰ", "kʷʰ", "θ", "ɬ"]
let highVowels = ["i", "u", "y", "ɯ", "ɨ", "ʉ"];
let midVowels = ["e", "o", "ø", "ɤ", "ɘ", "ɵ", "ə", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "ɑ", "ɒ", "ɐ", "æ"];
let nonHighVowels = ["e", "ø", "ɘ", "ɵ", "ə", "ɛ", "ɜ", "ɞ", "ɪ", "ɔ", "œ", "ɒ", "ʊ", "ʌ", "ɤ", "o", "æ", "ɑ", "ɐ", "a"]
let vowels = highVowels.concat(nonHighVowels);
let addedVowels = vowels;
let resonants = ["r", "l", "rʲ", "lʲ", "ʎ","ɽ", "ɭ"];
let plosives = ["b", "d", "g", "bʰ", "dʰ", "gʰ", "ɖ", "ɟ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "p", "t", "k", "pʰ", "tʰ", "kʰ", "ʈ", "c", "pʲ", "tʲ", "kʲ", "pʷ", "tʷ", "kʷ", "pʰʲ", "tʰʲ", "kʰʲ", "pʷʰ", "tʷʰ", "kʷʰ", "ʔ", "q", "ɢ"];
let lenitionFromPlosives1 = ["β", "ð", "ɣ", "β", "ð", "ɣ", "ʐ", "ʝ", "βʲ", "ðʲ", "ɣʲ", "βʷ", "ðʷ", "ɣʷ", "βʲ", "ðʲ", "ɣʲ", "βʷ", "ðʷ", "ɣʷ", "ɸ", "θ", "x", "ɸ", "θ", "x", "θ", "ç", "ɸʲ", "θʲ", "xʲ", "ɸʷ", "θʷ", "xʷ", "ɸʲ", "θʲ", "xʲ", "θʷ", "θʷ", "xʷ", "h", "χ", "ʁ"];
let lenitionFromPlosives2 = ["v", "z", "h", "v", "z", "h", "ʐ", "j", "vʲ", "zʲ", "hʲ", "vʷ", "zʷ", "hʷ", "vʲ", "zʲ", "hʲ", "vʷ", "zʷ", "hʷ", "f", "s", "h", "f", "s", "h", "ʂ", "j", "fʲ", "sʲ", "hʲ", "fʷ", "sʷ", "hʷ", "fʲ", "sʲ", "hʲ", "fʷ", "stʷ", "hʷ", "h", "h", "h"];
let syllablestructuresThatHaveWordFinalConsonants = ["CVC", "VVC", "VVCC", "VCC", "AVC", "CAVCC", "CVNC", "VNC", "CVFC", "FCVC", "CCFV", "CVRC", "CVCR", "CRVC", "CVH", "HVC", "VC"];

let timeswordFinalDevoicingApplied = 0;  
let timesplosivesCantClusterTogetherWordInitiallyApplied = 0;
let timesfricativesLostAfterWordInitialConsonantsApplied = 0;
let timeswordFinalHighVowelsLowerApplied = 0;
let timesResonantsLostAfterConsonantsApplied = 0;
let timesInsterIBetweenConsonantAndResonantApplied = 0;
let timesInstertUBetweenConsonantAndResonantApplied = 0;
let timesConsonantResonantMetathesisApplied = 0;
let timeslenitionofPlosivebeforeOtherPlosiveApplied = 0;
let timesnonInitialNonHighVowelsBecomeAApplied = 0;
let timesnasalsCantAppearAfterConsonantsApplied = 0;
let timefricativesDebuccaliseBeforeVowelsApplied = 0;
let timesvowelLostBetweenTwoOfSameConsonantApplied = 0;
let timesvoicedConsonantsLostIntervocalicallyApplied = 0;
let timesRVCToVRCMetathesisApplies = 0;
let timesvowelLostBetweenConsonantAndResonantApplied = 0;

function cloneArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

function clearPreviousOutput() {
    document.getElementById("sound-change-explanation").replaceChildren();
    timeswordFinalDevoicingApplied = 0;  
    timesplosivesCantClusterTogetherWordInitiallyApplied = 0;
    timesfricativesLostAfterWordInitialConsonantsApplied = 0;
    timeswordFinalHighVowelsLowerApplied = 0;
    timesResonantsLostAfterConsonantsApplied = 0;
    timesInsterIBetweenConsonantAndResonantApplied = 0;
    timesInstertUBetweenConsonantAndResonantApplied = 0;
    timesConsonantResonantMetathesisApplied = 0;
    timeslenitionofPlosivebeforeOtherPlosiveApplied = 0;
    timesnonInitialNonHighVowelsBecomeAApplied = 0;
    timesnasalsCantAppearAfterConsonantsApplied = 0;
    timefricativesDebuccaliseBeforeVowelsApplied = 0;
    timesvowelLostBetweenTwoOfSameConsonantApplied = 0;
    timesvoicedConsonantsLostIntervocalicallyApplied = 0;
    timesRVCToVRCMetathesisApplies = 0;
    timesvowelLostBetweenConsonantAndResonantApplied = 0;

}

function checkIfWordFinalConsonantsArePossible() {
    for(let i = 0; i < syllablestructuresThatHaveWordFinalConsonants.length; i++) {
        if(selectedSyllables.includes(syllablestructuresThatHaveWordFinalConsonants[i])) {
            return true
        } else {
            return false;
        }
}
}

function checkIfThereAreNonHighVowels() {
    for(let i = 0; i < nonHighVowels.length; i++) {
        if (vowels.includes(nonHighVowels[i])) {
            return true;
        }
    }
}

function checkIfVoicingIsPresent() {
    for(let i = 0; i < voiced.length; i++) {
    if(consonants.includes(voiced[i]))
        return true
    }
}

//A list of titles for every sound change is placed into the array "potentialSoundChanges". Then a random number and selection of these titles are pushed into the "chosenSoundChanges" array. If the "chosenSoundChanges" contains a sound changes title, the sound change may occur.

let potentialSoundChanges = [];
let chosenSoundChanges = [];
let wordArray = [];
let wordFinalDevoicingTrueOrFalse = "";
let randomNumForWordInitialPlosiveClusters = "";
let randomNumForWordInitialNasalClusters = "";
let randomNumForNoResonantsBeforeConsonants = "";
let randomNumForlenitionofPlosivebeforeOtherPlosive = "";
let randomNumForNoFricativesAsLatterElementOfInitialClusters = ""


//Some sound changes won't be considered as part of an explicitly listed phonotactic, but still apply to stop the output consisting of rare features. For example, the output kept giving words with complex clusters of plosives word initially, which is plausible, but it did it far too much to be natural. In these cases, I intentionally stunt these results by making sound changes to undo them and give these sound changes a very high chance of occuring. So the unusual results can still happen but will be much rarer and thus more natural. These changes will be governed by their own random numbers instead of being chosen based on whether they made it to the chosenSoundChanges array.

let cloneChosen = [];
let randomNumberForSoundChangeSelection = 0;
function selectSoundChanges() {
        potentialSoundChanges = [];
        chosenSoundChanges = [];
        wordArray = [];
        wordFinalDevoicingTrueOrFalse = "";
        potentialSoundChanges.push(plosivesCantClusterTogetherWordInitially);
        potentialSoundChanges.push(wordFinalDevoicing);
        potentialSoundChanges.push(fricativesLostAfterWordInitialConsonants);
        potentialSoundChanges.push(lenitionofPlosivebeforeOtherPlosive);
        potentialSoundChanges.push(wordFinalHighVowelsLower);
        potentialSoundChanges.push(NoResonantsBeforeConsonants);
        potentialSoundChanges.push(nonInitialNonHighVowelsBecomeA);
        potentialSoundChanges.push(nasalsCantAppearAfterConsonants);
        potentialSoundChanges.push(fricativesDebuccaliseBeforeVowels);
        potentialSoundChanges.push(vowelLostBetweenTwoOfSameConsonant);
        potentialSoundChanges.push(voicedConsonantsLostIntervocalically);
        potentialSoundChanges.push(RVCToVRCMetathesis);
        potentialSoundChanges.push(vowelLostBetweenConsonantAndResonant)
       
        //selects which sound changes will be chosen
        while(chosenSoundChanges.length < Math.floor(Math.random() * potentialSoundChanges.length) + 6) {
            randomNumberForSoundChangeSelection = Math.floor(Math.random() * potentialSoundChanges.length);
            if(chosenSoundChanges.includes(potentialSoundChanges[randomNumberForSoundChangeSelection]) === false) {
                chosenSoundChanges.push(potentialSoundChanges[randomNumberForSoundChangeSelection]) 
                cloneChosen.push(potentialSoundChanges[randomNumberForSoundChangeSelection]);
            }
        }

        randomNumForWordInitialPlosiveClusters = Math.floor(Math.random() * 50);
        randomNumForWordInitialNasalClusters = Math.floor(Math.random() * 30);
        randomNumForNoFricativesAsLatterElementOfInitialClusters = Math.floor(Math.random() * 50);
        randomNumForNoResonantsBeforeConsonants = Math.floor(Math.random() * 4);
        randomNumForlenitionofPlosivebeforeOtherPlosive = Math.floor(Math.random() * 2);
    }

function soundChange(word) {
    wordArray = Array.from(word);

    /*CORRECTIVE CHANGES - not genuine sound changes, just meant to tidy up the roots in the mother language. These will not be described at all in the grammar*/

       //the generated words often form doublets across syllable boundries e.g 'ga-ag' > 'gaag'. These can be confused for long vowels or long consonants which is especially unwanted if the language lacks length altogether. So these accidental doublets are removed first.
       for(let i = 0; i < wordArray.length; i++) {
        while(wordArray[i] === wordArray[i + 1]) {
            wordArray.splice(i, 1)
        } 
    }

      //since long vowels in the IPA are marked like 'iː', with ː being an extra character, this loop deletes the following long vowel if it is the same
        for(let i = 0; i < wordArray.length; i++) {
            if(wordArray[i + 1] === "ː" && wordArray[i + 2] === wordArray[i] && wordArray[i + 3] === "ː") {
                wordArray.splice(i+2, 1)
                wordArray.splice(i+2, 1)
            } 
        }
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ː") {
            wordArray[i] = wordArray[i - 1]
        }
    }

     //there were far too many long vowels and consonants generated, so this serves to random shorten many of them to stop the vast majority of vowels in most words being long
     for(let i = 0; i < wordArray.length; i++) {
        // if(wordArray[i] === wordArray[i + 1] && Math.floor(Math.random() * 5) !== 3) {
        //     wordArray.splice(i, 1)
        // } 
        //removes word inital geminates
        if(wordArray[i] === wordArray[0] && wordArray[i] === wordArray[i + 1] && consonants.includes(wordArray[i])) {
            wordArray.splice(i, 1)
        }
    }

    //prevent preaspirated consonants occuring word initially
    if(wordArray[0] === "ʰ") {
        wordArray.splice(0, 1);
    }
    //also remove normal /h/ word initially before plosives
    if(wordArray[0] === "h" && plosives.includes(wordArray[1])) {
        wordArray.splice(0, 1);
    }
    //prevents a single sound clustering with a long sound of the same quality
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "ː" && wordArray[i-1] === wordArray[i+1]) {
            wordArray.splice(i+1, 1);
        }
    }
    //prevents homoorganic clusters with different voicing from clustering
    for(let i = 0; i < wordArray.length; i++) {
        if(unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(wordArray[i])
            if(wordArray[i + 1] === voiced[unvoicedIndex]) {
                wordArray.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
                    let unvoicedIndex = unvoiced.indexOf(wordArray[i])
                    if(wordArray[i + 1] === voiced[unvoicedIndex]) {
                    wordArray.splice(i+1, 1);
                    }
                }
            }
        }
        if(voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
            let voicedIndex = voiced.indexOf(wordArray[i])
            if(wordArray[i + 1] === voiced[voicedIndex]) {
                wordArray.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
                    let voicedIndex = voiced.indexOf(wordArray[i])
                    if(wordArray[i + 1] === unvoiced[voicedIndex]) {
                    wordArray.splice(i+1, 1);
                    }
                }
            }
        }
        }
    /*^^CORRECTIVE CHANGES^^^****/
    

    //applies the chosen sound changes to the word
    for(let i = 0; i < chosenSoundChanges.length; i++) {
        chosenSoundChanges[i](wordArray)
    }

    //to prevent word final sound changes applying to prefixes, when listed in isolation, an "A" is inserted at the end, this for loop serves to remove that "A" after those sound changes have been applied
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === "A") {
            wordArray.splice(i, 1);
        }
        if(wordArray[i] === "X") {
            wordArray.splice(i, 1);
        }
    }

    let final = wordArray.join("");
    return final;
}

function wordFinalDevoicing(wordArray) {
    if(voiced.includes(wordArray[wordArray.length -1])) {
        let voicedIndex = voiced.indexOf(wordArray[wordArray.length -1]);
        wordArray[wordArray.length -1] = unvoiced[voicedIndex];
        if(voiced.includes(wordArray[wordArray.length -2])) {
            let voicedIndex = voiced.indexOf(wordArray[wordArray.length -2]);
            wordArray[wordArray.length -2] = unvoiced[voicedIndex];
        } 
        timeswordFinalDevoicingApplied++

        let li= document.createElement("li");
        li.style.fontWeight = "bold";
        li.innerHTML = `Word Final Devoicing`;
        let nestUl = document.createElement("ul");
        let nestLi = document.createElement("li");
        nestLi.style.listStyleType = "none";
        nestLi.innerHTML = `Voiced consonants devoiced word finally: <span id="wordFinalDevoicing"></span>`;

        if(timeswordFinalDevoicingApplied === 1) {       
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }

    }
    return wordArray;
}

function plosivesCantClusterTogetherWordInitially(wordArray) {

    let li= document.createElement("li");
    li.style.fontWeight = "bold";
    li.innerHTML = `Word Initial Clusters Simplified`;
    let nestUl = document.createElement("ul");
    let nestLi = document.createElement("li");
    nestLi.style.listStyleType = "none";
    nestLi.innerHTML = `A word initial plosive is lost if another plosive follows it: <span id="plosivesCantClusterTogetherWordInitially"></span>`

if(randomNumForWordInitialPlosiveClusters !== 5) {
    if(plosives.includes(wordArray[0]) && plosives.includes(wordArray[1])) {
        timesplosivesCantClusterTogetherWordInitiallyApplied++

        if(timesplosivesCantClusterTogetherWordInitiallyApplied === 1) {
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        } else {
            document.getElementById("hidden-section").appendChild(nestLi);
        }
        wordArray.splice(0, 1);
    }
} 
  
return wordArray

}

function fricativesLostAfterWordInitialConsonants(wordArray) {
    if(consonants.includes(wordArray[0]) && selectFricatives().includes(wordArray[1])) {
        timesfricativesLostAfterWordInitialConsonantsApplied++;
         let li= document.createElement("li");
        li.style.fontWeight = "bold";
            li.innerHTML = `Fricatives Dropped in Word Initial Clusters`;
            let nestUl = document.createElement("ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `A fricative is lost when it is the first consonant in a word initial cluster: <span id="fricativesLostAfterWordInitialConsonants"></span>`

        if(timesfricativesLostAfterWordInitialConsonantsApplied === 1) {
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        } else {
            document.getElementById("hidden-section").appendChild(nestLi);
        }
        wordArray.splice(1, 1);
    }
    if(consonants.includes(wordArray[1]) && selectFricatives().includes(wordArray[2]) && wordArray[0] === "X") {
        wordArray.splice(2, 1);
    }
    return wordArray
}

function wordFinalHighVowelsLower(wordArray) {
if(highVowels.includes(wordArray[wordArray.length -1])) {
    let vowelIndex = highVowels.indexOf(wordArray[wordArray.length -1]);
    timeswordFinalHighVowelsLowerApplied++;
    let li= document.createElement("li");
    li.style.fontWeight = "bold";
    li.innerHTML = `Word Final High Vowels Lower`;
    let nestUl = document.createElement("ul");
    let nestLi = document.createElement("li");
    nestLi.style.listStyleType = "none";
    nestLi.innerHTML = `High vowels lower to become mid vowels when word final: <span id="wordFinalHighVowelsLower"></span>`

    if(timeswordFinalHighVowelsLowerApplied === 1) {
        
        document.getElementById("sound-change-explanation").appendChild(li);
        document.getElementById("sound-change-explanation").appendChild(nestUl);
        nestUl.appendChild(nestLi);
    }
    wordArray[wordArray.length -1] = midVowels[vowelIndex]   
} else {
return wordArray;
}
}

function NoResonantsBeforeConsonants(wordArray) {
    if(randomNumForNoResonantsBeforeConsonants === 0) {
    //deletes the resonant
    for(let i = 0; i < wordArray.length; i++) {
        if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
            timesResonantsLostAfterConsonantsApplied++;
            if(timesResonantsLostAfterConsonantsApplied === 1) {
                let li= document.createElement("li");

li.style.fontWeight = "bold";
                li.innerHTML = `Resonants Lost Before Consonants`;
                let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `Resonants are lost before consonants: <span id="NoResonantsBeforeConsonants"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
            }
            wordArray.splice(i, 1);
        } 
    } 
    } 
    if(randomNumForNoResonantsBeforeConsonants === 1) {
    //inserts /i/ between resonant and consonant
        for(let i = 0; i < wordArray.length; i++) {
            if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
                timesInsterIBetweenConsonantAndResonantApplied++;
                if(timesInsterIBetweenConsonantAndResonantApplied === 1) {
                    let li= document.createElement("li");

li.style.fontWeight = "bold";
                    li.innerHTML = `Epenthesis of /i/ Between Consonants And Resonants`;
                    let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                    nestLi.innerHTML = `When a resonant occurs before a consonant, an epenthetic /i/ is inserted after the resonants: <span id="NoResonantsBeforeConsonants"></span>`
                    document.getElementById("sound-change-explanation").appendChild(li);
                    document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
                }
                wordArray.splice(i+1, 0, "i");
            } 
        }
    }
    if(randomNumForNoResonantsBeforeConsonants === 2) {
    //inserts /u/ between resonant and consonant
    for(let i = 0; i < wordArray.length; i++) {
        if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
            timesInstertUBetweenConsonantAndResonantApplied++;
            if(timesInstertUBetweenConsonantAndResonantApplied === 1) {
                let li= document.createElement("li");

li.style.fontWeight = "bold";
                li.innerHTML = `Epenthesis of /u/ Between Consonants And Resonants`;
                let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `When a resonant occurs before a consonant, an epenthetic /u/ is inserted after the resonant: <span id="NoResonantsBeforeConsonants"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
            }
            wordArray.splice(i+1, 0, "u");
        }
    }
    }
    if(randomNumForNoResonantsBeforeConsonants === 3) {
    //the resonant and consonant switch places
    for(let i = 0; i < wordArray.length; i++) {
        if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
            let resonant = wordArray[i]; 
            let followingConsonant = wordArray[i+1];
            wordArray[i] = followingConsonant;
            wordArray[i+1] = resonant;
            timesConsonantResonantMetathesisApplied++;
            if(timesConsonantResonantMetathesisApplied === 1) {
                let li= document.createElement("li");
                
                li.style.fontWeight = "bold";
                li.innerHTML = `RC to CR Metathesis`;
                let nestUl = document.createElement("ul");
                let nestLi = document.createElement("li");
                nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `A resonant which once preceded a consonant now follows it: <span id="NoResonantsBeforeConsonants"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
                nestUl.appendChild(nestLi);
            }
            if(resonants.includes(wordArray[i]) && resonants.includes(wordArray[i + 1])) {
                wordArray.splice(i+1, 0, "u");
            }
        }
    }
    }
    return wordArray;
}

function lenitionofPlosivebeforeOtherPlosive(wordArray) {
for(let i = 0; i < wordArray.length; i++) {
if(randomNumForlenitionofPlosivebeforeOtherPlosive === 0) {
    if(plosives.includes(wordArray[i]) && plosives.includes(wordArray[i - 1])) {
        let firstPlosiveIndex = plosives.indexOf(wordArray[i-1])
        timeslenitionofPlosivebeforeOtherPlosiveApplied++;
        if(timeslenitionofPlosivebeforeOtherPlosiveApplied === 1) {
            let li= document.createElement("li");
            li.style.fontWeight = "bold";
            li.innerHTML = `Lenition in Clusters`;
            let nestUl = document.createElement("ul");
            let nestLi = document.createElement("li");
            nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Plosives lenite when they occur before other plosives: <span id="lenitionofPlosivebeforeOtherPlosive"></span>`;
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
            nestUl.appendChild(nestLi);
        }
        wordArray[i-1] = lenitionFromPlosives1[firstPlosiveIndex]
    }
} else if(randomNumForlenitionofPlosivebeforeOtherPlosive === 1) {
    if(plosives.includes(wordArray[i]) && plosives.includes(wordArray[i - 1])) {
        let firstPlosiveIndex = plosives.indexOf(wordArray[i-1])
        timeslenitionofPlosivebeforeOtherPlosiveApplied++;
        if(timeslenitionofPlosivebeforeOtherPlosiveApplied === 1) {
            let li= document.createElement("li");

li.style.fontWeight = "bold";
            li.innerHTML = `Lenition in Clusters`;
            let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `Plosives lenite when they occur before other plosives: <span id="lenitionofPlosivebeforeOtherPlosive"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
        }
        wordArray[i-1] = lenitionFromPlosives2[firstPlosiveIndex]
    }
} 
}
return wordArray;
}

function nonInitialNonHighVowelsBecomeA(wordArray) {
    let num = 0;
        for(let i = 0; i < wordArray.length; i++) {
            if(nonHighVowels.includes(wordArray[i]) && num !== 0) {
                wordArray[i] = "a";
                timesnonInitialNonHighVowelsBecomeAApplied++;
                if(timesnonInitialNonHighVowelsBecomeAApplied === 1) {
                    let li= document.createElement("li");

li.style.fontWeight = "bold";
                    li.innerHTML = `Non-initial Non-High Vowels Become /a/`;
                    let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                    nestLi.innerHTML = `All non-high vowels merge with /a/ when not in the first syllable of a word: <span id="nonInitialNonHighVowelsBecomeA"></span/>`
                    document.getElementById("sound-change-explanation").appendChild(li);
                    document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
                } 
            }
            if(vowels.includes(wordArray[i])) {
                num++;
            }
        }
    return wordArray;
}

function nasalsCantAppearAfterConsonants(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
        if(consonants.includes(wordArray[i]) && allNasalsArray.includes(wordArray[i+1])) {
            timesnasalsCantAppearAfterConsonantsApplied++
            if(timesnasalsCantAppearAfterConsonantsApplied === 1) {
                let li= document.createElement("li");

li.style.fontWeight = "bold";
                li.innerHTML = `Epenthesis of /i/ before Post-Consonantal Nasals`;
                let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `An epenthetic /i/ is placed before any nasal which occurs after a consonant: <span id="nasalsCantAppearAfterConsonants"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
            } 
            wordArray.splice(i+1, 0, "i");
        }
}
return wordArray;

}

function fricativesDebuccaliseBeforeVowels(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
        if(selectFricatives().includes(wordArray[i]) && vowels.includes(wordArray[i+1])) {
            timefricativesDebuccaliseBeforeVowelsApplied++;
            if(timefricativesDebuccaliseBeforeVowelsApplied === 1) {
                let li= document.createElement("li");
                
                li.style.fontWeight = "bold";
                li.innerHTML = `Debuccalisation of Pre-Vocalic Fricatives`;
                let nestUl = document.createElement("ul");
                let nestLi = document.createElement("li");
                nestLi.style.listStyleType = "none";
                let fricativeList = selectFricatives().join(", ");
                let fricativeOrFricatives = "";
                let becomeOrBecomes = ";"
                if(fricativeList.length > 1) {
                    fricativeOrFricatives = "fricatives;"
                    becomeOrBecomes = "become";
                } else {
                    fricativeOrFricatives = "fricative";
                    becomeOrBecomes = "becomes";
                }
                nestLi.innerHTML = `The short ${fricativeOrFricatives} /${fricativeList}/ ${becomeOrBecomes} /h/ when before a vowel: <span id="fricativesDebuccaliseBeforeVowels"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
            } 
            wordArray[i] = "h";
        }
    }
    return wordArray
}

function vowelLostBetweenTwoOfSameConsonant(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
    if(consonants.includes(wordArray[i-1]) && wordArray[i-1] === wordArray[i+1] && vowels.includes(wordArray[i])) {
        timesvowelLostBetweenTwoOfSameConsonantApplied++;
        if(timesvowelLostBetweenTwoOfSameConsonantApplied === 1) {
            let li= document.createElement("li");

li.style.fontWeight = "bold";
            li.innerHTML = `Loss of Vowels Between Two of the Same Consonant`;
            let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a vowel is sandwiched by two of the same consonant, it is lost: <span id="vowelLostBetweenTwoOfSameConsonant"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
        } 
        wordArray.splice(i, 1);
    }
    }
    return wordArray
}

function voicedConsonantsLostIntervocalically(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
        while(vowels.includes(wordArray[i-1]) && vowels.includes(wordArray[i+1]) && voiced.includes(wordArray[i]) ||
         vowels.includes(wordArray[i-2]) && vowels.includes(wordArray[i+2]) && wordArray[i-1] === "ː" && wordArray[i+1] === "ː" && voiced.includes(wordArray[i]) || 
         vowels.includes(wordArray[i-1]) && wordArray[i+1] === "ː" && voiced.includes(wordArray[i]) ||
         vowels.includes(wordArray[i+1]) && wordArray[i-1] === "ː" && voiced.includes(wordArray[i])
        ) {
            timesvoicedConsonantsLostIntervocalicallyApplied++;
            if(timesvoicedConsonantsLostIntervocalicallyApplied === 1) {
                let li= document.createElement("li");

                li.style.fontWeight = "bold";
                li.innerHTML = `Loss of Intervocalic Voiced Consonants`;
                let nestUl = document.createElement("ul");
                let nestLi = document.createElement("li");
                nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `Short voiced plosives and fricatives are lost entirely when between two vowels: <span id="voicedConsonantsLostIntervocalically"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
                nestUl.appendChild(nestLi);
            } 
            wordArray.splice(i, 1);
        }
    }
    return wordArray
};

function RVCToVRCMetathesis(wordArray) {
    if(resonants.includes(wordArray[0]) && vowels.includes(wordArray[1]) && consonants.includes(wordArray[2])) {
        let resonant = wordArray[0];
        let vowel = wordArray[1];
        wordArray[0] = vowel;
        wordArray[1] = resonant;
        timesRVCToVRCMetathesisApplies++;
        if(timesRVCToVRCMetathesisApplies === 1) {
            let li= document.createElement("li");

li.style.fontWeight = "bold";
            li.innerHTML = `RVC to VRC Metathesis`;
            let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
            nestLi.innerHTML = `When a word initial resonant comes before a vowel, and if a consonant follows this vowel, then the resonant and vowel will switch places: <span id="RVCToVRCMetathesis"></span>`
            document.getElementById("sound-change-explanation").appendChild(li);
            document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
        } 
        return wordArray;
    }
    if(wordArray[0] === "X" && resonants.includes(wordArray[1]) && vowels.includes(wordArray[2]) && consonants.includes(wordArray[3])) {
        let resonant = wordArray[1];
        let vowel = wordArray[2];
        wordArray[1] = vowel;
        wordArray[2] = resonant;
        return wordArray;
    }
}

function vowelLostBetweenConsonantAndResonant(wordArray) {
    for(let i = 0; i < wordArray.length; i++) {
        if(consonants.includes(wordArray[i]) && vowels.includes(wordArray[i+1]) && resonants.includes(wordArray[i+2]) && vowels.includes(wordArray[i+3])) {
            timesvowelLostBetweenConsonantAndResonantApplied++;
            if(timesvowelLostBetweenConsonantAndResonantApplied === 1) {
                let li= document.createElement("li");

li.style.fontWeight = "bold";
                li.innerHTML = `Syncope Between a Consonant and a Resonant`;
                let nestUl = document.createElement("ul");
let nestLi = document.createElement("li");
nestLi.style.listStyleType = "none";
                nestLi.innerHTML = `Vowels are lost when after a consonant and before a resonant if said resonant precedes another vowel: <span id="vowelLostBetweenConsonantAndResonant"></span>`
                document.getElementById("sound-change-explanation").appendChild(li);
                document.getElementById("sound-change-explanation").appendChild(nestUl);
nestUl.appendChild(nestLi);
            } 
            wordArray.splice(i+1,1)
        }
        if(wordArray[i] === "X" && consonants.includes(wordArray[i+1]) && vowels.includes(wordArray[i+2]) && resonants.includes(wordArray[i+3]) && vowels.includes(wordArray[i+4])) {
            wordArray.splice(i+2,1) 
        }
    }
    return wordArray
}

/*------------------------------------------------------*/





export {soundChange, voiced, chosenSoundChanges,checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse, selectSoundChanges, clearPreviousOutput, resonants, plosives, randomNumForlenitionofPlosivebeforeOtherPlosive, lenitionFromPlosives1, lenitionFromPlosives2, nonHighVowels, randomNumForWordInitialPlosiveClusters, addedVowels, addedConsonants, voiced, unvoiced, cloneChosen,  vowels, selectFricatives, randomNumberForSoundChangeSelection, plosives, consonants, midVowels, highVowels, randomNumForNoResonantsBeforeConsonants, resonants, randomNumForlenitionofPlosivebeforeOtherPlosive, lenitionFromPlosives2, lenitionFromPlosives1, nonHighVowels, allNasalsArray};