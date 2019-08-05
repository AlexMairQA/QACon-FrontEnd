function addProgram(){
    let req= new XMLHttpRequest();
    let data={};
    data["panelName"]=document.getElementById("panelTitle").value;
    data["description"]=document.getElementById("desc").value;
    console.log(data);
    req.open('POST', 'http://35.242.175.183:8081/QaProject/api/program/addProg');
    req.onload=()=>{

    }
req.setRequestHeader('Content-Type', 'application/json')
    req.send(JSON.stringify(data));
}

function showPrograms(){
    let req= new XMLHttpRequest();
    let data="";
    
    req.open('GET', 'http://35.242.175.183:8081/QaProject/api/program/getAll');
    req.onload=()=>{
        data=JSON.parse(req.responseText);
        console.log(data);
        let parent=document.getElementById("parent");
        for(let program of data){
            let panelName=document.createElement('h1');
            panelName.innerText=program.panelName;
            let deleteProgram=document.createElement('button');
            deleteProgram.innerText="delete item "+program.panelId;
           

            let wrapper=document.createElement('div');
            wrapper.append(panelName);
            wrapper.append(deleteProgram);
            parent.append(wrapper);

             deleteProgram.addEventListener( "click",function(){
                 let Pid=program.panelId;

                 deleteProg(Pid);
                let Pref=panelName;
                let Wref=wrapper;
                
                parent.removeChild(Wref);
            });
           
        }

    }
    req.send();
}

function deleteProg(Pid){
    let req= new XMLHttpRequest();

    req.open('DELETE','http://35.242.175.183:8081/QaProject/api/program/deleteProg');

    req.onload=()=>{
    };
        

    req.send(Pid);
}