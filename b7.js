var chieuDai = parseInt(prompt("Nhập chiều dài của hình chữ nhật:"));
var chieuRong = parseInt(prompt("Nhập chiều rộng của hình chữ nhật:"));
var chuVi = 2 * (chieuDai + chieuRong);
var dienTich = chieuDai * chieuRong;
console.log("Chu vi của hình chữ nhật là: " + chuVi.toFixed(2));
console.log("Diện tích của hình chữ nhật là: " + dienTich.toFixed(2));