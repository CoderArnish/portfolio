function opennav(){
    document.getElementById("sidebar").style.width="16%";
    document.getElementById("main").style.marginLeft="16%";
    document.getElementById("menu").style.backgroundColor=("#659dbd");
    document.getElementById("menu");
}
function closenav(){
    document.getElementById("sidebar").style.width="0";
    document.getElementById("main").style.marginLeft="0";
    document.getElementById("menu").style.backgroundColor=("white");
}
function nav(){
    var x = document.getElementById("sidebar");
    if(x.style.width==0){
        opennav();
    }
    else{
        closenav();
    }
}