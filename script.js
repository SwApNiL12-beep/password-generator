let lengthP= document.querySelector("#length-number")
let Upper= document.querySelector("#UpperCase")
let passout=  document.querySelector("#passwordOutput")
let lower= document.querySelector("#lowerCase")
let number= document.querySelector("#Numbers")
let sym= document.querySelector("#symbols")
let generateBTN= document.querySelector(".generate")
let copyBTN=  document.querySelector("#copy")

const uppersstr= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerstr= 'abcdefghijklmnopqrstuvwxyz'
const numberstr='0123456789'
const symbolstr='@!#$%^&*()_+?'
let password=''
generateBTN.addEventListener("click",()=>{
    let str='';
    if(Upper.checked){
        str+= uppersstr
    }
    if(lower.checked){
        str+= lowerstr
    }
    if(number.checked){
        str+= numberstr
    }
    if(sym.checked){
        str+= symbolstr
    }
    
    console.log(str,'str');
    for(let i = 0;i < lengthP.value;i++){
        let index= Math.floor(Math.random() * str.length)
        password += str[index]
    }
    
    passout.value= password
})

copyBTN.addEventListener("click",()=>{
    if(passout.value ===''){
        alert("please ganarate a password first")
    }else{
        let newElement= document.createElement('Textarea')
        newElement.value = passout.value
        document.body.appendChild(newElement)
        newElement.select()
        document.execCommand('copy')
        alert("Password Copied to Clipboard")
        newElement.remove()
    }
})



