
function waitHandler() {
    return new Promise((resolve)=>{
      setTimeout(()=> resolve(),400)
    })
  }
async function classHandler(item,className) {
    item.addClass(className)
    await waitHandler()
    item.removeClass(className)
}

export {waitHandler,classHandler}