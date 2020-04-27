import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Encounter } from './src/bizz.js';

















$(document).ready(function () {
  let environment = $("#environment").val();
  $("input#environment:checked").click(function() {
    let imageUrl = "http://getwallpapers.com/wallpaper/full/5/d/f/158233.jpg";
    if (environment === "Forest") {
    $(".container").css("background-image", "url(" + imageUrl + ")"); 
    }
  }); 
  
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
    

    $(".col-md-9").html(`<p>Your party level is ${partyLevel}. You have ${partyMembers} members. Your encounter difficulty is set to ${challengeDifficulty}.The type you are facing is ${monsterType}. Your environment is ${environment} </p>`)
  });
});


// You will be facing ${ monsterNumber } monsters.

