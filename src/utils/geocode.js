const request = require("request");

const geocode = (address, callback) => {
	const url =
		"http://api.positionstack.com/v1/forward?access_key=2657dda67d1813bf081b7c496c1e4843&query=" +
		encodeURIComponent(address);

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (body.data === undefined) {
			callback("Unable to find location. Try another search.", undefined);
		} else {
			callback(undefined, {
				latitude: body.data[0].latitude,
				longitude: body.data[0].longitude,
				location: body.data[0].name,
			});
		}
	});
};

module.exports = geocode;
