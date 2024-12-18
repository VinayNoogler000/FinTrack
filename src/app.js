// ----------- Require UUID Library for Generating Unique Transaction IDs: -----------
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

// ------------------------ Selecting HTML-DOM Elements -----------------------
const transactionFormEl = document.querySelector(".transaction-form"); //transaction-form-element
const sourceInpEl = document.querySelector("#sourceInp");
const amountInpEl = document.querySelector("#amountInp");
const earningsEl = document.querySelector("#earnings");
const expensesEl = document.querySelector("#expenses");
const balanceEl = document.querySelector("#balance");
const transactionContEl = document.querySelector(".transactions-container"); // transaction-container-element

// ------------ Function to Create & Display `.transactions` element -----------
const addTransactionEl = (source, amount, transactionCategory) => {
  // Create the Transaction elements, with it's children elements: 
  const transactionEl = document.createElement("div");
  transactionEl.className = "transactions";

  const sourceEl = document.createElement("span");
  sourceEl.className = "source";
  sourceEl.textContent = source;

  const amtInfoContEl = document.createElement("div"); // amount-info-container-element
  amtInfoContEl.className = "amount-info";

  const amountEl = document.createElement("span");
  amountEl.className = "amount";
  amountEl.textContent = transactionCategory === "earnings" ? "+ ₹" + amount : "- ₹" + amount;

  const transactionTypeEl = document.createElement("span"); // transaction-type-element
  transactionTypeEl.className = "type";
  transactionTypeEl.classList.add(transactionCategory === "earnings" ? "credit" : "debit");
  transactionTypeEl.textContent = transactionCategory === "earnings" ? 'C' : 'D';

  // Add all the Elements on the webpage: 
  amtInfoContEl.append(amountEl, transactionTypeEl);
  transactionEl.append(sourceEl, document.createElement("hr"), amtInfoContEl);

  transactionContEl.prepend(transactionEl); // add the transactionEl on the webpage
};

// -------- Auxillary Function to Calculate & Update Earnings, Expenses and Balance --------
const calculateEarnings = () => {
  finVars.earnings += Number(amountInpEl.value);
  earningsEl.textContent = "₹" + finVars.earnings;
};

const calculateExpenses = () => {
  finVars.expenses += Number(amountInpEl.value);
  expensesEl.textContent = "₹" + finVars.expenses;
};

const calculateBalance = () => {
  finVars.balance = finVars.earnings - finVars.expenses;
  balanceEl.textContent = finVars.balance >= 0 ? "₹" + finVars.balance : "- ₹" + Math.abs(finVars.balance);
};

// ---------------- Function to Calculate Earnings, Expenses, and Balance -----------------
const calculateFinancialVariables = (source, amount, transactionCategory) => {
  const newTransaction = {source, amount, type: undefined, currBalance: undefined, id: uuidv4()};

  if (transactionCategory === "earnings") {
    newTransaction.type = "Credit";
    calculateEarnings();
  } else {
    newTransaction.type = "Debit";
    calculateExpenses();
  }

  calculateBalance();
  newTransaction.currBalance = finVars.balance; //add the "currBalance" after adding a new transaction

  // Add the new transaction to the "finVars.transactions[]" array:
  finVars.transactions.push(newTransaction);
};

// ---------------------------- Initialize Variables as Financial Trackers ----------------------------
const finVars = {
  earnings: 0,
  expenses: 0,
  balance: 0,
  transactions: []
}

// ----------------------- Define Event Listeners & Handlers for Elements --------------------
transactionFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let clickedBtn = event.submitter; // used to track the clicked button, either earnings-btn or expenses-btn
  let buttonText = clickedBtn.children[2].innerText.toLowerCase(); // get button text - "earnings" or "expenses"

  calculateFinancialVariables(sourceInpEl.value, amountInpEl.value, buttonText);
  addTransactionEl(sourceInpEl.value, amountInpEl.value, buttonText);

  // Empty the Input-Fields:
  sourceInpEl.value = amountInpEl.value = "";
});
