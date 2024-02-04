status1 = ""
objects = []
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}
function draw(){
   
    if(status1 != ""){
        objectDetector.detect(gotResult)
        r = random(255)
        g = random(255)
        b = random(255)
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects detected"
            document.getElementById("hastheobjectbeenfound").innerHMTL = "Here are the objects founded: "
            fill(r, g, b)
            confidence1 = floor(objectsarray[i].confidence*100)
            text(objects[i].label+" "+confidence1+"%", objects[i].x, objects[i].y)
            noFill()
            stroke(r, g, b)
            rect(objects[i].x, objects[i].y, object[i].width, objects[i].height)
        }
    }

}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model has been loaded");
    status1 = true;
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    console.log(results)
    objects = results;
} 