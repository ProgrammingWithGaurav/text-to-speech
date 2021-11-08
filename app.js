const btn = document.getElementById('speak')
const text = document.getElementById('text')


btn.addEventListener('click',()=>{
    const speech  = new SpeechSynthesisUtterance()
    speech.text = text.value

    speech.volume = 1
    speech.rate = 1
    speech.pitch = 0

    window.speechSynthesis.speak(speech)
})

