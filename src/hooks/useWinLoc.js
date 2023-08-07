
function useWindowLoc() {
  let y = 0
  window.addEventListener("scroll", () => {
    y = document.documentElement.scrollTop
    console.log("y-------", y);
  })
  return y
}


export default useWindowLoc