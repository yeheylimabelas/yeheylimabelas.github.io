function confirmNavigation(buttonName, link) {
  // Membuat teks konfirmasi sesuai dengan tombol yang ditekan
  var confirmationText = "Yakin ning '" + `<b>${buttonName}</b>` + "'?";

  // Menampilkan kotak dialog konfirmasi menggunakan SweetAlert2
  Swal.fire({
    title: "Konfirmasi",
    html: confirmationText,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "<span style='color: white'>Moh</span>",
    confirmButtonText: "<span style='color: white'>Yoii</span>",
    cancelButtonClass: "cancel-class",
    confirmButtonClass: "confirm-class",
  }).then((result) => {
    // Jika pengguna mengklik tombol "Ya, lanjutkan", arahkan ke tautan yang sesuai
    if (result.isConfirmed) {
      window.open(link, "_blank");
    }
  });
}
