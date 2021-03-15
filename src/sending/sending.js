import sendingHTML from './sending.html';

export const displaySend = (sendPosition) =>{
    const sendPage=document.querySelector(sendPosition);
    sendPage.innerHTML = sendingHTML
}
