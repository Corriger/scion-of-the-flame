var sacredIcon = document.querySelector(".navigation")
var library = Array.from(sacredIcon.children)
var haloArray = document.getElementsByTagName("article")
var theArk = Array.from(haloArray)
var theIndex

library.forEach(el => {
  el.addEventListener("click", () => {
    theIndex = library.findIndex(index => index == el)
    console.log(theIndex)
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
