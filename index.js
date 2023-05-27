console.log("hey!!!");
//initializing the variables
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let mySongBar = document.getElementById('mySongBar');
let audioElement = new Audio('songs/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Starboy - The Weeknd", filePath: "songs/1.mp3"},
    {songName: "The Hills - The Weeknd", filePath: "songs/2.mp3"},
    {songName: "Often - The Weeknd", filePath: "songs/3.mp3"},
    {songName: "Can't Feel My Face - The Weeknd", filePath: "songs/4.mp3"},
    {songName: "Reminder - The Weeknd", filePath: "songs/5.mp3"},
    
]

songItems.forEach((element, i) => {
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsById('playtime').
})

//WORKING WITH EVENTS

//making the play button work
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime === 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
})

//making the progress bar seek
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); //this to get percentage value of progress
    mySongBar.value = progress;
})

mySongBar.addEventListener('change', () => {
    audioElement.currentTime = mySongBar.value * audioElement.duration/100; //this to chnage percentage value into a number
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playlistItem')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

//play song from playlist bar
Array.from(document.getElementsByClassName('playlistItem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})

//next button logic
next.addEventListener('click', () => {
    if(index>=5){
        index = 1;
    }else{
        index += 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    if(masterPlay.classList === 'fa-circle-pause'){
    e.target.classList.remove('fa-pause');
    e.target.classList.add('fa-play');
}
})

//previous button logic
previous.addEventListener('click', () => {
    if(index<=1){
        index = 1;
    }else{
        index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    e.target.classList.remove('fa-pause');
    e.target.classList.add('fa-play');
})
