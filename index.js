function setup (){

canvas=createCanvas(600, 560)
canvas.center();
video=createCapture(VIDEO);
video.hide();
canvas.position(200, 300);
classifier=ml5.imageClassifier("MobileNet", kolk);

}

function draw (){
image(video, 0,0,  800, 900);

classifier.classify(video , rgf);

}
function kolk(){

console.log("dededededede");


}
var prevous_result="";
function rgf (error, results){

if (error) {
    console.log(error);

} else {
    console.log(results);
    if((results[0].confidence > 0.5) && (previous_result != results[0].label)){ console.log(results);
         previous_result = results[0].label;
          var synth = window.speechSynthesis; 
          speak_data = 'El objeto detectado es - '+results[0].label; 
          var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
    document.getElementById("imagen").innerHTML=results[0].label;
    document.getElementById("cuyos").innerHTML=results[0].confidence;
    
} }

}






