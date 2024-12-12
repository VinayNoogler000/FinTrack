// ------------------------ Selecting HTML-DOM Elements -----------------------
const transContEl = document.querySelector(".transactions-container"); // transaction-container-element
const formEl = document.querySelector(".transaction-form");
const sourceInpEl = document.querySelector("#sourceInp");
const amountInpEl = document.querySelector("#amountInp");
const earningsBtnEl = document.querySelector("#earningsBtn");
const expensesBtnEl = document.querySelector("#expensesBtn");

// ------------ Function to Create & Display `.transactions` element -----------
const addTransactionEl = (source, amount, buttonText) => {
  const transactionEl = document.createElement("div");
  transactionEl.className = "transactions";

  const sourceEl = document.createElement("span");
  sourceEl.className = "source";
  sourceEl.textContent = source;
  transactionEl.appendChild(sourceEl);

  transactionEl.appendChild(document.createElement("hr"));

  const amountInfoEl = document.createElement("div"); // amount-info-element
  amountInfoEl.className = "amount-info";
  transactionEl.appendChild(amountInfoEl);

  const amountEl = document.createElement("span");
  amountEl.className = "amount";
  amountEl.textContent = buttonText.toLowerCase() === "earnings" ? "+ ₹" + amount : "- ₹" + amount;

  const transTypeEl = document.createElement("span"); // transaction-type-element
  transTypeEl.className = "type";

  if (buttonText.toLowerCase() === "earnings") {
    transTypeEl.classList.add("credit");
    transTypeEl.textContent = "C";
  } else {
    transTypeEl.classList.add("debit");
    transTypeEl.textContent = "D";
  }
  amountInfoEl.append(amountEl, transTypeEl);

  transContEl.appendChild(transactionEl); // add the transactionEl on the webpage
};

// ----------------------- Define Event Listeners for Elements --------------------
let clickedBtn; // used to track the clicked button, either earnings-btn or expenses-btn

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let buttonText = clickedBtn.children[2].innerText; // get button text - "earnings" or "expenses"
  addTransactionEl(sourceInpEl.value, amountInpEl.value, buttonText);

  // Empty the Input-Fields:
  sourceInpEl.value = amountInpEl.value = "";
});

earningsBtnEl.addEventListener("click", () => {
  clickedBtn = earningsBtnEl;
});

expensesBtnEl.addEventListener("click", () => {
  clickedBtn = expensesBtnEl;
});
