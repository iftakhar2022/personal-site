


let stocks = {
    Fruits : ['strawberry','grapes','banana','apple'],
    liquid : ['water','ice'],
    holder : ['cone','cup','stick'],
    toppings : ['chocolate','peanuts'],
};

let production = () => {
    setTimeout( ()=>{
        console.log('production has started');
        setTimeout( ()=>{
            console.log('the fruit has been chopped');

            setTimeout( ()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added. `);
            },1000);
        },2000);

    },0000); 

    
}




order(0, production);































// const canvas = document.getElementById('canvas');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');
// const sizeEl = document.getElementById('size');
// const colorEl = document.getElementById('color');
// const clearEl = document.getElementById('clear');
// const ctx = canvas.getContext("2d");


// let size = 5;
// let isPressed = false;
// let color = 'black';
// let x = undefined;
// let y = undefined;


// canvas.addEventListener('mousedown', function(e){
//     isPressed = true;

//     x = e.offsetX;
//     y = e.offsetY;
//     console.log(x);
//     console.log(y);
// });

// canvas.addEventListener('mouseup',function(e){
//    isPressed = false;

//    x = undefined;
//    y = undefined;
//    console.log(x);
//    console.log(y);
// });

// canvas.addEventListener('mousemove', function(e){
//     if (isPressed) {
//         const x2 = e.offsetX;
//         const y2 = e.offsetY;
//         console.log(x2);
//         console.log(y2);

//         drawCircle(x2, y2);
//         drawLine(x,y,x2,y2);
//         x = x2;
//         y = y2;

//     }
// });

// function drawCircle(x,y) {
//     ctx.beginPath();
//     ctx.arc(x,y,size,0,Math.PI*2);
//     ctx.fillStyle = color;
//     ctx.fill();
// }

// function drawLine(x1,y1,x2,y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1,y1);
//     ctx.lineTo(x2,y2);
//     ctx.strokeStyle = color;
//     ctx.lineWidth = size*2;
//     ctx.stroke();
// };

// increaseBtn.addEventListener('click', function(){
//     size += 5;

//     if (size > 50) {
//         size = 50;
//     }

//     updateSizeOnScreen();
// });
// decreaseBtn.addEventListener('click', function(){
//     size -= 5;

//     if (size < 5) {
//         size = 5;
//     }
//     updateSizeOnScreen();
// });

// colorEl.addEventListener('change', function(e){
//     color.e.target.value;
// });

// clearEl.addEventListener('click', function(){
//     ctx.clearRect(0,0, canvas.width,canvas.height);
// });

// function updateSizeOnScreen(){
//     sizeEl.innerText = size;
// }