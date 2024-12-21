// ----------- Require UUID Library for Generating Unique Transaction IDs: -----------
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

// ------------------------ Select the Globally Required HTML-DOM Elements -----------------------
const transactionFormEl = document.querySelector(".transaction-form"); //transaction-form-element
const sourceInpEl = document.querySelector("#sourceInp");
const amountInpEl = document.querySelector("#amountInp");
const earningsEl = document.querySelector("#earnings");
const expensesEl = document.querySelector("#expenses");
const balanceEl = document.querySelector("#balance");

// ----------------- Function to Display Options of '.transactions' element ----------------

// ------- Auxillary Function to Define Event Listeners and Handlers for the elements ------
const defineEvents = (transSecEls) => {
  const {transMainContEl, transOptionsContEl, editBtnEl, delBtnEl} = transSecEls;
  transMainContEl.addEventListener("click", () => transOptionsContEl.style.display = transOptionsContEl.style.display === "flex" ? "none" : "flex");
  editBtnEl.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("editBtn clicked!");
  });

  delBtnEl.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("delBtn clicked!");
  });
}

// ---------- Auxillary Function to Add and Display the elements on the Webpage ------------
const renderElements = (transSecEls, transactionContEl) => {
  const {transactionEl, transMainContEl, transOptionsContEl} = transSecEls;
  transactionEl.append(transMainContEl, transOptionsContEl);
  transactionContEl.prepend(transactionEl); // add the transactionEl on the webpage
}

// ------------ Auxillary Function to Create all the required HTML-DOM Elements ------------
const createElements = (source, amount, isCredit) => {
  const transactionEl = document.createElement("div");
  const transMainContEl = document.createElement("div"); //transaction-main-container-element
  const transOptionsContEl = document.createElement("div"); //transaction-options-container-element

  transactionEl.className = "transactions";

  transMainContEl.className = "main";
  transMainContEl.innerHTML = `
  <span class="source">${source}</span>
  <hr />
  <div class="amount-info">
    <span class="amount">${isCredit ? "+ ₹" + amount : "- ₹" + amount}</span>
    <span class="type ${isCredit ? 'credit' : 'debit'}">${isCredit ? 'C' : 'D'}</span>
  </div>`;

  transOptionsContEl.className = "options";
  transOptionsContEl.innerHTML = `
    <abbr title="Edit Transaction">
      <button class="editBtn">
        <img src="../assets/pencil.svg" alt="Pencil" />
      </button>
    </abbr>

    <abbr title="Delete Transaction">
      <button class="deleteBtn">
        <img src="../assets/trash_can.svg" alt="Trash Can" />
      </button>
    </abbr>`;

  return { 
    transactionEl, transMainContEl, transOptionsContEl, 
    editBtnEl: transOptionsContEl.querySelector(".editBtn"), 
    delBtnEl: transOptionsContEl.querySelector(".deleteBtn") 
  };
}

// ------------ Function to Create & Display `.transactions` element -----------
const addTransactionEl = (source, amount, transactionCategory) => {
  const isCredit = transactionCategory === "earnings" ? true : false; //to make the tertiary operation smaller, and to avoid redundancy

  // Select the required "transaction-container" HTML element:
  const transactionContEl = document.querySelector(".transactions-container"); // transaction-container-element

  // Create all the required HTML-DOM Elements:
  const transSecEls = createElements(source, amount, isCredit); //'transSecEls' stores all the important elements of the 'transaction-section'

  // Add all the Elements on the webpage: 
  renderElements(transSecEls, transactionContEl);

  // Define Event Listeners & Handlers for for the required Elements:
  defineEvents(transSecEls);
};

// -------- Auxillary Functions to Calculate & Update Earnings, Expenses and Balance --------
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

// ----------------------- Define Event Listeners & Handlers for Transaction-Form --------------------
transactionFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let clickedBtn = event.submitter; // used to track the clicked button, either earnings-btn or expenses-btn
  let buttonText = clickedBtn.children[2].innerText.toLowerCase(); // get button text - "earnings" or "expenses"

  calculateFinancialVariables(sourceInpEl.value, amountInpEl.value, buttonText);
  addTransactionEl(sourceInpEl.value, amountInpEl.value, buttonText);

  // Empty the Input-Fields:
  sourceInpEl.value = amountInpEl.value = "";
});
