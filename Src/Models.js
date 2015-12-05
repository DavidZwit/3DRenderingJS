this.ImportTriangleModel = function (file, rotation, position, scale) {

    var vertexes, faces, normals;
    var triangled;
    var drawVertexes, drawNormals;

    this.rotation = rotation;
    this.position = position;
    this.scale = scale;

    var oldScale = new Vector3(0, 0, 0);
    var oldRotation = new Vector3(0, 0, 0);
    var oldPosition = new Vector3(0, 0, 0);
    readModel(file);
}

ImportTriangleModel.prototype = {

    draw: function () {
        drawVertexes = clone(this.vertexes);

        Transform.functions.scaleObject(drawVertexes, scale, this.oldScale);

        Transform.functions.rotateObject(rotation, drawVertexes, this.oldRotation);

        Transform.functions.positionObject(drawVertexes, position, this.oldPosition);

        colourTriangleArray(this.faces, drawVertexes, this.rawNormals, this.triangled);

        //this.oldRotation = rotation, oldPosition = position, oldScale = scale;
    },

    read: function (answer) {

        this.vertexes = splitTriangilatedObject(answer, 0);
        this.faces = splitTriangilatedObject(answer, 1);
        this.normals = splitTriangilatedObject(answer, 2);
        this.triangled = splitTriangilatedObject(answer, 3);
        facesAmound += this.faces.length;
        vertexesAmound += this.vertexes.length;
    }
}