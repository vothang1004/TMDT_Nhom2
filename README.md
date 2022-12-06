# TMDT_Nhom2
Mỗi thanh viên sau khi clone repo về cần làm như sau.
- Checkout sang nhánh chính của mình.
- Ví dụ: Repo của mình đang có 4 nhánh (main, develop, BE, FE),
  Đạo phụ trách phần BE thì Đạo sẽ checkout sang branch BE sau đó từ BE tạo nhánh mới có tên là BE/Dao,
  và Đạo sẽ code trên nhánh BE/Dao, sau đó push lên git và merge từ nhánh BE/Dao vào nhánh BE.
- Làm tương tự với các thành viên khác (làm FE thì checkout sang branch FE thay vì BE).
- Sau khi chức năng đã hoạt động hoàn chỉnh sẽ merge branch BE và FE vào branch develop.
- Sau khi hoàn thành project sẽ merge branch develop vào branch main -> dùng branch main cho việc deploy
