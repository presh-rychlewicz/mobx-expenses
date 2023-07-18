export type ExpenseItem = {
  amountPLN: number;
  id: number;
  title: string;
};

export type ExpenseItemExtended = ExpenseItem & {
  amountEUR: number;
};
