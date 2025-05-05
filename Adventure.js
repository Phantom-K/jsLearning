const prompt = require("prompt-sync")();
const name = prompt("What's your name? ");
console.log("hello", name, "welcome to our game !");

const shouldWePlay = prompt("Do you want to play ?");

if (shouldWePlay.toLowerCase() === "yes") {
  //Game logic
  console.log("Choose you weapon");
  //Weapon logic
  const swordOrGun = prompt("Do you want a sword or a Gun");
  //sword logic
  if (swordOrGun.toLowerCase() === "sword") {
    console.log("choose your sword ");
    const SabarOrExcalibur = prompt("Do you want a Sabar or an Excalibur");
    if (SabarOrExcalibur.toLowerCase() === "sabar") {
        console.log('You have equipped the legendary sabar')
    } else if (SabarOrExcalibur.toLowerCase()==='Excalibur'){
        console.log('you have equipped the Legendary Excalibur')
    }
    //gun logic
  } else if (swordOrGun.toLowerCase() === "gun") {
    console.log('choose your gun')
    const rifleOrSniper = prompt("Do you want a rifle or a sniper");
    if (rifleOrSniper.toLowerCase() === "rifle") {
        console.log('You have equipped An AK47')
    } else if (rifleOrSniper.toLowerCase() === "sniper") {
        console.log('You have equipped a DLQ')
    }
  }

    console.log("let the game begin")

} else {
  console.log("okay:(");
}
