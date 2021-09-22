const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {
  nickName: "",
  activity: "",
  activityMusic: "",
  meal: "",
  faveEat : "",
  faveSport : "",
  superPower : "",
};

rl.question(" What's your name? Nicknames are also acceptable :) ", (nickName) => {
  answers.nickName = nickName;
  rl.question("What's an activity you like doing? ", (activityName) => {
    answers.activity = activityName;
    rl.question("What do you listen to while doing that? ", (activeMusic) => {
      answers.activityMusic = activeMusic;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        answers.meal = meal;
        rl.question("What's your favourite thing to eat for that meal? ", (faveEat) => {
          answers.faveEat = faveEat;
          rl.question("Which sport is your absolute favourite? ", (faveSport) => {
            answers.faveSport = faveSport;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              answers.superPower = superPower;
              console.log(` \n Nice to meet ya ${answers.nickName} , \n You to are into ${answers.activity} thats rad so am I. \n Although i'm not really into listening to ${answers.activityMusic} while  ${answers.activity}. We both do share the same favorite meal, I mean who doesnt like ${answers.meal}. Oh yeah and ${answers.faveEat} slaps, great choice! \n You also are into ${answers.faveSport} right on thats cool. Also great have the super power of ${answers.superPower} is pretty radical! \n Well enjoy the rest of your day ${answers.nickName} `);
              rl.close();
            });
          });
        });
      });
    });
  });
});