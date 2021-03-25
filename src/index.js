import 'materialize-css';
import { HomeComponent } from './home/home.component';



const display=()=>{
    alert("display");
    const selecteur="body"
    const exemple=new HomeComponent(selecteur);
    exemple.display()
};

if (window.cordova){
    window.document.addEventListener("deviceready",()=>{
        display();
     });
}




// alert(cordova);






 


