function getProgramItems() {

    let parent = document.getElementById("parent");
    let req = new XMLHttpRequest();
    req.open('GET', 'http://35.242.175.183:8081/QaProject/api/program/getAll');
    req.onload = () => {
        let programItems = JSON.parse(req.responseText)
        for (let panel of programItems) {

            let programDiv = document.createElement('div');
            programDiv.className = "panel";
            let panelName = document.createElement('h1');
            let description = document.createElement('p');
            panelName.innerHTML = panel.panelName;
            description.innerHTML = panel.description;
            programDiv.append(panelName, description);
            parent.append(programDiv);

        }
    }
    req.send();
}
