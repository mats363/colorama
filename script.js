fetch("./colors.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})

let body = document.querySelector("body");
let colorInput = document.createElement("Input");
let btn = document.createElement("button");

body.append(colorInput, btn);
btn.innerText = "Klicka";
btn.addEventListener("click", colorSelect);

function colorSelect(){
    let userColor = colorInput.value;
    body.style.backgroundColor = userColor;
}

