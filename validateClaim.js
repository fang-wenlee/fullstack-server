

const highRiskProcedureCode = ['D2740', 'D4341', 'D7210'];



function validateClaim(claims){

     const flags =[];



     if(highRiskProcedureCode.includes(claims.procedureCode) ){

        flags.push(` ${claims.procedureCode} is high risk procedure code`);
     }

      if(!claims.documentationProvided){
        flags.push('Document need to provided!')
      }

      if(claims.frequencyExceeded){
        flags.push('Frequency Exceed')
      }

     return flags;

}

module.exports = validateClaim;