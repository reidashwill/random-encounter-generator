import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './../src/bizz.js';


$(document).ready(function () {

  //changes background image upon selection of environment//
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
  //add ambient sound effects to environments//
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
    $(".resultContainer").toggle();
    $(".reset").toggle();
    $(".jumbotron").fadeOut(200);
    $("#btn-place").fadeOut(200);
    let sound = new Audio('https://opengameart.org/sites/default/files/audio_preview/hs.mp3.ogg');
    sound.play();

    (async () => {
      let encounter = new Encounter;
      encounter.partyLevel = $("#partyLevel").val();
      encounter.partyMembers = $("#partyMembers").val();
      encounter.challengeDifficulty = $("#challengeDifficulty").val();
      encounter.monsterType = $("#monsterType").val();
      encounter.environment = $("#environment").val();
      encounter.partyXpThreshold(encounter.partyMembers, encounter.challengeDifficulty, encounter.partyLevel);
      await encounter.encounterGen();
  
      if ((`<p>${encounter.encounterArray[0].name}` !== "null")) {
        $("#monsterOutput0").html(`<p>${encounter.encounterArray[0].name}</p>`);
        if ((`<p>${encounter.encounterArray[0].challenge_rating}` !== "null"))
          $("#crOutput0").html(`<p>${encounter.encounterArray[0].challenge_rating}.</p>`);
        $("#monsterOutput0").click(function() { 
          $("#xtra0").toggle();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra0").html(`<span>${encounter.encounterArray[0].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[0].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[0].xp}XP.</span>`);
          
        });
      }
      if ((`<p>${encounter.encounterArray[1].name}` !== "null")) {
        $("#monsterOutput1").html(`<p>${encounter.encounterArray[1].name}</p>`);
        if ((`<p>${encounter.encounterArray[1].challenge_rating}` !== "null"))
          $("#crOutput1").html(`<p>${encounter.encounterArray[1].challenge_rating}.</p>`);
        $("#monsterOutput1").click(function() { 
          $("#xtra1").toggle();
          $("#xtra0").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra1").html(`<span>${encounter.encounterArray[1].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[1].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[1].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[2].name}` !== "null")) {
        $("#monsterOutput2").html(`<p>${encounter.encounterArray[2].name}</p>`);
        if ((`<p>${encounter.encounterArray[2].challenge_rating}` !== "null"))
          $("#crOutput2").html(`<p>${encounter.encounterArray[2].challenge_rating}.</p>`);
        $("#monsterOutput2").click(function() { 
          $("#xtra2").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra2").html(`<span>${encounter.encounterArray[2].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[2].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[2].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[3].name}` !== "null")) {
        $("#monsterOutput3").html(`<p>${encounter.encounterArray[3].name}</p>`);
        if ((`<p>${encounter.encounterArray[3].challenge_rating}` !== "null"))
          $("#crOutput3").html(`<p>${encounter.encounterArray[3].challenge_rating}.</p>`);
        $("#monsterOutput3").click(function() { 
          $("#xtra3").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra3").html(`<span>${encounter.encounterArray[3].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[3].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[3].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[4].name}` !== "null")) {
        $("#monsterOutput4").html(`<p>${encounter.encounterArray[4].name}</p>`);
        if ((`<p>${encounter.encounterArray[4].challenge_rating}` !== "null"))
          $("#crOutput4").html(`<p>${encounter.encounterArray[4].challenge_rating}.</p>`);
        $("#monsterOutput4").click(function() { 
          $("#xtra4").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra4").html(`<span>${encounter.encounterArray[4].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[4].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[4].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[5].name}` !== "null")) {
        $("#monsterOutput5").html(`<p>${encounter.encounterArray[5].name}</p>`);
        if ((`<p>${encounter.encounterArray[5].challenge_rating}` !== "null"))
          $("#crOutput5").html(`<p>${encounter.encounterArray[5].challenge_rating}.</p>`);
        $("#monsterOutput5").click(function() { 
          $("#xtra5").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra5").html(`<span>${encounter.encounterArray[5].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[5].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[5].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[6].name}` !== "null")) {
        $("#monsterOutput6").html(`<p>${encounter.encounterArray[6].name}</p>`);
        if ((`<p>${encounter.encounterArray[6].challenge_rating}` !== "null"))
          $("#crOutput6").html(`<p>${encounter.encounterArray[6].challenge_rating}.</p>`);
        $("#monsterOutput6").click(function() { 
          $("#xtra6").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra6").html(`<span>${encounter.encounterArray[6].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[6].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[6].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[7].name}` !== "null")) {
        $("#monsterOutput7").html(`<p>${encounter.encounterArray[7].name}</p>`);
        if ((`<p>${encounter.encounterArray[7].challenge_rating}` !== "null"))
          $("#crOutput7").html(`<p>${encounter.encounterArray[7].challenge_rating}.</p>`);
        $("#monsterOutput7").click(function() { 
          $("#xtra7").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra7").html(`<span>${encounter.encounterArray[7].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[7].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[7].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[8].name}` !== "null")) {
        $("#monsterOutput8").html(`<p>${encounter.encounterArray[8].name}</p>`);
        if ((`<p>${encounter.encounterArray[8].challenge_rating}` !== "null"))
          $("#crOutput8").html(`<p>${encounter.encounterArray[8].challenge_rating}.</p>`);
        $("#monsterOutput8").click(function() { 
          $("#xtra8").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra8").html(`<span>${encounter.encounterArray[8].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[8].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[8].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[9].name}` !== "null")) {
        $("#monsterOutput9").html(`<p>${encounter.encounterArray[9].name}</p>`);
        if ((`<p>${encounter.encounterArray[9].challenge_rating}` !== "null"))
          $("#crOutput9").html(`<p>${encounter.encounterArray[9].challenge_rating}.</p>`);
        $("#monsterOutput9").click(function() { 
          $("#xtra9").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra10").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra9").html(`<span>${encounter.encounterArray[9].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[9].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[9].xp}XP.</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[10].name}` !== "null")) {
        $("#monsterOutput10").html(`<p>${encounter.encounterArray[10].name}</p>`);
        if ((`<p>${encounter.encounterArray[10].challenge_rating}` !== "null"))
          $("#crOutput10").html(`<p>${encounter.encounterArray[10].challenge_rating}.</p>`);
        $("#monsterOutput10").click(function() { 
          $("#xtra10").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra11").hide();
          $("#xtra12").hide();
          $("#xtra13").hide();
          $("#xtra14").hide();
          $("#xtra10").html(`<span>${encounter.encounterArray[10].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[10].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[10].xp}XP.</span>`);
        });
      }
      // if ((`<p>${encounter.encounterArray[11].name}` !== "null")) {
      //   $("#monsterOutput11").html(`<p>${encounter.encounterArray[11].name}</p>`);
      //   if ((`<p>${encounter.encounterArray[11].challenge_rating}` !== "null"))
      //     $("#crOutput11").html(`<p>${encounter.encounterArray[11].challenge_rating}.</p>`);
      //   $("#monsterOutput11").click(function() { 
      //     $("#xtra11").toggle();
      //     $("#xtra0").hide();
      //     $("#xtra1").hide();
      //     $("#xtra2").hide();
      //     $("#xtra3").hide();
      //     $("#xtra4").hide();
      //     $("#xtra5").hide();
      //     $("#xtra6").hide();
      //     $("#xtra7").hide();
      //     $("#xtra8").hide();
      //     $("#xtra9").hide();
      //     $("#xtra10").hide();
      //     $("#xtra12").hide();
      //     $("#xtra13").hide();
      //     $("#xtra14").hide();
      //     $("#xtra11").html(`<span>${encounter.encounterArray[11].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[11].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[11].xp}XP.</span>`);
      //   });
      // }
      // if ((`<p>${encounter.encounterArray[12].name}` !== "null")) {
      //   $("#monsterOutput12").html(`<p>${encounter.encounterArray[12].name}</p>`);
      //   if ((`<p>${encounter.encounterArray[12].challenge_rating}` !== "null"))
      //     $("#crOutput12").html(`<p>${encounter.encounterArray[12].challenge_rating}.</p>`);
      //   $("#monsterOutput12").click(function() { 
      //     $("#xtra12").toggle();
      //     $("#xtra0").hide();
      //     $("#xtra1").hide();
      //     $("#xtra2").hide();
      //     $("#xtra3").hide();
      //     $("#xtra4").hide();
      //     $("#xtra5").hide();
      //     $("#xtra6").hide();
      //     $("#xtra7").hide();
      //     $("#xtra8").hide();
      //     $("#xtra9").hide();
      //     $("#xtra10").hide();
      //     $("#xtra11").hide();
      //     $("#xtra13").hide();
      //     $("#xtra14").hide();
      //     $("#xtra12").html(`<span>${encounter.encounterArray[12].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[12].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[12].xp}XP.</span>`);
      //   });
      // }
      // if ((`<p>${encounter.encounterArray[13].name}` !== "null")) {
      //   $("#monsterOutput13").html(`<p>${encounter.encounterArray[13].name}</p>`);
      //   if ((`<p>${encounter.encounterArray[13].challenge_rating}` !== "null"))
      //     $("#crOutput13").html(`<p>${encounter.encounterArray[13].challenge_rating}.</p>`);
      //   $("#monsterOutput13").click(function() { 
      //     $("#xtra13").toggle();
      //     $("#xtra0").hide();
      //     $("#xtra1").hide();
      //     $("#xtra2").hide();
      //     $("#xtra3").hide();
      //     $("#xtra4").hide();
      //     $("#xtra5").hide();
      //     $("#xtra6").hide();
      //     $("#xtra7").hide();
      //     $("#xtra8").hide();
      //     $("#xtra9").hide();
      //     $("#xtra10").hide();
      //     $("#xtra11").hide();
      //     $("#xtra12").hide();
      //     $("#xtra14").hide();
      //     $("#xtra13").html(`<span>${encounter.encounterArray[13].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[13].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[13].xp}XP.</span>`);
      //   });
      // }
      // if ((`<p>${encounter.encounterArray[14].name}` !== "null")) {
      //   $("#monsterOutput14").html(`<p>${encounter.encounterArray[14].name}</p>`);
      //   if ((`<p>${encounter.encounterArray[14].challenge_rating}` !== "null"))
      //     $("#crOutput14").html(`<p>${encounter.encounterArray[14].challenge_rating}.</p>`);
      //   $("#monsterOutput14").click(function() { 
      //     $("#xtra14").toggle();
      //     $("#xtra0").hide();
      //     $("#xtra1").hide();
      //     $("#xtra2").hide();
      //     $("#xtra3").hide();
      //     $("#xtra4").hide();
      //     $("#xtra5").hide();
      //     $("#xtra6").hide();
      //     $("#xtra7").hide();
      //     $("#xtra8").hide();
      //     $("#xtra9").hide();
      //     $("#xtra10").hide();
      //     $("#xtra11").hide();
      //     $("#xtra12").hide();
      //     $("#xtra13").hide();
      //     $("#xtra14").html(`<span>${encounter.encounterArray[14].hit_points}HP.</span>` + " " + `<span>${encounter.encounterArray[14].strength}Str.</span>` + " " + `<span>${encounter.encounterArray[14].xp}XP.</span>`);
      //   });
      // }
    })();
    $('.reset').on('click', '#resetButton', function(event) {
      event.preventDefault();
      randomBg();
      $(".resultContainer").hide();
      $(".jumbotron").show();
      document.getElementById('form-control').reset();
    });
  });
});