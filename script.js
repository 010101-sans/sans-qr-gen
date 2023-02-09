function generateQRCode() {
    const input = document.getElementById('input').value;
    const qrCode = document.getElementById('qr-code');
    qrCode.innerHTML = `<img src="https://chart.apis.google.com/chart?cht=qr&chs=350x350&chl=${input}">`;
}
