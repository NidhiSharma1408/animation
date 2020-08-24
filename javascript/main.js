document.addEventListener('DOMContentLoaded',function(){

    function myMove(){
        var elem = document.getElementById('child');
        var pos = 0;
        var h = 0;
        var inc = -1;
        var id= setInterval(frame, 5);
        var id2= setInterval(elemHeight, 5);
        function elemHeight(){
            
            if( inc<0)
            {
                h++;
                elem.style.bottom = h+'px';
                if( h == 15){
                    inc = inc*-1;
                }
            }
            else{
                h--;
                elem.style.bottom = h+'px';
                if( h==0){
                    inc = inc*-1;
                }
            }

        }
        function frame(){
            if(pos == 50){
                elem.setAttribute("src","images/jerry running.png");
                elem.style.height = '200px';
                elem.style.width = '200px';
            }
            if(pos==1000){
                pos = 0
               // clearInterval(id);
            }
            else{
                pos++;
                elem.style.left = pos+'px';
            }
        }
    }
    myMove();
});