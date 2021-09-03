let incBtn=document.getElementById("inc-count-btn");
let decBtn=document.getElementById("dec-count-btn");
let count=document.getElementById("count");
let resetBtn=document.getElementById("reset-btn");

incBtn.addEventListener('click',() => {
    count.innerHTML=1+(+count.innerHTML);
});
decBtn.addEventListener('click',() => {
    if(count.innerHTML==0)
    {
        alert('Click Count is Zero!!');
        return;
    }
    count.innerHTML=(+count.innerHTML)-1;
})
resetBtn.addEventListener('click',() => {
    if(count.innerHTML==0)
    {
        alert('Click Count is already Zero!!')
    }
    count.innerHTML=0;
})