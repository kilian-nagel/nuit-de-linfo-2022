
function initApprendreListeners(){
    document.querySelector('.btn-vih').addEventListener('click',displayVIH);
    document.querySelector('.btn-sida').addEventListener('click',displaySIDA);
    document.querySelector('.btn-dangers').addEventListener('click',displayDANGERS);

    console.log('he');
}

function displayVIH(e){
    e.preventDefault();
    console.log('hello');
    document.querySelector(".vih").style.display = "flex";
}

function displaySIDA(e){
    e.preventDefault();
    document.querySelector(".sida").style.display = "flex";
}

function displayDANGERS(e){
    e.preventDefault();
    document.querySelector(".dangers").style.display = "flex";
}

initApprendreListeners();
