const dragItem = document.querySelector(".item");
const placeholder = document.querySelectorAll(".placeholder");

dragItem.addEventListener("dragstart", dragStart);
dragItem.addEventListener("dragend", dragEnd);

function dragStart(ev) {
	ev.target.classList.add("hold");
	setTimeout(() => {
		ev.target.classList.add("hide");
	}, 0);
}

function dragEnd(ev) {
	ev.target.className = "item";
}

placeholder.forEach((el) => {
	el.addEventListener("dragenter", dragEnter);
	el.addEventListener("dragover", dragOver);
	el.addEventListener("dragleave", dragLeave);
	el.addEventListener("drop", drop);
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

function drop(ev) {
	ev.target.append(dragItem);
	ev.target.style.backgroundColor = `rgb(14, 17, 201)`;
}

const colors = ["#FFF633", "#FF8133", "#D3FF33", "#3DFF33", "#33FFFE", "#3368FF", "#F61BFF", "#FF1B86"];
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
