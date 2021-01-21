import { Component } from '@angular/core';
import { TodoItem } from './todo-item'; //importe le todoItem pour pouvoir utiliser l'interface
//pour utilise rl'interface il nous faut des obkets items avec des title et des des checkbox
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  // crée un tableau vide pour les string composant la liste
  // public(privbate or else) nomdel'objet type objet(Array)>nature de sdonnées> = [](c'est un tableau vide)
  // 
  public todoArray : Array<TodoItem> = [
     { //on créée un objet
       title : 'item 1',
       checked : false,
     },
     {//on créée un autre  objet
      title : 'item 2',
      checked : false,
    },
    { //ect
      title : 'item 3',
      checked : false,
    },
    {
      title : 'item 4',
      checked : false,
    },
   ];

   //event sur push enter: methode
   //: void rien n'est retourné
   public addItem($event: KeyboardEvent): void {
     //boucle if + déclaration de la touche à pressé pour déclancher event
     if ($event.code === 'Enter'){
      //on récupère la  valeur de l'input target permet de remonter à l'element html à l'origine de l'event
     //evenement keyboard event
     //$event.target on retrouve élément html à lorigine de l'evenement ts
     //$event.target est un objet avec un type soit null soit objet de la class EventTarget
     //class EventTarget est une des class le s+ générique possible 
     //ici type event target donc on lui précise dans le html on informe où on traite la donnée (keyup)
     //on lui donne lke type de l'event HTMLINPUTELEMENT + précis que event target
     //class HTMLInut Element a des attribute type, value
     
     //const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
    
     //au dessus pseudo cast à éviter
     //ici on vérifie qu'one s tboen sur un objet de type HTMLInputElement
    const $input: EventTarget|null = $event.target;

    if ($input instanceof HTMLInputElement){
      // on créee uenvariable pour repérer les espaces
      const str =$input.value.trim();
      //attention l'attribut value renvoie toujoure un chaine de cractère vide 
      //donc on ne demande pa ssi c'est null
      // on demande si c'est une string vide
      // et qui n'a pas constituée d'espaces
      if(str !== ''){
        //ajoute au tableau d'items todoArray
        this.todoArray.push({
          title: str,
          checked: false,
        });
        // on remet la valeur du champ de formulaire à 0
        $input.value = '';  
      }
      

    } 
     
      console.log('Enter pressed');
     }

   }

   //ajouter la suppression sur le X
   //attention bien mettre la méthode dans AddItem
   //on passe par uen methode
   //adding 2nd argument named item of type string 
  public removeItem(index : number):void{ //$event ici click donc MouseEvent
    //enlever dernier élement du tableau
    //this.todoArray.pop();

    //suppr element précis du tableau 
    //html change via valeur typescript angular fais le reste via ng-for en terme d'affichage
    //const index = this.todoArray.indexOf(item); //methode indexof nous donne l'index de l'element
    // ATTENTION INdexof retourne 1 suel index si deux element ont le mm nom il retrounera le premier qu'il trouvera
    if(index > -1 && this.todoArray.length){//pour ne pas compter à partir de la fin (au cas ou l'appli évolue)
        //On vérifie que l'index existe bien dnas le tableau
    
      this.todoArray.splice(index, 1); // 2 argument, l'index de l'array  et le nb d'element à suppr 

    }
  }
}
  