function initAccordion(accordionElem){
  //when panel is clicked, handlePanelClick is called and execute showPanel.
  function handlePanelClick(event){
      showPanel(event.currentTarget);
    }
//Hide currentPanel and show new panel.
  function showPanel(panel){
    //Hide current one thus First time it will be null.
     var expandedPanel = accordionElem.querySelector(".active");
     if (expandedPanel){
         expandedPanel.classList.remove("active");
     }
     //Show new one
     panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
       allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0])
}
initAccordion(document.getElementById("accordion"));

// on document load
function openPanel(){
    console.log("Open panel fired");
    var panelID = window.location.hash.substring(1);
        //Show new one
    if (panelID) {
        var panel = document.getElementById(panelID);
            panel.classList.add("active");
    }
}
