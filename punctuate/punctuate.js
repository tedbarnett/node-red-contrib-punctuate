module.exports = function(RED) {
    function punctuateNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
        msg.punctuated = msg.transcription.toUpperCase();
        node.send(msg);
        // TO ADD:
        // - Enable msg.pause input
        // - Insert Watson-derived code here to do punctuation (see https://github.com/watson-developer-cloud/speech-javascript-sdk/blob/master/speech-to-text/format-stream.js)

    });
  }
  RED.nodes.registerType('punctuate', punctuateNode);
};
