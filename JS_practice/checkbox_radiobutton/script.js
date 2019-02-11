function checkBoxTestFirst() {
    const checkbox = document.getElementById('one');    
    const body = document.getElementsByTagName('body');
    if (checkbox.checked) {
        body[0].style.backgroundColor = 'green';
    } else {
        body[0].style.backgroundColor = 'white';
    }
}

function radioTestFirst() {
    const radioGroup = document.getElementsByName('radio-first-group');
    const body = document.getElementsByTagName('body');
    for (let index = 0; index < radioGroup.length; index++) {
        if (radioGroup[index].checked && radioGroup[index].value === '1') {
            body[0].style.backgroundColor = 'blue';
            break;
        }
        else if (radioGroup[index].checked && radioGroup[index].value === '4') {
            body[0].style.backgroundColor = 'red';
            break;
        } else {
            body[0].style.backgroundColor = 'white';
        }
    }
}

function radioChecker() {
    const radioGroup = document.getElementsByName('radio-first-group');
    for (let index = 0; index < radioGroup.length; index++) {
        if (radioGroup[index].checked) {
            document.getElementById('radio-answer').innerText = `Now is active ${radioGroup[index].value}`;
        }
    }
}
