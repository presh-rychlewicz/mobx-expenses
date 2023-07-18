import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { roundTo2dp } from "../utils";
import { ExpenseItem, ExpenseItemExtended } from "./shared";

export class Expense {
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
}

export class Expenses {
  expensesBasic: ExpenseItem[] = [];
  exchangeRate = 4.382;

  constructor(expenses: ExpenseItem[]) {
    makeObservable(this, {
      expensesBasic: observable,
      exchangeRate: observable,
      sum: computed,
      expenses: computed,
      deleteExpense: action.bound,
      addExpenseToList: action.bound,
      updateExchangeRate: action.bound,
    });

    this.expensesBasic = expenses;
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

  get expenses(): ExpenseItemExtended[] {
    return this.expensesBasic.map((expense) => ({
      ...expense,
      amountEUR: roundTo2dp(expense.amountPLN / this.exchangeRate),
    }));
  }

  addExpenseToList(
    title: ExpenseItem["title"],
    amountPLN: ExpenseItem["amountPLN"]
  ) {
    const newExpense = new Expense(title, amountPLN);

    this.expensesBasic.push(newExpense);
  }

  deleteExpense(id: ExpenseItem["id"]) {
    const index = this.expensesBasic.findIndex((expense) => expense.id === id);

    this.expensesBasic.splice(index, 1);
  }

  updateExchangeRate(value: number) {
    this.exchangeRate = value;
  }
}
