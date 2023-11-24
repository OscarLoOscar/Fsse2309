/* define keybroad 上既key對應既piano key color */
const WHITE_KEYS = ['f','g','h','j','k','l',';','\''];
const BLACK_KEYS = ['t','y','i','o','p'];

/** querySelectorAll : 指定css中既elements */
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");


function press(key){
  //透過 parameter "key" getElementById 拎到audio
const keyAudio = document.getElementById(key.dataset.note);
//播放時間set 0 ，ensure每一次click都由頭play
keyAudio.currentTime = 0;
//play 對應audio
keyAudio.play();
//click 個一下event 叫 "active"
key.classList.add("active");
// when the audio finished , return end
keyAudio.addEventListener("end",()=>{
  //remove "active" event
  key.classList.remove("active");
})
};

document.addEventListener("keydown" , e=>{
if(e.repeat) return 
const key = e.key;
const whiteKeyIndex = WHITE_KEYS.indexOf(key);
const blackKeyIndex = BLACK_KEYS.indexOf(key);
if(whiteKeyIndex>-1)
press(whiteKeys[whiteKeyIndex]);

if(blackKeyIndex>-1)
press(blackKeys[blackKeyIndex]);
});

keys.forEach(key=>{
  key.addEventListener("click",()=> press(key))
});
