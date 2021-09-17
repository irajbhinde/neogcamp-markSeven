var btnTranslate = document.querySelector("#b-translate")
var inputText = document.querySelector("#input-txt")
var outputText = document.querySelector("#output-txt")

var serverURL = "https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong, try again later!")
}

function clickHandler(){
    var inputTxt = inputText.value;


fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText
    }
        
        )
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)


