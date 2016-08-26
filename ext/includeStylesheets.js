(function(){
  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }

  var title = document.getElementsByTagName('title')[0];
  var elements = [];
  var scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css',
    'https://fonts.googleapis.com/css?family=Roboto:400,500,700,300&subset=latin,cyrillic-ext',
    'https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css',
  ]

  for(var i = scripts.length-1; i >= 0; i--) {
    elements[i] = document.createElement('link');
    elements[i].href = scripts[i];
    elements[i].rel = 'stylesheet';
    elements[i].type = 'text/css';

    insertAfter(elements[i], title);
  }

})()
