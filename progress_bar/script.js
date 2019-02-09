function fetchProgress(dataPart, maxSizeProgress) {
    const progresing = document.getElementById('progressing');
    const procents = document.getElementById('procents');
    
    const realProcentValue = 100 * dataPart / maxSizeProgress;

    progresing.style.width = `${realProcentValue}%`;
    procents.innerText = `${realProcentValue}%`;
}

function addData() {
    let index = 1;
    const maxfiles = 20;

    const pushDataItem = () => {
        setTimeout(() => {
            if (index === maxfiles + 1) {
                return;
            }
            const abstractFile = `Video_${Math.round(Math.random()*1000000)}.mkv`;
            const element = document.createElement('div');
            element.style.width = `${500}px`;
            element.style.height = `${20}px`;
            element.style.padding = `${5}px`;
            element.style.verticalAlign = `middle`;
            element.style.marginLeft = `${20}px`;
            element.style.color = `lightgreen`;
            element.innerText = abstractFile;
            document.body.appendChild(element);
            fetchProgress(index, maxfiles);
            index++;
            pushDataItem();
        }, Math.round(Math.random()*1000));
    }

    pushDataItem();
}