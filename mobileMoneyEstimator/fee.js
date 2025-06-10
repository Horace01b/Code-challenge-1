function estimateTransactionFee (){

      const amountStr= window.prompt("Unatuma Ngapi? (KES):");
      const amount=parseInt(amountStr);
      console.log (typeof amountStr);
      console.log(amountStr);

      if(!amount){

         console.log("failed  to convert");
         console.log(amountStr);


         return;
      }
        
      let  transactionCost=(amount * 1.5)/100;
      if (transactionCost <=10){

         alert(` Sending KES ${amount}
                Transaction cost KES 10
                Total amount=${amount + 10}
            `);
            return;
      }
      if( transactionCost >= 70){
         alert(` Sending KES ${amount}
                Transaction cost KES 70
                Total amount=${amount + 70}
            `);
            return;

      }
        alert(` Sending KES ${amount}
                Transaction cost KES 70
                Total amount=${amount + transactionCost}
            `);


    }