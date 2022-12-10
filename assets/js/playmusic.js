function playmusic(music_no) {
    if(music_no=1){
        var audio = new Audio("../src/music1.mp3");
    } else if(music_no=2){
        var audio = new Audio("../src/music2.mp3");
    } else if(music_no=3){
        var audio = new Audio("../src/music3.mp3");
    } else if(music_no=4){
        var audio = new Audio("../src/music4.mp3");
    } else if(music_no=5){
        var audio = new Audio("../src/music5.mp3");
    } else if(music_no=6){
        var audio = new Audio("../src/music6.mp3");
    }
    
    audio.loop = false; // 반복재생하지 않음
    audio.volume = 0.5; // 음량 설정
    audio.play(); // sound 재생

    const myAudio = document.getElementById("myAudio") // Audio객체 취득

myAudio.play(); // 음원 재생
myAudio.pause(); // 일시 정지
  }