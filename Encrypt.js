function Encrypt(){
  var a = prompt("Enter the keyword")
  const b = a.toLowerCase()
  var c = b.replace(/a/g, "1").replace(/b/g, "2").replace(/c/g, "3").replace(/d/g, "4").replace(/e/g, "5").replace(/f/g, "6").replace(/g/g, "7").replace(/h/g, "8").replace(/i/g, "9").replace(/j/g, "(").replace(/k/g, ")").replace(/l/g, "-").replace(/m/g, "_").replace(/n/g, "+").replace(/o/g, "=").replace(/p/g, "{").replace(/q/g, "}").replace(/r/g, "[").replace(/s/g, "]").replace(/t/g, ";").replace(/u/g, ":").replace(/v/g, "'").replace(/w/g, "/").replace(/x/g, "?").replace(/y/g, ".").replace(/z/g, "^")
   if (/[0-9]/.test(a)){
      alert("null")
    }else{
      alert(c)
    }
}

function Decrypt(){
  var a = prompt("Enter the keyword")
  var c = a.replace(/!/g, "z").replace(/@/g, "y").replace(/#/g, "x").replace(/1/g, "w").replace(/%/g, "v").replace(/2/g, "u").replace(/&/g, "t").replace(/;/g, "s").replace(/4/g, "r").replace(/'/g, "q").replace(/5/g, "p").replace(/-/g, "o").replace(/6/g, "n").replace(/3/g, "m").replace(/:/g, "l").replace(/</g, "k").replace(/>/g, "j").replace(/,/g, "i").replace(/0/g, "h").replace(/9/g, "g").replace(/`/g, "f").replace(/8/g, "e").replace(/=/g, "d").replace(/7/g, "c").replace(/_/g, "b").replace(/~/g, "a")
  
      alert(c)
    
}
 