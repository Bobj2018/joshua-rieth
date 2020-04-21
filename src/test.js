const captureWebsite = require('capture-website');

(async () => {
	await captureWebsite.file('https://sleep-tracker.now.sh/', 'src/img/sleep.png');
})();
