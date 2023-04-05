 function saveFormData() {
    var xhttp = new XMLHttpRequest()
    var obj = {};
    obj.first_name = ' '+ document.getElementById("first_name").value;
    obj.last_name = ' ' + document.getElementById("last_name").value;
    obj.email = ' ' + document.getElementById("email").value;
    obj.messenger = ' ' + document.getElementById("messenger").value;
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Thông tin đã được lưu thành công"),
            document.getElementById("dang_ki").innerHTML = "Done";
            // document.getElementById("demo").innerHTML = this.responseText; 
        }
    };
}