// opcl-button functions
var clickcounts = 1;
document.getElementsByClassName("opcl-btn")[0].addEventListener("click", function () {
      
    clickcounts++
    var clickcountmath = clickcounts % 2 ;

    if(clickcountmath === 0){
     document.getElementsByClassName("top-container")[0].style.height="490px";
     document.getElementsByClassName("top-container-hr")[0].style.display="block";
    }
    else{
     document.getElementsByClassName("top-container")[0].style.height="70px";
     document.getElementsByClassName("top-container-hr")[0].style.display="none";
    }
})
// mid-container buttons and funtions
document.getElementsByClassName("mid-container")[0].addEventListener("mouseover", function (){
    document.getElementsByClassName("mid-div-1")[0].style.left = "0px";
    document.getElementsByClassName("mid-div-2")[0].style.marginLeft= "950px";
})

document.getElementsByClassName("mid-container")[0].addEventListener("mouseleave", function (){
    document.getElementsByClassName("mid-div-1")[0].style.left = "-100px";
    document.getElementsByClassName("mid-div-2")[0].style.marginLeft= "1100px";
})
document.getElementsByClassName("mid-div-1")[0].addEventListener("click", function() {
    var  midDiv2Op =  document.getElementsByClassName("mid-con-img")[0].getAttribute("src"); 
    if(midDiv2Op === "Assets/Images/btf picture0.jpg" ){
        document.getElementsByClassName("mid-con-img")[0].setAttribute("src" , "Assets/Images/btf picture1.jpg"); 
    }else{
        document.getElementsByClassName("mid-con-img")[0].setAttribute("src" , "Assets/Images/btf picture0.jpg");
    }
})
document.getElementsByClassName("mid-div-2")[0].addEventListener("click", function() {
    var  midDiv2Op =  document.getElementsByClassName("mid-con-img")[0].getAttribute("src"); 
    if(midDiv2Op === "Assets/Images/btf picture0.jpg" ){
        document.getElementsByClassName("mid-con-img")[0].setAttribute("src" , "Assets/Images/btf picture1.jpg"); 
    }else{
        document.getElementsByClassName("mid-con-img")[0].setAttribute("src" , "Assets/Images/btf picture0.jpg");
    }
})
// notification-box-btn functions
var notiBoxSize = 0
document.getElementsByClassName("notification-box-btn")[0].addEventListener("click" , function () {
   
    if(notiBoxSize === 290){
        notiBoxSize = 0 ;
        document.getElementsByClassName("notification-box")[0].style.height = notiBoxSize+"px";
    }else{
        notiBoxSize = 290;
        document.getElementsByClassName("notification-box")[0].style.height = notiBoxSize+"px";
    }
})
// top-container-btn functions
document.getElementsByClassName("top-container-btn")[0].addEventListener("click", function () {
    if(this.getAttribute("data-btn-target") === "0"){
        this.setAttribute("data-btn-target" , "1")
    }else{
        this.setAttribute("data-btn-target" , "0")
    } 
    for(var notiBtnCount = 0 ; notiBtnCount < document.getElementsByClassName("notification-box-div").length ; notiBtnCount++){
        document.getElementsByClassName("notification-box-div")[notiBtnCount].style.display = "none";
    }
   document.getElementsByClassName("notification-box-div")[this.getAttribute("data-btn-target")].style.display = "block";
})
// Pastors-mid-con  functions
var PastorsMidConHeight = "0px" ;
document.getElementsByClassName("pastors-container")[0].addEventListener("click" , function () {
    if(PastorsMidConHeight === "0px"){
        PastorsMidConHeight = "435px";
     document.getElementsByClassName("Pastors-mid-con")[0].style.height = PastorsMidConHeight;
    }else if( PastorsMidConHeight === "435px"){
        PastorsMidConHeight = "0px";
        document.getElementsByClassName("Pastors-mid-con")[0].style.height = PastorsMidConHeight;
    }
})
// Scribes-mid-con functions
var ScribesMidConHeight = "0px" ;
document.getElementsByClassName("scribes-container")[0].addEventListener("click" , function () {
    if(ScribesMidConHeight === "0px"){
        ScribesMidConHeight = "90px";
     document.getElementsByClassName("Scribes-mid-con")[0].style.height = ScribesMidConHeight;
    }else if(ScribesMidConHeight === "90px"){
        ScribesMidConHeight = "0px";
        document.getElementsByClassName("Scribes-mid-con")[0].style.height = ScribesMidConHeight;
    }
})
// Audio-mid-con functions
var AudioMidConHeight = "0px" ;

document.getElementsByClassName("audio-container")[0].addEventListener("click" , function () {
    if(AudioMidConHeight === "0px"){
        AudioMidConHeight  = "200px";
     document.getElementsByClassName("Audio-mid-con")[0].style.height =  AudioMidConHeight;
    }else if(AudioMidConHeight  === "200px"){
        AudioMidConHeight = "0px";
        document.getElementsByClassName("Audio-mid-con")[0].style.height =  AudioMidConHeight;
    }
})
// mid-con-vid-operator functions

for(var midConVid = 0 ; midConVid < document.getElementsByClassName("mid-con-vid-operator-item").length ; midConVid++ )

document.getElementsByClassName("mid-con-vid-operator-item")[midConVid].addEventListener("click" , function () {

    document.getElementsByClassName("mid-con-vid")[0].setAttribute("src" , "Assets/videos/"+this.getAttribute("data-vid-src"));
    
})
//bottom-info-con functions 
for(var bottomConinfo = 0 ; bottomConinfo < document.getElementsByClassName("bottom-info-con-items").length ; bottomConinfo++) {
document.getElementsByClassName("bottom-info-con-items")[bottomConinfo].addEventListener("click" , function (){
   for(var bottomConitem= 0 ; bottomConitem < document.getElementsByClassName("bottom-info-con-items").length ; bottomConitem++){
       document.getElementsByClassName("bottom-info-con-div")[bottomConitem].style.display="none"
   }
    document.getElementsByClassName("bottom-info-con-div")[this.getAttribute("data-btn-target")].style.display="block"
    document.getElementsByClassName("bottom-con-btn")[0].style.marginLeft = this.getAttribute("data-btn-position")
})
}