function convertToDecimal(char){
    /**
     * Now depending upon the input convert the entered string to Decimal
    */ 
   console.log("Convert.....")
   let resultText = document.getElementById("result");
   let binaryToDecimal = resultText.value;
   /**
    * Handling the condition to check if the entered number is an appropriate 
    * format even after the conversion
    */
   if(isNaN(parseInt(binaryToDecimal,2))){
       alert("Please enter the number in the correct format");
       resultText.value = "";
   } else{
       resultText.value = parseInt(binaryToDecimal,2);
   } 
}

function numberVal(val){
    
    let result = document.getElementById("result");
        result.value += val;
}
function clearText(){
    let resultText = document.getElementById("result");
        resultText.value = "";
}