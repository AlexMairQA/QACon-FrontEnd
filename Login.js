

function makeRequest(form) {
    let req = new XMLHttpRequest();
    let member = "";
    let password = "";
    let email="";
    // for(field of form){
    //     if(field.id="password")
    //         {
    //     password = field.value;
    //         }
    // }
    password = document.getElementById("password").value;
    email=document.getElementById("email").value;
    console.log(password);
    req.open('GET', 'http://35.242.175.183:8081/QaProject/api/member/getAccount/'+email+'/' + password);
    req.onload = () => {

        member = JSON.parse(req.responseText);
        console.log(member);
        window.sessionStorage.setItem("member", JSON.stringify(member));
        
        window.location = "MemberPage.html";
    };
    //    if(body){
    //         req.setRequestHeader('Content-Type', 'application/json');
    //    }
    req.send();





    //  let {firstName, lastName}=data;

    //     let parent=document.getElementById("parent");
    //     let newH=document.createElement('h1');
    //     newH.innerText=firstName+" "+lastName;
    //     parent.append(newH);

    return false;
}
