# Playwright
## 1. Playwright là gì?
- Playwright là 1 framework, tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên

## 2. Ưu điểm:
- Cross browser (chỉ cần viết code 1 lần, có thể chạy trên tất cả các loại trình duyệt phổ biến)
- Cross platform (Windows, Linux, MacOS)
- Auto-wait
- Web-first assertion
- Tracing 
- Code-gen
- ...

## 3. Tại sao chọn Playwright?
- Cú pháp đơn giản, hiện đại
- Dễ học, dễ tiếp cận
- Giảm rào cản tiếp cận

# Cài đặt tools
## 1. NVM
- NVM = Node Version Manager = quản lí các phiên bản NodeJs
- NodeJs = Công cụ để chạy code
- Chọn cài NodeJs thông qua NVM vì **dễ chuyển đổi nhiều phiên bản NodeJs**

### 1.1. Cài đặt NVM:
- Trên Mac: **brew install nvm**
- Trên Windows: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

### 1.2 Cài đặt Node:
- ``` nvm install  v22.9.0 ```
- ``` nvm use v22.9.0 ```

## 2. Cài đặt Playwright - Chạy test đầu tiên:
- Tạo thư mục: **pw-course**
- Khởi tạo Playwright: ``` npm init playwright@latest ```
- Đi tới file: **example.spect.ts**
- Click run test

## 3. Git & GitHub
### 3.1. Cài đặt git:
- Máy Mac có sẵn git
- Trên Windows: [https://git-scm.com/download](https://git-scm.com/download)

### 3.2. Cấu hình git:
- Config username: ``` git config --global user.name "Mai" ```
- Config email: ``` git config --global user.email "ngocmaik105cva@gmail.com" ```
- Config branch default ``` git config --global init.defaultBranch main ```

### 3.3. Tạo tài khoản GitHub:
- Tips:
    - Tài khoản GitHub giống profile của bạn
    - Nên đặt tên lịch sự, không nên chứa năm sinh
    - Có avatar để tăng tính chuyên nghiệp
- Tạo tài khoản GitHub: [https://github.com/signup](https://github.com/signup)

## 4. Visual Studio Code
- VS Code: là công cụ để viết code
- Cài đặt VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Cài đặt Playwright extension

# Kết nối với GitHub
## 1. SSH key là gì?
- SSH key:
    - Cặp khóa (2 cái)
        - **id_rsa** và **id_rsa.pub**
        - **id_rsa**: cần giữ bí mật
        - **id_rsa.pub**: có thể gửi cho người khác
    - Giúp xác thực đăng nhập trở nên dễ dàng hơn
    - Lưu ở **~/.ssh**
        - **~** đại diện cho thư mục home

## 2. Tạo SSH key
- Câu lệnh: ``` ssh-keygen -t rsa -b 4096 -C "ngocmaik105cva@gmail.com" ```
- Lưu ý: Nếu đã có key trước đó, cần backup key cũ trước khi ghi đè:
```
Ctrl C
cd
explorer .
```
## 3. Thêm vào GitHub:
- Lấy nội dung ssh key: ``` cat ~/.ssh/id_rsa.pub ```
- Truy cập: [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new) để thêm **ssh key**

# Đưa code lên GitHub
## 1. Tạo repo:
- Truy cập: [https://github.com/new](https://github.com/new)
- Điền tên repository
- Chọn “Public”

## 2. Khởi tạo:
- Khởi tạo repo local: ``` git init ```
- Liên kết repository vừa tạo với Git: ``` git remote add origin <ssh_link> ```
- Thêm code: ``` git add . ```
- Thêm commit: ``` git commit -m"init project" ```

## 3. Push code:
``` git push origin main ```

## 4. Invite collaborators:
- Truy cập repo setting: **https://github.com/<user_name>/<repo_name>/settings/access**
- Add collaborators




