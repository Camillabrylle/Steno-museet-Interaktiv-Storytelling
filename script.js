//tillader at putte et element ovenpå et HTML element 
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  //Dette gør at vi senere kan finde det element vi har trukket på
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  // her finder vi det ID vi gemte ovenover
  function drop(ev, target) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const correctAnswer = draggedElement.dataset.answer;
  
    // Find den rigtige feedback-boks
    const feedbackBox = document.getElementById(`feedback-${target}`);
  
    if (target === correctAnswer) {
      // Vis grønt lys, hvis korrekt
      feedbackBox.style.backgroundColor = 'green';
    } else {
      // Vis rødt lys, hvis forkert
      feedbackBox.style.backgroundColor = 'red';
    }
  
    // Udsagnet forsvinder fra skærmen, når du har sluppet det
    draggedElement.style.display = 'none';
  
    // Fjern farven igen efter 1 sekund, så den resetter
    setTimeout(() => {
      feedbackBox.style.backgroundColor = 'transparent';
    }, 1000);
  }