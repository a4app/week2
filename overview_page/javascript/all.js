function viewAll(ss)
{
    // var a = document.getElementById("scroll");
    // var vanish = document.getElementsByClassName("vanish-row");
    // if(a.style.overflow === 'auto')
    // {
    //     a.style.overflow = "hidden";
    //     vanish[0].style.display = "none"; 
    //     vanish[1].style.display = "none"; 
    //     ss.innerHTML = "View all";
    // }
    // else
    // {
    //     a.style.overflow = "auto";
    //     vanish[0].style.display = "flex";
    //     vanish[1].style.display = "flex";
    //     ss.innerHTML = "Collapse";
    // }

    var vanish = document.getElementsByClassName("vanish-row");
    if(vanish[0].style.display == "none") {
        vanish[0].style.display = "flex";
        vanish[1].style.display = "flex";
        ss.innerHTML = "Collapse";
    }
    else {
        vanish[0].style.display = "none";
        vanish[1].style.display = "none";
        ss.innerHTML = "View All";
    }
}