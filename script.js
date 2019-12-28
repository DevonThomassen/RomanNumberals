(function () {
  document.getElementById("input").placeholder = "Please enter a number";
})();

function read() {
  const input = document.getElementById("input").value;
  let output;

  if (!isNaN(input) && input >= 0) {

    // Units
    if (input.length === 1) {
      output = units[input];
    }

    // Tens
    if (input.length === 2) {
      const t = input.charAt(0);
      const u = input.charAt(1);

      output = `${tens[t]}${units[u]}`
    }

    // Hundreds
    if (input.length === 3) {
      const h = input.charAt(0);
      const t = input.charAt(1);
      const u = input.charAt(2);

      output = `${hundreds[h]}${tens[t]}${units[u]}`
    }

    // Thousands
    if (input.length === 4) {
      output = mathThousands(input);
    }

    // Tens of thousands
    if (input.length === 5) {
      const t = input.charAt(0);

      output = `<span class="line">${tens[t]}</span>`;
      output += mathThousands(input);
    }

    // Hundreds of thousand
    if (input.length === 6) {
      const h = input.charAt(0);
      const t = input.charAt(1);

      output = `<span class="line">${hundreds[h]}${tens[t]}</span>`;
      output += mathThousands(input);
    }

    // Millions
    if (input.length === 7) {
      const m = input.charAt(0);
      const h = input.charAt(1);
      const t = input.charAt(2);

      output = `<span class="line">${thousands[m]}${hundreds[h]}${tens[t]}</span>`;
      output += mathThousands(input);
    }

    if (input.length >= 8) {
      outputError();
      return;
    }

  }
  else {
    outputError();
    return;
  }

  document.getElementById("output").innerHTML = output;
}

function mathThousands(input) {
  let str;
  const th = input.charAt(input.length - 4);
  const h = input.charAt(input.length - 3);
  const te = input.charAt(input.length - 2);
  const u = input.charAt(input.length - 1);

  if (th < 4) {
    str = `${thousands[th]}`;
  }

  else if (th >= 4) {
    str = `<span class="line">${thousands[th]}</span>`;
  }
  return str += `${hundreds[h]}${tens[te]}${units[u]}`;
}

function outputError() {
  alert("Please enter a number in the textbox");
  document.getElementById("input").value = "";
}
