// Tạo đối tượng service tương tác backend
var svService = new SinhVienService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (result) {
      // Tạo nội dung các thẻ tr
      var contentTable = "";
      for (var i = 0; i < result.data.length; i++) {
        const sinhVien = result.data[i];
        contentTable += `
            <tr> 
                <td>${sinhVien.MaSV}</td>
                <td>${sinhVien.HoTen}</td>
                <td>${sinhVien.Email}</td>
                <td>${sinhVien.SoDT}</td>
                <td>${sinhVien.DiemToan}</td>
                <td>${sinhVien.DiemLy}</td>
                <td>${sinhVien.DiemHoa}</td>
            </tr>`;
      }

      // In ra giao diện
      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log(error);
    });
};

renderSinhVien();

// Long thực hiện
var capNhapSinhVien = function (id, sinhvien) {
  console.log("Cập nhật sinh viên " + id);
};
