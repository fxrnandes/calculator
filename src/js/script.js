document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');
        const currentDisplay = display.textContent;
        
        if (value === 'C') {
          display.textContent = '0';
        } else if (value === '=') {
          try {
            display.textContent = eval(currentDisplay);
          } catch (e) {
            display.textContent = 'Error';
          }
        } else {
          if (currentDisplay === '0') {
            display.textContent = value;
          } else {
            display.textContent += value;
          }
        }
      });
    });
  });
  