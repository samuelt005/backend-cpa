const tab1 = document.querySelector(".tab1Button");
const tab2 = document.querySelector(".tab2Button");

tab1.addEventListener('click', function(event) {
    openTab(event, 'tab1');
});

tab2.addEventListener('click', function(event) {
    openTab(event, 'tab2');
});

document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};