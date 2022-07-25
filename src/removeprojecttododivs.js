export function removeprojecttodosdivs(projectarrayindex) {
    let diviwanttoremove = document.querySelector('.projectarea' + projectarrayindex);
    while (diviwanttoremove.firstChild) {
        diviwanttoremove.removeChild(diviwanttoremove.lastChild);
      }
}