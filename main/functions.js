async function copyMail(element) {
    navigator.clipboard.writeText("jaksmutny@gmail.com");

    element.src = 'img/icons/checkmark.png';
    element.style.marginLeft = '4px';
    element.style.opacity = 1;

    await sleep(2000);

    element.src = 'img/icons/copy.png';
    element.style.marginLeft = '6px';
    element.style.opacity = 0.5;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
