var FRAMECOUNT = 0;
var FRAMESKIP = 60;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.addEventListener("mousedown", mouseDown, false);
c.addEventListener("mouseup", mouseUp, false);
c.addEventListener("mousemove", mouseMove, false);
window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);

var mousePos = new Vector2(0, 0);
var oldMousePos = new Vector2(0, 0);
var mouseDown = false;
var rDown, sDown;

var lastLoop = new Date;
var loopDate;
var fps;
ctx.font = "80px, Georgia";

var facesAmound = 0;
var vertexesAmound = 0;
var dragging;

var sensitivity = 0.01;

var rotation = new Vector3(0, 0, 0);
var position = new Vector3(c.width / 2, c.height / 2, 0);
var scale = new Vector3(30, 30, 30);

//var theObject = new triangleThingy();
//var theObject = new importSquareModel("tilteCanon.obj");
var theObject = new ImportTriangleModel("canon.obj", rotation, position, scale);

//console.log(theObject.GetRotation);

setInterval(function gameLoop() {
    loopDate = new Date;
    fps = 1000 / (loopDate - lastLoop);
    ctx.clearRect(0, 0, c.width, 50);
    ctx.fillText("fps: " + Math.round(fps), 20, 20);
    ctx.fillText("faces: " + facesAmound, c.width - 100, 20);
    ctx.fillText("vertexes: " + vertexesAmound, c.width - 100, 30);
    //draw();
    this.setX = function () {
        return facesAmound;
    }
    this.setX = function (value) {
        facesAmound = value;
    }
    test = new Vector3(0, 0, 0);
    //console.log(test.x);

    //theObject.GetScale().getX();
    //theObject.GetScale().setX(10);
    //theObject.GetScale().getX();

    lastLoop = loopDate;
    FRAMECOUNT++;
}, 33.5);

function draw() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
    ctx.fillRect(0, 0, c.width, c.height);
    theObject.draw();
    ctx.fillText("fps: " + fps, 20, 20);
    ctx.fillText("faces: " + facesAmound, c.width - 100, 20);
    ctx.fillText("vertexes: " + vertexesAmound, c.width - 100, 30);
}

function keyDown(e) {
    if (e.keyCode == 82) {
        rDown = true;
    } else if (e.keyCode == 83) {
        sDown = true;
    }
}

function keyUp(e) {
    if (e.keyCode == 82) {
        rDown = false;
    } else if (e.keyCode == 83) {
        sDown = false;
    }
}

function mouseDown() {
    mouseDown = true;
}

function mouseMove(event) {
    if (mouseDown) {
        dragging = true;
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
        draw();
        /*
                if (rDown) {
                    theObject.SetRotation("+", "x", (mousePos.x - oldMousePos.x) * sensitivity);
                    theObject.SetRotation("+", "y", (mousePos.y - oldMousePos.y) * sensitivity);
                } else if (sDown) {
                    theObject.SetScale("+", "x" (mousePos.x - oldMousePos.x) * sensitivity);
                    theObject.SetScale("+", "x", (mousePos.y - oldMousePos.y) * sensitivity);
                }
        */
        oldMousePos.x = event.pageX;
        oldMousePos.y = event.pageY;
        dragging = false;
    }
}

function mouseUp() {
    mouseDown = false;
}