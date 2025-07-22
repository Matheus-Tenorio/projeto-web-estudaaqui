document.getElementById("length-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseFloat(document.getElementById("length-value").value);
  const from = document.getElementById("from-length").value;
  const to = document.getElementById("to-length").value;
  const resultSpan = document.getElementById("length-result").querySelector("span");

  if (isNaN(value)) {
    resultSpan.textContent = "Valor inválido.";
    return;
  }

  // Conversão para metros (base)
  const toMeters = {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    in: 0.0254
  };

  const meters = value * toMeters[from];
  const converted = meters / toMeters[to];

  resultSpan.textContent = `${converted.toFixed(4)} ${to}`;
});
