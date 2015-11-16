/*jslint node: true */
'use strict';

var five = require('johnny-five');
var util = require('util');

var Readable = require('readable-stream').Readable;

module.exports = function(){

  util.inherits(DistanceSensorStream, Readable);

  function DistanceSensorStream(options) {

    options = options || {};
    Readable.call(this, options);
    this.lastValue = 0;
    this.lastTimestamp =  new Date().getTime();
    this.sampleTime = options.sample || 0; 
    var unit = options.unit || 'cm';
    options.controller = options.controller || 'HCSR04'

    this._source = new five.Board();
    var self = this;

    this._source.on('ready', function() {
      var proximity = new five.Proximity({
        controller: options.controller,
        pin: 7
      });

      proximity.on('data', function() {
        
        self.lastValue = this[unit];
        var now = new Date().getTime();
        //Sample at a rate of sampleTime ms
  
        if(now - self.lastTimestamp >= self.sampleTime){

          self.push(self.lastValue.toString());
          self.lastTimestamp = now;
        }
      });

      proximity.on('change', function() {
        //console.log('The obstruction has moved.');
      });
    });

    // Every time there's data, we push it into the internal buffer.
    // this._source.ondata = function(chunk) {
    //   // if push() returns false, then we need to stop reading from source
    //   if (!self.push(chunk))
    //     self._source.readStop();
    // };

    // When the source ends, we push the EOF-signaling `null` chunk
    // this._source.onend = function() {
    //   self.push(null);
    // };
  }

  // _read will be called when the stream wants to pull more data in
  // the advisory size argument is ignored in this case.
  DistanceSensorStream.prototype._read = function(size) {

  };

  return DistanceSensorStream;
}();



