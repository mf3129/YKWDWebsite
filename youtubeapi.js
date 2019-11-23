let apiKey = "AIzaSyBtFUrvDqa2oF2FAFrF5n1lCY4woCmg2Nk"; 
let channelId = "UCBoascFEWCumM-OmsoatBTQ"; 
let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;


function updateVideoAPI(data) {
    const channelVid = document.getElementById("youtubeAPI"); 
    channelVid.innerHTML = data; 
}


fetch(url)
    .then(response => {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
        console.log("It did not work: " + response);
        throw new Error('Request Failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
          console.log(jsonResponse);
          const channel = jsonResponse.items[0];

        const output = `<iframe src="https://www.youtube.com/embed/${channel.id.videoId}" id="youtubeLink"> </iframe>`;
        updateVideoAPI(output);
    });






































/*
<script src="https://apis.google.com/js/api.js"></script>

  /**
   * Sample JavaScript code for youtube.channels.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   
function updateVideoAPI(data) {
    const channelVid = document.getElementById("youtubeAPI"); 
    channelVid.innerHTML = data; 
}


  function loadClient() {
    gapi.client.setApiKey(apiKey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.youtube.channels.list({
      "part": "snippet, id, contentDetails",
      "id": "UCBoascFEWCumM-OmsoatBTQ",
      "maxResults": 1
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
            const channel = response.result.items[0];

        const output = `<iframe src="https://www.youtube.com/embed/${channel.snippet.customUrl}" id="youtubeLink"> </iframe>`;
        updateVideoAPI(output);
        },
        function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");


*/



