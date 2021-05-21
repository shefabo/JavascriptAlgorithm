// convertFahrToCelsius Task

function convertFahrToCelsius(temp) {
    
   const result = (temp-32)*5/9
   
   if (Number && typeof temp !== "boolean" && temp !=="" && typeof temp !== "object" && (!isNaN(temp))) {
   console.log(result.toFixed(4))
   return(result.toFixed(4))
   } else if (Array.isArray(temp)) {
      console.log(`${JSON.stringify(temp)} is not a valid number but a/an array`)
      return(`${JSON.stringify(temp)} is not a valid number but a/an array`)

   }
    else {console.log(`${JSON.stringify(temp)} is not a valid number but a/an ${typeof temp}`)
   return(`${JSON.stringify(temp)} is not a valid number but a/an ${typeof temp}`)

   }

}

