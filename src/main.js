import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './../src/bizz.js';


$(document).ready(function () {
  let environment = $("#environment").val();

  $('#environment').change(function() {
    let selectedValue = parseInt($(this).val());
    switch(selectedValue) {
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
    let imageUrl = 'http://getwallpapers.com/wallpaper/full/5/d/f/158233.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  function desertBg() {
    let imageUrl = 'https://i.pinimg.com/originals/7e/60/11/7e60112e76df65f349ddaf3734ea68cd.jpg';
    $("body").css("background-image", "url(" + imageUrl + ")");
  }
  
  $("#form-control").submit(function (event) {
    event.preventDefault();
    let partyLevel = $("#partyLevel").val();
    let partyMembers = $("#partyMembers").val();
    let challengeDifficulty = $("#challengeDifficulty").val();
    // let monsterNumber = $("#monsterNumber").val();
    // let monsterSize = $("#monsterSize").val();
    let monsterType = $("#monsterType").val();
    let environment = $("#environment").val();
    // $("#environment").on('click', "Forest");
    // if ($("#environment").val() === "Forest") {
    //   console.log(environment);

    // }
    

    $(".col-md-9").html(`<p>Your party level is ${partyLevel}. You have ${partyMembers} members. Your encounter difficulty is set to ${challengeDifficulty}.The type you are facing is ${monsterType}. Your environment is ${environment} </p>`);
  });
});


// You will be facing ${ monsterNumber } monsters.