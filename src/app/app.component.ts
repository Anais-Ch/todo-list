import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  // crée un tableau vide pour les string composant la liste
  // public(privbate or else) nomdel'objet type objet(Array)>nature de sdonnées> = [](c'est un tableau vide)
   public todoArray : Array<string> = [
     'item 1',
     'item 2',
     'item 3',
     'item 4',
   ];

   //event sur push enter: methode
   //: void rien n'est retourné
   public addItem($event: KeyboardEvent): void {
     //boucle if + déclaration de la touche à pressé pour déclancher event
     if ($event.code === 'Enter'){
      //on récupère la  valeur de l'input target permet de remonter à l'element html à l'origine de l'event
     //evenement keyboard event
     //
     const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

     if($input !== null){
       console.log($input.value);
     }
     
     
      console.log('enter pressed');
     }

   }
}
  