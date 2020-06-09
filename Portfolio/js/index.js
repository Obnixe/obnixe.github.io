function swapOnScrollFrom(elemID, howFar) {
    if (document.body.scrollTop > howFar || document.documentElement.scrollTop > howFar) {
        document.getElementById(elemID).className = "hide";
    } else {
        document.getElementById(elemID).className = "show";
    }
}

function swapOnScrollTo(elemID, howFar) {
    if (document.body.scrollTop > howFar || document.documentElement.scrollTop > howFar) {
        document.getElementById(elemID).className = "show";
    } else {
        document.getElementById(elemID).className = "hide";
    }
}
