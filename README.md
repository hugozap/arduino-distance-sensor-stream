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


## Supported controllers 
      
GP2Y0A21YK         
GP2D120XJ00F       
GP2Y0A02YK0F       
GP2Y0A41SK0F       
GP2Y0A21YK         
GP2Y0A02YK0F       
LV-MaxSonar-EZ     
HRLV-MaxSonar-EZ0  
XL-MaxSonar-EZ3    
HC-SR04            
HCSR04             
SRF05             	
PARALLAXPING       
SEEEDPING          
GROVEPING          
LIDAR-Lite      

For an updated list and how to connect your Arduino Board check

[https://github.com/rwaldron/johnny-five/wiki/Proximity](https://github.com/rwaldron/johnny-five/wiki/Proximity)   


### TODO:

Handle backpressure properly.