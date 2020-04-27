import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function () {
  $("#userInput").submit(function (event) {
    let partyLevel = $(partyLevel).val();
    let partyMembers = $(partyMembers).val();
    let challengeDifficulty = $(challengeDifficulty).val();
    let monsterNumber = $(monsterNumber).val();
    let monsterSize = $(monsterSize).val();
    let monsterType = $(monsterType).val();
    let environment = $(environment).val();
    event.preventDefault();

  });
});