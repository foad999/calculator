const all = document.querySelectorAll('.key');
let display = document.querySelector('.display')
all.forEach((item) => {
    item.addEventListener('click' ,function(event){
        const x = event.target.innerText
        if (display.innerHTML == 0 ){
            return display.innerHTML = x
        }
        return display.innerHTML += x
    })
})

let mosavi = document.querySelector('#mosavi');
mosavi.addEventListener('click', function(){
    let y = display.innerHTML;
    display.innerHTML = eval(y)
})

const jazr = document.querySelector('#jazr')
jazr.addEventListener('click',function(){
    let u = display.innerHTML;
    u = parseInt(u)
    a = Math.sqrt(u)
    // console.log(a)
    return display.innerHTML = a.toFixed(2);
    // let a = prompt('jazr?')
    // return display.innerHTML = Math.sqrt(a)
})

const AC = document.querySelector('#AC');
AC.addEventListener('click', function(){
    return display.innerHTML = 0;
})

const C = document.querySelector('#C');
C.addEventListener('click', function(event){
    let z = display.innerHTML;
    if (z.length == 1 ){
        display.innerHTML = 0;
    } else {
        display.innerHTML = z.substring(0,z.length-1)
    }
})
function darsad(){
    let d = display.innerHTML;
    let g = d/100  
        return display.innerHTML = g
}
document.querySelector('#darsad').addEventListener('click',darsad)