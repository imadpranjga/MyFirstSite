function thirdangle() {
    let angle1 = prompt("give 1st angle");
    let angle2 = prompt("give 2nd angle");
    let angle3 = 180 - angle1-angle2 ;
    alert ("The 3rd angle is " + angle3);
}

function centuries() {
    let year = prompt("Enter Year");
    let cent = year/100 + 1 ;
    alert ("the century is" + cent);
    Math.round(0.5);    
    Math.round(0.4);   
}

const h1 = document.querySelector('h1');
const paragraph = document.querySelector

 function fourTen(){
        for(let i = 1; i<101; i++) {
        if (i%4==0 && i%10==0){
    console.log("FourTen");
        }
      else if(i%10==0){
    console.log("Ten");
        }
      else if (i%4==0){
     console.log("Four");
        }
         else{
            console.log(i);

        }


  