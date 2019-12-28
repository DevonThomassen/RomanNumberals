const units = {
  "0": "",
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
}

const tens = {
  "1": "X",
  "2": "XX",
  "3": "XXX",
  "4": "XL",
  "5": "L",
  "6": "LX",
  "7": "LXX",
  "8": "LXXX",
  "9": "XC",
}

const hundreds = {
  "1": "C",
  "2": "CC",
  "3": "CCC",
  "4": "CD",
  "5": "D",
  "6": "DC",
  "7": "DCC",
  "8": "DCCC",
  "9": "CM",
}

const thousands = {
  "1": "M",
  "2": "MM",
  "3": "MMM",
  // Starts upperline
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
}

(function () {
  document.getElementById("input").placeholder = "Please enter a number";
})();

function read() {
  const input = document.getElementById("input").value;
  let output;

  if (!isNaN(input)) {

    // Units
    if (input.length === 1) {
      output = units[input];
    }

    // Tens
    if (input.length === 2) {

      const n = input.charAt(0);
      const n2 = input.charAt(1);

      output = `${tens[n]}${units[n2]}`
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
      // TODO: Thousands
    }

  }
  else {
    alert("Please enter a number in the textbox");
    document.getElementById("input").value = "";
    return;
  }

  document.getElementById("output").innerHTML = output;
}
