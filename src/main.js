import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './../src/bizz.js';


$(document).ready(function () {
  let environment = $("#environment").val();
  //changes background image upon selection of environment
  $('#environment').change(function () {
    let selectedValue = parseInt($(this).val());
    switch (selectedValue) {
    case 0:
      defaultBg();
      break;
    case 1:
      forestBg();
      break;
    case 2:
      desertBg();
      break;
    }
  });
  function defaultBg() {
    let imageUrl = 'https://wallpaperaccess.com/full/1886635.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function forestBg() {
    let imageUrl = 'https://bit.ly/35aNpB9';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function desertBg() {
    let imageUrl = 'https://bit.ly/3bIhNWh';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  
  $("#form-control").submit(function (event) { 
    event.preventDefault();
    
    (async () => {
      let encounter = new Encounter;
      let response = await encounter.getMonster(`https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=ooze`);
      let index = encounter.randomNumber(parseInt(response.length));
      let name = response[index].results.name;
      console.log(index);
      console.log(name);
      encounter.partyLevel = $("#partyLevel").val();
      encounter.partyMembers = $("#partyMembers").val();
      encounter.challengeDifficulty = $("#challengeDifficulty").val();
      encounter.monsterNumber = $("#monsterNumber").val();
      encounter.monsterSize = $("#monsterSize").val();
      encounter.monsterType = $("#monsterType").val();
      encounter.environment = $("#environment").val();
    })();
    

    //display for results
    // $(".col-md-9").html(`<p>Your party level is ${encounter.partyLevel}. You have ${encounter.partyMembers} members. Your encounter difficulty is set to ${encounter.challengeDifficulty}.The type you are facing is ${encounter.monsterType}. Your environment is ${encounter.environment} </p>`);
  });
});