function colourTriangle(p1, p2, p3, color) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function colourSquare(p1, p2, p3, p4, color) {
    ctx.beginPath();

    ctx.fillStyle = "blue";
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.moveTo(p4.x, p4.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function colourVertexes(poligons, nodes) {

    for (var i = Math.round(Math.random() * poligons.length); i < poligons.length; i += Math.abs(Math.round(fps) - 60)) {
        //for (var i = 0; i < poligons.length; i++) {

        var currObj = poligons[i];
        //if (currObj.getLength() == 3) {
        colourTriangle(nodes[currObj.x],
            nodes[currObj.y],
            nodes[currObj.z]);
        //}
        /*else if (currObj.getLength() == 4) {

                   colourSquare(nodes[currObj.x],
                       nodes[currObj.y],
                       nodes[currObj.z],
                       nodes[currObj.w]);
               }*/
    }
}

function sortArrayByVar(array, nodes) {
    var returnArray = new Array();
    for (var i = array.length - 1; i >= 0; i--) {
        var tempArray = new Array();

        for (var t = 0; t <= i; t++) {
            tempArray[t] = clone(array[t]);
        }

        var highestPos = -1;
        var highestZ = -1;

        for (var p = tempArray.length - 1; p >= 0; p--) {

            highestZInArray = sortNodesInPoligon(tempArray[p], nodes);
            if (highestZInArray > highestZ) {
                highestPos = p, highestZ = tempArray[p].z;
            }
        }
        returnArray.push(tempArray[highestPos]);
    }
    return returnArray;
}

function sortNodesInPoligon(object, nodes) {
    var pointArray = new Array();
    pointArray[0] = nodes[object.x].z;
    pointArray[1] = nodes[object.y].z;
    pointArray[2] = nodes[object.z].z;
    pointArray.sort();
    return pointArray[0];
}