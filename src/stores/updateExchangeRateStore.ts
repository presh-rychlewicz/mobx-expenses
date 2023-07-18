import { makeAutoObservable } from "mobx";

export type ExchangeRate = number;
export class UpdateExchangeRate {
  private readonly initialExchangeRateValue = 0;

  exchangeRate: ExchangeRate = this.initialExchangeRateValue;

  constructor() {
    makeAutoObservable(this);
  }

  updateExchangeRate(value: ExchangeRate) {
    this.exchangeRate = value;
  }

  resetForm() {
    this.exchangeRate = this.initialExchangeRateValue;
  }
}
