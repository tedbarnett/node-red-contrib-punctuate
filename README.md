## node-red-contrib-punctuate

node-red packaged node that punctuates a text string (msg.transcription)

ALPHA version.  As of now, it simply takes msg.transcription and returns the CAPITALIZED version in msg.punctuated.

There will be two inputs:
- `msg.transcription`: the original text string to be punctuated
- `msg.pause`: the string signifying a "pause" in the original speech.  For Watson, this is typically "%HESITATION".

The punctuated string will be output as `msg.punctuated`.
