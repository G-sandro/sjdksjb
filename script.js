let prices = document.getElementsByClassName("monthly");
let see = Array.from(prices);
let toggle = true;
let ball = document.getElementById("selector-bar");
function myFunction(){
    if(toggle) {
        see[0].innerHTML = "$199.99";
        see[1].innerHTML = "$244.99";
        see[2].innerHTML = "$399.99";
        ball.style.justifyContent = "flex-start";
        toggle = false;



    }else {
        

        see[0].innerHTML = "$19.99";
        see[1].innerHTML = "$24.99";
        see[2].innerHTML = "$39.99";
        ball.style.justifyContent = "flex-end";
        toggle = true;

    }
}























// let element1 = document.getElementById("price1");
// let element2 = document.getElementById("price2");
// let element3 = document.getElementById("price3");
// let ball = document.getElementById("selector-bar");
// let toggle=true;

// function myFunction(){
//     if (toggle){
//         element1.innerHTML ="$19.99";
//         element2.innerHTML ="$24.99";
//         element3.innerHTML = "$39.99";
//         ball.style.justifyContent="flex-start";
//         toggle=false;
//     }else {
//         element1.innerHTML = "$199.99";
//         element2.innerHTML = "$244.99";
//         element3.innerHTML = "$399.99";
//         ball.style.justifyContent = "flex-end";
//         toggle=true;
//     }
// }

