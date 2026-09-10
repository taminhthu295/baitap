function kiemTraQuyenTruyCap(userRole, isAccountActive) {
    // Kiểm tra tài khoản có đang hoạt động không (ưu tiên kiểm tra trước)
    if (isAccountActive === false) {
        return "Tài khoản bị khóa";
    }

    // Nếu tài khoản đang hoạt động thì mới xét đến vai trò
    if (userRole === "ADMIN") {
        return "Cho phép truy cập toàn bộ";
    } else if (userRole === "MANAGER") {
        return "Cho phép chỉnh sửa hạn chế";
    } else if (userRole === "EMPLOYEE") {
        return "Chỉ cho phép xem";
    } else {
        // Các trường hợp còn lại (ví dụ vai trò không hợp lệ)
        return "Từ chối truy cập";
    }
}

// Hàm gắn vào sự kiện bấm nút trên giao diện HTML
function checkAccess() {
    let userRole = document.getElementById("userRole").value;
    let isAccountActive = document.getElementById("isAccountActive").checked;

    let thongBao = kiemTraQuyenTruyCap(userRole, isAccountActive);

    let resultElem = document.getElementById("result");
    resultElem.innerText = "Kết quả: " + thongBao;
    resultElem.style.display = "block";
}

// --- Chạy thử kiểm tra console ---
console.log(kiemTraQuyenTruyCap("ADMIN", true));      // Cho phép truy cập toàn bộ
console.log(kiemTraQuyenTruyCap("MANAGER", true));    // Cho phép chỉnh sửa hạn chế
console.log(kiemTraQuyenTruyCap("EMPLOYEE", true));   // Chỉ cho phép xem
console.log(kiemTraQuyenTruyCap("ADMIN", false));     // Tài khoản bị khóa
console.log(kiemTraQuyenTruyCap("GUEST", true));      // Từ chối truy cập
