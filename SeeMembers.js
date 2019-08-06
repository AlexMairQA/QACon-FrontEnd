function makeRequest() {
    let req = new XMLHttpRequest();
    let members = "";
    // let firstName="";
    // let lastName="";

    req.open('GET', 'http://35.242.175.183:8081/QaProject/api/member/getAll');
    req.onload = () => {


        members = JSON.parse(req.responseText);
        console.log(members);
        loopThruMembers(members);
       

    }

    req.send();

}

function loopThruMembers(members)
{
    
 for (member of members) {
 let parent = document.getElementById("parent");
     let memberDiv=document.createElement('div');
memberDiv.className="conMember";
let headerDiv=document.createElement('div');
headerDiv.className="memberHeader";
memberDiv.append(headerDiv);
let memberH=document.createElement('h1');
memberH.innerText="** QAC Member **";
headerDiv.append(memberH);

parent.append(memberDiv);
 
            let newH = document.createElement('h1');
            let { showRealName } = member;
            if (showRealName) {
                displayMember(member, newH);
            }
            else {
                displayMoniker(member, newH);
            }
           memberDiv.append(newH);
        }
}

function displayMember({firstName, lastName, moniker}, newH){
    
            newH.innerText = firstName + " " + lastName + " " + moniker;
           
}

function displayMoniker({moniker}, newH)
{
     let parent = document.getElementById("parent");
            
            newH.innerText = "*** ***  " + moniker;
            parent.append(newH);
}






