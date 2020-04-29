import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './../src/bizz.js';


$(document).ready(function () {

  //changes background image upon selection of environment
  $('#environment').change(function () {
    let selectedValue = ($(this).val());
    switch (selectedValue) {
    case "random":
      randomBg();
      break;
    case "arcticEnvironment":
      arcticBg();
      break;
    case "coastalEnvironment":
      coastalBg();
      break;
    case "desertEnvironment":
      desertBg();
      break;
    case "forestEnvironment":
      forestBg();
      break;
    case "grasslandEnvironment":
      grasslandBg();
      break;
    case "hillEnvironment":
      hillBg();
      break;
    case "mountainEnvironment":
      mountainBg();
      break;
    case "swampEnvironment":
      swampBg();
      break;
    case "underdarkEnvironment":
      underdarkBg();
      break;
    case "underwaterEnvironment":
      underwaterBg();
      break;
    case "urbanEnvironment":
      urbanBg();
      break;
    }
  });
  let dice = new Audio('https://opengameart.org/sites/default/files/audio_preview/5%20dice%20rolling.ogg.mp3');
  let coast = new Audio('https://opengameart.org/sites/default/files/audio_preview/jasinski-wave-prev.ogg.mp3');
  let forest = new Audio('https://opengameart.org/sites/default/files/audio_preview/birds-isaiah658.ogg.mp3');
  let wind = new Audio('https://opengameart.org/sites/default/files/audio_preview/wind1.wav.mp3');
  let swamp = new Audio('https://opengameart.org/sites/default/files/audio_preview/swamp.ogg.mp3');
  let underdark = new Audio('https://opengameart.org/sites/default/files/audio_preview/dungeon_ambient_1.ogg.mp3');
  let underwater = new Audio('https://opengameart.org/sites/default/files/audio_preview/feedbackOSC.mp3.ogg');
  let urban = new Audio('https://opengameart.org/sites/default/files/audio_preview/fire-1.ogg.mp3');
  let urban2 = new Audio('https://opengameart.org/sites/default/files/audio_preview/Waving%20Torch.wav.ogg');
  
  function randomBg() {
    let imageUrl = 'https://wallpaperaccess.com/full/1886635.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.play();
    coast.pause();
    forest.pause();
    wind.pause();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function arcticBg() {
    let imageUrl = 'https://i.imgur.com/kxrXtJc.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.play();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function coastalBg() {
    let imageUrl = 'https://i.imgur.com/BbLS9Co.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.play();
    forest.pause();
    wind.pause();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function desertBg() {
    let imageUrl = 'https://i.imgur.com/fQxvZa3.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.play();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function forestBg() {
    let imageUrl = 'https://i.imgur.com/7GlpKVl.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.play();
    wind.pause();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function grasslandBg() {
    let imageUrl = 'https://i.imgur.com/P4n5fD1.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.play();
    wind.play();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function hillBg() {
    let imageUrl = 'https://i.imgur.com/w1UqSXP.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.play();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function mountainBg() {
    let imageUrl = 'https://i.imgur.com/nWyuen4.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.play();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function swampBg() {
    let imageUrl = 'https://i.imgur.com/wRWDzWV.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.pause();
    swamp.play();
    underdark.pause();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function underdarkBg() {
    let imageUrl = 'https://i.imgur.com/ZO5asa3.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.pause();
    swamp.pause();
    underdark.play();
    underwater.pause();
    urban.pause();
    urban2.pause();
  }
  function underwaterBg() {
    let imageUrl = 'https://i.imgur.com/gjZaycz.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.pause();
    swamp.pause();
    underdark.pause();
    underwater.play();
    urban.pause();
    urban2.pause();
  }
  function urbanBg() {
    let imageUrl = 'https://i.imgur.com/s238XWq.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
    dice.pause();
    coast.pause();
    forest.pause();
    wind.pause();
    swamp.pause();
    underdark.pause();
    underwater.pause();
    urban.play();
    urban2.play();
  }

  $("#form-control").submit(function (event) {
    event.preventDefault();
    $(".resultContainer").show();
    $(".reset").show();
    $(".jumbotron").fadeOut(200);
    $("#btn-place").fadeOut(200);
    // let sound = new Audio('https://opengameart.org/sites/default/files/audio_preview/hs.mp3.ogg');
    // sound.play();

    (async () => {
      let encounter = new Encounter;
      encounter.partyLevel = $("#partyLevel").val();
      encounter.partyMembers = $("#partyMembers").val();
      encounter.challengeDifficulty = $("#challengeDifficulty").val();
      encounter.monsterType = $("#monsterType").val();
      encounter.environment = $("#environment").val();
      encounter.partyXpThreshold(encounter.partyMembers, encounter.challengeDifficulty, encounter.partyLevel);
      await encounter.encounterGen();
      console.log(encounter.encounterArray[0].name);
      $("#monsterOutput").html(`<p>${encounter.encounterArray[0].name}</p>`);
      $("#crOutput").html(`<p>${encounter.encounterArray[0].challenge_rating}.</p>`);
    })();
  });
});