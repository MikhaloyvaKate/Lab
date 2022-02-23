document.getElementById("button");

function convert() {
  let textBox_1 = document.getElementById("block_1").value;
  formatText(textBox_1);
}
function formatText(text) {
  let formatText = text.replace(/[{}()[\]]/g, "");
  let textBox_2 = (document.getElementById("block_2").value = formatText);
}
