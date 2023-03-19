const texto = document.querySelector("#texto")
const btnGravar = document.querySelector("#btnGravar")
const btnParar = document.querySelector("#btnParar")

class speechAPI {
    constructor() {
       const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition 

       this.speechAPI = new SpeechToText()
       this.output = texto.output 
       this.speechAPI.continuous = true 
       this.speechAPI.lang = 'pt-BR'

       this.speechAPI.onresult = e => {
        var resultIndex = e.resultIndex
        var transcript = e.results[resultIndex][0].transcript

        texto.value += transcript
       }
    }

    start() {
        this.speechAPI.start()
    }

    stop() {
        this.speechAPI.stop()
    }
}

var speech = new speechAPI()

btnGravar.addEventListener('click', () => {
    btnGravar.disabled = true;
    btnParar.disabled = false;
    speech.start()
})

btnParar.addEventListener('click', () => {
    btnGravar.disabled = false;
    btnParar.disabled = true;
    speech.stop()
})