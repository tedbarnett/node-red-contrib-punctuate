## node-red-contrib-punctuate

node-red packaged node that punctuates a text string (msg.transcription)

There are two inputs:
- msg.transcription: the original text string to be punctuated
- msg.pause: the string signifying a "pause" in the original speech.  For Watson, this is typically "%HESITATION".

The punctuated string will be output as msg.punctuated
