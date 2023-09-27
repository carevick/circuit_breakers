const createElements = ()=> {
    const container = document.querySelector(".container");//Represents an empty <div>
    
    for (let i = 0; i <= 19; i += 1) {
      const circuitBreaker = document.createElement("div");//Represents 20 new <div> elements for each circuit breaker
             
        const openDialogButton = document.createElement("button");//Represents main button for opening dialog
        openDialogButton.classList.add("breaker")
        openDialogButton.innerHTML = `Osigurač ${i+1}`;
        openDialogButton.addEventListener('click', ()=> {
          dialog.showModal();
        });
        
        const img = document.createElement("img");//Represents image for main button
        img.src = 'img/1.jpg', img.alt= 'Fotografija osigurača';
        
        const dialog = document.createElement("dialog");//Represents dialog that contains breaker's label and dialog's close button
               
          const dialogContentBox = document.createElement("p");//Represents paragraph for breaker's label
        
            const breakerLabel = [];
            breakerLabel[0] = "Svjetlo u kuhinji";
            breakerLabel[1] = "Utičnica u kuhinji za napu i za mikrovalnu pećnicu";
            breakerLabel[2] = "Indukcijska ploča u kuhinji";
            breakerLabel[3] = "Pećnica u kuhinji";
            breakerLabel[4] = "Utičnice u kuhinji kod aparata za kavu i kuhala za vodu";
            breakerLabel[5] = "Utičnice i svjetlo u ljetnoj kuhinji";
            breakerLabel[6] = "Unknown";
            breakerLabel[7] = "Unknown";
            breakerLabel[8] = "Utičnica za TV u spavaćoj sobi";
            breakerLabel[9] = "Svjetlo u spavaćoj sobi";
            breakerLabel[10] = "Unknown";
            breakerLabel[11] = "Unknown";
            breakerLabel[12] = "Utičnice u dnevnoj sobi kod pisaćeg stola";
            breakerLabel[13] = "Utičnica za TV u dnevnoj sobi";
            breakerLabel[14] = "Svjetlo u dnevnoj sobi";
            breakerLabel[15] = "Utičnice i svjetlo u kupaonici";
            breakerLabel[16] = "Bojler i grijalica za kupaonicu";
            breakerLabel[17] = "Unknown";
            breakerLabel[18] = "Unknown";
            breakerLabel[19] = "Svjetlo u predsoblju";
        
            let dialogContent = "";
                       
            dialogContentBox.innerHTML = dialogContent += breakerLabel[i];
            console.log(dialogContent);

          
          const closeButton = document.createElement("button");//Represents button for closing dialog
          closeButton.classList.add("closeButton")
          closeButton.innerHTML = 'Close';
          closeButton.addEventListener('click', ()=> {
            dialog.close();
          });
      
      

      dialog.appendChild(dialogContentBox);//appending <p> element in <dialog> element
      dialog.appendChild(closeButton);//appending <button> element in <dialog> element
      openDialogButton.appendChild(img);//appending <image> element in main <button> element
      circuitBreaker.appendChild(openDialogButton);//appending <button> element in <div> element
      circuitBreaker.appendChild(dialog);//appending <dialog> element in <div> element
      container.appendChild(circuitBreaker);//appending <div> elements in HTML's (DOM) <div> element
      
    }
  }
    
  window.addEventListener('load', createElements());