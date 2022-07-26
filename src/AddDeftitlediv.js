export function adddefaulttitledivfunc(projectarrayindex) {
    let areafortitlediv = document.getElementById('P&TArea');

    let titlediv = document.createElement('div');
    titlediv.className = "Title" + 0;
    titlediv.id = "insideofprojectarea";
    let newprojectname = 'Default Project';
    titlediv.innerText = ('Project' +projectarrayindex +': ' + newprojectname);

    areafortitlediv.appendChild(titlediv);

}
