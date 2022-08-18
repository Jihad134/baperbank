document.getElementById("witrow-btn").addEventListener("click",function(){
    const withrawTotal=document.getElementById("withraw-input");
    const withrawTotalString=withrawTotal.value;
    const withRawBalance=parseFloat(withrawTotalString);

    const totalWithraw=document.getElementById("text-Witraw");
    const totalWithrawstring=totalWithraw.innerText;
    const newWithraw=parseFloat(totalWithrawstring);
    const cureent=newWithraw +withRawBalance;
    totalWithraw.innerText=cureent;
})