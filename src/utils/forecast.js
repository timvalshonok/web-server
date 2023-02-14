const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=1e49c05f091e6154acdb1413317fc37a&query=" +
		latitude +
		"," +
		longitude +
		"&units=f";

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather service.", undefined);
		} else if (body.error) {
			callback("Unable to find location", undefined);
		} else {
			callback(
				undefined,
				"It is currently " +
                body.current.temperature +
                " degrees out. There is a " +
                body.current.humidity +
                "% chance of rain."
			);
		}
	});
};

module.exports = forecast;
