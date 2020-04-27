import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    let partyLevel = $("#partyLevel").val();
    let partyMembers = $("#partyMembers").val();
    let challengeDifficulty = $("#challengeDifficulty").val();
    let monsterNumber = $("#monsterNumber").val();
    let monsterSize = $("#monsterSize").val();
    let monsterType = $("#monsterType").val();
    let environment = $("#environment").val();

    $(".col-md-8").html(`<p>Your party level is ${partyLevel}. You have ${partyMembers} members. Your encounter difficulty is set to ${challengeDifficulty}. You will be facing ${monsterNumber} monsters. They are  ${monsterSize} size. The type you are facing is ${monsterType}. Your environment is ${environment} </p>`)
  });
});