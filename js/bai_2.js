// Bài 2 
/**
 * Mô hình 3 khối
 * Khối 1:
 * 5 số thực
 * 
 * Khối 2:
 * B1: Tạo các biến số thực so_1, so_2, so_3, so_4, so_5, trungBinh
 * B2: Lấy giá trị biến so_1, so_2, so_3, so_4, so_5 từ form
 * B3: Thiết lập công thức
 * trung bình = (so_1+ so_2+ so_3+ so_4+ so_5)/5;
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3:
 * Giá trị trung bình
 * 
 */
var giaTriTrungBinh = 0;
document.getElementById("btn_BT2").onclick=function(){
    var so_1 = parseFloat(document.getElementById("inputSo1").value); 
    var so_2 =parseFloat(document.getElementById("inputSo2").value); 
    var so_3 = parseFloat(document.getElementById("inputSo3").value); 
    var so_4 = parseFloat(document.getElementById("inputSo4").value); 
    var so_5 = parseFloat(document.getElementById("inputSo5").value); 
    giaTriTrungBinh=(so_1+ so_2+ so_3+ so_4+ so_5)/5;

    document.getElementById('txtBT2').innerHTML="Giá trị trung bình của 5 số vừa nhập là: "
    + giaTriTrungBinh;
}