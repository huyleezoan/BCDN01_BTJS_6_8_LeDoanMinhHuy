// Bài 1 
/**
 * Mô hình 3 khối
 * Khối 1:
 * soNgayLam
 * 
 * Khối 2:
 * B1: Tọa biến tinhLuong, luong_1_Ngay,soNgayLam
 * B2: Lấy giá trị biến soNgayLam từ form
 * B3: Xây dụng công thức
 * tinhLuong = luong_1_Ngay*soNgayLam;
 * B4: In kết quả ra UI thông qua thẻ p
 * 
 * Khối 3:
 * tinhLuong
 * 
 */


var tinhLuong = 0;
const luong_1_Ngay = 100000;
document.getElementById("btn_BT1").onclick = function (){
    var soNgayLam = document.getElementById("inputSoNgayLam").value;
    tinhLuong = luong_1_Ngay*soNgayLam;
    document.getElementById("txtBT1").innerHTML = "Tiền lương của nhân viên này là: "+new Intl.NumberFormat('vi-VN').format(tinhLuong)+ "VND";
}
