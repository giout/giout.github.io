import { language, translateBtn } from "./dom.js"
import { setEnglish } from "./set-english.js"
import { setSpanish } from "./set-spanish.js"

// set language to spanish by default
language.innerText = 'ES'
setSpanish()

// translate page when clicking on navbar button
translateBtn.addEventListener('click', () => {
    if (language.innerText == 'ES'){
        language.innerText = 'EN'
        setEnglish()
    }
    else if (language.innerText == 'EN') {
        language.innerText = 'ES'
        setSpanish()
    }
})