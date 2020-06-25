var qrcodeSize=parseInt(localStorage.getItem("qrcode_size"));
if ( ! qrcodeSize ) {
    localStorage.setItem("qrcode_size",200);
}
makeCurrentCode("qrcode", parseInt(localStorage.getItem("qrcode_size")));

var ele = document.getElementById("qrcode");
ele.addEventListener('dblclick', function(){changeCodeSize("qrcode",makeCurrentCode)}, false); 

var ele1 = document.getElementById("options");
ele1.addEventListener('click', function(){window.open("./options.html", "_blank").location;}, false); 
    
