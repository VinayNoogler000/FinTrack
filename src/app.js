// ------------------------ Selecting HTML-DOM Elements -----------------------
const transactionContEl = document.querySelector(".transactions-container"); // transaction-container-element
const transactionFormEl = document.querySelector(".transaction-form"); //transaction-form-element
const sourceInpEl = document.querySelector("#sourceInp");
const amountInpEl = document.querySelector("#amountInp");
const earningsEl = document.querySelector("#earnings");
const expensesEl = document.querySelector("#expenses");
const balanceEl = document.querySelector("#balance");

// ------------ Function to Create & Display `.transactions` element -----------
const addTransactionEl = (source, amount, transactionCategory) => {
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
  amountEl.textContent = transactionCategory === "earnings" ? "+ ₹" + amount : "- ₹" + amount;

  const transactionTypeEl = document.createElement("span"); // transaction-type-element
  transactionTypeEl.className = "type";

  if (transactionCategory === "earnings") {
    transactionTypeEl.classList.add("credit");
    transactionTypeEl.textContent = "C";
  } else {
    transactionTypeEl.classList.add("debit");
    transactionTypeEl.textContent = "D";
  }
  amountInfoEl.append(amountEl, transactionTypeEl);

  transactionContEl.appendChild(transactionEl); // add the transactionEl on the webpage
};

// ----- Auxillary Function to Calculate & Update Earnings, Expenses and Balance --------
const calculateEarnings = () => {
  totalEarnings += Number(amountInpEl.value);
  earningsEl.textContent = "₹" + totalEarnings;
};

const calculateExpenses = () => {
  totalExpenses += Number(amountInpEl.value);
  expensesEl.textContent = "₹" + totalExpenses;
};

const calculateBalance = () => {
  balance = totalEarnings - totalExpenses;
  balanceEl.textContent =
    balance >= 0 ? "₹" + balance : "- ₹" + Math.abs(balance);
};

// ---------------- Function to Calculate Earnings, Expenses, and Balance -----------------
const calculateFinancialVariables = (transactionCategory) => {
  if (transactionCategory === "earnings") {
    calculateEarnings();
  } else {
    calculateExpenses();
  }

  calculateBalance();
};

// ---------------------------- Initialize Variables as Trackers ----------------------------
let totalEarnings = 0;
let totalExpenses = 0;
let balance;

// ----------------------- Define Event Listeners & Handlers for Elements --------------------
transactionFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let clickedBtn = event.submitter; // used to track the clicked button, either earnings-btn or expenses-btn
  let buttonText = clickedBtn.children[2].innerText.toLowerCase(); // get button text - "earnings" or "expenses"

  addTransactionEl(sourceInpEl.value, amountInpEl.value, buttonText);
  calculateFinancialVariables(buttonText);

  // Empty the Input-Fields:
  sourceInpEl.value = amountInpEl.value = "";
});
