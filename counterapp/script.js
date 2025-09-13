let count = 0;

const countshow = document.querySelector('.count');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

increase.addEventListener('click' , () => {
    count++;
    countshow.innerHTML=count;
})
decrease.addEventListener('click' , () => {
    count--;
    countshow.innerHTML=count;
})
reset.addEventListener('click' , () => {
    count = 0;
    countshow.innerHTML='0';
})