this.ImportTriangleModel = function (file, rotation, position, scale) {

    var vertexes, faces, normals;
    var loaded = false;
    var drawVertexes;
    var drawNormals;

    var rotation = rotation;
    var position = position;
    var scale = scale;

    var oldScale = new Vector3(0, 0, 0);
    var oldRotation = new Vector3(0, 0, 0);
    var oldPosition = new Vector3(0, 0, 0);
    readModel(file);
}

ImportTriangleModel.prototype = {
    draw: function () {
        drawVertexes = clone(this.vertexes);

        scaledObject(drawVertexes, scale, this.oldScale);

        setRotations(rotation, drawVertexes, this.oldRotation);

        positionObject(drawVertexes, position, this.oldPosition);

        colourTriangleArray(this.faces, drawVertexes, this.rawNormals);

        //this.oldRotation = rotation, oldPosition = position, oldScale = scale;
    },

    read: function (answer) {

        this.vertexes = splitTriangilatedObject(answer, 0);
        this.faces = splitTriangilatedObject(answer, 1);
        this.normals = splitTriangilatedObject(answer, 2);
        facesAmound += this.faces.length;
        vertexesAmound += this.vertexes.length;
    }

}