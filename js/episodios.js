const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    
    
    const allAccordionContents = document.querySelectorAll('.accordion-content');
    allAccordionContents.forEach(content => {
      if (content !== accordionContent && content.classList.contains('active')) {
        content.classList.remove('active');
        content.style.display = 'none';
      }
    });
    
    
    accordionContent.classList.toggle('active');
    if (accordionContent.classList.contains('active')) {
      accordionContent.style.display = 'block';
    } else {
      accordionContent.style.display = 'none';
    }
  });

  //Función para la barra de navegación responsiva

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector ('.toggle_btn i');
const respMenu = document.querySelector('.responsive_navbar');

toggleBtn.onclick = function (event) {
    event.preventDefault();
    respMenu.classList.toggle('open')
    const isOpen = respMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};
});
       
      