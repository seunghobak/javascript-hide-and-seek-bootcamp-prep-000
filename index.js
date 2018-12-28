function getFirstSelector(n) {
    return document.querySelector(n)
  }



function nestedTarget() {
  return  document.querySelector('div#nested div.target')
}


function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    parseInt(lis[i].innerHTML = (i + n).toString(), 10);
  }
}

function deepestChild() {
return document.querySelector('div#grand-node div div div div')
}
