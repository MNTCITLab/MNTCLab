function certNames() {
fetch('https://raw.githubusercontent.com/MNTCITLab/MNTCLab/master/certificationNames.json').then(r => r.json()).then(function (fetched) {
 certNames = fetched;
console.log(certNames);
});
}
document.onload = certNames();