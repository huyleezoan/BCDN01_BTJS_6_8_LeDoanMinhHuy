// Bài 5 
/**
 * Mô hình 3 khối
 * Khối 1:
 * số có 2 chữ số
 * 
 * Khối 2:
 * B1: Tạo biến so,tong
 * B2: Lấy giá trị từ form cho biến so
 * B3: Thiết lập công thức:
 * tong = so%10 + Math.floor(so/10);
 * B4: In kết quả lên UI
 * Khối 3:
 * tổng của 2 chữ số
 */

var tong =0;
document.getElementById("btn_BT5").onclick = function(){
    var so = document.getElementById("inputSo").value;
    tong = so%10 + Math.floor(so/10);
    document.getElementById("txtBT5").innerHTML="Tổng ký số của "+so+" la: "+tong;
}