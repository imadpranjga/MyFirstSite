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