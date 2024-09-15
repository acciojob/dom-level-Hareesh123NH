//your JS code here. If required.
  function getDomLevel(element) {
        let level = 1; 
        while (element.parentElement) {
            element = element.parentElement;
            level++;
        }
        
        return level;
    }
   
const element = document.getElementById('level');

	if (element) {
        const domLevel = getDomLevel(element);
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert("Element with ID 'level' not found.");
    }