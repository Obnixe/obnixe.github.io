function funkyBack(start, end, classImg) {
    if (document.documentElement.scrollTop > start && document.documentElement.scrollTop < end) {
        document.body.className = classImg;
    }
}
function howFarScrolled(){
    if(document.documentElement.scrollTop > 0) {
        document.getElementById('counter').innerHTML = document.documentElement.scrollTop.toString();
    }
}

function showOnScroll(elemID, start, end, activeClass, disabledClass){
    if (start < document.documentElement.scrollTop && document.documentElement.scrollTop < end){
        console.log("XD")
        document.getElementById(elemID).className = activeClass;
    } else{
        document.getElementById(elemID).className = disabledClass;
    }
}