const accordionList = document.querySelectorAll('.js-accordion img');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAcordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
 
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAcordion)
});