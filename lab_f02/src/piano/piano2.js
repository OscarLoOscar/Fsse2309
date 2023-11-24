// object key pair mapping
let ketMapping = {
  "f" : "C1",
  "g" : "C1s",
  "h" : "D1",
  "j" : "D1s",
  "k" : "E1",
  "l" : "F1",
  ";" : "F1s",
  "'" : "G1",
  "t" : "G1s",
  "y" : "A1",
  "i" : "A1s",
  "o" : "B1",
  "p" : "C1",
};
//拆散所有動作=>playAudio , pressDown , pressUp
let playAudio = (key) => {
console.log(key);
const keyAudio = document.getElementById(key.dataset.note);
keyAudio.currentTime = 0;
keyAudio.play();
}

let handleKeydown = (event)=>{
if(!event.repeat){
  playAudio(ketMapping[event.key]);
  document.getElementById(ketMapping[event.key]).classList.add("pressed");
}
}
