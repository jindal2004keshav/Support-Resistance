import { stocks } from './code.js';

const select = document.querySelector(".stock_name");

for (const stock in stocks) {
  // Use `hasOwnProperty` to ensure we only iterate over own properties of the object
  if (stocks.hasOwnProperty(stock)) {
    let newOption = document.createElement("option");
    newOption.innerText = stock;  // Display the stock name as option text
    newOption.value = stocks[stock];  // Use the ticker symbol as the option value

    // Check if the current stock is "^NSEI" to set it as selected
    if (stocks[stock] === "^NSEI") {
      newOption.selected = true;  // Set selected attribute to true (boolean)
    }

    select.appendChild(newOption);  // Append the new option to the select element
  }
}
