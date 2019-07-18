// getting raw text from HTML
var textRaw = document.querySelector('.textRaw').innerText;

// Cleaning Raw Text
var clean = textRaw.replace(/[^a-zA-Z0-9 ]/g, "");

console.log(clean);