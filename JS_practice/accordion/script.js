function actionAccordion() {
    const accordionPanels = document.getElementsByClassName('panel');

    const listenHandler = (event) => {
        document.removeEventListener('click', listenHandler);
        actionAccordion();
        for(let index = 0; index < accordionPanels.length; index++) {
            if(event.target.id === accordionPanels[index].id) {
                accordionPanels[index].style.visibility = 'visible';
                accordionPanels[index].style.height = 'auto';
                accordionPanels[index].style.padding = `${10}px`;
            } else {
                accordionPanels[index].style.visibility = 'hidden';
                accordionPanels[index].style.height = 0;
                accordionPanels[index].style.padding = 0;
            }
        }
    }

    document.addEventListener('click', listenHandler);
}

actionAccordion();
