function nhapData() {
  let HoTen = document.getElementById("FullName").value;
  let Email = document.getElementById("Email").value;
  let DiaChi = document.getElementById("DiaChi").value;
  let NgaySinh = document.getElementById("NgaySinh").value;
  let GioiTinh = document.getElementById("GioiTinh").value;
  if (HoTen.length < 2) {
    document.getElementById("iferrorFullName").innerHTML =
      "Tên của bạn quá ngắn!";
  } else {
    document.getElementById("iferrorFullName").innerHTML = "";
  }

  if (
    HoTen.length > 2 &&
    Email.length > 10 &&
    DiaChi.length > 0 &&
    GioiTinh.length > 0
  ) {
    let thongTinSv = [HoTen, Email, DiaChi, NgaySinh, GioiTinh];
    alert("Thong tin sinh vien: " + thongTinSv);
    taoMoi();
  }
}

function taoMoi() {
  let x = document.getElementById("formSinhVien");
  let y = document.getElementById("dataTable");
  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById("taoMoi").innerHTML = "Tạo mới";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById("taoMoi").innerHTML = "Xem bảng";
  }
}
