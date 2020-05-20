const wordList = {
  "tiv": [0, 0, 0, 0, 0, 0, 0, 0],
  "frooth": [0, 0, 0, 0, 0, 0, 0, 0],
  "yaum": [0, 0, 0, 0, 0, 0, 0, 0],
  "flig": [0, 0, 0, 0, 0, 0, 0, 0],
  "rux": [0, 0, 0, 0, 0, 0, 0, 0],
}

/* each image associated with list of properties (1 for present, 0 for absent)
      blue, black, red, spots, square, circle, round, jagged
*/
const images = {
  A: [0, 1, 0, 0, 1, 0, 1, 0],
  B: [1, 0, 0, 1, 0, 1, 0, 1]
  C: [0, 0, 1, 0, 1, 0, 1, 1]
  D: [1, 0, 0, 0, 0, 1, 1, 0]
}

const dict = {
  "A": file,
  "B": file,
  "C": file,
  "D": file
}

// clicking on word adds properties of image to word
function handleWordClick(event, image) {
  // add word to list of words that have appeared
  let word = event.target.value
  for (let i=0; i<8; i++) {
      wordList[word][i]+=images[image][i] 
  } 
}

function randImage() {
  let random = dict.Keys.ElementAt((int).Random.Range(0, dict.Keys.Count - 1))
  return imageList[random]
}
