const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// helper function to create delay
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getData() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  output.textContent = ""; // clear previous output

  try {
    await wait(delay);
    output.textContent = text;
  } catch (error) {
    console.error(error);
  }
}


button.addEventListener("click", getData);
