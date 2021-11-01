function nhapData() {
  let HoTen = document.getElementById("FullName").value;
  let Email = document.getElementById("Email").value;
  let DiaChi = document.getElementById("DiaChi").value;
  let NgaySinh = document.getElementById("NgaySinh").value;
  let GioiTinh = document.getElementById("GioiTinh").value;
  if (
    (HoTen != "") &
    (Email != "") &
    (DiaChi != "") &
    (NgaySinh != "") &
    (GioiTinh != "")
  ) {
    // alert(HoTen + Email + DiaChi + NgaySinh + GioiTinh);
    let thongTinSv = [HoTen, Email, DiaChi, NgaySinh, GioiTinh];
    alert("Thong tin sinh vien: " + thongTinSv);
    taoMoi();
  }
}
function taoMoi() {
  // document.getElementById("taoMoi").style.backgroundColor = "blue";
  let x = document.getElementById("formSinhVien");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
