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
        var drawVertexes = clone(this.vertexes);

        var rotMatrix = calculateRotationMatrix(rotation.x, rotation.y, rotation.z);

        var transMatrix = calculateMatrix(new Matrix.Translate(position), rotMatrix, new Matrix.Scale(scale));

        applyMatrixToVertexes(drawVertexes, transMatrix);

        positionObject(drawVertexes, position);

        colourVertexes(this.faces, drawVertexes);
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