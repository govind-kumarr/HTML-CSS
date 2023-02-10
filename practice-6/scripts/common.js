let token = localStorage.getItem("token");
if (!token) {
  window.open("../Admin/login.html", "_self");
}
