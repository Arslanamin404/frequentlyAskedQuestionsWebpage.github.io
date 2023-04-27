//it contains our questions and answers only
const accordion = document.getElementsByClassName('content-container');

for ( i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
            console.log("ok It is working")
            this.classList.toggle('active'); 
        })
    }

