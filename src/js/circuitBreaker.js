const breakerLabels = [
  "Svjetlo u kuhinji", 
  "Utičnica u kuhinji za napu i za mikrovalnu pećnicu",
  "Indukcijska ploča u kuhinji",
  "Pećnica u kuhinji",
  "Utičnice u kuhinji kod aparata za kavu i kuhala za vodu",
  "Utičnice i svjetlo u ljetnoj kuhinji",
  "Unknown",
  "Unknown",
  "Utičnica za TV u spavaćoj sobi",
  "Svjetlo u spavaćoj sobi",
  "Unknown",
  "Unknown",
  "Utičnice u dnevnoj sobi kod pisaćeg stola",
  "Utičnica za TV u dnevnoj sobi",
  "Svjetlo u dnevnoj sobi",
  "Utičnice i svjetlo u kupaonici",
  "Bojler i grijalica za kupaonicu",
  "Unknown",
  "Unknown",
  "Svjetlo u predsoblju"
];

const createElements = (data) => {
  const container = document.querySelector(".container");//Represents an empty <div>
  
  for (let i = 0; i <= 19; i += 1) {
      const circuitBreaker = document.createElement("div");//Represents 20 new <div> elements for each circuit breaker
           
          const openDialogButton = document.createElement("button");//Represents main button for opening dialog
          openDialogButton.classList.add("breaker");
          openDialogButton.innerHTML = `Osigurač ${i+1}`;
          openDialogButton.addEventListener('click', () => {
          dialog.showModal();
          });
          
          const img = document.createElement("img");//Represents image for main button
          img.src = 'img/1.jpg', img.alt= 'Fotografija osigurača';
          
          const dialog = document.createElement("dialog");//Represents dialog that contains breaker's label and dialog's close button
              
              const dialogContentBox = document.createElement("p");//Represents paragraph for breaker's label
              let dialogContent = "";    
              dialogContentBox.innerHTML = dialogContent += breakerLabels[i];

              const closeButton = document.createElement("button");//Represents button for closing dialog
              closeButton.classList.add("closeButton");
              closeButton.innerHTML = 'Close';
              closeButton.addEventListener('click', () => {
                  dialog.close();
              });
    
    
      dialog.appendChild(dialogContentBox);//appending <p> element in <dialog> element
      dialog.appendChild(closeButton);//appending <button> element in <dialog> element
      openDialogButton.appendChild(img);//appending <image> element in main <button> element
      circuitBreaker.appendChild(openDialogButton);//appending <button> element in <div> element
      circuitBreaker.appendChild(dialog);//appending <dialog> element in <div> element
      container.appendChild(circuitBreaker);//appending <div> elements in HTML's (DOM) <div> element
    
  }
};
          
window.addEventListener('load', createElements(breakerLabels));