import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { PLN_TO_EUR_RATE } from "../constants";
import { roundTo2dp } from "../utils";
import { ExpenseItem } from "./shared";

class Expense {
  id = Math.random();
  title = "";
  amountPLN = 0;

  constructor(
    title: ExpenseItem["title"],
    amountPLN: ExpenseItem["amountPLN"]
  ) {
    makeAutoObservable(this);

    this.title = title;
    this.amountPLN = amountPLN;
  }

  get amountEUR() {
    return roundTo2dp(this.amountPLN / PLN_TO_EUR_RATE);
  }
}

export class Expenses {
  expenses: ExpenseItem[] = [];

  constructor(expenses: ExpenseItem[]) {
    makeObservable(this, {
      expenses: observable,
      sum: computed,
      deleteExpense: action.bound,
      addExpenseToList: action.bound,
    });

    this.expenses = expenses;
  }

  get sum() {
    const sumPLN = this.expenses.reduce(
      (sum, { amountPLN }) => sum + amountPLN,
      0
    );
    const sumEUR = this.expenses.reduce(
      (sum, { amountEUR }) => sum + amountEUR,
      0
    );

    return {
      PLN: roundTo2dp(sumPLN),
      EUR: roundTo2dp(sumEUR),
    };
  }

  addExpenseToList(
    title: ExpenseItem["title"],
    amountPLN: ExpenseItem["amountPLN"]
  ) {
    const newExpense = new Expense(title, amountPLN);

    this.expenses.push(newExpense);
  }

  deleteExpense(id: ExpenseItem["id"]) {
    const index = this.expenses.findIndex((expense) => expense.id === id);

    this.expenses.splice(index, 1);
  }
}

const expensesStore = new Expenses([
  new Expense("New book about Rust", 100),
  new Expense("Snacks for a football match", 20),
  new Expense("Bus ticket", 2.55),
]);

export default expensesStore;
