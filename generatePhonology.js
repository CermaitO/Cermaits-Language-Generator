

let allNasalsArray = [];
let allLabialPlosivesArray = [];
let allAlveolarPlosivesArray = [];
let allPalatalPlosivesArray = [];
let allVelarPlosivesArray = [];
let allLabialFricativesArray = [];
let allLabioDentalArray = [];
let allUvularPlosivesArray = [];
let allGlottalPlosives = [];

let allDentalFricatives = [];
let allAlveolarFricativesArray = [];
let allPostAlveolarFricatives = [];
let allPalatalFricatives = [];
let allVelarFricativesArray = [];
let allUvularFricativesArray = [];
let allPharyngealFricatives = [];
let allGlottalFricatives = [];

let allAlveolarRhoticsArray = [];
let allLateralsArray = [];
let allLateralFricatives = [];

let allLabialApproximants = [];
let allLabialDentalApproximants = [];
let allpalatalApproximants = [];


let allFrontVowels = [];
let allBackVowels = [];
let allCentralVowels = [];

let allHighVowels = [];
let allHighMidVowels = [];
let allMidVowels = [];
let allLowMidVowels = [];
let allLowVowels = [];

let allLongFrontVowels = [];
let allLongBackVowels = [];
let allLongCentralVowels = [];

let allLongHighVowels = [];
let allLongHighMidVowels = [];
let allLongMidVowels = [];
let allLongLowMidVowels = [];
let allLongLowVowels = [];


//restores the phonology to it's default state every time the button is pushed, before applying the below functions
function restoreDefault() {
    //first, the arrays must be emptied
    allNasalsArray = [];
    allLabialPlosivesArray = [];
    allAlveolarPlosivesArray = [];
    allPalatalPlosivesArray = [];
    allVelarPlosivesArray = [];
    allUvularPlosivesArray = [];
    allUvularPlosivesArray = [];
    allLabialFricativesArray = [];
    allLabioDentalArray = [];
    allDentalFricatives = [];
    allAlveolarFricativesArray = [];
    allPostAlveolarFricatives = [];
    allPalatalFricatives = [];
    allVelarFricativesArray = [];
    allUvularFricativesArray = [];
    allPharyngealFricatives = [];
    allAlveolarRhoticsArray = [];
    allLateralsArray = [];
    allLabialApproximants = [];
    allLabialDentalApproximants = [];
    allpalatalApproximants = [];
    allGlottalPlosives = [];
    allGlottalFricatives = [];
    allLateralFricatives = [];

    allFrontVowels = [];
    allBackVowels = [];
    allCentralVowels = [];
    allHighVowels = [];
    allHighMidVowels = [];
    allMidVowels = [];
    allLowMidVowels = [];
    allLowVowels = [];

    allLongFrontVowels = [];
    allLongBackVowels = [];
    allLongCentralVowels = [];

    allLongHighVowels = [];
    allLongHighMidVowels = [];
    allLongMidVowels = [];
    allLongLowMidVowels = [];
    allLongLowVowels = [];
    

    //secondly, the default phonemes can be put back in
    allNasalsArray.push("m"),
    allNasalsArray.push("n")
    allLabialPlosivesArray.push("p");
    allAlveolarPlosivesArray.push("t");
    allVelarPlosivesArray.push("k");
    allAlveolarFricativesArray.push("s");
    allAlveolarRhoticsArray.push("r");
    allLateralsArray.push("l");

    //the phonology table is set to display style none after after click
    document.getElementById("nasal-list").style.display = "none"
    document.getElementById("plosive-list").style.display = "none"
    document.getElementById("fricative-list").style.display = "none"
    document.getElementById("rhotic-list").style.display = "none"
    document.getElementById("lateral-list").style.display = "none"
    document.getElementById("approximant-list").style.display = "none"

    document.getElementById("high-vowel-list").style.display = "none"
    document.getElementById("high-mid-vowel-list").style.display = "none"
    document.getElementById("mid-vowel-list").style.display = "none"
    document.getElementById("low-mid-vowel-list").style.display = "none"
    document.getElementById("low-vowel-list").style.display = "none";
    document.getElementById("vowel-quantities").style.display = "none";
}


/*---CHOOSE SECTION----*/
//The functions here will decide if the language has a set of consonants based on Place of Articulation, such a retroflex, palatal etc. The very core PoA like velar, labial and alveolar will be chosen by default, as it is very rare for a language to lack those

function chooseVoicing() {//there is a 33% chance that this language will lack voicing
    let randomNum = Math.floor(Math.random() * 4);
    let trueOrFalse = ""
    if (randomNum === 2) { 
        trueOrFalse = false;
    } else {
        trueOrFalse = true;
    }
    if(trueOrFalse) {
        allLabialPlosivesArray.push("b");
        allAlveolarPlosivesArray.push("d");
        allVelarPlosivesArray.push("g");
        
        randomNum = Math.floor(Math.random() * 3);
        if(randomNum === 1) {//there is a 50% chance that there will be /z/
            allAlveolarFricativesArray.push("z");
        }
    }
    return trueOrFalse;
}

function chooseGemination() {
    let randomNum = Math.floor(Math.random() * 21);
    let trueOrFalse = "";
    if(randomNum === 4 ) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    if(trueOrFalse) {
        allNasalsArray.push("mː");
        allNasalsArray.push("nː")
        allLabialPlosivesArray.push("pː");
        allAlveolarPlosivesArray.push("tː");
        allVelarPlosivesArray.push("kː");
        allAlveolarFricativesArray.push("sː");
        
        randomNum = Math.floor(Math.random() * 10);
        if(randomNum === 1 && chooseVoicing()) {//there is a 50% chance that there will be /z/
            allLabialPlosivesArray.push("bː");
            allAlveolarPlosivesArray.push("dː");
            allVelarPlosivesArray.push("gː");
            allAlveolarFricativesArray.push("zː");
        }
    }
    return trueOrFalse;
}



function chooseAspiration() {

        function preAspiration() {
            randomNum = Math.floor(Math.random() * 18);
            let trueOrFalse = "";
            if(randomNum === 4 ) {
                trueOrFalse = true;
            } else {
                trueOrFalse = false;
            }
            allLabialPlosivesArray.push("ʰp");
            allAlveolarPlosivesArray.push("ʰt");
            allVelarPlosivesArray.push("ʰk");
            return trueOrFalse;
        }

        function postAspiration() {
            randomNum = Math.floor(Math.random() * 11);
            let trueOrFalse = "";
            if(randomNum === 4 ) {
                trueOrFalse = true;
            } else {
                trueOrFalse = false;
            }
            allLabialPlosivesArray.push("pʰ");
            randomNum = Math.floor(Math.random() * 3);
                if(randomNum === 2 && chooseVoicing()) {
                    allLabialPlosivesArray.push("bʰ");
                }
            allAlveolarPlosivesArray.push("tʰ");
            randomNum = Math.floor(Math.random() * 3);
                if(randomNum === 2 && chooseVoicing()) {
                    allLabialPlosivesArray.push("dʰ");
                }
            allVelarPlosivesArray.push("kʰ");
                randomNum = Math.floor(Math.random() * 3);
                if(randomNum === 2 && chooseVoicing()) {
                    allLabialPlosivesArray.push("gʰ");
                }
            return trueOrFalse;
        }
    

    let randomNum = Math.floor(Math.random() * 21);
    let chosenAspiration = "";
    if(randomNum === 1) { 
        let randomNum = Math.floor(Math.random() * 3);
        if(randomNum === 2) {
            chosenAspiration = preAspiration();
        } else chosenAspiration = postAspiration();
    } 
    return chosenAspiration;
}

function chooseLabial() {
    let randomNum = Math.floor(Math.random() * 21);
    if (randomNum === 4) {
        allLabialFricativesArray.push("ɸ");
        randomNum = Math.floor(Math.random() * 6)
            if(randomNum === 4 && chooseGemination()) {
                allLabialApproximants.push("ɸː")
            }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 2);
            if(randomNum === 1) {
                allLabialFricativesArray.push("β");
                randomNum = Math.floor(Math.random() * 6)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialApproximants.push("βː")
                }
                }
        }
        randomNum = Math.floor(Math.random() * 6)
        if(randomNum !== 2) {
            allLabialApproximants.push("w")
            randomNum = Math.floor(Math.random() * 6)
            if(randomNum === 4 && chooseGemination()) {
                allLabialApproximants.push("wː")
            }
        }
    }
}

function chooseLabioDental() {
    let randomNum = Math.floor(Math.random() * 11);
    if(randomNum === 5) {
        allLabioDentalArray.push("f");
        randomNum = Math.floor(Math.random() * 23)
            if(randomNum === 4 && chooseGemination()) {
                allLabialDentalApproximants.push("fː")
            }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 11)
            if(randomNum !== 2) {
                allLabioDentalArray.push("v");
                randomNum = Math.floor(Math.random() * 23)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("vː")
                }
            }
        }
        randomNum = Math.floor(Math.random() * 11)
        if(randomNum !== 2) {
            allLabialDentalApproximants.push("ʋ")
            randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʋː")
                }
        }
    }
}

function chooseDental() {
    let randomNum = Math.floor(Math.random() * 21);
    if (randomNum === 4) {
        allDentalFricatives.push("θ");
        randomNum = Math.floor(Math.random() * 23)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("θː")
                }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 3);
            if(randomNum === 2) {
                allDentalFricatives.push("ð");
                randomNum = Math.floor(Math.random() * 23)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ðː")
                }
            } 
        }
    }
}

function chooseAlveolar() {
    let randomNum = Math.floor(Math.random() * 7);
    if(randomNum === 4 && chooseGemination()) {
        allAlveolarRhoticsArray.push("rː");
        allLateralsArray.push("lː");
    }
    randomNum = Math.floor(Math.random() * 25);
    if (randomNum === 23) { 
        allLateralFricatives.push("ɬ");
        randomNum = Math.floor(Math.random() * 4);
        if(randomNum === 2 && chooseVoicing()) { 
            allLateralFricatives.push("ɮ");
        }
    }
}

function choosePostAlveolar() {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 2) {
        allPostAlveolarFricatives.push("ʃ");
        randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʃː")
                }
        if (chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 3);
            allPostAlveolarFricatives.push("ʒ");
            randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʒː")
                }
        }
    }
}

function chooseRetroflex() {//there ise a 10% chance that this language has retroflexes
    let randomNum = Math.floor(Math.random() * 11);
    let trueOrFalse = "";
    if(randomNum === 2) {//if false, then there will be no retroflexes
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    if (trueOrFalse) {
        allNasalsArray.push("ɳ");

        randomNum = Math.floor(Math.random() * 4);
        if (randomNum !== 3) {//there is a 60% chance that ʈ is added 
            allAlveolarPlosivesArray.push("ʈ");
            if(chooseVoicing()) {
                allAlveolarPlosivesArray.push("ɖ");
            }
            allAlveolarFricativesArray.push("ʂ");
            if(chooseVoicing()) {
                allAlveolarFricativesArray.push("ʐ");
            }
            allAlveolarRhoticsArray.push("ɽ");
            allLateralsArray.push("ɭ")
        }
    }
}

function choosePalatal() {//there ise a 20% chance that this language has palatal consonants
    let randomNum = Math.floor(Math.random() * 6);
    if (randomNum === 3) {
        allNasalsArray.push("ɲ");
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ɲː")
                }
    } 
    randomNum = Math.floor(Math.random() * 6)
    if (randomNum === 4) {
        allLateralsArray.push("ʎ");
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʎː")
                }
    }
    randomNum = Math.floor(Math.random() * 8)
    if (randomNum === 2) {
        allPalatalPlosivesArray.push("c");
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("cː")
                }
        if(chooseVoicing()) {
            allPalatalPlosivesArray.push("ɟ");
            randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ɟː")
                }
        }
    }
    randomNum = Math.floor(Math.random() * 6)
    if (randomNum === 4) {
        allPalatalFricatives.push("ç")
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("çː")
                }
        if(chooseVoicing()) {
            allPalatalFricatives.push("ʝ");
            randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʝː")
                }
        }
    }
    randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 4) {
        allpalatalApproximants.push("j");
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("jː")
                }
        
    }
}

function chooseVelar() {
    let randomNum = Math.floor(Math.random() * 6);
    if (randomNum === 3) {
        allVelarFricativesArray.push("x");
        randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("xː")
                }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 2);
            allVelarFricativesArray.push("ɣ");
            randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ɣː")
                }
        }
        randomNum = Math.floor(Math.random() * 201);
        if(randomNum === 6) {
            allLateralsArray.push("ʟ");
            randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʟː")
                }
        }
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum !== 3) {
          allNasalsArray.push("ŋ");  
          randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ŋː")
                }
        }
    } 
}

function chooseUvular() {
    let randomNum = Math.floor(Math.random() * 21);
    if(randomNum === 5) {
        allUvularPlosivesArray.push("q");
         randomNum = Math.floor(Math.random() * 11)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("qː")
                }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 11);
            if (randomNum !== 4) {
                allUvularPlosivesArray.push("ɢ");
                 randomNum = Math.floor(Math.random() * 21)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ɢː")
                }
            }
        }
        randomNum = Math.floor(Math.random() * 9);
            if (randomNum !== 4) {
                allUvularFricativesArray.push("χ");
                randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("χː")
                }
                if(chooseVoicing()) {
                    randomNum = Math.floor(Math.random() * 4);
                    if (randomNum !== 4) {
                        allUvularFricativesArray.push("ʁ");
                        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʁː")
                }
                    }
                }
            }
    }
}

function choosePharyngeal() {
    let randomNum = Math.floor(Math.random() * 21);
    if(randomNum === 5) {
        allPharyngealFricatives.push("ħ");
        randomNum = Math.floor(Math.random() * 40)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ħː")
                }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 11);
            if (randomNum !== 4) {
                allPharyngealFricatives.push("ʕ");
                randomNum = Math.floor(Math.random() * 40)
                if(randomNum === 4 && chooseGemination()) {
                    allLabialDentalApproximants.push("ʕː")
                }
            }
        }
    }
}

function chooseGlottal() {
    let randomNum = Math.floor(Math.random() * 8);
    if(randomNum !== 5) {
        allGlottalFricatives.push("h");
        randomNum = Math.floor(Math.random() * 30)
                if(randomNum === 4 && chooseGemination()) {
                    allGlottalFricatives.push("hː")
                }
        if(chooseVoicing()) {
            randomNum = Math.floor(Math.random() * 11);
            if (randomNum === 4) {
                allPharyngealFricatives.push("ɦ");
                randomNum = Math.floor(Math.random() * 40)
                if(randomNum === 4 && chooseGemination()) {
                    allGlottalFricatives.push("ɦː")
                }
            }
        }
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum !== 4) {
            allGlottalPlosives.push("ʔ");
            randomNum = Math.floor(Math.random() * 40)
                if(randomNum === 4 && chooseGemination()) {
                    allGlottalPlosives.push("ʔː")
                }
        }
    }
}

/*---^^^CHOOSE SECTION^^^----*/


/*-----SELECT SECTION---------*/
//Here, each final list of phonemes, nasals, plosives, etc are sent to the DOM as strings

function selectNasals() {
    let spanNasalList = document.getElementsByClassName("nasal-list");
    for(let i = 0; i < spanNasalList.length; i++) {
        spanNasalList[i].innerHTML = `/${allNasalsArray.join(", ")}/`;
    }
    if(allNasalsArray.length > 0) {
        document.getElementById("nasal-list").style.display = "block";
    }
    return spanNasalList.length;
}

function selectPlosives() {
    let spanPlosiveList = document.getElementsByClassName("plosive-list");
    let allPlosivesArray = allLabialPlosivesArray.concat(allAlveolarPlosivesArray, allPalatalPlosivesArray, allVelarPlosivesArray, allUvularPlosivesArray, allGlottalPlosives);
    let allPlosivesArrayFixed = allPlosivesArray.filter((element, index) => { //removes duplicates
        return allPlosivesArray.indexOf(element) === index;
    });
    for(let i = 0; i < spanPlosiveList.length; i++) {
        spanPlosiveList[i].innerHTML = `/${allPlosivesArrayFixed.join(", ")}/`;
    }
    if(allPlosivesArray.length > 0) {
        document.getElementById("plosive-list").style.display = "block";
    }
    return allPlosivesArrayFixed.length;
}

function selectFricatives() {
    let spanFricativeList = document.getElementsByClassName("fricative-list");
    let allFricativesArray = allLabialFricativesArray.concat(allLabioDentalArray, allDentalFricatives, allAlveolarFricativesArray, allPostAlveolarFricatives, allLateralFricatives, allPalatalFricatives, allVelarFricativesArray,allUvularFricativesArray, allPharyngealFricatives, allGlottalFricatives);

    let allFricativesArrayFixed = allFricativesArray.filter((element, index) => { //removes duplicates
        return allFricativesArray.indexOf(element) === index;
    });

    for(let i = 0; i < spanFricativeList.length; i++) {
        spanFricativeList[i].innerHTML = `/${allFricativesArrayFixed.join(", ")}/`;
    }
    if(allFricativesArray.length > 0) {
        document.getElementById("fricative-list").style.display = "block";
    }
    return allFricativesArrayFixed.length;
}

function selectRhotics() {
    let spanRhoticList = document.getElementsByClassName("rhotic-list");
    let allRhoticsArray = allAlveolarRhoticsArray;
    for(let i = 0; i < spanRhoticList.length; i++) {
        spanRhoticList[i].innerHTML = `/${allRhoticsArray.join(", ")}/`;
    }
    if(allRhoticsArray.length > 0) {
        document.getElementById("rhotic-list").style.display = "block";
    }
    return allRhoticsArray.length;
}

function selectLateralApproximants() {
    let spanLateralApproximantsList = document.getElementsByClassName("lateral-list");
    let allLateralApproximantsArray = allLateralsArray;
    for(let i = 0; i < spanLateralApproximantsList.length; i++) {
        spanLateralApproximantsList[i].innerHTML = `/${allLateralApproximantsArray.join(", ")}/`;
    }
    if(allLateralApproximantsArray.length > 0) {
        document.getElementById("lateral-list").style.display = "block";
    }
    return allLateralApproximantsArray.length;
}

function selectApproximants() {
    let spanApproximantsList = document.getElementsByClassName("approximant-list");
    let allApproximantsArray = allLabialApproximants.concat(allLabialDentalApproximants, allpalatalApproximants);
    for(let i = 0; i < spanApproximantsList.length; i++) {
        spanApproximantsList[i].innerHTML = `/${allApproximantsArray.join(", ")}/`;
    }
    if(allApproximantsArray.length > 0) {
        document.getElementById("approximant-list").style.display = "inline";
    }
    return allApproximantsArray.length;  
}

function countNumberOfConsonants() {
  const numberOfConsonants =  selectNasals() + selectPlosives() + selectFricatives() + selectRhotics() + selectLateralApproximants() + selectApproximants() + 1; //for some reason, the result was 1 too low

  document.getElementById("consonant-number").innerHTML = numberOfConsonants;
}

let consonants = []
function collectAllConsonants() {
    consonants = allNasalsArray.concat(allLabialPlosivesArray, allAlveolarPlosivesArray, allVelarPlosivesArray, allLabialFricativesArray, allAlveolarFricativesArray, allVelarFricativesArray, allAlveolarRhoticsArray, allLateralsArray, allLabialApproximants, allpalatalApproximants, allPalatalPlosivesArray, allPostAlveolarFricatives, allPalatalFricatives, allDentalFricatives, allLabioDentalArray, allLabialDentalApproximants, allUvularPlosivesArray, allUvularFricativesArray, allPharyngealFricatives, allGlottalPlosives, allGlottalFricatives, allLateralFricatives);
}

/*********************VOWELS*******************/

function chooseLength() {
    let randomNum = Math.floor(Math.random() * 11);
    let trueOrFalse = "";
    if(randomNum === 1) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    return trueOrFalse;
}



function chooseNumberOfMainVowels() {
    let randomNum = Math.floor(Math.random() * 3)
    let numberOfVowels = 0;
    if(randomNum === 0) {//produces two vowel qualities, i and u
        allFrontVowels.push("i");
        allBackVowels.push("u");
        allHighVowels.push("i");
        allHighVowels.push("u");
        if(chooseLength()) {
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongFrontVowels.push("iː");
                allLongHighVowels .push("iː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongHighVowels.push("uː");
                allLongBackVowels.push("uː");
            }
        }
        numberOfVowels = 2;
    } else if (randomNum === 1) {//produces three vowel qualities, i, u and a
        allFrontVowels.push("i");
        allHighVowels.push("i");
        allBackVowels.push("u");
        allHighVowels.push("u");
        allCentralVowels.push("a");
        allLowVowels.push("a");
        if(chooseLength()) {
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongFrontVowels.push("iː");
                allLongHighVowels .push("iː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongHighVowels.push("uː");
                allLongBackVowels.push("uː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongLowVowels .push("aː");
                allLongCentralVowels .push("aː");
            }
        }
        numberOfVowels = 3;
    } else if (randomNum === 2) {//produces five vowel qualities, i, u, e, o and a
        allFrontVowels.push("i");
        allHighVowels.push("i");
        allFrontVowels.push("e");
        allMidVowels.push("e");
        allBackVowels.push("u");
        allHighVowels.push("u");
        allBackVowels.push("o");
        allMidVowels.push("o");
        allCentralVowels.push("a");
        allLowVowels.push("a");
         if(chooseLength()) {
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongFrontVowels.push("iː");
                allLongHighVowels.push("iː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongHighVowels.push("uː");
                allLongBackVowels.push("uː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongLowVowels.push("aː");
                allLongCentralVowels.push("aː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongMidVowels.push("eː");
                allLongFrontVowels.push("eː");
            }
            randomNum = Math.floor(Math.random() * 11);
            if(randomNum !== 3) {
                allLongMidVowels.push("oː");
                allLongBackVowels.push("oː");
            }
        }
        numberOfVowels = 5;
    }
    return numberOfVowels;
    
}

function chooseFrontRoundedVowels() {
    let randomNum = Math.floor(Math.random() * 11);
    if(randomNum === 3) {
        allHighVowels.push("y");
        allFrontVowels.push("y");
        if(chooseLength()) {
            allLongHighVowels.push("yː");
            allLongFrontVowels.push("yː");
        }
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allMidVowels.push("ø");
            allFrontVowels.push("ø");
            if(chooseLength()) {
            allLongMidVowels.push("øː");
            allLongFrontVowels.push("øː");
        }
        }    
    }
}

function chooseBackUnroundedVowels() {
    let randomNum = Math.floor(Math.random() * 11);
    if(randomNum === 3) {
        allHighVowels.push("ɯ");
        allBackVowels.push("ɯ");
        if(chooseLength()) {
            allLongHighVowels.push("ɯː");
            allLongBackVowels.push("ɯː");
        }
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allMidVowels.push("ɤ");
            allBackVowels.push("ɤ");
            if(chooseLength()) {
            allLongMidVowels.push("ɤː");
            allLongBackVowels.push("ɤː");
            }
        }  
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allLowVowels.push("ɑ");
            allBackVowels.push("ɑ");
            if(chooseLength()) {
            allLongLowVowels.push("ɑː");
            allLongBackVowels.push("ɑː");
            }
        }  
    }
    
}

function chooseCentralVowels() {
    let randomNum = Math.floor(Math.random() * 21);
    if(randomNum === 3) {
        randomNum = Math.floor(Math.random() * 11);
        if(randomNum === 3) {
            allHighVowels.push("ɨ");
            allCentralVowels.push("ɨ");
            if(chooseLength()) {
                allLongHighVowels.push("ɨː");
                allLongCentralVowels.push("ɨː");
            }
            }
        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 4) {
            allHighVowels.push("ʉ");
            allCentralVowels.push("ʉ");
            if(chooseLength()) {
                allLongHighVowels.push("ʉː");
                allLongCentralVowels.push("ʉː");
            }
          }
        randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 4) {
            allMidVowels .push("ɘ");
            allCentralVowels.push("ɘ");
            if(chooseLength()) {
                allLongMidVowels .push("ɘː");
                allLongCentralVowels.push("ɘː");
            }
          }
          randomNum = Math.floor(Math.random() * 7);
        if(randomNum === 4) {
            allMidVowels .push("ɵ");
            allCentralVowels.push("ɵ");
            if(chooseLength()) {
                allLongMidVowels .push("ɵː");
                allLongCentralVowels.push("ɵː");
            }
          }
        }
    }

function chooseSchwa() {
    let randomNum = Math.floor(Math.random() * 11);
    if(randomNum === 3) {
        allMidVowels.push("ə");
    }
}

let vowels = [];
let shortVowels = [];
let allVowelsArrayFixed = [];
function collectAllVowels() {
    shortVowels = allFrontVowels.concat(allCentralVowels, allBackVowels, allHighVowels, allHighMidVowels, allMidVowels, allLowMidVowels, allLowVowels);

    allVowelsArrayFixed = shortVowels.filter((element, index) => { //removes duplicates
    return shortVowels.indexOf(element) === index;
    });

    vowels = allVowelsArrayFixed.concat(allLongFrontVowels, allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels )
    
    document.getElementById("vowel-number").innerHTML = allVowelsArrayFixed.length

    let allLongVowels = allLongFrontVowels.concat(allLongBackVowels, allLongCentralVowels, allLongHighVowels, allLongHighMidVowels, allLongMidVowels, allLongLowMidVowels, allLongLowVowels)

    if(allLongVowels.length > 0) {
         document.getElementById("vowel-quantities").style.display = "inline";
    }

}



function populateVowelLists() {
    //HIGH 
    let shortAndLongHighVowels = allHighVowels.concat(allLongHighVowels )

    let shortAndLongHighVowelsfixed = shortAndLongHighVowels.filter((element, index) => { //removes duplicates
        return shortAndLongHighVowels.indexOf(element) === index;
        });
    document.getElementById("high-vowels").innerHTML = `/${shortAndLongHighVowelsfixed.join(", ")}/`;
        if(shortAndLongHighVowelsfixed.length > 0) {
        document.getElementById("high-vowel-list").style.display = "block";
        }

    //HIGH MID
    let shortAndLongHighMidVowels = allHighMidVowels.concat(allLongHighMidVowels);

    let shortAndLongHighMidVowelsfixed = shortAndLongHighMidVowels .filter((element, index) => { //removes duplicates
        return allHighMidVowels.indexOf(element) === index;
        });
    document.getElementById("high-mid-vowels").innerHTML = `/${shortAndLongHighMidVowelsfixed.join(", ")}/`;
        if(shortAndLongHighMidVowelsfixed.length > 0) {
        document.getElementById("high-mid-vowel-list").style.display = "block";
        }

    //MID
    let shortAndLongMidVowels = allMidVowels.concat(allLongMidVowels);

    let shortAndLongMidVowelsfixed = shortAndLongMidVowels.filter((element, index) => { //removes duplicates
        return shortAndLongMidVowels.indexOf(element) === index;
        });
    document.getElementById("mid-vowels").innerHTML = `/${shortAndLongMidVowelsfixed.join(", ")}/`;
        if(shortAndLongMidVowelsfixed.length > 0) {
        document.getElementById("mid-vowel-list").style.display = "block";
        }

    //LOW MID
    let shortAndLongLowMidVowels = allLowMidVowels.concat(allLongLowMidVowels);

    let shortAndLongLowMidVowelsfixed = shortAndLongLowMidVowels.filter((element, index) => { //removes duplicates
        return shortAndLongLowMidVowels.indexOf(element) === index;
        });
    document.getElementById("low-mid-vowels").innerHTML = `/${shortAndLongLowMidVowelsfixed.join(", ")}/`;
        if(shortAndLongLowMidVowelsfixed.length > 0) {
        document.getElementById("low-mid-vowel-list").style.display = "block";
        }

    //LOW
    let shortAndLongLowVowels = allLowVowels.concat(allLongLowVowels);

    let shortAndLongLowVowelsfixed = shortAndLongLowVowels .filter((element, index) => { //removes duplicates
        return shortAndLongLowVowels.indexOf(element) === index;
        });
    document.getElementById("low-vowels").innerHTML = `/${shortAndLongLowVowelsfixed.join(", ")}/`;
        if(shortAndLongLowVowelsfixed.length > 0) {
        document.getElementById("low-vowel-list").style.display = "block";
        }
}


/*-----^^^SELECTION^^^--------------*/

let generateLanguageButton = document.getElementById("generate-language");
generateLanguageButton.addEventListener("click", generatePhonology);

function generatePhonology() {
    restoreDefault();

    chooseVoicing();
    chooseGemination();
    chooseAspiration();

    chooseLabial();
    chooseLabioDental();
    chooseRetroflex();
    chooseDental();
    chooseAlveolar();
    choosePostAlveolar();
    choosePalatal();
    chooseVelar();
    chooseUvular();
    choosePharyngeal();
    chooseGlottal();
    
    selectNasals();
    selectPlosives();
    selectFricatives();
    selectRhotics();
    selectLateralApproximants();
    selectApproximants();

    countNumberOfConsonants();
    collectAllConsonants()

    chooseLength();
    chooseFrontRoundedVowels();
    chooseNumberOfMainVowels();
    chooseBackUnroundedVowels();
    chooseCentralVowels();
    chooseSchwa();
    collectAllVowels();
    populateVowelLists();
}



export {generatePhonology, consonants, vowels};