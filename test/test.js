var ProximitySensor = require('../index.js');

new ProximitySensor({
		controller:'HCSR04',
		sample:50, //Sample every 50 ms (optional)
		unit:'in'  // cm or in (optional, default cm)
	}).pipe(process.stdout);