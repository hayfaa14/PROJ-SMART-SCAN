import 'materialize-css';
import { HomeComponent } from './home/home.component';



const display=()=>{
    alert("display");

};

if (window.cordova){
    window.document.addEventListener("deviceready",()=>{
        display();
     });
}
else {
    display
}
// alert(cordova);

const selecteur="body"
const exemple=new HomeComponent(selecteur);
exemple.display()




 


