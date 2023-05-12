/**
 * Shuffles array in place. ES6 version
 * @param {arr} a items An array containing the items.
 */
const shuffleArray = arr => {
  for (let nr = arr.length - 1; nr > 0; nr--) {
    const newNr = Math.floor(Math.random() * (nr + 1))
    ;[arr[nr], arr[newNr]] = [arr[newNr], arr[nr]]
  }
  return arr
}

export default shuffleArray
