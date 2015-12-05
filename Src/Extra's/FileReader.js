function readModel(file, returnFunction) {
    var rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, true);
    rawFile.send();

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState == 4) {
            lines = rawFile.responseText;
            theObject.read(lines);
        }
    }
}

function splitTriangilatedObject(lines, vertex) {
    var lineArray = lines.split('\n');
    var vertexArray = new Array();
    var faceArray = new Array();
    var normalArray = new Array();

    for (var i = 0; i < lineArray.length; i++) {

        values = lineArray[i].split(' ');

        if (vertex == 0 && values[0] == "v") {

            vertexArray.push(new Vector3(parseFloat(values[1]),
                parseFloat(values[2]),
                parseFloat(values[3])));

        } else if (vertex == 2 && values[0] == "vn") {

            normalArray.push(new Vector3(parseFloat(values[1]),
                parseFloat(values[2]),
                parseFloat(values[3])));

        } else if (vertex == 1 && values[0] == "f") {


            faceArray.push(new Vector2(new Vector3(parseFloat((values[1].split('/')[0]) - 1),
                    parseFloat(values[2].split('/')[0]) - 1,
                    parseFloat(values[3].split('/')[0]) - 1),
                new Vector3(parseFloat((values[1].split('/')[2]) - 1),
                    parseFloat(values[2].split('/')[2]) - 1,
                    parseFloat(values[3].split('/')[2]) - 1)));
        }
    }

    if (vertex == 0) return vertexArray;
    else if (vertex == 1) return faceArray;
    else return normalArray;
}





function splitSquaredObject(lines, vertex) {

    var lineArray = lines.split('\n');
    var vertexArray = new Array();
    var faceArray = new Array();

    for (var i = 0; i < lineArray.length; i++) {

        values = lineArray[i].split(' ');

        if (vertex && values[0] == "v") {

            vertexArray.push(new Vector3(parseFloat(values[1]),
                parseFloat(values[2]),
                parseFloat(values[3])));

        } else if (!vertex && values[0] == "f") {

            faceArray.push(new Vector4(parseFloat((values[1].split('/')[0]) - 1),
                parseFloat(values[2].split('/')[0]) - 1,
                parseFloat(values[3].split('/')[0]) - 1,
                parseFloat(values[4].splice('/')[0]) - 1));
        }
    }

    if (vertex) return vertexArray;
    else return faceArray;
}