function check(){
    alert("helloooo")
}
function displayAccountDetails({ email, firstName, lastName, password, showRealName, moniker }) {

    let parent = document.getElementById("parent");
    let fnDiv = document.createElement('div');
    let lnDiv = document.createElement('div');
    let passwordDiv = document.createElement('div');
    let emailDiv=document.createElement('div');
    let realNameDiv = document.createElement('div');
    let monikerDiv=document.createElement('div');


    let fnHeader = document.createElement('h2');
    let lnHeader = document.createElement('h2');
    let emailHeader=document.createElement('h2');
    let passwdHeader = document.createElement('h2');
    let realNameHeader = document.createElement('h2');
    let monikerHeader=document.createElement('h2');
    let fn = document.createElement('input');
    fn.id="firstName";
    let ln = document.createElement('input');
    ln.id="lastName";
    let passwd = document.createElement('input');
    passwd.id="passwd";
    let e_mail=document.createElement('input');
    e_mail.id="email";
    let realName = document.createElement('input');
    realName.id="realName";
    realName.type="checkbox";
    let monikerInput=document.createElement('input');
    monikerInput.id="moniker";


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

monikerHeader.innerText="Moniker";
monikerInput.value=moniker;
monikerDiv.append(monikerHeader, monikerInput);

realNameHeader.innerText="Show Real Name";
if(showRealName){
    realName.checked;
}
realNameDiv.append(realNameHeader, realName);
parent.append(fnDiv, lnDiv, monikerDiv, emailDiv, passwordDiv, realNameDiv);
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
    window.location="QACon.html";
}

function updateAccount(){
    let req = new XMLHttpRequest();
    
    let pass_word = document.getElementById('passwd').value;
    let e_mail=document.getElementById("email").value;
    let first_name=document.getElementById("firstName").value;
    let last_name=document.getElementById("lastName").value;
    let fakeName=document.getElementById("moniker").value;

    let member={
        firstName: first_name,
    lastName: last_name,
    moniker: fakeName,
    email: email,
    password:pass_word,
    showRealName:"true"
}
    
    req.open('POST', 'http://35.242.175.183:8081/QaProject/api/member/updateMember');
    req.onload = () => {

        console.log("TRRRR");
        
        
    };
    let {idMember}=JSON.parse(sessionStorage.getItem("member"));
   
    req.send(JSON.stringify(member), idMember);
}