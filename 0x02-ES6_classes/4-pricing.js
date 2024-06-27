import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if ((typeof amount !== 'number') && !(amount instanceof Number)) {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number')) {
      throw new TypeError('amount should be a number');
    }
    if ((typeof conversionRate !== 'number')) {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
