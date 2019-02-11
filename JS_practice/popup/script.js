function showInfo() {
    const popupView = document.getElementById('popup-view');
    popupView.innerText = 'This is popup/tooltip info to help you!'
    popupView.style.visibility = 'visible';
}

function hideInfo() {
    const popupView = document.getElementById('popup-view');
    popupView.style.visibility = 'hidden';
}