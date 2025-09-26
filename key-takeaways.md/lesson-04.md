# 1. Phạm vi của biến 
- Phạm vi (scope) xác định nơi mà biến có thể truy cập 
- JavaScript có ba loại phạm vi:
    - Toàn cục (global)
    ```
    let myName = "Mai"

    console.log(myName);
    function sayMyName(){
        console.log(myName);
    };
    
    sayMyName();
    ```

    - Function scope (hàm)
    ```
     function sayMyName(){
        let myName = "Mai";
        console.log(myName);
    };
    ```

    - Block scope (khối)
    ```
    const x = 10;      // Phạm vi của x là global

    if (x < 15){
        const y = 100;     // Phạm vi của y là Block scope
        console.log(y);
    }
    ```

# 2. Câu điều kiện nâng cao
## 2.1. ```break``` và ```continue```
- ```break``` dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức 
```
for (let i = 10; i <= 20; i++) {
    if (i % 3 === 0) {
        break;
    }
    console.log(i);
};

// Output: 10, 11
```

- ```continue``` dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo
```
// Bỏ qua số chẵn 
for (let i = 0; i < 10; i++) { 
 if (i % 2 === 0) { 
 continue; // Bỏ qua số chẵn 
 } 
 console.log(i); 
} 

// Output: 1, 3, 5, 7, 9
```

## 2.2. ```if...else```
- Thực thi code khác nhau cho trường hợp true và false:
```
const number = 15;

if (number % 2 === 0) {
    console.log("So yeu thich la so chan");
} else {
    console.log("So yeu thich la so le");
}

// Output: So yeu thich la so le
```

## 2.3. ```if...else...if```
- Kiểm tra nhiều điều kiện theo thứ tự:
```
let date = 5;

if (date === 1) {
    console.log("Chu Nhat");
} else if (date === 2) {
    console.log("Thu 2");
} else if (date === 3) {
    console.log("Thu 3");
} else if (date === 4) {
    console.log("Thu 4");
} else if (date === 5) {
    console.log("Thu 5");
} else if (date === 6) {
    console.log("Thu 6");
} else {
    console.log("Thu 7");
}

// Output: Thu 5
```

## 2.4. Toán tử điều kiện (Ternary operator)
- Cách viết ngắn gọn cho ```if...else``` đơn giản
- Công thức:
```
Điều kiện ? Nếu đúng : Nếu sai
                        Điều kiện ? Nếu đúng : Nếu sai
```
- Ví dụ:
```
let age = 66;
let status = (age >= 65) ? "nghi huu" : "lao dong";

console.log(status);

// Output: nghi huu
```

# 3. Vòng lặp nâng cao
## 3.1. ```for...in```
- Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa. 
```
// Với Object:

const person = {
    name: "Mai",
    age: 28,
    city: "Hanoi"
};

for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}

// Output: 
// name: Mai,
// age: 28,
// city: Hanoi

// Với Array (trả ra index):

const arr2 = ["Phong", "Ngan", "Uyen"];

for (let i in arr2) {
    console.log(i);
}

// Output: 0, 1, 2
```

## 3.2. ```for...of```
```
// Thường để lặp trong mảng, lấy giá trị từng phần tử trong mảng

const arr2 = ["Phong", "Ngan", "Uyen"];

for (let i of arr2) {      
    console.log(i);
}

// Output: Phong, Ngan, Uyen
```

## 3.3. ```forEach```
- Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng ```break``` hoặc ```continue```

```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (value) {
    console.log(value);
});

// Output: 1, 2, 3, 4, 5
```

# 4. String utils (Các hàm xử lí chuỗi)
- ```trim()```: cắt khoảng trắng hai đầu 
- ```trimLeft()```: cắt bên trái 
- ```trimRight()```: cắt bên phải 
- ```toLowerCase()```: chuyển chuỗi thành chữ thường 
- ```toUpperCase()```: chuyển chuỗi thành chữ hoa 
- ```includes(<substr>)```: kiểm tra chuỗi bao gồm chuỗi con ```<substr>``` không
- ```replace(<chuỗi cần thay>, <chuỗi mới>)``` 
- ```split(<tách_bởi_gì>)``` 
- ```substring(<điểm_bắt_đầu>, <điểm_kết_thúc>)```: lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc 
- ```indexOf(<chuỗi kí tự>)```: tìm vị trí của chuỗi con

```
const a = "Nguyen Thi Ngoc Mai";

const arr = a.split(" ");
console.log(arr);          // Output: [ 'Nguyen', 'Thi', 'Ngoc', 'Mai' ]

console.log(a.indexOf("Nhung"));      // Output: -1
console.log(a.replace(a.substring(0,15), "Phuong"));     // Output: Phuong Mai
```

# 5. Array utils (Các hàm xử lí mảng)
## 5.1. ```map```
- **Tạo mảng mới** bằng cách áp dụng một hàm lên **từng phần tử** của mảng gốc. Trả về **mảng mới có cùng độ dài**
```
const numbers = [1, 2, 3, 4, 5]; 
const doubled = numbers.map(num => num * 2); 

console.log(doubled); // [2, 4, 6, 8, 10] 
console.log(numbers); // [1, 2, 3, 4, 5] - mảng  gốc không thay đổi
```

## 5.2. ```filter```
- **Tạo mảng mới** chỉ chứa các phần tử **thỏa mãn điều kiện** trong hàm callback. Trả về **mảng đã được lọc**
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const evenNumbers = numbers.filter(num => num % 2 === 0); 

console.log(evenNumbers); // [2, 4, 6, 8, 10] 
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8,  9, 10] - mảng gốc không đổi
```

## 5.3. ```find```
- Tìm và trả về **phần tử đầu tiên** trong mảng thỏa mãn điều kiện. Trả về **undefined** nếu **không tìm thấy**
```
const numbers = [1, 5, 3, 8, 2, 10, 7];

// Tìm số lớn hơn 6 
const greaterThanSix = numbers.find(num => num > 6); 
console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy) 

// Không tìm thấy 
const negative = numbers.find(num => num < 0); 
console.log(negative); // undefined
```

## 5.4. ```reduce```
- Duyệt qua mảng và **tích lũy** các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên **hàm callback**
```
const numbers = [1, 2, 3, 4, 5];
// Cách hoạt động từng bước 
const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current:  ${current}`);
    return accumulator + current;
}, 0);

// accumulator: 0, current: 1 -> return 1 
// accumulator: 1, current: 2 -> return 3 
// accumulator: 3, current: 3 -> return 6 
// accumulator: 6, current: 4 -> return 10
// accumulator: 10, current: 5 -> return 15 

console.log(sum); // 15
```

## 5.5. ```some```
- Kiểm tra xem có **ít nhất một** phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false.
```
const numbers = [1, 3, 5, 7, 8, 9];
// Kiểm tra có số chẵn không?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có số 8)

// Dừng ngay khi tìm thấy
const hasEvenWithLog = numbers.some(num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
});
// Checking: 1
// Checking: 3
// Checking: 5
// Checking: 7
// Checking: 8
// => Dừng, không kiểm tra 9
```

## 5.6. ```every```
- Kiểm tra xem **tất cả phần tử** trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
```
const numbers = [2, 4, 6, 8, 10];

// Kiểm tra tất cả > 5?
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // false (2 và 4 không > 5)

// Dừng ngay khi gặp false
const checkWithLog = numbers.every(num => {
    console.log(`Checking: ${num}`);
    return num < 5;
});
// Checking: 2
// Checking: 4
// Checking: 6
// => Dừng tại 6, không kiểm tra 8, 10
console.log(checkWithLog); // false
```

## 5.7. ```sort```
- **Sắp xếp** các phần tử trong mảng theo **thứ tự** (mặc định là alphabet/tăng dần). **Thay đổi mảng gốc**.
```
// Sort chuỗi
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange']
```

```
// BUG phổ biến: sort số KHÔNG đúng theo mặc  định! 
const numbers = [10, 5, 40, 25, 1000, 1]; numbers.sort(); 
console.log(numbers); // [1, 10, 1000, 25, 40, 5]  - SAI! 
// Vì sort mặc định chuyển thành string: "10" <  "5" 

// CÁCH ĐÚNG: dùng compare function 
const numbers2 = [10, 5, 40, 25, 1000, 1]; numbers2.sort((a, b) => a - b); // tăng dần console.log(numbers2); // [1, 5, 10, 25, 40,  1000] - ĐÚNG!

// Compare function trả về:
// - Số âm: a đứng trước b
// - Số 0: giữ nguyên thứ tự
// - Số dương: b đứng trước a
```

## 5.8. ```push```
- **Thêm một hoặc nhiều** phần tử vào **cuối mảng**. Thay đổi mảng gốc và trả về độ dài mới.
```
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Push nhiều phần tử cùng lúc
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']
```

## 5.9. ```pop```
- **Xóa và trả về** phần tử **cuối cùng** của mảng. **Thay đổi** mảng gốc và làm giảm độ dài.
```
const fruits = ['apple', 'banana', 'orange', 'grape'];
const lastFruit = fruits.pop();

console.log(lastFruit); // 'grape' - phần tử bị xóa
console.log(fruits); // ['apple', 'banana', 'orange'] - mảng đã thay đổi

// Pop từ mảng rỗng
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```

## 5.10. ```shift```
- **Xóa và trả về** phần tử **đầu tiên** của mảng. **Thay đổi mảng gốc** và làm **giảm độ dài**.
```
const fruits = ['apple', 'banana', 'orange', 'grape'];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'apple' - phần tử bị xóa
console.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

// Shift từ mảng rỗng
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []
```

## 5.11. ```unshift```
- Thêm **một hoặc nhiều** phần tử vào **đầu mảng**. **Thay đổi** mảng gốc và trả về độ dài mới của mảng.
```
const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Unshift nhiều phần tử cùng lúc
fruits.unshift('grape', 'mango');
console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']
```