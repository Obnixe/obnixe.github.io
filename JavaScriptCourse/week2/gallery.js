function upDate(previewPic){
    /*URL*/
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    /*ALT*/
    document.getElementById("image").innerHTML = previewPic.alt;
    /*CHECK CONTENT*/
    console.log("url('" + previewPic.src + "')", previewPic.alt);
}

function unDo(){
    /*OG BCK*/
    document.getElementById("image").style.backgroundImage = null;
    /*OG TEXT*/
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}