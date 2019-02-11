function borderChanges() {
    const tlar = document.getElementById('tlar');
    const tlat = document.getElementById('tlat');
    tlat.value = tlar.value;

    const trar = document.getElementById('trar');
    const trat = document.getElementById('trat');
    trat.value = trar.value;

    const blar = document.getElementById('blar');
    const blat = document.getElementById('blat');
    blat.value = blar.value;

    const brar = document.getElementById('brar');
    const brat = document.getElementById('brat');
    brat.value = brar.value;

    const viewBlock = document.getElementById('view-block');
    viewBlock.style.borderTopLeftRadius = `${tlar.value}px`;
    viewBlock.style.borderTopRightRadius = `${trar.value}px`;
    viewBlock.style.borderBottomLeftRadius = `${blar.value}px`;
    viewBlock.style.borderBottomRightRadius = `${brar.value}px`;
}