this.ImportModel = function (file, rotation, position, scale) {

    var vertexes, faces, normals;
    var drawVertexes;

    this.rotation = rotation;
    this.position = position;
    this.scale = scale;

    this.modelToWorldMatrix = new Matrix();

    readModel(file);
}

ImportModel.prototype = {


    calculateObjectMatrix: function () {
        var rotMatrix = calculateRotationMatrix(rotation.x, rotation.y, rotation.z);
        this.matrix = calculateMatrix(new Matrix.Translate(position), rotMatrix, new Matrix.Scale(scale));
    },

    calculateVertexes: function (matrix) {
        this.drawVertexes = clone(this.vertexes);
        applyMatrixToVertexes(this.drawVertexes, this.matrix);
        positionObject(this.drawVertexes, position);
    },

    draw: function (matrix) {
        colourVertexes(this.faces, this.drawVertexes);
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