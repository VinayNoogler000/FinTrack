// ----------- Require UUID Library for Generating Unique Transaction IDs: -----------
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';
import swal from 'https://cdn.skypack.dev/sweetalert';

// ------------------------ Select the Globally Required HTML-DOM Elements -----------------------
const transactionFormEl = document.querySelector(".transaction-form"); //transaction-form-element
const sourceInpEl = document.querySelector("#sourceInp");
const amountInpEl = document.querySelector("#amountInp");
const earningsEl = document.querySelector("#earnings");
const expensesEl = document.querySelector("#expenses");
const balanceEl = document.querySelector("#balance");

// ----------------- Function to Delete a specific Transaction ----------------
const deleteTransaction = (transactionEl) => {
  swal({
    title: "Are you sure?", 
    text: "This action will delete your transaction and you need to add it from scratch in order to revert back!",
    icon: "warning",
    buttons: [true, "Yes"],
    dangerMode: true,
  }).then((result) => { //if the user clicks on the "Yes" button
    if(result) {
      // Remove the transactionEl from the webpage and the 'finVars.transactions[]' array:
      transactionEl.remove();
			finVars.transactions = finVars.transactions.filter((transaction) => transaction.id != transactionEl.id);
      
      // Update the Earnings, Expenses, and Balance:
      const transactionType = transactionEl.querySelector(".type").textContent;
			const transactionAmount = Number(transactionEl.querySelector(".amount").textContent.slice(3));
			if (transactionType === "C") {
				finVars.earnings -= transactionAmount;
				earningsEl.textContent = "₹" + finVars.earnings;
			} else {
				finVars.expenses -= transactionAmount;
				expensesEl.textContent = "₹" + finVars.expenses;
			}
			calculateBalance();

			swal("Deleted!", "Your transaction has been deleted.", {icon: "success",});
    }
    else { //if the user clicks on the "Cancel" button
      swal("Safe!", "Your transaction is safe and secure.", {icon: "info"});
    }
  });
}

// ----------------- Function to Edit a specific Transaction ----------------
const editTransaction = (transactionEl) => {
  // Select the 'source' and 'amount' elements of the 'transactionEl' for updating them:
  const sourceEl = transactionEl.querySelector(".source");
  const amountEl = transactionEl.querySelector(".amount");

  // Extract the required properties from the 'transactionEl' and add them to the Input-Fields:
  sourceInpEl.value = sourceEl.textContent;
  amountInpEl.value = amountEl.textContent.slice(3); //slice the first 3 characters from the 'amount' text, i.e, "-/+ ₹"

  finVars.editTransactionEl = transactionEl; //store the 'transactionEl' which is being edited
}

// ------- Auxillary Function to Define Event Listeners and Handlers for the elements ------
const defineEvents = (transSecEls) => {
  const {transactionEl, transMainContEl, transOptionsContEl, editBtnEl, delBtnEl} = transSecEls;
  
  transMainContEl.addEventListener("click", () => transOptionsContEl.style.display = transOptionsContEl.style.display === "flex" ? "none" : "flex");
  
  editBtnEl.addEventListener("click", (event) => {
    event.stopPropagation();
    editTransaction(transactionEl);
  });

  delBtnEl.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteTransaction(transactionEl);
  });
}

// ---------- Auxillary Function to Add and Display the elements on the Webpage ------------
const renderElements = (transSecEls, transactionContEl) => {
  const {transactionEl, transMainContEl, transOptionsContEl} = transSecEls;
  transactionEl.append(transMainContEl, transOptionsContEl);
  transactionContEl.prepend(transactionEl); // add the transactionEl on the webpage
}

// ------------ Auxillary Function to Create all the required HTML-DOM Elements ------------
const createElements = (transactionObj) => {
  // Extract the required properties from the 'transactionObj':
  const {source, amount, type, id} = transactionObj;
  const isCredit = type === "Credit";

  // Create all the required HTML-DOM Elements:
  const transactionEl = document.createElement("div");
  const transMainContEl = document.createElement("div"); //transaction-main-container-element
  const transOptionsContEl = document.createElement("div"); //transaction-options-container-element

  transactionEl.className = "transactions";
  transactionEl.id = id;

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
const addTransactionEl = (transactionObj) => {
  // Select the required "transaction-container" HTML element:
  const transactionContEl = document.querySelector(".transactions-container"); // transaction-container-element

  // Create all the required HTML-DOM Elements:
  const transSecEls = createElements(transactionObj); //'transSecEls' stores all the important elements of the 'transaction-section'

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

// ------- Function to Calculate Earnings, Expenses, and Balance & Return the New Transaction --------
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

  return newTransaction;
};

// ---------------------------- Function to Update the Transaction ----------------------------
const updateTransaction = (buttonText) => {
  // Find the transaction which is being edited and update it:
  const transactionToEdit = finVars.transactions.find((transaction) => transaction.id === finVars.editTransactionEl.id);
  const editTransElSource = finVars.editTransactionEl.querySelector(".source");
  const editTransElAmount = finVars.editTransactionEl.querySelector(".amount");
  const editTransElType = finVars.editTransactionEl.querySelector(".type");
  let isCredit = buttonText === "earnings";

  // Update the Earnings, Expenses, and Balance:
  if(isCredit) {
    finVars.earnings = (finVars.earnings - transactionToEdit.amount) + Number(amountInpEl.value);
    earningsEl.textContent = "₹" + finVars.earnings;
  }
  else {
    finVars.expenses = (finVars.expenses - transactionToEdit.amount) + Number(amountInpEl.value);
    expensesEl.textContent = "₹" + finVars.expenses;
  }
  calculateBalance();

  console.log(transactionToEdit);

  // Update the 'transactionToEdit' object with the new values:
  transactionToEdit.source = sourceInpEl.value;
  transactionToEdit.amount = amountInpEl.value;
  transactionToEdit.type = isCredit ? "Credit" : "Debit";
  transactionToEdit.currBalance = finVars.balance;

  // Update the 'editTransactionEl' on the webpage:
  editTransElSource.textContent = sourceInpEl.value;
  editTransElAmount.textContent = isCredit ? '+ ₹' + amountInpEl.value : "- ₹" + amountInpEl.value;
  editTransElType.classList.remove("credit", "debit");
  editTransElType.classList.add(isCredit ? "credit" : "debit");
  editTransElType.textContent = isCredit ? "C" : "D";
  
  console.log(transactionToEdit, finVars.transactions);
}

// ---------------------------- Function to Handle the Transaction Form ----------------------------
const handleTransactionForm = (event) => {
  event.preventDefault();

  let clickedBtn = event.submitter; // used to track the clicked button, either earnings-btn or expenses-btn
  let buttonText = clickedBtn.children[2].innerText.toLowerCase(); // get button text - "earnings" or "expenses"

  //if the user is editing an existing transaction:
  if(finVars.editTransactionEl != null) { 
    swal({
      title: "Are you sure?", 
      text: "This action will update your transaction!",
      icon: "warning",
      buttons: [true, "Yes"],
      dangerMode: true,
    }).then( (result) => {
      if(result) {
        updateTransaction(buttonText); 
        sourceInpEl.value = amountInpEl.value = ""; //empty the input fields
        finVars.editTransactionEl = null; //reset the 'editTransactionEl' to null
			  swal("Updated!", "Your transaction has been updated.", "success");
      }
      else { //if the user clicks on the "Cancel" button
        swal("Safe!", "Your transaction is safe from any modifications.", "info");
      }
    });
    return;
  } 

  // else, if the user is adding a new transaction:
  const newTransaction = calculateFinancialVariables(sourceInpEl.value, amountInpEl.value, buttonText);
  addTransactionEl(newTransaction);

  // Empty the Input-Fields:
  sourceInpEl.value = amountInpEl.value = "";
}

// ----------------------------- Define the Financial Variables Object -----------------------------
const finVars = {
  earnings: 0,
  expenses: 0,
  balance: 0,
  transactions: [],
  editTransactionEl: null //used to store the transactionEl which is being edited
}

// ----------------------- Define Event Listeners & Handlers for Transaction-Form --------------------
transactionFormEl.addEventListener("submit", handleTransactionForm);
