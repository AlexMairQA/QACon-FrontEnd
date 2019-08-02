function displayAccountDetails({ email, firstName, lastName, password, showRealName }) {

    let parent = document.getElementById("parent");
    let fnDiv = document.createElement('div');
    let lnDiv = document.createElement('div');
    let passwordDiv = document.createElement('div');
    let emailDiv=document.createElement('div');
    let realNameDiv = document.createElement('div');
    let fnHeader = document.createElement('h2');
    let lnHeader = document.createElement('h2');
    let emailHeader=document.createElement('h2');
    let passwdHeader = document.createElement('h2');
    let realNameHeader = document.createElement('h2');
    let fn = document.createElement('input');
    let ln = document.createElement('input');
    let passwd = document.createElement('input');
    let e_mail=document.createElement('input');
    let realName = document.createElement('input');
    
    realName.type="checkbox";

fnHeader.innerText="First Name";
fn.value=firstName;
fnDiv.append(fnHeader, fn);

lnHeader.innerText="Last Name";
ln.value=lastName;
lnDiv.append(lnHeader, ln);

emailHeader.innerText="Email";
e_mail.value=email;
emailDiv.append(emailHeader, e_mail);

passwdHeader.innerText="Password";
passwd.value=password;
passwordDiv.append(passwdHeader, passwd);
realNameHeader.innerText="Show Real Name";
if(showRealName){
    realName.checked;
}
realNameDiv.append(realNameHeader, realName);
parent.append(fnDiv, lnDiv, emailDiv, passwordDiv, realNameDiv);








    return false;
}

function removeAccount() {
    let member=JSON.parse(sessionStorage.getItem("member"));
    let id=member.idMember;
    let req = new XMLHttpRequest();
    req.open('DELETE', 'http://35.242.175.183:8081/QaProject/api/member/deleteMember/'+id);
    req.onload = () => {

    }

    req.send();
}