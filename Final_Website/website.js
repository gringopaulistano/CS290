function inputName() {
	var a = document.forms["EmailForm"]["Email"].value;
	if (a== " ") {
		window.alert("Please input your e-mail to subscribe!");
		return false;
	}
}

var slideIndex = 1;
showSlides (slideIndex);

function plusSides(n) {
	showSlides(slideIndex+=n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSides(n) {

	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length)
	{
		slideIndex=1;
	}
	if (n < 1)
	{
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}