var botoesExpandir = document.getElementsByClassName('botao-expandir-retrair');

for (var i = 0; i < botoesExpandir.length; i++) {    
    botoesExpandir[i].addEventListener('click', function(e) {
        if(this.innerHTML === "-") {
        	this.innerHTML = "+";
        } else {
        	this.innerHTML = "-";
        }
        this.parentElement.classList.toggle('expandido');
    });
}
