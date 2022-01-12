//heading content
let title = document.createElement("h1");
title.innerText = "Callback Hell";
title.style.textAlign = "center";
document.body.appendChild(title);

//div for placing word content
let box = document.createElement("div");
box.style.marginLeft = "580px";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.fontSize = "50px";
box.style.height = "200px";
box.style.width = "200px";
box.style.backgroundColor = "blue";
document.body.appendChild(box);

//callback function
let word = document.createElement("p");
word.style.color = "white";
setTimeout(()=>{
    word.innerText = "10";
    setTimeout(()=>{
        word.innerText = "09";
        setTimeout(()=>{
            word.innerText = "08";
            setTimeout(()=>{
                word.innerText = "07";
                setTimeout(()=>{
                    word.innerText = "06";
                    setTimeout(()=>{
                        word.innerText = "05";
                        setTimeout(()=>{
                            word.innerText = "04";
                            setTimeout(()=>{
                                word.innerText = "03";
                                setTimeout(()=>{
                                    word.innerText = "02";
                                    setTimeout(()=>{
                                        word.innerText = "01";
                                        setTimeout(()=>{
                                            word.innerText = "Happy new year";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
box.appendChild(word);