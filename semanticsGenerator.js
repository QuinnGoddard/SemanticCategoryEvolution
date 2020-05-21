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
function handleWordClick(event) {
  // get letter associated with image
  let image = document.getElementById("image").src.substring(57,58)
  console.log("image name", image)
  let word = event.target.value
  console.log("word selected", word)
  for (let i=0; i<8; i++) {
      wordList[word][i]+=images[image][i] 
  } 
  console.log(wordList[word])
  document.getElementById("image").src = randImage()
}

function randImage() {
  const imageList = ["A.png", "B.png", "C.png", "D.png"]
  let random = Math.floor(Math.random() * 4)
  return imageList[random]
}

// display results
function handleEnd(event){
  let printly = ""
  const properties = ["blue", "black", "red", "spots", "square", "circle", "round", "jagged"]
  for (var key in wordList) {
    printly += (key + "\n")
    for (let i=0; i<properties.length; i++) {
      if (wordList[key][i] != 0) {
        printly += (properties[i] + wordList[key][i])
      }
      printly += "/\n/"
    }
  }
  document.getElementById("results").innerHTML = printly
}
