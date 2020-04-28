import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './../src/bizz.js';


$(document).ready(function () {
  let encounter = new Encounter;
  const aud = document.getElementById("myAudio");
  aud.volume = 0.5; // default 1 means 100%
  //changes background image upon selection of environment
  $('#environment').change(function () {
    let selectedValue = ($(this).val());
    switch (selectedValue) {
    case "default":
      defaultBg();
      break;
    case "arcticEncounter":
      arcticBg();
      break;
    case "coastalEncounter":
      coastalBg();
      break;
    case "desertEncounter":
      desertBg();
      break;
    case "forestEncounter":
      forestBg();
      break;
    case "grasslandEncounter":
      grasslandBg();
      break;
    case "hillEncounter":
      hillBg();
      break;
    case "mountainEncounter":
      mountainBg();
      break;
    case "swampEncounter":
      swampBg();
      break;
    case "underdarkEncounter":
      underdarkBg();
      break;
    case "underwaterEncounter":
      underwaterBg();
      break;
    case "urbanEncounter":
      urbanBg();
      break;
    }
  });
  function defaultBg() {
    let imageUrl = 'https://wallpaperaccess.com/full/1886635.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function arcticBg() {
    let imageUrl = 'https://i.imgur.com/kxrXtJc.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function coastalBg() {
    let imageUrl = 'https://i.imgur.com/BbLS9Co.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function desertBg() {
    let imageUrl = 'https://i.imgur.com/fQxvZa3.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function forestBg() {
    let imageUrl = 'https://i.imgur.com/7GlpKVl.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function grasslandBg() {
    let imageUrl = 'https://i.imgur.com/P4n5fD1.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function hillBg() {
    let imageUrl = 'https://i.imgur.com/w1UqSXP.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function mountainBg() {
    let imageUrl = 'https://i.imgur.com/nWyuen4.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function swampBg() {
    let imageUrl = 'https://i.imgur.com/wRWDzWV.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function underdarkBg() {
    let imageUrl = 'https://i.imgur.com/ZO5asa3.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function underwaterBg() {
    let imageUrl = 'https://i.imgur.com/gjZaycz.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function urbanBg() {
    let imageUrl = 'https://i.imgur.com/s238XWq.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  // function showDisplay() {
  //   $(".col-md-9").html(`<p>Your party level is ${encounter.partyLevel}. You have ${encounter.partyMembers} members. Your encounter difficulty is set to ${encounter.challengeDifficulty}.The type you are facing is ${encounter.monsterType}. Your environment is ${encounter.environment} </p>`);
  // }

  $("#form-control").submit(function (event) {
    event.preventDefault();
    $(".results").show();

    // (async () => { // try at returning random index from selected api array
    //   let response = await encounter.encounterGen;
    //   let index = encounter.randomNumber(parseInt(response.length));
    console.log(encounter.partyMembers);
    console.log(encounter.partyLevel);
    encounter.partyLevel = $("#partyLevel").val();
    encounter.partyMembers = $("#partyMembers").val();
    encounter.challengeDifficulty = $("#challengeDifficulty").val();
    encounter.monsterNumber = $("#monsterNumber").val();
    encounter.monsterSize = $("#monsterSize").val();
    encounter.monsterType = $("#monsterType").val();
    encounter.environment = $("#environment").val();
    // })();
    // showDisplay();

  });
});