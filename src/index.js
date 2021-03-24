import 'materialize-css';
import { HomeComponent } from './home/home.component';


const display = () => {
    const selecteur = "body"
    const exemple = new HomeComponent(selecteur);
    exemple.display();
}

display();