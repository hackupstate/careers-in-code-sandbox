// 2

// How many repos does Hack Upstate have? 

var promise = fetch('https://api.github.com/orgs/hackupstate/repos', {
	method: "GET"
});
promise.then(function(response) {
	console.log(response.status);
	var promise2 = response.text();
	promise2.then(function(text) {
	var data = JSON.parse(text);
	console.log(data);
    });
});

/* (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: 43063881, node_id: "MDEwOlJlcG9zaXRvcnk0MzA2Mzg4MQ==", name: "attnj", full_name: "hackupstate/attnj", private: false, …}
1: {id: 43911491, node_id: "MDEwOlJlcG9zaXRvcnk0MzkxMTQ5MQ==", name: "very-old-website", full_name: "hackupstate/very-old-website", private: false, …}
2: {id: 113606909, node_id: "MDEwOlJlcG9zaXRvcnkxMTM2MDY5MDk=", name: "hackupstate-website-archived-3-6-2018", full_name: "hackupstate/hackupstate-website-archived-3-6-2018", private: false, …}
3: {id: 119115753, node_id: "MDEwOlJlcG9zaXRvcnkxMTkxMTU3NTM=", name: "hackupstate-website-archived-1-30-2019", full_name: "hackupstate/hackupstate-website-archived-1-30-2019", private: false, …}
4: {id: 140507711, node_id: "MDEwOlJlcG9zaXRvcnkxNDA1MDc3MTE=", name: "huslack", full_name: "hackupstate/huslack", private: false, …}
5: {id: 141925116, node_id: "MDEwOlJlcG9zaXRvcnkxNDE5MjUxMTY=", name: "archived-careers-in-code-website", full_name: "hackupstate/archived-careers-in-code-website", private: false, …}
6: {id: 143179698, node_id: "MDEwOlJlcG9zaXRvcnkxNDMxNzk2OTg=", name: "thincubator", full_name: "hackupstate/thincubator", private: false, …}
7: {id: 144525923, node_id: "MDEwOlJlcG9zaXRvcnkxNDQ1MjU5MjM=", name: "careers-in-code-classroom", full_name: "hackupstate/careers-in-code-classroom", private: false, …}
8: {id: 153657547, node_id: "MDEwOlJlcG9zaXRvcnkxNTM2NTc1NDc=", name: "careers-in-code-v2", full_name: "hackupstate/careers-in-code-v2", private: false, …}
9: {id: 160437396, node_id: "MDEwOlJlcG9zaXRvcnkxNjA0MzczOTY=", name: "hack-upstate-website", full_name: "hackupstate/hack-upstate-website", private: false, …}
10: {id: 166200706, node_id: "MDEwOlJlcG9zaXRvcnkxNjYyMDA3MDY=", name: "google-scripts-email-confirmation", full_name: "hackupstate/google-scripts-email-confirmation", private: false, …}
11: {id: 177115303, node_id: "MDEwOlJlcG9zaXRvcnkxNzcxMTUzMDM=", name: "careers-in-code-classroom-codebase", full_name: "hackupstate/careers-in-code-classroom-codebase", private: false, …}
12: {id: 181798713, node_id: "MDEwOlJlcG9zaXRvcnkxODE3OTg3MTM=", name: "careers-in-code-sandbox", full_name: "hackupstate/careers-in-code-sandbox", private: false, …}
length: 13
__proto__: Array(0) */

// Create a new repo using Github API

var url = 'https://api.github.com/user/repos';
var data = {name: 'github-api-other-test', private: false};

fetch (url, {
	method: 'POST',
	body: JSON.stringify(data),
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'token <Redacted>'
    }
}).then(res => res.json())
.then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error));

/* Success: {id: 188476323, node_id: "MDEwOlJlcG9zaXRvcnkxODg0NzYzMjM=", name: "github-api-other-test", full_name: "kelldeveloped/github-api-other-test", private: false, …} */

// Rename the Github repo using API

var url = 'https://api.github.com/repos/kelldeveloped/github-api-test';
var data = {name: 'new-github-api-test'};

fetch (url, {
	method: 'PATCH',
	body: JSON.stringify(data),
	headers: {
		'Authorization': 'token <redacted>',
		'Content-Type': 'application/json',
		'Accept': 'application/json'
		}
}).then(res => res.json())
	.then(response => console.log('Success:', response))
	.catch(error => console.error('Error:', error));

/* Success: {id: 188475368, node_id: "MDEwOlJlcG9zaXRvcnkxODg0NzUzNjg=", name: "new-github-api-test", full_name: "kelldeveloped/new-github-api-test", private: false, …} */

// Delete the Github repo with API

var url = 'https://api.github.com/repos/kelldeveloped/new-github-api-test';

fetch (url, {
		method: 'DELETE',
		headers: {
				'Authorization': 'token <redacted>',
				'Content-Type': 'application/json'
        		}
}).then(res => res.json())
	.then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
    
/* DELETE https://api.github.com/repos/kelldeveloped/new-github-api-test 404 (Not Found)
    (anonymous) @ VM2216:3
     Success: {message: "Not Found", documentation_url: "https://developer.github.com/v3/repos/#delete-a-repository"} */

// Which license does HUSlack use?

var url = 'https://api.github.com/repos/hackupstate/huslack/license';

fetch (url, {
		method: 'GET'
}).then(res => res.json())
	.then(response => console.log('Success:', response.license))
	.catch(error => console.error('Error:', error));

/* Success: 
{key: "mit", name: "MIT License", spdx_id: "MIT", url: "https://api.github.com/licenses/mit", node_id: "MDc6TGljZW5zZTEz"}
key: "mit"
name: "MIT License"
node_id: "MDc6TGljZW5zZTEz"
spdx_id: "MIT"
url: "https://api.github.com/licenses/mit"
__proto__: Object
*/

// 3

// Create yourself in the /students resource

var url = 'http://module5.tk/students';
var data = { name: 'Kelly Corey', currentModule: 5, favoriteColor: 'null' };

fetch (url, {
	method: 'POST',
	body: JSON.stringify(data)
}).then(res => res.json())
    .then(response => console.log('Success:', response));
    
/* 
Success: {name: "Kelly Corey", currentModule: 5, favoriteColor: "null", id: "bcfc5416-4c71-4051-bb8d-fa390c094978"}
*/

// Create an assignment

var url = 'http://module5.tk/students/bcfc5416-4c71-4051-bb8d-fa390c094978/assignments';
var data = { name: 'REST Exercises', completed: false  };

fetch (url, {
	method: 'POST',
	body: JSON.stringify(data)
}).then(res => res.json())
    .then(response => console.log('Success:', response));
    
/* 
Success: {name: "REST Exercises", completed: false, id: "9f89a4ea-8e85-4853-b456-239be382cad1", studentId: "bcfc5416-4c71-4051-bb8d-fa390c094978"}
*/

// Change favorite color

var url = 'http://module5.tk/students/bcfc5416-4c71-4051-bb8d-fa390c094978';
var data = {favoriteColor: 'cerulean'};

fetch (url, {
	method: 'PUT', body: JSON.stringify(data)}).then(res => res.json())
    .then(response => console.log('Success:', response));

/* Success: {name: "Kelly Corey", currentModule: 5, favoriteColor: "cerulean", id: "bcfc5416-4c71-4051-bb8d-fa390c094978"} */

// Change completed to "true"

var url = 'http://module5.tk/students/bcfc5416-4c71-4051-bb8d-fa390c094978/assignments/9f89a4ea-8e85-4853-b456-239be382cad1';
var data = {name: 'REST Exercises', completed: true};

fetch (url, {
	method: 'PUT', body: JSON.stringify(data)}).then(res => res.json())
    .then(response => console.log('Success:', response));

/* 
Success: {name: "REST Exercises", completed: true, id: "9f89a4ea-8e85-4853-b456-239be382cad1", studentId: "bcfc5416-4c71-4051-bb8d-fa390c094978"}
*/





// Notes
/* curl -X POST -d 
'{"name": "github-api-test", "description": "Testing out the API for our lesson on REST", "homepage": "https://github.com", "private": false, } 
https://api.github.com/users/kelldeveloped/repos?access_token=<redacted> -v

curl -i -H "Authorization: token <redacted>" \ // da headers
    -d '{ // da json data
        "name": "github-api-test", 
        "private": false, 
      }' \
    https://api.github.com/user/repos // da url

fetch() */

/* headers: Authorization: token
            Content-Type: application/json
            Accept: application/json
    Method: Patch
    data: { name: new-repo-name }
    url: https://api.github.com/repos/owner/old-repo-name */

/* headers: Authorization: token
    method: Delete
    url: https://api.github.com/repos/kelldeveloped/new-github-api-test */

/* url: https://github.com/hackupstate/huslack/licenses
      Method: Get
      hint: look in Miscellaneous -> Licenses
*/