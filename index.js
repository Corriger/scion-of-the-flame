var sacredIcon = document.querySelector(".navigation")
var library = Array.from(sacredIcon.children)
var haloArray = document.getElementsByTagName("article")
var theArk = Array.from(haloArray)
var theIndex
var deltaIcon = document.querySelectorAll(".tile")
var deltaLibrary = Array.from(deltaIcon)

library.forEach(el => {
  el.addEventListener("click", () => {
    theIndex = library.findIndex(index => index == el)
    if (el.classList.contains("current")) {
      el.classList.remove("current")
      theArk.forEach(elem => {
        elem.classList.remove("current")
      })
    } else {
      library.forEach(ele => {
        ele.classList.remove("current")
      })
      theArk.forEach(elem => {
        elem.classList.remove("current")
      })
      el.classList.add("current")
      haloArray[theIndex].classList.add("current")
    }
  })
})

deltaLibrary.forEach(el => {
  el.addEventListener("click", () => {
    if (el.classList.contains("highlight")) {
      el.classList.remove("highlight")
    } else {
      deltaLibrary.forEach(ele => {
        ele.classList.remove("highlight")
      })
      el.classList.add("highlight")
    }
  })
})
