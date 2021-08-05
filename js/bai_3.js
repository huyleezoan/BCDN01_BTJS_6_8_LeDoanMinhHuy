// Bài 3
/**
 * Khối 1:
 * soTienUSD
 *
 * Khối 2:
 * B1: Tạo biến soTienUSD, giaUSD, tienQD_VND
 * B2: Lấy giá trị từ form cho biến soTienUSD
 * B3: Thiết lập công thức
 * tienQD_VND = soTienUSD*giaUSD;
 * B4: Hiển thị kq lên UI
 *
 * Khối 3:
 * số tiền quy đổi
 */

var tienQD_VND = 0;
const giaUSD = 23500;
document.getElementById('btn_BT3').onclick = function () {
  var soTienUSD = document.getElementById('inputTienUSD').value;
  tienQD_VND = soTienUSD * giaUSD;
  document.getElementById('txtBT3').innerHTML =
    'Số tiền quy đổi từ ' + soTienUSD + 'USD sang VND là: ' + new Intl.NumberFormat('vi-VN').format(tienQD_VND)+"VND";
};
