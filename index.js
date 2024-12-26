let progressBar = document.getElementById("progress-bar");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");


window.onload = () => {
    song.pause();
    ctrlicon.classList.add("fa-play");
    ctrlicon.classList.remove("fa-pause");
    progressBar.value = 0;
};


song.onloadedmetadata = function(){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;

}

function playPause(){

    if(ctrlicon.classList.contains("fa-pause")){

        song.pause();  
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }

    else{
        song.play();  
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}


song.ontimeupdate = function () {
    progressBar.value = song.currentTime;
};

progressBar.oninput = function () {
    song.currentTime = progressBar.value;
};


if(song.play()){
    setInterval(() => {
    progressBar.value = song.currentTime;     
    }, 500);
}

progressBar.onchange = function(){
    if(song.paused){
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
    }
    
}

