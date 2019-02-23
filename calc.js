function  dispnum(num){
            document.forms.display.value=document.forms.display.value+num;
            
        }
        
        function equal(){
            
            var temp=document.forms.display.value;
           if(temp){
              
               document.forms.display.value=eval(temp);
            } 
        }
        function backspace()
        {
            var del=document.forms.display.value;
            document.forms.display.value=del.substring(0,del.length-1)
        }