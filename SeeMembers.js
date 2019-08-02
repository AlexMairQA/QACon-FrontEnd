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
            let { showRealName } = member;
            if (showRealName) {
                displayMember(member);
            }
            else {
                displayMoniker(member);
            }
           
        }
}

function displayMember({firstName, lastName, moniker}){
     let parent = document.getElementById("parent");
            let newH = document.createElement('h1');
            newH.innerText = firstName + " " + lastName + " " + moniker;
            parent.append(newH);
}

function displayMoniker({moniker})
{
     let parent = document.getElementById("parent");
            let newH = document.createElement('h1');
            newH.innerText = "*** ***  " + moniker;
            parent.append(newH);
}






