function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll(".ranked-list li");
  for(let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  }
}

function deepestChild() {
  let currentNode = document.querySelector("#grand-node");

  while(true) {
    let nextNode = currentNode.querySelector("div")
    if(nextNode.firstElementChild) {
      currentNode = nextNode;
    } else {
      return nextNode
    }
  }
}
