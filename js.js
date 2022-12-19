const dragableItem = document.querySelector(".item");
const placeholder = document.querySelectorAll(".placeholder");

dragableItem.addEventListener("dragstart", dragStart);
dragableItem.addEventListener("dragend", dragEnd);

function dragStart(ev) {
	ev.target.classList.add("hold");
	setTimeout(() => {
		ev.target.classList.add("hide");
	}, 0);
}

function dragEnd(ev) {
	ev.target.className = "item";
}

placeholder.forEach((elem) => {
	elem.addEventListener("dragenter", dragEnter);
	elem.addEventListener("dragover", dragOver);
	elem.addEventListener("dragleave", dragLeave);
	elem.addEventListener("drop", dropItem);
});

function dragEnter(ev) {
	ev.target.style.backgroundColor = getRandomColor();
}

function dragOver(ev) {
	ev.preventDefault();
}

function dragLeave(ev) {
	ev.target.style.backgroundColor = `rgb(14, 17, 201)`;
}

function dropItem(ev) {
	ev.target.append(dragableItem);
	ev.target.style.backgroundColor = `rgb(14, 17, 201)`;
}

const colors = ["#FFF633", "#FF8133", "#D3FF33", "#3DFF33", "#33FFFE", "#3368FF", "#F61BFF", "#FF1B86"];
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
