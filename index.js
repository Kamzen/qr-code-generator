const QRCode = require("qrcode");

QRCode.toFile(
  "qr.png",
  "https://www.facebook.com/",
  { width: 1000 },
  function (err) {
    if (err) throw err;
    console.log("QR code saved!");
  }
);
