//added rainbox text because I think it looks cool asf
window.addEventListener("load", function(){
	var elementalElements = document.getElementsByClassName("RainbowText");
	for (let i=0;i<elementalElements.length;i++){
		createColorfulText(elementalElements[i]);
	}
});

function createColorfulText(element){
	var text = element.innerText;
	element.innerHTML = "";
	for(let i = 0; i< text.length;i++){
		let CharacterElement = document.createElement("span");
		CharacterElement.style.color = "hsl(" + (360* i /text.length) + ",80%,50%)";
		CharacterElement.innerHTML = text[i];
		element.appendChild(CharacterElement);
	}

}

/* using this area as a temp text area :)
    <audio controls autoplay>
        <source src="/audio/.mp3" type="audio/mpeg">
        </audio>
*/

