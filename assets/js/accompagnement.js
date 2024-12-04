/*accompagnement js*/

const stepItems = document.querySelectorAll('.step-item');
const stepDetails = document.querySelectorAll('.step-details');

stepItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    stepItems.forEach(step => step.classList.remove('active'));
    stepDetails.forEach(detail => detail.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');
    const stepId = item.getAttribute('data-step');
    document.getElementById(stepId).classList.add('active');
  });
});