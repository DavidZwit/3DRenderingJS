var FRAMECOUNT = 0;
var FRAMESKIP = 1;

var lastLoop = new Date;
var loopDate;
var fps;
//ctx.font = "80px, Georgia";

var facesAmound = 0;
var vertexesAmound = 0;

var sensitivity = 0.01;

var objects = new Array();

var input;

var theObject;

function Start() {

    theObject = new ImportModel("Models/snoepertje.obj", new Vector3(),
        new Vector3(c.width / 2, c.height / 2, 0),
        new Vector3(25, 25, 25),
        "Sniper");

    input = new Input();

    objects.push(theObject);

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

        lastLoop = loopDate;
        FRAMECOUNT++;
    }, 33.5);


    function rotateObject() {

        if (input.getDragging) {
            draw();

            theObject.rotation.y += input.mouseDelta.x * sensitivity;
            theObject.rotation.x += input.mouseDelta.y * sensitivity;
            //camera.position.x += 10;
        }

    }

    //draw();

    function draw() {
        //ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
        //ctx.fillRect(0, 0, c.width, c.height);
        ctx.clearRect(0, 0, c.width, c.height);

        var ortoMatrix = Matrix.Ortographic(new Vector2(5, 5), -20, 20);

        for (var i = 0; i < objects.length; i++) {
            objects[i].calculateObjectMatrix();

            if (i > 0) {
                objects[i].viewSpaceMatrix = objects[i].worldSpaceMatrix.MullNegativeMatrix(objects[0].worldSpaceMatrix);
                objects[i].projectionMatrix = objects[i].viewSpaceMatrix.MullMatrix(ortoMatrix);
            }

            objects[i].calculateVertexes(objects[i].worldSpaceMatrix);

            objects[i].draw("blue");
            //camera.draw("green");
        }

        //UI:
        ctx.fillText("fps: " + fps, 20, 20);
        ctx.fillText("faces: " + facesAmound, c.width - 100, 20);
        ctx.fillText("vertexes: " + vertexesAmound, c.width - 100, 30);
    }
}