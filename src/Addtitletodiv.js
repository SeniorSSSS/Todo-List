export function addtitlediv(projectarrayindex) {
    let areafortitlediv = document.getElementById('P&TArea');
    let titlediv = document.createElement('div');
    titlediv.className = "Title";
    let newprojectname = prompt('Name this Project Yo!');
    titlediv.innerText = ('Project' +projectarrayindex +': ' + newprojectname);
    console.log(areafortitlediv);
    areafortitlediv.appendChild(titlediv);
}