let input = document.getElementById("input")
let button = document.getElementById("submit");
button.addEventListener("click",()=>{
    let span = document.createElement("span");
    span.innerText = input.value;
    document.body.append(span)
    input.value = ""
})
document.addEventListener("keydown",(e)=>{
    let key = e.key
    if(key == "Enter")
    {
        button.click();
    }
    

    
})