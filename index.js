/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from "./libs/test.js";

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from "lodash";
const source = $t.source(1);
$t.answer(1, async () => {
  let Target_Data = {};
  let expense = 0;
  let income = 0;
  let balance = 0;
  let Restaurants = 0;
  let Income = 0;
  let Groceries = 0;
  let Rent = 0;
  /* encuentro gastos ganancias y balance*/
  _.partition(source, function (o) {
    /*pregunto si es ingreso o gasto  */
    if (o.type === "income") {
      /* verifico por categoria y sumo ingresos respectivos por categoria*/
      if (o.category === "Restaurants") Restaurants = Restaurants + o.amount;
      if (o.category === "Income") Income = Income + o.amount;
      if (o.category === "Groceries") Groceries = Groceries + o.amount;
      if (o.category === "Rent") Rent = Rent + o.amount;
      /**  coloco el total de las ganancias */
      income = income + o.amount;
    } else if (o.type === "expense") {
      /* verifico por categoria y resto gastos respectivos por categoria*/
      if (o.category === "Restaurants") Restaurants = Restaurants - o.amount;
      if (o.category === "Income") Income = Income - o.amount;
      if (o.category === "Groceries") Groceries = Groceries - o.amount;
      if (o.category === "Rent") Rent = Rent - o.amount;
      /**  coloco el total de las gastos */
      expense = expense + o.amount;
    }
  });
  /** hago el balance entre ingresos y gastos */
  balance = income - expense;
  Target_Data = {
    balance: balance,
    income: income,
    expenses: expense,
    byCategories: {
      Restaurants: Restaurants,
      Income: Income,
      Groceries: Groceries,
      Rent: Rent,
    },
  };
  console.log(Target_Data);
  return Target_Data;
});

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2);
$t.answer(2, async () => {
  // Your code goes here:
  // 1. Get ids: $source.getIds()
  // 2. Get text for every id: $source.getText(id)
  // 3. Return array of texts
  return;
});
