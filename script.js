// Character sets
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMS = '0123456789';
const SYMS = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

const pwEl = document.getElementById('password');
const lenEl = document.getElementById('length');
const lenVal = document.getElementById('lengthVal');
const lowerChk = document.getElementById('lowercase');
const upperChk = document.getElementById('uppercase');
const numChk = document.getElementById('numbers');
const symChk = document.getElementById('symbols');
const genBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Update length text
lenEl.addEventListener("input", () => {
    lenVal.textContent = lenEl.value;
});

function generatePassword() {
    let charset = "";
    if (lowerChk.checked) charset += LOWER;
    if (upperChk.checked) charset += UPPER;
    if (numChk.checked) charset += NUMS;
    if (symChk.checked) charset += SYMS;

    if (!charset) {
        alert("Select at least one character type!");
        return "—";
    }

    let password = "";
    for (let i = 0; i < lenEl.value; i++) {
        let index = Math.floor(Math.random() * charset.length);
        password += charset[index];
    }

    return password;
}

genBtn.addEventListener("click", () => {
    pwEl.textContent = generatePassword();
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(pwEl.textContent);
    alert("Password copied!");
});
