const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let genPas = document.getElementById("generatebtn")
let passwordbtn1 = document.getElementById("pass1")
let passwordbtn2 = document.getElementById("pass2")

let randChar = genPas.addEventListener("click", generateFullPass)
// let tocopy = passwordbtn1.addEventListener("click", copyPasToClip('one'))
let len = 0
let pass1 = ""
let pass2 = ""
// function copyToClipboard(div,psw){
//     if (div === "div-one") {
//     let copyText = document.getElementById("pass1").value    
//     navigator.clipboard.writeText(copyText).then(() => {
//         alert("First password copied to clipboard!")
//     })
//       } else {
//     let copyText = document.getElementById("pass2").value    
//     navigator.clipboard.writeText(copyText).then(() => {
//         alert("Second password copied to clipboard!")
//     })
//   } 
// }

function copyToClipboard(div,psw)
{
    if (div === "div-one") 
    {
        copyUsingExecCommand(pass1)
        alert("First password copied to clipboard!")
    }
    else if(div === "div-two")
    {
        copyUsingExecCommand(pass2)
        alert("Second password copied to clipboard!")
    }
    else
    {
        console.log("something wrong bruv")
    }
}


function copyUsingExecCommand(text) {
  const input = document.createElement("input")
  input.value = text
  input.readOnly = true
  input.style = {
    position: "absolute",
    left: "-9999px"
  }
  document.body.append(input)
  input.select()
  document.execCommand("copy")
  input.remove()
}

function generateFullPass()
{
    let inputLen = document.getElementById("input-len").value;
    len = inputLen
    pass1 = ""
    pass2 = ""
    for(let i=0;i<len;i++)
    {
        pass1+=generateRandom()
    }
    for(let i=0;i<len;i++)
    {
        pass2+=generateRandom()
    }
    passwordbtn1.textContent = pass1
    passwordbtn2.textContent = pass2
    let mes = document.getElementById("messagetoclick")
    mes.textContent = "Click the button to copy the password"
}
function generateRandom()
{
    return characters[(Math.floor(Math.random()*characters.length))]
}

