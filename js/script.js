let photo = document.querySelector('#photo');
photo.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    photo.classList.toggle('ombre')
});

let bloc_div = document.querySelector('#bloc_div');
bloc_div.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    bloc_div.classList.toggle('bloc_dive');
});

let photo_contact = document.querySelectorAll('.contact ul li img');
photo_contact.forEach((photo_contact)=>{
    photo_contact.addEventListener('mouseover',(event)=>{
        event.preventDefault();
        photo_contact.classList.toggle('photo_contact');
    });
});

let h2 = document.querySelectorAll('h2');
const functionTitre = (event) =>{
    event.target.classList.toggle('titre');
}
for(let index = 0; index < h2.length; index++){
    h2[index].addEventListener('mouseover', functionTitre);
}

h2.forEach((titre)=>{
    setInterval(()=>{
        titre.classList.toggle('color');
    },1000);
});
