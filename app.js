const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const portrait = document.querySelector('.portrait img');
const frame = document.querySelector('.frame img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const formats = document.querySelector('.formats');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = `none`;
    //Popout
    title.style.transform = 'translateZ(80px)';
    portrait.style.transform = 'translateZ(150px) rotateZ(-5deg)';
    frame.style.transform = 'translateZ(80px) rotateZ(5deg)';
    description.style.transform = 'translateZ(50px)';
    formats.style.transform = 'translateZ(80px)';
    purchase.style.transform = 'translateZ(50px)';
});

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0px)';
    portrait.style.transform = 'translateZ(0px) rotateZ(0deg)';
    frame.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    formats.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});
