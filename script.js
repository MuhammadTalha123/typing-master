const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const setOfWords = [
  "My name is muhammad talha and I am a web developer.",
  "Hope you are having fun this is a simple game you can make.",
  "I always wanted to become a writer.",
  " I tapped my pencil rapidly on the side of my desk and desperately tried to focus.",
  "Describe the major characteristics of obsessive compulsive disorder.",
];

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = typeWords.value;
  console.log(totalStr);
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg =
    " You typed total at " +
    speed +
    " words per minutes in time  of " +
    totalTime +
    " seconds ";
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of errors are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disable = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disable = true;
    btn.innerText = "Start";
    endPlay();
  }
});
