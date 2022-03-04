function gerar_cor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')';
    document.getElementById("r").innerHTML = document.body.style.backgroundColor;
    
}
