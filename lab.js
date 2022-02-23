function textInitialization() {
  convertText(document.getElementById("block_1").value);
}

function convertText(text) {
  let arrOfOpenBrackets = ["(", "{", "["];
  let arrOfCloseBrackets = [")", "}", "]"];
  let openBrackets = [];
  let falseBrackets = [];
  let openBracketsID = [];

  for (i = 0; i < text.length; i++) {
    if (arrOfOpenBrackets.includes(text[i])) {
      openBrackets.push(arrOfOpenBrackets.indexOf(text[i]));
      push(openBracketsID, text, i);
    } else if (arrOfCloseBrackets.includes(text[i])) {
      let elemId = arrOfCloseBrackets.indexOf(text[i]);
      if (openBrackets.includes(elemId)) {
        for (e = 1; e <= openBrackets.length; e++) {
          if (openBrackets[openBrackets.length - e] == elemId) {
            splice(openBrackets, e);
            splice(openBracketsID, e);
            break;
          } else {
            continue;
          }
        }
      } else {
        push(falseBrackets, text, i);
        continue;
      }
    }
  }
  results(openBracketsID, falseBrackets, text);
}

function splice(arrOfBrackets, counter) {
  arrOfBrackets.splice(arrOfBrackets.length - counter, 1);
}

function push(arrOfBrackets, text, counter) {
  arrOfBrackets.push(text.indexOf(text[counter], counter));
}

function results(openBr, falseBr, text) {
  let resultFalseBrackets = openBr.concat(falseBr);
  resultFalseBrackets.sort(function (a, b) {
    return a - b;
  });
  let arrOfText = text.split("");
  resultFalseBrackets.forEach((element) => {
    arrOfText.splice(
      element,
      1,
      `<span class = "error">${arrOfText[element]}</span>`
    );
  });

  let textBox_2 = (document.getElementById("block_2").innerHTML =
    arrOfText.join(""));
}
