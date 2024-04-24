const inputBox = document.getElementById('Password');

const length = 12 ;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*(){}[]-=~_<>";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword (){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    inputBox.value = password;
}





const GenerateBtn = document.getElementById('generate-btn');

GenerateBtn.addEventListener('click', createPassword);

const copyImg = document.querySelector('#img-copy');

copyImg.addEventListener('click', copyPassword);

function copyPassword (){
    inputBox.select();
    document.execCommand('copy');

}



