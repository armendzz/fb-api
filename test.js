var FB = require('fb');

FB.setAccessToken(
	'EAAH1gEophzsBAMcZB8y1naMqZC9TKmpeY0q17LANmQ2TCkIMxf8rOZB0auuRsZAwPYPZCFJL7Qb0G5lxQDLIoRzS3RuJOiNTZCYRGPZA7MEjC8u67Y6ZA7TaIe7aQxwH3B2OglhM7tYOpGnsnZCGQmdokjsRpY8ZCdqMLVRcdZCAzzKjVWPu9fwYsAULUPAQFCFRZBcZD'
);

FB.api(
	'/122738611080872/feed',
	'GET',
	
	{"fields":"message,created_time,attachments{media,subattachments}","date_format":"F j, Y, g:i a", limit: '5' },
	function(response) {
		response.data.forEach((post) => {
			console.log('============================================');
			console.log('mesazhi: ' + post.created_time);
			
		});
		console.log('============================================');
	}
);



FB.api(
	'/122738611080872/feed',
	'GET',
	{"fields":"message,created_time,attachments{media,subattachments}","date_format":"F j, Y, g:i a"},
	function(response) {
		// Insert your code here
	}
  );