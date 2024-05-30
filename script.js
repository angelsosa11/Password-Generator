const characterAmountRange = document.getElementById('character-amount-range')
const characterAmountNumber = document.getElementById('character-amount-number')
const includeCapitalElement = document.getElementById('include-capital')
const includeNumbersElement = document.getElementById('include-numbers')
const includeSymbolsElement = document.getElementById('include-symbols')
const form = document.getElementById('password-generator-form')
const passwordDisplay = document.getElementById('password-display')

const CAPITAL_CHAR_CODES = arrayfromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayfromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayfromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayfromLowToHigh(33, 47).concat(arrayfromLowToHigh(58, 64)).concat(arrayfromLowToHigh(91, 96)).concat(arrayfromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeCapital = includeCapitalElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeCapital, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeCapital, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeCapital) charCodes = charCodes.concat(CAPITAL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayfromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}