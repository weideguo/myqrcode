function optionsMakeCodeX( id, size){
    optionsMakeCode("text", id, size );
}

optionsMakeCode("text","qrcode",200);

var ele = document.getElementById("qrcode");
ele.addEventListener('dblclick', function(){changeCodeSize("qrcode", optionsMakeCodeX)}, false); 

var ele1 = document.getElementById("text");
ele1.addEventListener("blur", function(){optionsMakeCode("text","qrcode",200);}, false); 
ele1.addEventListener("keydown", 
    function (e) {
        if (e.keyCode == 13) {
            optionsMakeCode("text","qrcode",200);
        }
    },
false); 