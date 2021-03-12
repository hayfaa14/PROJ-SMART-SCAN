import template from './ecranPicture.html'
export const displayEcranPicture = (selector) =>{

    const ecranPicturePage=document.querySelector(selector);
    ecranPicturePage.innerHTML=template
};