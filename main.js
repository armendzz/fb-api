var FB = require('fb');
const express = require('express');
const app = express();
const port = 3000;

(bodyParser = require('body-parser')), app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

FB.setAccessToken(
	'API HERE'
);

app.get('/', function(req, res) {
	FB.api(
		'/122738611080872/feed',
		'GET',
		{"fields":"message,created_time,attachments{media,subattachments}","date_format":"F j, Y, g:i a", limit: '50' },
		function(response) {
			
			res.render("index", {postt: response})
				
		}
	);
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
