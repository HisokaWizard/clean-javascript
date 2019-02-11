window.onload = () => {
    hideTabsContent(); 
}

function openTab(event) {
    const target = event.target;
    const tabs = document.getElementsByClassName('tab');
    hideTabsContent();
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].classList.remove('white-border');
        if (target.id === tabs[index].id) {
            tabs[index].classList.add('white-border');
            showTabContent(index);
        }
    }
}


function hideTabsContent() {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let index = 0; index < tabContent.length; index++) {
        tabContent[index].classList.remove('show');
        tabContent[index].classList.add('hide');
    }
}

function showTabContent(activeTab) {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let index = 0; index < tabContent.length; index++) {
        if (activeTab === index) {
            tabContent[index].classList.remove('hide');
            tabContent[index].classList.add('show');
        }
    }
}