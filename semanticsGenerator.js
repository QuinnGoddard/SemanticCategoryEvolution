const wordList = {
  "tiv": [0, 0, 0, 0, 0, 0, 0, 0],
  "frooth": [0, 0, 0, 0, 0, 0, 0, 0],
  "yaum": [0, 0, 0, 0, 0, 0, 0, 0],
  "flig": [0, 0, 0, 0, 0, 0, 0, 0],
  "rux": [0, 0, 0, 0, 0, 0, 0, 0]
}

/* each image associated with list of properties (1 for present, 0 for absent)
      blue, black, red, spots, square, circle, round, jagged
*/
const images = {
  A: [0, 1, 0, 0, 1, 0, 1, 0],
  B: [1, 0, 0, 1, 0, 1, 0, 1],
  C: [0, 0, 1, 0, 1, 0, 1, 1],
  D: [1, 0, 0, 0, 0, 1, 1, 0]
}


// clicking on word adds properties of image to word
function handleWordClick(event, file) {
  // get letter associated with image
  let image = file.substring(0,1)
  let word = event.target.value
  for (let i=0; i<8; i++) {
      wordList[word][i]+=images[image][i] 
  } 
  console.log(worldList[word])
}

function randImage() {
  const imageList = ["A.png", "B.png", "C.png", "D.png"]
  let random = Math.floor(Math.random() * 4)
  return imageList[random]
}
