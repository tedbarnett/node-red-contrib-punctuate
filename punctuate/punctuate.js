module.exports = function(RED) {
    function punctuateNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
        node.send(msg.transcription.toUpperCase());

      //verifier(cert_url, signature, body, function(er) {
      //  //if (er) {
      //  //  node.error('error validating the alexa cert:' + er);
      //  //  msg.res.status(401).json({ status: 'failure', reason: er });
      //  //} else {
      //  //  node.log('successfully validated alexa');
      //  //  node.send(msg);
      //  //}
      //});
    });
  }
  RED.nodes.registerType('punctuate', punctuateNode);
};
