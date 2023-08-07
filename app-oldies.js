const music = new Audio('audio_oldies/1.mp3');
// music.play();


//div com as músicas e os respectivos dados
const songs = [
    {
        id: '1',
        songName: `Like You Do <br>
        <div class="subtitle">Joji</div>`,
        poster: "img_oldies/1.jpg"
    },
    {
        id: '2',
        songName: `Fallen <br>
        <div class="subtitle">Lola Amour</div>`,
        poster: "img_oldies/2.jpg"
    },
    {
        id: '3',
        songName: `LET GO <br>
        <div class="subtitle">Central CEE</div>`,
        poster: "img_oldies/3.jpg"
    },
    {
        id: '4',
        songName: `I Want You <br>
        <div class="subtitle">Stephen Sanchez</div>`,
        poster: "img_oldies/4.jpg"
    },
    {
        id: '5',
        songName: `Dark Red <br>
        <div class="subtitle">Steve Lacy</div>`,
        poster: "img_oldies/5.jpg"
    },
    {
        id: '6',
        songName: `Lugar Distante <br>
        <div class="subtitle">Matuê</div>`,
        poster: "img_oldies/6.jpg"
    },
    {
        id: '7',
        songName: `Here With Me <br>
        <div class="subtitle">d4vd</div>`,
        poster: "img_oldies/7.jpg"
    },
    {
        id: '8',
        songName: `Ivy <br>
        <div class="subtitle">Frank Ocean</div>`,
        poster: "img_oldies/8.jpg"
    },
    {
        id: '9',
        songName: `Die For You <br>
        <div class="subtitle">Joji</div>`,
        poster: "img_oldies/9.jpg"
    },
    {
        id: '10',
        songName: `Knockin' On Heaven's Door<br>
        <div class="subtitle">Guns N' Roses</div>`,
        poster: "img_oldies/10.jpg"
    },
    {
        id: '11',
        songName: `November Rain<br>
        <div class="subtitle">Guns N' Roses</div>`,
        poster: "img_oldies/11.jpg"
    },
    {
        id: '12',
        songName: `Don't Cry <br>
        <div class="subtitle">Guns N' Roses</div>`,
        poster: "img_oldies/12.jpg"
    },
    {
        id: '13',
        songName: `Sweet Child O’ Mine <br>
        <div class="subtitle">Guns N' Roses</div>`,
        poster: "img_oldies/13.jpg"
    },
    {
        id: '14',
        songName: `What You Won't Do for Love<br>
        <div class="subtitle">Bobby Caldwell</div>`,
        poster: "img_oldies/14.jpg"
    },
    {
        id: '15',
        songName: `The Man Who Sold The World<br>
        <div class="subtitle">Nirvana</div>`,
        poster: "img_oldies/15.jpg"
    },
    {
        id: '16',
        songName: `Amazing <br>
        <div class="subtitle">Aerosmith</div>`,
        poster: "img_oldies/16.jpg"
    },
    {
        id: '17',
        songName: `Livin' On A Prayer <br>
        <div class="subtitle">Bon Jovi</div>`,
        poster: "img_oldies/17.jpg"
    },
    {
        id: '18',
        songName: `Don´t Stop Me Now <br>
        <div class="subtitle">Queen</div>`,
        poster: "img_oldies/18.jpg"
    },
    {
        id: '19',
        songName: `Bohemian Rhapsody <br>
        <div class="subtitle">Queen</div>`,
        poster: "img_oldies/19.jpg"
    },
    {
        id: '20',
        songName: `Come Together <br>
        <div class="subtitle">Beatles</div>`,
        poster: "img_oldies/20.jpg"
    },
    {
        id: '21',
        songName: `Careless Whisper <br>
        <div class="subtitle">George Michael</div>`,
        poster: "img_oldies/21.jpg"
    },
    {
        id: '22',
        songName: `Beat it <br>
        <div class="subtitle">Michael Jackson</div>`,
        poster: "img_oldies/22.jpg"
    },
    {
        id: '23',
        songName: `Like a Prayer <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img_oldies/23.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
} )


const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio_oldies/${index}.mp3`;
        poster_master_play.src = `img_oldies/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        // alterar o icon da barra lateral esquerda quando uma música é selecionada
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


// está a puxar os elementos da barra de música (tempo, barra de duração)
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    
    // console.log(min1);

    //tempo da música
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value );
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});




// alterar o volume
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100; 
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
        music.src = `audio_oldies/${index}.mp3`;
        poster_master_play.src = `img_oldies/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        // alterar o icon da barra lateral esquerda quando uma música é selecionada
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})


next.addEventListener('click', ()=>{
    index ++;  
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio_oldies/${index}.mp3`;
        poster_master_play.src = `img_oldies/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        // alterar o icon da barra lateral esquerda quando uma música é selecionada
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
});