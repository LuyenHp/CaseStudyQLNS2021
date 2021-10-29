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
  }
}
