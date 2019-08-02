function handleSubmit(form) {
    let req = new XMLHttpRequest();
    let data = {};

    for (field of form) {
        if (field.type === "checkbox") {
            data[field.id] = field.checked;
        } else {
            data[field.id] = field.value;
        }
    }


    
    req.open('POST', 'http://35.242.175.183:8081/QaProject/api/member/addMember');
console.log(data);
    req.onload = () => {
console.log(req.responseText);
    };
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(data));
    console.log("send");
    return false;
}