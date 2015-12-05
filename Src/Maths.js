function scaledObject(vertexes, scale, oldScale) {

    var doScale = true;
    //if (scale.min(oldScale) == 0) scale = false;

    if (scale) {
        for (i = 0; i < vertexes.length; i++) {
            vertexes[i].multiply(scale);
        }
    }
}

function positionObject(vertexes, position, oldPos) {
    for (i = 0; i < vertexes.length; i++) {
        var currObj = vertexes[i];
        currObj.add(position);
    }
}

function setRotations(rotation, vertexes, oldRot) {
    //console.log(rotation.x, oldRot.x);
    //console.log(rotation.y, oldRot.y);
    //console.log(vertexes);

    rotateX3D(rotation.x, vertexes);
    rotateY3D(rotation.x, vertexes);
    rotateY3D(rotation.z, vertexes);

    /*
    if (rotation.x != oldRot.x) rotateX3D(rotation.x, nodes);
    else rotation.x = oldRot.x;
    if (rotation.y != oldRot.y) rotateY3D(rotation.y, nodes);
    else rotation.y = oldRot.y;
    if (rotation.z != oldRot.z) rotateZ3D(rotation.z, nodes);
    else rotation.z = oldRot.z;
    */
}

this.rotateZ3D = function (rot, vertexes) {
    var sin_t = Math.sin(rot);
    var cos_t = Math.cos(rot);

    for (var n = 0; n < vertexes.length; n++) {
        var vertex = vertexes[n];
        var x = vertex.x;
        var y = vertex.y;
        vertex.setX((x * cos_t) - (y * sin_t));
        vertex.setY((y * cos_t) + (x * sin_t));
    }
};

this.rotateY3D = function (rot, vertexes) {
    var sin_t = Math.sin(rot);
    var cos_t = Math.cos(rot);

    for (var n = 0; n < vertexes.length; n++) {
        var vertex = vertexes[n];
        var x = vertex.x;
        var z = vertex.x;
        vertex.setX((x * cos_t) - (z * sin_t));
        vertex.setZ((z * cos_t) + (x * sin_t));
    }
};

this.rotateX3D = function (rot, vertexes) {
    var sin_t = Math.sin(rot);
    var cos_t = Math.cos(rot);

    for (var n = 0; n < vertexes.length; n++) {
        var vertex = vertexes[n];
        var y = vertex.y;
        var z = vertex.z;
        vertex.setY((y * cos_t) - (z * sin_t));
        vertex.setZ((z * cos_t) + (y * sin_t));
    }
};