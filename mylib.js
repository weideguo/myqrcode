function makeCode(id, size, word) {	
    var qrcode = new QRCode(document.getElementById(id), {
        width : size,
        height : size
    });  
    qrcode.makeCode(word);
}
function makeCurrentCode(id, size){
    document.getElementById(id).setAttribute("style","margin:15px;");
    chrome.tabs.getSelected(null, function (tab) {
        url=tab.url;
        makeCode(id, size, url);
        document.getElementById(id).setAttribute("title","double click to zoom"); 
    }); 
}
function changeCodeSize(id, changeOpt) {
    document.getElementById(id).innerHTML = ""
    var qrcodeSize=parseInt(localStorage.getItem("qrcode_size"));
    if (qrcodeSize == 200) {
        localStorage.setItem("qrcode_size",400);
    } else {
        localStorage.setItem("qrcode_size",200);
    }
    qrcodeSize=parseInt(localStorage.getItem("qrcode_size"));
    changeOpt(id, qrcodeSize);
    //console.log(localStorage.getItem("qrcode_size"));
}
function optionsMakeCode (textId, codeId, size) {		
	var elText = document.getElementById(textId);
    document.getElementById(codeId).innerHTML ="";
	makeCode(codeId, size, elText.value);
}

function getObjectURL(file){
    return window.webkitURL.createObjectURL(file)  ;
}
function readFiles(files) {
    // console.log(file);
    // console.log("xxxx")
    if (files.length) {
        var file = files[0];
        qrcode.decode(getObjectURL(file));
        qrcode.callback = function(imgMsg){
            // console.log(imgMsg);
            constrict="^(http|https)://.*";
            var reg = new RegExp(constrict)
            if(imgMsg.trim().search(reg) == 0) {
                window.open(imgMsg, "_blank");
            } else {
                alert(imgMsg);
            }
        }
        
    }
}