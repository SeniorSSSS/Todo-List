export function addtitlediv(projectarrayindex) {
    console.log('add titlediv to thing');
    let areafortitlediv = document.getElementById('P&TArea');

    let titlediv = document.createElement('div');
    let titlenumber = document.querySelectorAll('[class^=Title]').length;
    //find how many titles are there so they have array.
    titlediv.className = "Title" + titlenumber;
    titlediv.id = "insideofprojectarea";


    



    let newprojectname = prompt('Name this Project Yo!');

    titlediv.innerText = ('Project' +projectarrayindex +': ' + newprojectname);

    areafortitlediv.appendChild(titlediv);
}