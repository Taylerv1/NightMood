let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let tayler = document.querySelector('.tayler');



window.onscroll = function() {

    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*3.4 + 'px';
    mountain3.style.top = value *1.7  + 'px';
    mountains4.style.top = value *1.3  + 'px';
    river.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    boat.style.top = value  + 'px';
    tayler.style.fontSize = value / 1.3 + 'px';
    if (value >= 60){
        tayler.style.fontSize = 60 + 'px';
        tayler.style.position = 'fixed'
        if(value >= 358.6){
            tayler.style.display = 'none'
        }else{
             tayler.style.display = 'block'
        }
        if( value >= 104){
            document.querySelector('.main').style.background = 'linear-gradient(#508db3, #08002d)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#3a0033, #08002d)'
        }
    }
}