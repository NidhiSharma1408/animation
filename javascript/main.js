document.addEventListener('DOMContentLoaded',function(){
    function myMove1(elem_id,time,high){
        var elem = document.getElementById(elem_id);
        var pos = 0;
        var h = high;
        var in1= -1;
        var in2 = -1;
        var id= setInterval(frame, time);
        var id2= setInterval(elemHeight, time);
        function elemHeight(){
            if( in2<0)
            {
                h++;
                if( h == high+10){
                    in2 = in2*-1;
                }
            }
            else{
                h--;
                if( h==high-10){
                    in2 = in2*-1;
                }
            }
            elem.style.bottom = h+'px';
        }
        function frame(){
            if( in1<0){
                pos++;
                if( pos == 300){
                    in1 = in1*-1;
                }
            }
            else{
                pos--;
                if( pos == 0){
                    in1 = in1*-1;
                }
            }
            elem.style.left = pos + 'px';
        }
 }
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
 function myMove2(elem_id,time){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = 0;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame, time);
    function frame(){
        if( in1<0){
            pos++;
            if( pos == 275){
                in1 = in1*-1;
            }
        }
        else{
            pos--;
            if( pos == 0){
                in1 = in1*-1;
            }
        }
        elem.style.left = pos + 'px';
        elem.style.bottom = pos + 'px';
    }  
}
//////////////////////////////////////////////////////////////////////////////////////////////
function myMove3(elem_id,time){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = 0;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame,time);
    function frame(){
        if( in1<0)
        {
            pos++;
            if( pos == 275){
                in1 = in1*-1;
            }
        }
        else{
            pos--;
            if( pos == 0){
                in1 = in1*-1;
            }
        }
        elem.style.left = pos + 'px';
        elem.style.top = pos + 'px';
    }  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function myMove4(elem_id,time,high){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = high;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame, time);
    var id2= setInterval(elemHeight, time);
    function elemHeight(){
        if( in2<0){
            h++;
            if( h == high+10){
                in2 = in2*-1;
            }
        }
        else{
            h--;
            if( h==high-10){
                in2 = in2*-1;
            }
        }
        elem.style.bottom = h+'px';
    }
    function frame(){
        if( in1<0){
            pos++;
            if( pos == 300){
                in1 = in1*-1;
            }
        }
        else{
            pos--;
            if( pos == 0){
                in1 = in1*-1;
            }
        }
        elem.style.right = pos + 'px';
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function myMove5(elem_id,time){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var in1= -1;
    var id= setInterval(frame, time);
    function frame(){
        if( in1<0)
        {
            pos++;
            if( pos == 275){
                in1 = in1*-1;
            }
        }
         else{
             pos--;
             if( pos == 0){
                 in1 = in1*-1;
            }
        }
        elem.style.right = pos + 'px';
        elem.style.bottom = pos + 'px';
    }  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function myMove6(elem_id,time){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var in1= -1;
    var id= setInterval(frame, time);
    function frame(){
        if( in1<0)
        {
            pos++;
            if( pos == 275){
                in1 = in1*-1;
            }
        }
        else{
            pos--;
            if( pos == 0){
                in1 = in1*-1;
            }
        }
        elem.style.right = pos + 'px';
        elem.style.top = pos + 'px';
    }  
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    myMove1('c1',10,300);//horizontal
    myMove2('c2',9);//to top-right
    myMove3('c3',8);//to bottom-right
    myMove4('c4',9,300);//horizontal 
    myMove5('c5',7);//to top-left
    myMove6('c6',6);//to bottom-left
    myMove1('c7',5,250);//horizontal
    myMove2('c8',6);//to top-right
    myMove3('c9',10);//to bottom-right
    myMove4('c10',9,250);//horizontal
    myMove5('c11',8);//to top-left
    myMove6('c12',4);//to bottom
    myMove1('c13',9,200);//horizontal
    myMove2('c14',7);//to top-right
    myMove3('c15',7);//to bottom-right
    myMove4('c16',8,200);//horizontal
    myMove5('c17',9);//to top-left
    myMove6('c18',10);//to bottom-left
});