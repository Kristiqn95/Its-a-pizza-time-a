import { formatCurrency } from "./utils";
import classNames from "classnames";
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    if (this._type === Notification.types.HAWAIIAN) {
      this.container.classList.add("is-danger");
    }
  }

  empty(){
    this.container.remove();
  }

  render() {
    const isHawaiian = type === Notification.types.HAWAIIAN;
    // questionable requirement but ok ${isHawaiian ? " is-danger" : ""}  why classNames
    const cNames = classNames(`notification type-${type}`,{ 'is-danger': isHawaiian});
    const template = `
<div class="notification type-pepperoni">
  <button class="delete"></button>
  🍕 <span class="type">pepperoni</span> (<span class="price">0,00</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    const deleteButton = this.container.querySelector(".delete");
    deleteButton.onclick = () => this.empty();
  }
}