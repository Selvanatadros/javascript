let name=['ahmed','mohmed','sevo','salvona']
let ages=['25years old','26years old','22years old','21 years old']


let container=document.createElement('div')
document.body.appendChild(container)
container.style.textAlign='center';
function element(name,ages){
    let card=document.createElement('div');
    let title=document.createElement('h1');
    let age =document.createElement('h2');
    let img=document.createElement('img');
    let contant=document.createTextNode(name);
    
let variable=document.createTextNode(ages);
img.src='D:\\regest\\sevo\\image3.jpg'
title.appendChild(contant);
age.appendChild(variable);
    card.appendChild(img);
    card.appendChild(title)
    card.appendChild(age)
    container.appendChild(card)
    card.style.width="200px";
    card.style.backgroundColor='#444';
    card.style.color='#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';



    img.style.width="100%"
}
//element();

for(let i = 0; i < 4; i++)
{
    element(name[i], ages[i]);
}



