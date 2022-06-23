is_num=(v)=>{
  if (v =='0' || v =='1' || v =='2' || v =='3'|| v =='4'|| v =='5'|| v =='6'|| v =='7'|| v =='8'|| v =='9')return true;
  return false;
}
no=""
num=document.getElementById("number")
mess=document.getElementById("error_mess")
num.addEventListener('input',(data)=>{
    mess.innerText="";
    if(data.inputType =="deleteContentBackward" && no!=""){
        no = no.slice(0,no.length-1);
    }
    else if(!is_num(data.data)){
        mess.innerText="Enter Valid Number !"
    }
    else{
        no+=data.data
    }
    console.log(no);

})