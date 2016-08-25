module.exports = function(RED) {
    function punctuateNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var pauseString = msg.pause;
    if (pauseString = '') pauseString = / %HESITATION/gi; // if pause not specified, use regex for the pause string from Watson transcriptions
    this.on('input', function (msg) {
        msg.punctuated = msg.transcription.trim();
        msg.punctuated = msg.punctuated.replace(/%HESITATION/g, '.');

        msg.punctuated = msg.punctuated.trim();
        msg.punctuated = msg.punctuated.replace(pauseString, '.'); // replace "pause" string with a period
        
        // Capitalize the first word that appears after every end-of-sentence mark (period, ?, !)
        arr = msg.punctuated.split('');
        capitalize = true;
        for (x = 0; x < arr.length; x++)
            if (arr[x] == '.' || arr[x] == '!' || arr[x] == '?')
                capitalize = true;
            else if (arr[x] != ' ' && capitalize)
                {
                    arr[x] = arr[x].toUpperCase();
                    capitalize = false;
                }
        msg.punctuated = arr.join('');
        node.send(msg);
    });
  }
  RED.nodes.registerType('punctuate', punctuateNode);
};
