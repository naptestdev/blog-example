---
title: Cách sao chép, xóa, di chuyển, đổi tên file/thư mục bằng PowerShell trên PC Windows
date: 2023-06-13
---

Bạn có thể sao chép, xóa, di chuyển hoặc đổi tên các file hoặc thư mục của mình trên PC Windows bằng [PowerShell](https://quantrimang.com/gioi-thieu-ve-powershell-37928 "PowerShell và mọi điều bạn cần biết về tiện ích này"). Mặc dù tồn tại các phương pháp đơn giản hơn và nhanh chóng hơn - chẳng hạn như sử dụng GUI - nhưng sử dụng PowerShell cũng có những lợi ích riêng của nó.

Chẳng hạn, với PowerShell, bạn có thể tự động hóa nhiều tác vụ của mình bằng cách viết script, quản lý các máy tính khác từ xa và có nhiều quyền kiểm soát quản trị hơn so với cách khác. Vì vậy, nếu bạn là người thích có nhiều quyền kiểm soát hơn đối với công việc của mình, thì sử dụng PowerShell là lựa chọn rõ ràng.

Hãy xem qua tất cả các lệnh riêng lẻ, bắt đầu bằng việc sao chép.

## Cách sao chép file hoặc thư mục bằng PowerShell

PowerShell là tiện ích tất cả trong một dành cho quản trị viên Windows cũng như những người đam mê. Bạn có thể dễ dàng sao chép các file hoặc thư mục của mình bằng PowerShell. Để bắt đầu, trước tiên hãy khởi chạy PowerShell, sau đó sử dụng lệnh **copy-item** để sao chép các file của bạn từ PowerShell. Đây là cách thực hiện:

1. Đi tới thanh tìm kiếm trong menu Start, nhập **'powershell'** và nhấn **Enter.**
2. Bây giờ, hãy sử dụng cmdlet **'Set-Location'** để thay đổi thư mục các file của bạn. Ví dụ: để đi đến thư mục **Downloads** trên máy tính, hãy nhập lệnh sau và nhấn **Enter**:
Set-Location -Path "C:\Users\[Username]\Downloads"
3. Khi bạn đã vào đúng đường dẫn, hãy nhập lệnh sau và nhấn Enter:
Copy-Item -Path "text1.txt" -Destination "C:\DestinationFolder"

Thay thế **text1.txt** bằng đường dẫn của file bạn muốn sao chép và thay thế **C:\DestinationFolder** bằng đường dẫn của thư mục mà bạn muốn dán các file đã sao chép của mình vào. Nhập lệnh và các file của bạn sẽ ngay lập tức được sao chép từ nơi này sang nơi khác.

![Windows Powershell](https://st.quantrimang.com/photos/image/2023/06/14/sao-chep-xoa-di-chuyen-doi-ten-file-thu-muc-bang-powershell-1.jpg)

Bạn có thể kiểm tra xem file của mình đã được sao chép thành công chưa bằng cách sử dụng cmdlet DIR để liệt kê các file trong thư mục đã chỉ định.

![Sao chép file bằng Powershell](https://st.quantrimang.com/photos/image/2023/06/14/sao-chep-xoa-di-chuyen-doi-ten-file-thu-muc-bang-powershell-2.jpg)Sao chép file bằng Powershell

### Cách sao chép thư mục bằng PowerShell

Trong trường hợp thư mục, bạn chỉ cần điều chỉnh một chút lệnh cuối cùng. Đây là cách:

```javascript
Copy-Item -Path ".\exampleFolder" -Destination "C:\DestinationFolder" ~Recurse
```

PowerShell sẽ sao chép thư mục đã chọn và nội dung của nó.

## Cách di chuyển file hoặc thư mục bằng PowerShell

Tương tự như sao chép, bạn có thể sử dụng một lệnh đơn giản để di chuyển các file hoặc thư mục của mình trên PowerShell. Đây là cách thực hiện:

Sau khi bạn đã khởi chạy PowerShell, hãy nhập lệnh sau và nhấn **Enter**:

```javascript
Move-Item -Path "filename.txt" -Destination "C:\DestinationFolder"
```

Một lần nữa, hãy thay thế **filename.txt** bằng đường dẫn đầy đủ của file và **DestinationFolder** bằng đường dẫn của thư mục bạn muốn di chuyển các file của mình đến.

![Di chuyển file bằng Powershell](https://st.quantrimang.com/photos/image/2023/06/14/sao-chep-xoa-di-chuyen-doi-ten-file-thu-muc-bang-powershell-3.jpg)Di chuyển file bằng Powershell

Sau đó, bạn có thể kiểm tra xem file của mình đã được di chuyển bằng lệnh DIR chưa. Nếu không thấy file của mình trong thư mục cũ, thì bạn có thể yên tâm rằng file đã được chuyển đến đích đã chỉ định.

Để di chuyển nhiều file cùng một lúc, hãy sử dụng lệnh sau và nhấn **Enter**:

```javascript
Move-Item -Path "file1.txt", "file2.txt" -Destination "C:\DestinationFolder"
```

### Cách di chuyển thư mục bằng PowerShell

Một lần nữa, tương tự như lệnh sao chép ở trên, bạn cũng có thể di chuyển các thư mục. Đây là lệnh cần thực thi:

```javascript
Move-Item -Path "FolderName" -Destination "C:\DestinationFolder"
```

## Cách xóa file hoặc thư mục bằng PowerShell

Thực hiện theo các bước bên dưới và bạn sẽ có thể xóa các file hoặc thư mục của mình bằng PowerShell ngay lập tức:

- Nhập cmdlet **Remove-Item** theo sau là đường dẫn file và nhấn **Enter**:

```javascript
Remove-Item -Path "filename.txt"
```

- Bây giờ, hãy thay thế **"filename.txt"** bằng tên của file bạn muốn xóa.

Để xóa nhiều file, hãy điều chỉnh *cmdlet* bằng cách thêm các tên file khác nhau vào tham số đường dẫn (phân tách bằng dấu phẩy) và nhấn **Enter**:

```javascript
Remove-Item -Path "file1.txt", "file2.txt", "file3.txt"
```

### Cách xóa thư mục bằng PowerShell

Sau khi bạn đã khởi chạy PowerShell, hãy nhập cmdlet **Remove-Item**, cùng với tham số **Recurse** và nhấn **Enter**:

```javascript
Remove-Item -Path "Folder" -Recurse
```

Thay thế **"Folder"** bằng đường dẫn của thư mục bạn muốn xóa. Nói chung, khi bạn đang cố xóa một file hoặc thư mục, bạn sẽ nhận được lời nhắc xác nhận. Bạn có thể bỏ qua lời nhắc này và xóa các file của mình ngay lập tức bằng cách thêm tham số **-Force** ở phía sau lệnh.

## Đổi tên file bằng PowerShell

Một lần nữa, nhấp chuột phải vào file có liên quan, sau đó chọn *Rename* hoạt động tốt nhất trong hầu hết các trường hợp, nhưng không phải lúc nào cũng vậy. Trong những trường hợp có sự cố, PowerShell có thể trợ giúp.

Sau khi bạn đã khởi chạy PowerShell, hãy nhập lệnh sau để đổi tên file của bạn và nhấn **Enter**:

```javascript
Rename-Item -Path "C:\path\to\oldfilename.txt" -NewName "newfilename.txt"
```

### Đổi tên thư mục bằng PowerShell

Để đổi tên một thư mục, hãy sử dụng cmdlet *Rename-Item* tương tự; nhập nó vào PowerShell và nhấn **Enter**:

```javascript
Rename-Item -Path "C:\Downloads\oldfoldername" -NewName "newfoldername"
```