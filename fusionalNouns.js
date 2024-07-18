import { genderNum, markedSingularOrNot, generatedCountNouns, countNounArrayPlural, countNounArray, generatedMassNouns, massNounArray, pluralSingulativeMassNounArray, singulativeMassNounArray, numberSuffixOrPrefix, pluralAffix, singularAffix, dualAffix, collectiveAffix, trialAffix, quadralAffix, generalAffix, greaterPluralAffix, singulativeAffix, chooseTypology, checkIfHeadInitialOrHeadFinal, suffixOrPrefix, nominativeAffix, accusativeAffix, genitiveAffix, dativeAffix, locativeAffix, ablativeAffix, delativeAffix, inessiveAffix, instrumentalAffix, allativeAffix} from './script.js';
import {spell} from './orthography.js'
import {soundChange} from './soundchange.js'
import nounCases from './allPossibleNounCases.js';
import { consonants, vowels } from './generatePhonology.js';
let grammaticalNumberArray = [];
let chosenNounCases = [];

function clearArrays() {
    grammaticalNumberArray = [];
    chosenNounCases = [];

    document.getElementById("fusional-no-gender-case-explanation").replaceChildren();
}

function markedSingular() {
    let markedSingularExplanation = document.getElementsByClassName("marked-singular");
    if(markedSingularOrNot()) {
        for(let i = 0; i < markedSingularExplanation.length; i++) {
            markedSingularExplanation[i].style.display = "inline";
        }
    } else {
        for(let i = 0; i < markedSingularExplanation.length; i++) {
            markedSingularExplanation[i].style.display = "none";
        }
    }
}

function makeAffixes(noun, affix) {
    let inflectedNoun = "";
    if(numberSuffixOrPrefix === "suffix") {
        inflectedNoun = noun + affix;
    } else {
        inflectedNoun = affix + noun;
    }
    return inflectedNoun;
}

function makeSingular(noun) {
    return makeAffixes(noun, singularAffix);
}

function makePlural(noun) {
    return makeAffixes(noun, pluralAffix);
}

function makeDual(noun) {
    return makeAffixes(noun, dualAffix);
}

function makeTrial(noun) {
    return makeAffixes(noun, trialAffix);
}

function makeQuadral(noun) {
    return makeAffixes(noun, quadralAffix);
}

function makeCollective(noun) {
    return makeAffixes(noun, collectiveAffix);
}

function makeGreaterPlural(noun) {
    return makeAffixes(noun, greaterPluralAffixAffix);
}

function makeGeneral(noun) {
    return makeAffixes(noun, generalAffix);
}

function makeSingulative(noun) {
    return makeAffixes(noun, singulativeAffix);
}

let randomAffixOrderNum = Math.floor(Math.random() * 2)
function determineWhichAffixGoesFirst() {
    if(randomAffixOrderNum === 0) {
        return "affix1First";
    } else {
        return "affix2First";
    }
}
function makeFusionalAffixes(affix1, affix2) {
    let fusedAffix = "";
    if(determineWhichAffixGoesFirst() === "affix1First") {
        fusedAffix = affix1 + affix2;
    } else {
        fusedAffix = affix2 + affix1;
    }

    function removeChar(timesToLoop, str) {
        let randomIndex = Math.floor(Math.random() * str.length) + 1;
        let newArray = Array.from(str);
        for(let i = 0; i < timesToLoop; i++) {
            newArray.splice(randomIndex, 1);
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function removeCluster(str) {
        let newArray = Array.from(str);
        for(let i = 0; i < newArray.length; i++) {
            if(consonants.includes(newArray[i]) && consonants.includes(newArray[i + 1])) {
                newArray.splice(i, 1);
            }
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function removeFirstVowel(str) {
        let newArray = Array.from(str);
        if(consonants.includes(newArray[0]) && consonants.includes(newArray[2]) && vowels.includes(newArray[1])) {
            newArray.splice(1, 1);
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }

    function mergeTwoVowels(str) {
        let newArray = Array.from(str);
        for(let i = 0; i < newArray.length; i++) {
            if(vowels.includes(newArray[i]) && vowels.includes(newArray[i + 1])) {
                if(Math.floor(Math.random() * 2) === 0) {
                    newArray.splice(i, 1);
                    newArray[i + 1] = newArray[i + 1] = "ː";
                } else {
                    newArray.splice(i+1, 1);
                    newArray[i] = newArray[i + 1] = "ː";
                }
            }
        }
        let joinedStr = newArray.join("");
        return joinedStr;
    }


    //the following options will change the combination of the two affixes, to make them appear fused
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeChar(2, fusedAffix);
    }
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeCluster(fusedAffix);
    }
    if(Math.floor(Math.random() * 3) === 1) {
        fusedAffix = removeFirstVowel(fusedAffix);
    }
    if(/*Math.floor(Math.random() * 3)*/1 === 1) {
        fusedAffix = mergeTwoVowels(fusedAffix);
    }
    
    return fusedAffix;
}

let nomSgAffix = "";
let nomPlAffix = "";
let accSgAffix = "";
let accPlAffix = "";
let genSgAffix = "";
let genPlAffix = "";
let datSgAffix = "";
let datPlAffix = "";
function declareFusionalAffixes() {
    nomSgAffix = makeFusionalAffixes(singularAffix, nominativeAffix);
    nomPlAffix = makeFusionalAffixes(pluralAffix, nominativeAffix);
    accSgAffix = makeFusionalAffixes(singularAffix, accusativeAffix);
    accPlAffix = makeFusionalAffixes(pluralAffix, accusativeAffix);
    genSgAffix = makeFusionalAffixes(singularAffix, genitiveAffix);
    genPlAffix = makeFusionalAffixes(pluralAffix, genitiveAffix);
    datSgAffix = makeFusionalAffixes(singularAffix, dativeAffix);
    datPlAffix = makeFusionalAffixes(pluralAffix, dativeAffix);
}

function makeNomSingular(noun) {
    return makeAffixes(noun, nomSgAffix);
}

function makeNomPlural(noun) {
    return makeAffixes(noun, nomPlAffix);
}

function makeAccSingular(noun) {
    return makeAffixes(noun, accSgAffix);
}

function makeAccPlural(noun) {
    return makeAffixes(noun, accPlAffix);
}

function makeGenSingular(noun) {
    return makeAffixes(noun, genSgAffix);
}

function makeGenPlural(noun) {
    return makeAffixes(noun, genPlAffix);
}

function makeDatSingular(noun) {
    return makeAffixes(noun, datSgAffix);
}

function makeDatPlural(noun) {
    return makeAffixes(noun, datPlAffix);
}

let nomSgAffixIsolated
let nomPlAffixIsolated
let accSgAffixIsolated
let accPlAffixIsolated
let genSgAffixIsolated
let genPlAffixIsolated
let datSgAffixIsolated
let datPlAffixIsolated
function listAffixesInIsolation() {
    if(numberSuffixOrPrefix === "suffix") {
        nomSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + nomSgAffix ))}</i></strong>`;
        nomPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + nomPlAffix ))}</i></strong>`;
        accSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + accSgAffix ))}</i></strong>`;
        accPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + accPlAffix ))}</i></strong>`;
        genSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + genSgAffix ))}</i></strong>`;
        genPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + genPlAffix ))}</i></strong>`;
        datSgAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + datSgAffix ))}</i></strong>`;
        datPlAffixIsolated = `suffix <i><strong>-${spell(soundChange("A" + datPlAffix ))}</i></strong>`;
    } else {
        nomSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + nomSgAffix + "A"))}-</i></strong>`;
        nomPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + nomPlAffix + "A"))}-</i></strong>`;
        accSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + accSgAffix + "A"))}-</i></strong>`;
        accPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + accPlAffix + "A"))}-</i></strong>`;
        genSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + genSgAffix + "A"))}-</i></strong>`;
        genPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + genPlAffix + "A"))}-</i></strong>`;
        datSgAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + datSgAffix + "A"))}-</i></strong>`;
        datPlAffixIsolated = `prefix <i><strong>${spell(soundChange("X" + datPlAffix + "A"))}-</i></strong>`;
    }
}

let grammaticalNumber
function determineGrammaticalNumber() {
    grammaticalNumber = 2//Math.floor(Math.random() * 31);
    if(grammaticalNumber < 4) {
        if(caseNumber === 0) {
            document.getElementById("fusional-no-gender-singular-plural").style.display = "block";
        }
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "singular and plural";
        return "singular-plural";
    };
    if(grammaticalNumber >= 5 && grammaticalNumber < 7) {
        document.getElementById("fusional-no-gender-singular-dual-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual and plural";
        return "singular-dual-plural";
    };
    if(grammaticalNumber >= 7 && grammaticalNumber < 12) {
        document.getElementById("fusional-no-gender-singular-dual-plural-collective").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, plural and collective";
        return "singular-dual-plural-collective";
    };
    if(grammaticalNumber >= 12 && grammaticalNumber < 15) {
        document.getElementById("fusional-no-gender-singular-dual-trial-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "four";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial and plural";
        return "singular-dual-trial-plural";
    };
    if(grammaticalNumber >= 15 && grammaticalNumber < 18) {
        document.getElementById("fusional-no-gender-singular-dual-trial-quadral-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "five";
        document.getElementById("grammatical-number-list").innerHTML = "singular, dual, trial, quadral and plural";
        return "singular-dual-trial-quadral-plural";
    };
    if(grammaticalNumber >= 18 && grammaticalNumber < 21) {
        document.getElementById("fusional-no-gender-singular-plural-greater-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and greater plural";
        return "singular-plural-greater-plural";
    };
    if(grammaticalNumber >= 21 && grammaticalNumber < 24) {
        document.getElementById("fusional-no-gender-singular-plural-general").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "singular, plural and general";
        return "singular-plural-general";
    };
    if(grammaticalNumber >= 24 && grammaticalNumber < 27) {
        document.getElementById("fusional-no-gender-general-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "two";
        document.getElementById("grammatical-number-list").innerHTML = "general and plural";
        return "general-plural";
    };
    if(grammaticalNumber >= 27 && grammaticalNumber < 30) {
        document.getElementById("fusional-no-gender-general-singulative-plural").style.display = "block";
        document.getElementById("grammatical-number-amount").innerHTML = "three";
        document.getElementById("grammatical-number-list").innerHTML = "general, singulative and plural";
        return "general-singulative-plural";
    };
}

function makeNoGenderNumberExamples() {
    if(chosenNounCases === 0) {
    let exampleArray = [];
    let joinedArray = "";
    if(determineGrammaticalNumber() === "singular-plural"){
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }   
        }
        joinedArray = exampleArray.join(", ");
        document.getElementById("fusional-sg-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-plural-collective") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeCollective(generatedCountNouns[randomNumForExamples])))}</i> "all ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-pl-collective-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-trial-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-trial-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-dual-trial-quadral-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeQuadral(generatedCountNouns[randomNumForExamples])))}</i> "four ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeDual(generatedCountNouns[randomNumForExamples])))}</i> "two ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeTrial(generatedCountNouns[randomNumForExamples])))}</i> "three ${countNounArrayPlural[randomNumForExamples]}",  <i>${spell(soundChange(makeQuadral(generatedCountNouns[randomNumForExamples])))}</i> "four ${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-dual-trial-quadral-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-plural-greater-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGreaterPlural(generatedCountNouns[randomNumForExamples])))}</i> "a lot of ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGreaterPlural(generatedCountNouns[randomNumForExamples])))}</i> "a lot of ${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-pl-greater-pl-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "singular-plural-general") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            if(markedSingularOrNot() === false) {
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGeneral(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            } else {
                let randomExample = `<br><i>${spell(soundChange(makeSingular(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}", <i>${spell(soundChange(makeGeneral(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
            }
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-sg-pl-general-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "general-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
            let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
            exampleArray.push(randomExample);
            
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-general-plural-examples").innerHTML = joinedArray;
    }
    if(determineGrammaticalNumber() === "general-singulative-plural") {
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * countNounArray.length);
                let randomExample = `<br><i>${spell(soundChange(generatedCountNouns[randomNumForExamples]))}</i> "${countNounArrayPlural[randomNumForExamples]}" > <i>${spell(soundChange(makeSingulative(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArray[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedCountNouns[randomNumForExamples])))}</i> "${countNounArrayPlural[randomNumForExamples]}"`;
                exampleArray.push(randomExample);
        }
        let joinedArray = exampleArray.join(", ")
        document.getElementById("fusional-general-singulative-plural-examples").innerHTML = joinedArray;

        let singulativeExampleArray = [];
        for(let i = 0; i < 10; i++) {
            let randomNumForExamples = Math.floor(Math.random() * massNounArray.length);
                let randomExample = `<br><i>${spell(soundChange(generatedMassNouns[randomNumForExamples]))}</i> "${massNounArray[randomNumForExamples]}" > <i>${spell(soundChange(makeSingulative(generatedMassNouns[randomNumForExamples])))}</i> "${singulativeMassNounArray[randomNumForExamples]}", <i>${spell(soundChange(makePlural(generatedMassNouns[randomNumForExamples])))}</i> "${pluralSingulativeMassNounArray[randomNumForExamples]}"`;
                singulativeExampleArray.push(randomExample);
        }
        let joinedSingulativeArray = singulativeExampleArray.join(", ")
        document.getElementById("fusional-no-gender-singulative-examples").innerHTML = joinedSingulativeArray;


    }
}
}

let caseNumber = 0;
function chooseCases() {
    caseNumber = 2//Math.floor(Math.random() * 11)
    //there will be no cases if language is isolating
    if(chooseTypology() !== "isolating") {
        //decides if the language has cases or not
        if(caseNumber !== 0) {
            const randomNum = Math.floor(Math.random() * 8);
            if(randomNum <= 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                }
            if(randomNum > 4) {
                chosenNounCases.push("Nominative");
                chosenNounCases.push("Accusative");
                chosenNounCases.push("Genitive");
                chosenNounCases.push("Dative");
                //chooses additional cases
                const randomCase = Math.floor(Math.random() * nounCases.length);
                while(chosenNounCases.length < Math.floor(Math.random() * 15) + 4) {
                    chosenNounCases.push(nounCases[Math.floor(Math.random() * nounCases.length)])
                }       
            }   
        }
    }
}

function explainCases() {
    if(chosenNounCases.length > 0) {
        const listOfCases = [];
        chosenNounCases.forEach((element) => listOfCases.push(element));
        listOfCases.pop()
        listOfCases.push(` and ${chosenNounCases[chosenNounCases.length -1]}`)
        let listOfCasesString =  listOfCases.join(", ")

        document.getElementById("fusional-chosen-noun-case-length").innerHTML = chosenNounCases.length;
        document.getElementById("list-of-cases-fusional").innerHTML = listOfCasesString;
    }

    if(chosenNounCases.includes("Nominative")) {
        let nominativeH4 = document.createElement("h4");
        nominativeH4.innerHTML = `<strong>Nominative Case</strong>`;
        document.getElementById("fusional-no-gender-case-explanation").appendChild(nominativeH4);

        if(determineGrammaticalNumber() === "singular-plural") {
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let nomSgExamples = makeExamples(makeNomSingular, countNounArray);
            let nomPlExamples = makeExamples(makeNomPlural, countNounArrayPlural);

            let singularPluralNominative = document.createElement("p");
            singularPluralNominative.innerHTML = `The nominative case is used to mark the subject of a verb, the noun which is the performer of an action. The nominative singular is formed with the ${nomSgAffixIsolated}: : ${nomSgExamples}.<br>The nominative plural is formed with the ${nomPlAffixIsolated}: ${nomPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralNominative);
        }
    }

    if(chosenNounCases.includes("Accusative")) {
        let caseH4 = document.createElement("h4");
        caseH4.innerHTML = `<strong>Accusative Case</strong>`;
        document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

        if(determineGrammaticalNumber() === "singular-plural") {
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let accSgExamples = makeExamples(makeAccSingular, countNounArray);
            let accPlExamples = makeExamples(makeAccPlural, countNounArrayPlural);

            let singularPluralAccusative = document.createElement("p");
            singularPluralAccusative.innerHTML = `The accusative case is used to mark the object of a verb, the noun which is the recipient of an action. The accusative singular is formed with the ${accSgAffixIsolated}: : ${accSgExamples}.<br>The accusative plural is formed with the ${accPlAffixIsolated}: ${accPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralAccusative);
        }
    }

    if(chosenNounCases.includes("Genitive")) {
        let caseH4 = document.createElement("h4");
        caseH4.innerHTML = `<strong>Genitive Case</strong>`;
        document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

        if(determineGrammaticalNumber() === "singular-plural") {
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "of ${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let genSgExamples = makeExamples(makeGenSingular, countNounArray);
            let genPlExamples = makeExamples(makeGenPlural, countNounArrayPlural);

            let singularPluralGenitive = document.createElement("p");
            singularPluralGenitive.innerHTML = `The genitive case is used to mark possession. The genitive singular is formed with the ${genSgAffixIsolated}: : ${genSgExamples}.<br>The accusative plural is formed with the ${genPlAffixIsolated}: ${genPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralGenitive);
        }
    }

    if(chosenNounCases.includes("Dative")) {
        let caseH4 = document.createElement("h4");
        caseH4.innerHTML = `<strong>Dative Case</strong>`;
        document.getElementById("fusional-no-gender-case-explanation").appendChild(caseH4);

        if(determineGrammaticalNumber() === "singular-plural") {
            let exampleArray = []
            function makeExamples(make, nounArray) {
                for(let i = 0; i < 11; i++) {
                let randomIndex = Math.floor(Math.random() * nounArray.length);
                let example = `<i>${spell(soundChange(make(generatedCountNouns[randomIndex])))}</i> "${nounArray[randomIndex]}"`
                exampleArray.push(example);
                }   
                let joinedList = exampleArray.join(", ")
                exampleArray = [];
                return joinedList;
            }
            let datSgExamples = makeExamples(makeDatSingular, countNounArray);
            let datPlExamples = makeExamples(makeDatPlural, countNounArrayPlural);

            let singularPluralDative = document.createElement("p");
            singularPluralDative.innerHTML = `The dative case is used to mark indirect objects, nouns that are not the direct recipients of an action. Such nouns in English occur after prepositions e.g the noun "boy" in "I gave a book to the boy. The dative singular is formed with the ${datSgAffixIsolated}: : ${datSgExamples}.<br>The accusative plural is formed with the ${datPlAffixIsolated}: ${datPlExamples}.`;
            document.getElementById("fusional-no-gender-case-explanation").appendChild(singularPluralDative);
        }
    }
}

function makeFusionalNounHeader() {
    if(caseNumber === 0) {
        document.getElementById("fusional-noun-header").innerHTML = "Grammatical Number"
    } else {
        document.getElementById("fusional-noun-header").innerHTML = "Case and Number"
    }
}
    


let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generateLanguage);

function generateLanguage() {
    clearArrays();
    chooseCases();
    markedSingular();
    declareFusionalAffixes();
    listAffixesInIsolation();
    determineGrammaticalNumber();
    makeNoGenderNumberExamples();
    explainCases();
    makeFusionalNounHeader();
}

export {grammaticalNumber, nomSgAffix, caseNumber};