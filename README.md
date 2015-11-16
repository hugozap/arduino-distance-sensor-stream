# arduino-distance-sensor-stream
Get arduino proximity sensor data as a node stream

## Usage

```
var ProximitySensor = require('../index.js');

new ProximitySensor({
		controller:'HCSR04',
		sample:50, //Sample every 50 ms (optional)
		unit:'in'  // cm or in (optional, default cm)
	}).pipe(process.stdout);

```

## Options

An object with:

	{
		controller:'HCSR04',
		sample:50, //Sample every 50 ms (optional)
		unit:'cm'  // cm or in (optional, default cm)
	}


### TODO:

Handle backpressure properly.