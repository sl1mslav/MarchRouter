function hideAndShow(id) {
    var lines = document.getElementsByClassName("line")
    for (i = 0; i < lines.length; i++) {
        lines[i].style.animation="dead-line 1s infinite"    
    }
    document.getElementById(id).style.animation="part-line 1.5s infinite alternate-reverse"   
}