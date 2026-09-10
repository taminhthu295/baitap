function calculateDiscount() {
    // 1. Lấy giá trị đơn hàng từ input
    let orderValue = parseFloat(document.getElementById("orderValue").value);

    // Kiểm tra nếu người dùng chưa nhập hoặc nhập số không hợp lệ
    if (isNaN(orderValue) || orderValue <= 0) {
        alert("Vui lòng nhập giá trị đơn hàng hợp lệ!");
        return;
    }

    // 2. Kiểm tra xem có tích chọn VIP không
    let isVip = document.getElementById("vip").checked;

    // 3. Tính toán chiết khấu (bạn có thể thay đổi mức % theo đề bài)
    let discountPercent = 0;

    // Ví dụ: Đơn >= 1.000.000 giảm 10%, >= 500.000 giảm 5%
    if (orderValue >= 1000000) {
        discountPercent = 10;
    } else if (orderValue >= 500000) {
        discountPercent = 5;
    }

    // Nếu là thành viên VIP, cộng thêm 5% chiết khấu
    if (isVip) {
        discountPercent += 5;
    }

    let finalPrice = orderValue - (orderValue * discountPercent / 100);

    // 4. Gán số tiền vào thẻ span và hiển thị toàn bộ dòng kết quả
    document.getElementById("finalPrice").innerText = finalPrice.toLocaleString("vi-VN");
    document.getElementById("result").style.display = "block";
}
