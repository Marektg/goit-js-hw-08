import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on(
    "timeupdate",
    throttle(function playTime(e) {
        localStorage.setItem("videoplayer-current-time", e.seconds)
    }, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
