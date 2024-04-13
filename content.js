// Find the survey elements on the page
const surveyElements = document.querySelectorAll('[data-automation-id="survey-element"]');

// Loop through the survey elements and fill in the answers
surveyElements.forEach(function(element) {
  // Fill in the answer for this survey element
  element.value = 'Answer for this survey element';

  // Submit the answer
  element.dispatchEvent(new Event('input', { bubbles: true }));
});
