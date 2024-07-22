

let doctors= document.querySelectorAll('.team');
let card= document.querySelectorAll('.serviceCard'); //for card content

let count= 0;
doctors.forEach(function(card, index){
    card.style.left= `${index * 100}%`;
});

function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform= `translateX(-${count * 100}%)`;
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count = 0;
    }
    myFun()
}, 3000);


//services caard content
  
// card.forEach(function(curCard){
//     curCard.addEventListener('click', function(){
//         console.log(curCard);
//         let div= document.createElement('div');
//         div.classList.add('detailCard');
//         div.innerHTML= `
//         <i id="icon" class="fa-solid fa-x"></i>
//         <img src=${curCard.firstElementChild.src} alt="services">
//         <h2>${curCard.lastElementChild.innerHTML}</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident commodi eaque dolore labore ad non illo</p>`

//         document.querySelector('body').appendChild(div);
//         document.querySelector('#icon').addEventListener('click', function(){
//             div.remove();
//         })
//     })
// });

document.querySelectorAll('.serviceCard').forEach(function(curCard) {
    curCard.addEventListener('click', function() {
        let div = document.createElement('div');
        div.classList.add('detailCard');
        div.innerHTML = `
            <i id="icon" class="fa-solid fa-x"></i>
            <img src="${curCard.querySelector('img').src}" alt="services">
            <h2>${curCard.querySelector('p').innerHTML}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident commodi eaque dolore labore ad non illo</p>`;

        document.body.appendChild(div);

        // Close the detail card when the icon is clicked
        document.querySelector('#icon').addEventListener('click', function() {
            div.remove();
        });
    });
});


//for toggle menu bar

document.getElementById('bar').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

