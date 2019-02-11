function keyPressListner() {
    const cenzure = document.getElementById('cenzure');
    cenzure.addEventListener('keyup', (event) => {
        const reg = /(q)|(w)|(x)/ig;
        if (event.keyCode === 87 || event.keyCode === 88 || event.keyCode === 81) {
            const newValue = cenzure.value.replace(reg, () => { return '' });
            cenzure.value = newValue;
        }
    });
}
keyPressListner();