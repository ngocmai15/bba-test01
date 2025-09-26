# Git: 
## Undo action
### Undo Commit message: 
git commit --amend -m”message”

### Undo File staging → working directory:
- **Restote 1 file:** git restore --staged <file_name>
- **Restore tất cả các file:** git restore --staged .

### Undo File repository → working directory (un-commit):
// N: số lượng commit muốn reset

git reset HEAD ~N 

## Branching 
- **Pull code từ server về:** git pull origin main

- Git sử dụng nhánh (branch) để tạo ra các “phiên bản” riêng của code, tránh ảnh hưởng tới “bản gốc”

- Khi khởi tạo repo (*git init*), nhánh mặc định sẽ được tạo ra

- Luôn pull code về trước khi tạo nhánh mới

### Một số câu lệnh với nhánh:
1. **Cấu hình:** git config --global init.defaultBranch main

// khi khởi tạo, đặt nhánh mặc định là nhánh main

2. **Xem danh sách nhánh:** git branch

// Cần có ít nhất 1 commit mới hiện danh sách nhánh

3. **Tạo nhánh mới:** git branch <tên_branch>

// Nhánh mới “copy” giống hệt nhánh hiện tại

4. **Chuyển sang nhánh mới:** git checkout <tên_branch>

5.  **Vừa tạo, vừa chuyển sang nhánh mới:** git checkout -b <tên>

6. **Xoá branch:** git branch -D <tên nhánh>

7. **Kiểm tra lịch sử commit:** git log

8. **Checkout 1 revision bất kì:** git checkout <revision>

// Để trở về revision (đi về thời điểm quá khứ xem lúc ấy code của mình có gì)

## .gitignore file: Dùng để bỏ qua các file không cần git theo dõi
- Ignore file: <file_name>
- Ignore folder: <folder_name>/

# Javascript basic 
## Conventions:
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class

## console.log with backtick:
VD:
let name = "Mai";

console.log(`Toi la ${name}`);

## Object: 
- Dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
- Khai báo:

let/const <ten_object> = {

    <thuoc_tinh>: <gia_tri>,
    ...

}

VD:
const product = {
    name: "Laptop",
    price: 500,
    isWindow: true,
    manufacturer: {
        name: "Acer",
        year: 2024
    }
}

- Sử dụng: 

console.log("manufacturer name =", product.manufacturer.name);

console.log("price =", product["price"]);

- Gán lại:

product.price - 400

product["manufacturer"]["year"] = 2025

- Thay đổi thuộc tính của Object: 

Ví dụ chỉ thay giá trị của *name* trong object *student*:

const student = {“name”: “alex”, “age”: 20}

student.name = “Nagi”; // Hợp lệ

- Thêm thuộc tính vào Object: dùng dấu . hoặc ngoặc vuông [] để định nghĩa thuộc tính mới

VD:

let bike = {
make: 'Yamaha',
model: 'YZF-R3'
};

bike.color = “Blue”;
bike[“price new”] = 100;

console.log(bike);
{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}

- Xóa thuộc tính của Object: dùng hàm *delete*

VD:

let employee = {
name: 'Le Van C',
age: 30,
};

delete employee.age;

console.log(employee);

Kết quả:
{name: 'Le Van C'}

### Lưu ý:
- Nếu thay cả object bằng một object mới → lỗi. 

Ví dụ:

const student = {“name”: “alex”, “age”: 20}

student = {“name”: “Nagi”, “age”: 18} // lỗi

## Array // Mảng
- Khai báo: 

const/let <tên_biến> = ["Mai", 15, , true]

- Truy xuất độ dài mảng: 

console.log(<tên_biến>.length);

- Lấy phần tử theo index:

console.log(<tên_biến>[index]);

- Thêm phần tử vào mảng: dùng hàm *push*

VD:

const arr = [1, 2];
arr.push(3);

console.log(arr); // Kết quả in ra: [1, 2, 3]

## Function // Hàm
- Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
- Khai báo:

function <name_Function>() {

    //code

}

- Sử dụng:

<name_Function>();

- Parameter:

VD:

function countBeforeHello(n) {     
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log("Hello World");
}

countBeforeHello(10);

- Return value:

VD:

function sum(a, b) {
    const sum = a + b;
    return sum;
}

const total = sum(5, 6);

console.log(total);