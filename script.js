/*//Get modal element
var modal = document.getElementById("simpleModal");
//Get open modal button
var modalBtn = document.getElementById("modalBtn1");
//Get the close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen for open click
modalBtn.addEventListener("click", openModal);
//Listen for open click
closeBtn.addEventListener("click", closeModal);
//Listen for outside click
window.addEventListener("click", clickOutside);


//Funtion to open modal 
function openModal(){
    modal.style.display = "block";
}

//Funtion to close modal 
function closeModal(){
    modal.style.display = "none";
}

//Funtion to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = "none";
}
}*/

function modalBox(){
    document.addEventListener("click", function (event) {
    ;
        const target = event.target;
        if (target.hasAttribute('data-box')){
            if (target.hasAttribute('data-window')){
                const dynamicID = target.getAttribute('data-window');
                document.getElementById(dynamicID).classList.add('open-modal');
            }
        }

        if (target.hasAttribute('data-dismiss') || target.classList.contains('modal')){
            const modal = document.querySelector('[class="modal open-modal"]');
            modal.classList.remove('open-modal');
        }

    });
}

// function clickOutside(e){
//     if(e.target == modal){
//         modal.style.display = "none";
//     }
// }
// window.addEventListener("click", clickOutside);

modalBox();

