
var intervalo = 3000;
var slide = 1;

function transiction(){
    document.getElementById("id").style.opacity = "0"

    setTimeout(function(){
        document.getElementById("id").style.opacity = "1.5";
        switch(slide){
            case 1:
                slide2();
            break;
            case 2:
                slide3();
            break;
            case 3:
                slide4();
            break;
            case 4:
                slide5();
            break;
            case 5:
                slide = 1;
            default:
                slide1();
                slide = 0;
        }
        slide++
    }, 1500);
}

function slide1(){
    document.getElementById('id').src="./img/1.jpg";
    setTimeout(transiction, intervalo)
}

function slide2(){
    document.getElementById('id').src="./img/2.jpg";
    setTimeout(transiction, intervalo)
}

function slide3(){
    document.getElementById('id').src="./img/3.jpg";
    setTimeout(transiction, intervalo)
}

function slide4(){
    document.getElementById('id').src="./img/4.jpg";
    setTimeout(transiction, intervalo)
}

function slide5(){
    document.getElementById('id').src="./img/5.jpg";
    setTimeout(transiction, intervalo)
}