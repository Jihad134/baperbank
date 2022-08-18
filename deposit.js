document.getElementById("deposite-amount").addEventListener("click",function(){
    const depositeNumber=document.getElementById("deposite-inpute");
    const depositeNumberString=depositeNumber.value;
    const newdepositeAmout=parseFloat(depositeNumberString)

    const totalAmount=document.getElementById("text-update");
    const totalAmountString=totalAmount.innerText;
    const previousAmount=parseFloat(totalAmountString)

    const totalBalance=previousAmount+newdepositeAmout;

    totalAmount.innerText=totalBalance

    depositeNumber.value='';


    const totaltaka=document.getElementById("deposite-balance");

    const totalTAkaSring=totaltaka.innerText;
    const totalpoisa=parseFloat(totalTAkaSring)

   const  currentbalance=totalpoisa +newdepositeAmout;
   totaltaka.innerText=currentbalance;
})
