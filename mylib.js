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