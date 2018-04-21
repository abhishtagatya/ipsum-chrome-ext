debug = false;

document.getElementById("copyBtn").onclick = function() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  if (debug) {
    alert("Success")
  }
};
