let res = document.getElementById('result');
const add = (e)=> {
     res.innerText += e.innerText;
}
const calc = ()=> {
    res.innerText = eval(res.innerText)
}