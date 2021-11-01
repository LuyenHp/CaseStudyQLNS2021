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
    alert(HoTen + Email + DiaChi + NgaySinh + GioiTinh);
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
function deleteDemo(a) {
  demo = document.getElementById("HoTen");
  console.log(`${demo} va ${a}`);
}
deleteDemo(12);
