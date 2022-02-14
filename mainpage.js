status="";

function preload() {
img = loadImage('bottle.jpg');
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    }

    function modelLoaded() {
    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img, gotResult);
    }

    function gotResult() {
    if (error) {
    console.log(error);
     }
     console.log(results);
      objects =  results;

    }

    function draw() {
    image(0,0,380,380);
    if (status != "");
    {
    r =  random(255);
    g =  random(255);
    b =  random(255);
    object.detector.detect(video, gotResult);

    for (i = 0; i < objects.length; i++)
    {
    document.getElementById("status").innerHTML = "Status : Objedct detected";
    document.getElementById("number_of_objects").innerHTML = "Status : number of objects detected are:";

    fill(rgb);
    percent = floor(object[i].confidence * 100);
    text(object[i].label + " " + percent + "%", objects[i].x + 15 + objects[i].y + 15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x ,objects[i].y, objects[i].width, objects[i].height );
    }
    }
    
    
    }