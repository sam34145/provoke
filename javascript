const apiKey = "AIzaSyAIUT9x-Iu5DXf_2j1zWq_S5eystMfAlRk";


const videoId = "WeY8zgHb7uY";

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
