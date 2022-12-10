function sendMail() {
    // 입력한 정보를 가져옵니다.
    var subject = document.getElementById("text").value;
    var body = document.getElementById("email").value;
    var to = document.getElementById("message").value;
    var result = confirm("발송하시겠습니까?");
    //console.log("mailto:" + body + "?subject=" + subject + "&message=" + to);
    
    if(result) {
        window.open("mailto:" + body + "?subject=" + subject + "&body=" + to);
    } else{
        alert("취소합니다.");
    }
}