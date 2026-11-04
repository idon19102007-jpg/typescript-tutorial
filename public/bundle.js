"use strict";
(() => {
  // src/classes/Invoice.ts
  var Invoice = class {
    constructor(client, details2, amount2) {
      this.client = client;
      this.details = details2;
      this.amount = amount2;
    }
    format() {
      return `${this.client} owes \xA3${this.amount} for ${this.details}`;
    }
  };

  // src/classes/Payment.ts
  var Payment = class {
    constructor(recipient, details2, amount2) {
      this.recipient = recipient;
      this.details = details2;
      this.amount = amount2;
    }
    format() {
      return `${this.recipient} is owed \xA3${this.amount} for ${this.details}`;
    }
  };

  // src/classes/ListTemplate.ts
  var ListTemplate = class {
    constructor(container) {
      this.container = container;
    }
    render(item, heading, pos) {
      const li = document.createElement("li");
      const h4 = document.createElement("h4");
      h4.innerText = heading;
      li.append(h4);
      const p = document.createElement("p");
      p.innerText = item.format();
      li.append(p);
      if (pos === "start") {
        this.container.prepend(li);
      } else {
        this.container.append(li);
      }
    }
  };

  // src/app.ts
  var form = document.querySelector(".new-item-form");
  var type = document.querySelector("#type");
  var tofrom = document.querySelector("#tofrom");
  var details = document.querySelector("#details");
  var amount = document.querySelector("#amount");
  var ul = document.querySelector("ul");
  var list = new ListTemplate(ul);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
      doc = new Invoice(...values);
    } else {
      doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
  });
  var arr = ["ryu", 25, true];
  arr[0] = false;
  arr[1] = "yoshi";
  arr = [30, false, "yoshi"];
  var tup = ["ryu", 25, true];
  tup[0] = "ken";
  var student;
  student = ["chun-li", 23564];
  console.log(student);
})();
