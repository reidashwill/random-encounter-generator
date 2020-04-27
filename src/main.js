import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Encounter } from './src/bizz.js';















// $(document).ready(function () {
//   $('#button').click(function (event) {
//     event.preventDefault();
//     let inputCurrency = $('#currency').val();
//     let inputAmount = $('#dollar').val();
//     (async () => {
//       let xchange = new Xchange();
//       let response = await xchange.getData(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
//       getElements(response.conversion_rates[inputCurrency]);
//     })();
//     function getElements(response) {
//       if (response) {
//         $('#result').text(parseInt(response * inputAmount));

//         let response = await conversions.apiCall();
//         let response2 = await conversions.bitCoinApiCall();