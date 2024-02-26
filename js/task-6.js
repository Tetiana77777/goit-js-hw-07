function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

const createBoxes = amount => {
    const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

btnCreate.addEventListener('click', () => {
    console.log(inputNum.value);
    
  if (
    Number(inputNum.value.trim()) > Number(inputNum.max) ||
    Number(inputNum.value.trim()) < Number(inputNum.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
      let boxesToAdd = createBoxes(inputNum.value.trim());
      boxes.append(...boxesToAdd);
  }
  inputNum.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNum.value = '';
  boxes.innerHTML = '';
}


