import { calculate } from "./calculate.js"
import charkey from "./charkey.js"
import clear from "./clear.js"
import copyToClipBoard from "./copyToClipBoard.js"
import keyDown from "./keyDown.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll('.charKey').forEach(charkey)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('input').addEventListener('keydown', keyDown)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)