// Bài 4
/**
 * Khối 1:
 * chiều dài, chiều rộng
 *
 * Khối 2:
 * B1: Tạo các biến chieuDai, chieuRong,chuVi, DienTich
 * B2: Lấy giá trị từ form cho các biến chieuDai, chieuRong
 * B3: Thiết lập công thức:
 * chuVi = (chiedDai + chieuRong)*2;
 * dienTich = chieuDai * chieuRong;
 * B4: In kết quả lên UI
 *
 * Khối 3:
 * chu vi, diện tích
 */

var chuVi = 0;
var dienTich = 0;
document.getElementById('btn_BT4').onclick = function () {
  var chieuDai = parseFloat(document.getElementById('inputChieuDai').value);
  var chieuRong = parseFloat(document.getElementById('inputChieuRong').value);
  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;
  console.log(chieuDai,chieuRong);
  document.getElementById('txtBT4').innerHTML =
    'Chu vi: ' + chuVi + '<br>Diện tích: ' + dienTich;
};
