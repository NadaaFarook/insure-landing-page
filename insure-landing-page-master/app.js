const button = document.querySelector('.hamburger-menu')
const ul = document.getElementById('hd')
const li = document.querySelectorAll('li#lia')
const cross = document.getElementById('timeshide')
const bar = document.getElementById('barhide')
console.log(cross.classList);



let state = false ;
button.addEventListener('click', ()=>{
  if(!state){
    
    ul.classList.add('decor');
    ul.classList.remove('hide');
    li[0].classList.add('decor');
    li[0].classList.remove('hide');
    bar.classList.add('hide')
    cross.classList.remove('hide')
    state = true;
    
  }else{
    state = false;
    ul.classList.add('hide');
    ul.classList.remove('decor');
    li[0].classList.add('hide');
    li[0].classList.remove('decor');
    bar.classList.remove('hide')
    cross.classList.add('hide')
  }
})