function thirdangle() {
    let angle1 = prompt("give 1st angle");
    let angle2 = prompt("give 2nd angle");
    let angle3 = 180 - angle1 - angle2;
    alert("The 3rd angle is " + angle3);
}

function centuryFromYear() {
    var year= prompt("what year is it?")
    var x = Math.floor(year/100);
    if(year%100===0) {
        alert( x);
    }
    else {
        alert( x + 1); 
    }
}

// const h1 = document.querySelector('h1');
// const paragraph = document.querySelector

function fourTen() {
    for (let i = 1; i < 101; i++) {
        if (i % 4 == 0 && i % 10 == 0) {
            console.log("FourTen");
        } else if (i % 10 == 0) {
            console.log("Ten");
        } else if (i % 4 == 0) {
            console.log("Four");
        } else {
            console.log(i);

        }
    }
}

function WordLength(){
    let text=prompt("enter text");
    alert(text.length);
}

// function uppercase
// let text=prompt("")

function Encrypt(){
    var a = prompt("Enter the keyword")
    const b = a.toLowerCase()
    var c = b.replace(/a/g, "@").replace(/b/g, "!").replace(/c/g, "#").replace(/d/g, "1").replace(/e/g, "%").replace(/f/g, "2").replace(/g/g, "&").replace(/h/g, ";").replace(/i/g, "4").replace(/j/g, "'").replace(/k/g, "5").replace(/l/g, "-").replace(/m/g, "6").replace(/n/g, "3").replace(/o/g, ":").replace(/p/g, "<").replace(/q/g, ">").replace(/r/g, ",").replace(/s/g, "0").replace(/t/g, "9").replace(/u/g, "`").replace(/v/g, "8").replace(/w/g, "=").replace(/x/g, "7").replace(/y/g, "_").replace(/z/g, "~")
     if (/[0-9]/.test(a)){
        alert("null")
      }else{
        alert(c)
      }
  }
  
  function Decrypt(){
    var a = prompt("Enter the keyword")
    var c = a.replace(/@/g, "a").replace(/!/g, "b").replace(/#/g, "c").replace(/1/g, "d").replace(/%/g, "e").replace(/2/g, "f").replace(/&/g, "g").replace(/;/g, "h").replace(/4/g, "i").replace(/'/g, "j").replace(/5/g, "k").replace(/-/g, "l").replace(/6/g, "m").replace(/3/g, "n").replace(/:/g, "o").replace(/</g, "p").replace(/>/g, "q").replace(/,/g, "r").replace(/0/g, "s").replace(/9/g, "t").replace(/`/g, "u").replace(/8/g, "v").replace(/=/g, "w").replace(/7/g, "x").replace(/_/g, "y").replace(/~/g, "z")
    
        alert(c)
      
  }