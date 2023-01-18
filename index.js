var password = "CFE";
var password2 = "cheeseburger"

function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}

function passcheck(){
	if (document.getElementById('pass').value != password){
		alert('Wrong password HAHA, try again man...');
		return false;
	}
	if (document.getElementById('pass').value == password){
		alert('Lucky Guess');
	}
}

function passcheck2(){
	if (document.getElementById('pass2').value != password2){
		alert('Wrong password HAHA, try again man...');
		return false;
	}
	if (document.getElementById('pass2').value == password2){
		alert('Lucky Guess');
	}
}