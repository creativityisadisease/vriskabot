const discord = require("discord.js");
var client = new discord.Client();
const token = "NDgyNjM0NTAyNzgzMzY5MjI2.DmHyQQ.h6t3mtaO5ip8IS8V3Dn2zeHQmI0";

//setup

client.on("ready", () =>{
    console.log("ready");
    client.user.setActivity ("..you know :;)");
});

//commands (i write everything inside the same thing)

client.on("message", (message) => {
    //so it doesnt answer to bots
    if (message.author.bot) return;
  
  //so it's case insenitive
    msg = message.content.toLowerCase();
  
    //regular message command (i just copy and paste one after another)

    if(msg.startsWith ("press f")) {
      message.channel.send ("f");
    }

    if(msg.startsWith ("god")) {
      message.channel.send ("you called?");
    }

    if(msg.startsWith ("fuck you vriska")) {
      message.channel.send ("you think you can just say those things to a god huh? you think id allow it?");
    }

    if(msg.startsWith ("fuck u vriska")) {
      message.channel.send ("you wish :;))");
    }

    if(msg.startsWith ("vriska fuck off")) {
      message.channel.send ("one day youre going to have to explain all of your mistakes to me (god) and i wont let you leave until you explain every. single. one. dont make this mistake");
    }

    if(msg.startsWith ("fuck off vriska")) {
      message.channel.send ("one day youre going to have to explain all of your mistakes to me (god) and i wont let you leave until you explain every. single. one. dont make this mistake");
    }

    if(msg.startsWith ("cahoots")) {
      message.channel.send ("cahoooooooots");
    }

    if(msg.startsWith ("cahoooooooots")) {
      message.channel.send ("caaaaaaaahoots");
    }

//randomizer
  
  const eight = [
    "eight",
    "8"
    ];
  const eightresponce = [
    "8 legs, seven vaginas :;)",
    "careful, some people may find that subject to be........ sticky :;)"
  ];

  if(eight.some(word => msg.includes(word))) {
    var response = eightresponce [Math.floor(Math.random() * eightresponce.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

  const vriskaflirt = [
    "vriska flirt with me",
    "flirt",
    "vriska flirt",
    "vriska give me a pick up line",
    "vriska hit on me",
    "hit on me"
    ];
  const flirtresponce = [
    "no",
    "charlottes web says 'get on this dick':;)",
    "do u have a 9th leg, or are u just happy to see me? :;)",
    "i got 8 legs to steal your girl with",
    "this itsy bitsy spider isnt so itsy bitsy :wink:",
    "you make more than just my spidey senses tingle:wink::wink::wink:",
    "im stuck on you",
    "ill be happy to bite you :;)",
    "id spray my webs all over you :;)"
  ];

  if(vriskaflirt.some(word => msg.includes(word))) {
    var response = flirtresponce [Math.floor(Math.random() * flirtresponce.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

});

client.login(token);