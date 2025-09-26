# Version control system
- Là hệ thống quản lí các phiên bản
- Gồm 3 loại: **Local** (Lưu ở máy cá nhân), **Centralize** (Lưu ở 1 máy chủ tập trung), **Distributed** (Lưu ở nhiều máy khác nhau)

# Git
## 3 states của git:
- **Working Directory**: Các file mới hoặc file có thay đổi
- **Staging Area**: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- **Repository**: Các commit (phiên bản)

## Câu lệnh thường dùng:

1. Khởi tạo thư mục được quản lí bởi git: **git init**

2. Cấu hình git:

- Cho 1 repo (đứng tại repo đó): 

**get config user.name "name"**

**get config user.email "email"**

- Cho toàn bộ máy tính (default):

**get config --global user.name "name"**

**get config --global user.email "email"**

3. Thêm file vào vùng staging:

- Thêm 1 file: **git add <file_name>**
- Thêm toàn bộ: **git add .**

4. Xem trạng thái file: **git status**

- File màu xanh: vùng staging
- File màu đỏ: vùng working directory

5. Commit: 

- Commit: **git commit -m"message"**
- Kiểm tra lịch sử commit: **git log**

## Commit convention của lớp học: *type: short_description*

*type*: loại commit:

- **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới
- **feat**: thêm tính năng mới, testcase mới
- **fix**: sửa lỗi 1 test trước đó

*short_description*: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

## Simple workflow:

- Không dùng global config: *init - config - add - commit -push*
- Dùng global config: *init - add - commit - push*

# Javascript basic
## Các bước chạy project:
- B1: Tạo file
- B2: Thêm nội dung vào file: console.log("nội dung");
- B3: Chạy lệnh: node file_name

## Comment: 
Dòng code được comment sẽ bị bỏ qua, không được thực thi

### Comment 1 dòng:
- Thêm // vào trước đoạn code muốn comment
- VD: const name = “Playwright Việt Nam” // Declare name variable

### Comment nhiều dòng:
- Thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
- VD: 

/*

const name = “Mai”;

console.log(name);

*/

## Khai báo biến
- Khai báo biến: **let tên_biến = giá_trị**
- Thay đổi giá trị của biến: **tên_biến = giá_trị**

## Khai báo hằng số
- Khai báo hằng số: **const tên_hằng = giá trị**

## Toán tử so sánh
### So sánh bằng:
- So sánh hai bằng ==: So sánh sau khi chuyển đổi kiểu

VD: true == 0 // false (true chuyển thành 1)

- So sánh ba bằng ===: So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu (nên dùng)

VD: 5 === "5" // false (Khác kiểu)

### So sánh không bằng: !=, !==
- 5 != "5" // false (chuyển string thành number)
- 5 !== "5" // true (khác kiểu)

### So sánh lớn hơn, nhỏ hơn: >, <, >=, <=

## Toán tử logic
- && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
- || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

## Toán tử một ngôi
### Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
let a = 10;

b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11

### Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
let c = 10;

d = c++; // trả về giá trị 10 cho d rồi mới tăng

// => d có giá trị là 10

## Toán tử toán học: +, -, *, /
- Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)

## Câu điều kiện
### Cú pháp:
if (<điều kiện>) {

// code...

}

### Ví dụ:
let hour = 8;

if (hour >= 6 && hour <= 11) {
    console.log(“Good morning”);
}
## Vòng lặp
### Cú pháp:
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
    
    // code
}

### Ví dụ:
for (let i = 0;i < 5; i++) {
    console.log("Xin chào!")
}

## Format code
- Mac: Option + Shift + F
- Window: Alt + Shift + F