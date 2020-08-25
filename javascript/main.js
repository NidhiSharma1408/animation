document.addEventListener('DOMContentLoaded',function(){

    function myMove1(elem_id){
        var elem = document.getElementById(elem_id);
        var pos = 0;
        var h = 250;
        var in1= -1;
        var in2 = -1;
        var id= setInterval(frame, 3);
        var id2= setInterval(elemHeight, 2);
        function elemHeight(){
            if( in2<0)
            {
                h++;
                if( h == 260){
                    in2 = in2*-1;
                }
            }
            else{
                h--;
                if( h==240){
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
 function myMove2(elem_id){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = 0;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame, 3);
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
        elem.style.bottom = pos + 'px';
    }  
}
//////////////////////////////////////////////////////////////////////////////////////////////
function myMove3(elem_id){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = 0;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame, 3);
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
function myMove4(elem_id){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var h = 250;
    var in1= -1;
    var in2 = -1;
    var id= setInterval(frame, 3);
    var id2= setInterval(elemHeight, 2);
    function elemHeight(){
        if( in2<0)
        {
            h++;
            if( h == 260){
                in2 = in2*-1;
            }
        }
        else{
            h--;
            if( h==240){
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
function myMove5(elem_id){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var in1= -1;
    var id= setInterval(frame, 3);
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
function myMove6(elem_id){
    var elem = document.getElementById(elem_id);
    var pos = 0;
    var in1= -1;
    var id= setInterval(frame, 3);
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

    myMove1('c1');
    myMove2('c2');
    myMove3('c3');
    myMove4('c4');
    myMove5('c5');
    myMove6('c6');
    myMove1('c7');
    myMove2('c8');
    myMove3('c9');
    myMove4('c10');
    myMove5('c11');
    myMove6('c12');
});