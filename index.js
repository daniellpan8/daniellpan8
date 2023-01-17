var password = "CFE";

function passcheck(){
	if (document.getElementById('pass').value != password){
		alert('Wrong password HAHA, try again man...');
		return false;
	}
	if (document.getElementById('pass').value == password){
		alert('Lucky Guess');
	}
}