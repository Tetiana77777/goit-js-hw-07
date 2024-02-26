const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameOutput.textContent = currentTarget.value.trim();
  } else {
    nameOutput.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', getInputValue);