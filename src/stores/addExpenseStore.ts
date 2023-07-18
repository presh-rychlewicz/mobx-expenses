import { makeAutoObservable } from "mobx";
import { ExpenseItem } from "./shared";

export class AddExpense {
  private readonly initialTitleValue = "";
  private readonly initialAmountPlnValue = 0;

  title: ExpenseItem["title"] = this.initialTitleValue;
  amountPLN: ExpenseItem["amountPLN"] = this.initialAmountPlnValue;

  constructor() {
    makeAutoObservable(this);
  }

  updateTitle(value: ExpenseItem["title"]) {
    this.title = value;
  }

  updateAmountPLN(value: ExpenseItem["amountPLN"]) {
    this.amountPLN = value;
  }

  resetForm() {
    this.title = this.initialTitleValue;
    this.amountPLN = this.initialAmountPlnValue;
  }
}
