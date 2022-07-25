export function HasProjectBeenSelected(selectedprojectarrayvalue) {
    selectedprojectarrayvalue = Number(selectedprojectarrayvalue);
if (Number.isFinite(selectedprojectarrayvalue)) {
    alert(selectedprojectarrayvalue + ' is the Selected Project that will be rearranged');
    return selectedprojectarrayvalue;
}
else {
    alert('No project has been selected. Please Click the Select Project Button first');
}
}