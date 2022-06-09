let submit = document.querySelector(".submit");
let data = document.querySelector(".input");
let barcode = document.querySelector("#barcode");
let barcodeContainer = document.querySelector(".barcode-container");
let numOfBarcodes = document.querySelector(".barcode-container");

submit.addEventListener("click", () => {
  JsBarcode("#barcode", data.value !== "" ? data.value : Date.now(), {
    background: "#fff",
    color: "#000",
    height: 70,
    displayValue: true,
  });
});

barcodeContainer.innerHTML = `<svg id="barcode"></svg>`.repeat(30);
