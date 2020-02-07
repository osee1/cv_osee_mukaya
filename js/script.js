/** 
* ombre sur la photo de profil
*/
let photo = document.querySelector('#photo');
photo.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    photo.classList.toggle('ombre')
});
/** 
* ombre sur le bloc de l'entete
*/ 
let bloc_div = document.querySelector('#bloc_div');
bloc_div.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    bloc_div.classList.toggle('bloc_dive');
});
/**
 * ombre sur tout les images du bloc contact
 */
let photo_contact = document.querySelectorAll('.contact ul li img');
photo_contact.forEach((photo_contact)=>{
    photo_contact.addEventListener('mouseover',(event)=>{
        event.preventDefault();
        photo_contact.classList.toggle('photo_contact');
    });
});

/**
 * ombre sur les titres
 */
let h2 = document.querySelectorAll('h2');
const functionTitre = (event) =>{
    event.target.classList.toggle('titre');
}
for(let index = 0; index < h2.length; index++){
    h2[index].addEventListener('mouseover', functionTitre);
}

/**
 * Ajout et retrait de la couleur blue automatiquement sur tout les titres
 */
h2.forEach((titre)=>{
    setInterval(()=>{
        titre.classList.toggle('color');
    },1000);
});
