var FRAMECOUNT = 0;
var FRAMESKIP = 1;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var lastLoop = new Date;
var loopDate;
var fps;
ctx.font = "80px, Georgia";

var facesAmound = 0;
var vertexesAmound = 0;

var sensitivity = 0.01;

var rotation = new Vector3(0, 0, 0);
var position = new Vector3(c.width / 2, c.height / 2, 0);
var scale = new Vector3(30, 30, 30);

var input = new Input();
var theObject = new ImportModel("Models/snoepertje.obj", rotation, position, scale);

var camera = new ImportModel("Models/Arrow.obj", new Vector3(),
    new Vector3(c.width / 2, c.height / 2, 0),
    new Vector3(20, 20, 20));


setInterval(function gameLoop() {
    loopDate = new Date;
    fps = 1000 / (loopDate - lastLoop);
    ctx.clearRect(0, 0, c.width, 50);
    ctx.fillText("fps: " + Math.round(fps), 20, 20);
    ctx.fillText("faces: " + facesAmound, c.width - 100, 20);
    ctx.fillText("vertexes: " + vertexesAmound, c.width - 100, 30);

    rotateObject();

    this.setX = function () {
        return facesAmound;
    }
    this.setX = function (value) {
        facesAmound = value;
    }

    draw();

    lastLoop = loopDate;
    FRAMECOUNT++;
}, 33.5);


function rotateObject() {

    if (input.getKey(82) && input.mouseDown) {
        theObject.rotation.y += input.mouseDelta.x * sensitivity;
        theObject.rotation.x += input.mouseDelta.y * sensitivity;
    }

}

function draw() {
    //ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
    //ctx.fillRect(0, 0, c.width, c.height);
    ctx.clearRect(0, 0, c.width, c.height);


    theObject.calculateObjectMatrix();
    theObject.calculateVertexes(theObject.modelToWorldMatrix);
    theObject.draw();

    //UI:
    ctx.fillText("fps: " + fps, 20, 20);
    ctx.fillText("faces: " + facesAmound, c.width - 100, 20);
    ctx.fillText("vertexes: " + vertexesAmound, c.width - 100, 30);
}