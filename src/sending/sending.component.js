import sendingHTML from '../sending/sending.component.html';

export const displaySend = (sendPosition) => {
    const sendPage = document.querySelector(sendPosition);
    sendPage.innerHTML = sendingHTML
}