# Project In Development:

## Learnings:

1. Submit Event's submitter property in the event handler, to access the button which submitted the form.
2. Skypack CDN service for easily importing and using NPM packages--like UUID library--into the browser, as ES modules.
3. SweetAlert library for displaying stylish confirmation dialog boxes, which I specifically used to get confirmation from the user, whether or not to delete the transaction. 
4. About `localStorage` API, it's key features and ways to manipulate data in the localStorage using it's methods.
5. Difference between `window` DOM `load` and `DOMContentLoaded` events.
6. Troubleshooting unable to importing NPM packages as ES6 modules, in a project, because of incorrect references.

## To-Do:
1. Add a feature to ask the user that whether they want to save the transactions locally in the browser or not, by using `swal` library confirmation box, when user has added their first transaction.
2. Implement Backend by using Express.js and RESTful APIs.
3. Build 'Search' transactions feature, which will filter transactions, based on source, amount or type of transactions.
4. Implement a feature to add the date of transaction.
5. Add a feature in which the present month will be the month for which transactions are added in the app.
6. Build a functionality to generate monthly income/P&L statement in PDF format, and the user can decide the monthl for which he/she want the statement.
7. Implement User Authentication.
8. Add a feature to add and edit notes for each transactions.
