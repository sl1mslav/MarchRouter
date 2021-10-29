function hideAndShow(id) {
    var lines = document.getElementsByClassName("line")
    for (i = 0; i < lines.length; i++) {
        lines[i].style.opacity = "0"    
    }
    document.getElementsByClassName("svgContainer")[0].style.opacity="1";
    document.getElementById(id).classList.add("line");   
}

