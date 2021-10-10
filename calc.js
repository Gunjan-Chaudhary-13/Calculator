
var numbers= document.getElementsByClassName('col');

var upscreen=document.getElementById('upscreen');
var downscreen=document.getElementById('downscreen');

var equal= document.getElementsByClassName('equal');
     equal[0].addEventListener('click',function(){
        n2=parseFloat(downscreen.innerText);
        var down = downscreen.innerText;
        upscreen.innerText += down;
        upscreen.innerText += " = ";
        downscreen.innerText="";
        var result=eval(n1 + " " + operation + " " + n2);
        downscreen.innerText=result;
     });

var n1;
var n2;
var operation;
for(var i=0;i<numbers.length;i++){
    
    numbers[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        
        if(value=='+'){
            if(downscreen.innerText.length>0 && downscreen.innerText!='-'){
            operation= '+';
            var down = downscreen.innerText;
            upscreen.innerText += down;
            n1=parseFloat(downscreen.innerText);
            downscreen.innerText="";
            upscreen.innerText += value;
            }
        }else if(value=='-'){
            if(downscreen.innerText.length>0 && downscreen.innerText!='-'){
            operation= '-';
            n1=parseFloat(downscreen.innerText);
            upscreen.innerText += downscreen.innerText;
            downscreen.innerText="";
            upscreen.innerText += "-";
            }
        }else if(value=='*'){
            if(downscreen.innerText.length>0 && downscreen.innerText!='-'){
            operation= '*';
            n1=parseFloat(downscreen.innerText);
            upscreen.innerText += downscreen.innerText;
            downscreen.innerText="";
            upscreen.innerText += "x";
            }
        }else if(value=='/'){
            if(downscreen.innerText.length>0 && downscreen.innerText!='-'){
            operation= '/';
            n1=parseFloat(downscreen.innerText);
            upscreen.innerText += downscreen.innerText;
            downscreen.innerText="";
            upscreen.innerText += value;
            }
        }else if(value=='%'){
            if(downscreen.innerText.length>0 && downscreen.innerText!='-'){
            operation= '%';
            n1=parseFloat(downscreen.innerText);
            upscreen.innerText += downscreen.innerText;
            downscreen.innerText="";
            upscreen.innerText += "%";
            }
        }else if(value=='AC'){
            operation= 'AC';
            downscreen.innerText="";
            upscreen.innerText="";
        }
        else if(value=='+/-'){
            if(downscreen.innerText==""){
            downscreen.innerText='-';
            }
        }
        else if(value=='back'){
            var n = downscreen.innerText.length;
           var s = downscreen.innerText.substr(0,n-1);
           downscreen.innerText=s;
        }
        else{
            var n=upscreen.innerText.length;
            if(upscreen.innerText[n-1]=='='){
                upscreen.innerText+=downscreen.innerText;
                downscreen.innerText="";
                downscreen.innerText += value;
            }else{
            downscreen.innerText += value;
            }
        }
    });
}
