let string=''
function pressed(v){
    
    
       let oprSym=['+','-','*','/','.']   
       let t=string.length;
       let lastCHR=string[t-1]
       console.log(lastCHR)
       if(oprSym.includes(v)){
          if(oprSym.includes(lastCHR)){
            let newstr=string.slice(0,-1)
            console.log(newstr)
           string= newstr+v
           document.querySelector('.input-holder').innerHTML=string
          }
          else{
            string+=v
            document.querySelector('.input-holder').innerHTML=string
          }
       } 
       else {
        string+=v
        document.querySelector('.input-holder').innerHTML=string
       }    
   

}
function cal(){
   
    string=eval(string)
    document.querySelector('.input-holder').innerHTML=string
    string=''
}
function clean(){
   
    string=''
            document.querySelector('.input-holder').innerHTML=string
}
