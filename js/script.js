function showForm(type) {
  document.getElementById("form-luas").style.display = "none";
  document.getElementById("form-keliling").style.display = "none";

  if (type === "luas") {
    document.getElementById("form-luas").style.display = "block";
  } else if (type === "keliling") {
    document.getElementById("form-keliling").style.display = "block";
  }
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById("nilaiAlasLuas").value);
  const tinggi = parseFloat(document.getElementById("nilaiTinggiLuas").value);
  const errorDiv = document.getElementById("error-luas");
  errorDiv.innerHTML = "";

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    errorDiv.innerHTML = "Masukkan nilai alas dan tinggi yang valid!";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  document.getElementById(
    "caraLuas"
  ).textContent = `1/2 * ${alas} * ${tinggi} = ${luas.toFixed(0)}`;
  document.getElementById("luasHasil").textContent = `${luas.toFixed(0)}`;
  document.getElementById("results-luas").style.display = "block";
}

function hitungKeliling() {
  const alas = parseFloat(document.getElementById("nilaiAlasKeliling").value);
  const sisiB = parseFloat(document.getElementById("nilaiSisiB").value);
  const sisiC = parseFloat(document.getElementById("nilaiSisiC").value);
  const errorDiv = document.getElementById("error-keliling");
  errorDiv.innerHTML = "";

  if (
    isNaN(alas) ||
    isNaN(sisiB) ||
    isNaN(sisiC) ||
    alas <= 0 ||
    sisiB <= 0 ||
    sisiC <= 0
  ) {
    errorDiv.innerHTML = "Masukkan nilai alas dan kedua sisi yang valid!";
    return;
  }

  const keliling = alas + sisiB + sisiC;
  document.getElementById(
    "caraKeliling"
  ).textContent = `${alas} + ${sisiB} + ${sisiC} = ${keliling.toFixed(0)}`;
  document.getElementById("kelilingHasil").textContent = `${keliling.toFixed(
    0
  )}`;
  document.getElementById("results-keliling").style.display = "block";
}

function resetForm(type) {
  if (type === "luas") {
    document.getElementById("nilaiAlasLuas").value = "";
    document.getElementById("nilaiTinggiLuas").value = "";
    document.getElementById("results-luas").style.display = "none";
    document.getElementById("error-luas").innerHTML = "";
    document.getElementById("caraLuas").textContent = "";
    document.getElementById("luasHasil").textContent = "";
  } else if (type === "keliling") {
    document.getElementById("nilaiAlasKeliling").value = "";
    document.getElementById("nilaiSisiB").value = "";
    document.getElementById("nilaiSisiC").value = "";
    document.getElementById("results-keliling").style.display = "none";
    document.getElementById("error-keliling").innerHTML = "";
    document.getElementById("caraKeliling").textContent = "";
    document.getElementById("kelilingHasil").textContent = "";
  }
}
