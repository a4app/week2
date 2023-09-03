function collapse(obj)
{
    var v = document.getElementsByClassName("vanish");
    var cl = document.getElementsByClassName("collapsed");
    if(v[0].style.display == "none") {
        v[0].style.display = "flex";
        cl[0].innerHTML = "Full View";
        obj.style.justifyContent = "right";
    }
    else {
        v[0].style.display = "none";
        cl[0].innerHTML = "Collapsed";
        obj.style.justifyContent = "left";
    }
}