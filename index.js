function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, j = rankedLists.length; i < j; i++) {
    let children = rankedLists[i].children

    for (let k = 0, l = children.length; k < l; k++) {
      children[k].innerHTML = parseInt(children[k].innerHTML) + n
    }
  }
}
// extra line 

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
