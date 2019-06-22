$(document).ready(function(){
    var vid = $("video").get(0);
    var pauseBtn = $(".player__paused");
    var startBtnW = $(".player__start-white")
var startBtn = $(".player__start").on("click",function(){
vid.play();
    $(".player__controls button").removeClass("hidden");
    startBtn.addClass("hidden");
    startBtnW.addClass("hidden");
});
var pauseBtn = $(".player__paused").on("click",function(){
vid.pause();
$(".player__controls button").removeClass("hidden");
pauseBtn.addClass("hidden");
});

startBtnW.on("click",function(){
vid.play();
$(".player__controls button").removeClass("hidden");
startBtn.addClass("hidden");
startBtnW.addClass("hidden");
});
var pauseBtn = $(".player__paused").on("click",function(){
vid.pause();
$(".player__controls button").removeClass("hidden");
pauseBtn.addClass("hidden");
});

let interval;
clearInterval(interval);
const duration = vid.duration;
interval = setInterval(() => {
    const completed = vid.currentTime;
    const duration = vid.duration;
const percents = (completed / duration) * 100;

    $(".player__playback-button").css({
        left: `${percents}%`
    })

}, 1000);

$(".player__playback").on("click", e => {
    e.preventDefault();
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const clickedPercents = (newButtonPosition / bar.width()) * 100;
    const newPlayerTime = (duration / 100) * clickedPercents;

    $(".player__playback-button").css({
        left: `${clickedPercents}%`
    })

    vid.currentTime = newPlayerTime;
});

$(".player__volume-switch").on("click", e => {
    if (vid.volume !=0){
        $(".player__volume-off").removeClass("off");
    }

    e.preventDefault();
    const barVol = $(e.currentTarget);
    const newButtonVolPosition = e.pageX -  barVol.offset().left;
    const newVolumePersent = (newButtonVolPosition / barVol.width())*100;
    const newVolume = (newButtonVolPosition / barVol.width());

    $(".player__volume-switch__button").css({
        left: `${newVolumePersent}%`
    })

    vid.volume =  newVolume.toFixed(1);

    if (newVolume != 0 ){
        $(".player__volume-off").addClass("off");
    } else
    {
        $(".player__volume-off").removeClass("off");
    }
});

$(".player__volume").on("click", function(){
	if (vid.volume !=0){
		vid.volume = 0;
		$(".player__volume-switch__button").css({
				left: `0%`
		})
		$(".player__volume-off").removeClass("off");
	} else{
		vid.volume = 0.5;
		$(".player__volume-switch__button").css({
				left: `50%`
		})
		$(".player__volume-off").addClass("off");
	}
});


});

