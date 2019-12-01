var longerList = document.getElementById("list");
var btn = document.getElementById("btn");
var headText = document.getElementById("headline");
var list = document.getElementById("list").getElementsByTagName("li");

longerList.addEventListener("click", activeItem);

function activeItem(e) {
	if(e.target.nodeName == "LI") {
		headText.innerHTML = e.target.innerHTML
		for( i = 0; i < e.target.parentNode.children.length; i++ ) {
			e.target.parentNode.children[i].classList.remove("active");
		}
		e.target.classList.add("active")
	}
}	

btn.addEventListener("click", addNewItem)

function addNewItem () {
	longerList.innerHTML += "<li>new item</li>"
}