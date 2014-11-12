function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    // remove possible children of the parent
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.backgroundColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        parent.appendChild(title);

        var text = document.createTextNode(d.label);
        var value = document.createTextNode(": " + d.value);
        title.appendChild(text);
        title.appendChild(value);
    });


}
