document.getElementById("temp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseFloat(document.getElementById("temp-value").value);
  const from = document.getElementById("from-temp").value;
  const to = document.getElementById("to-temp").value;
  const resultSpan = document.getElementById("temp-result").querySelector("span");

  if (isNaN(value)) {
    resultSpan.textContent = "Valor inválido.";
    return;
  }

  let celsius;

  switch (from) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * 5 / 9; break;
    case "K": celsius = value - 273.15; break;
  }

  let result;

  switch (to) {
    case "C": result = celsius; break;
    case "F": result = (celsius * 9 / 5) + 32; break;
    case "K": result = celsius + 273.15; break;
  }

  resultSpan.textContent = `${result.toFixed(2)} °${to}`;
});
