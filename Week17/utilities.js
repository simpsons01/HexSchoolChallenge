function waitHandler() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 4000)
  })
}
function dataHandler(index, dragAry, dropAry) {
  let dropItem = dragAry.find(item => item.index === index)
  let setItem = dropAry.find(item => item.index === dropItem.index)
  return { setItem, dropItem }
}
async function classHandler(item, className) {
  item.addClass(className)
  await waitHandler()
  item.removeClass(className)
}

export { waitHandler, classHandler, dataHandler }
