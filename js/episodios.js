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
});
       
      