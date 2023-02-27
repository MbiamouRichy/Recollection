import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recollection';

  ngOnInit(){
      let img = document.querySelector('.main_bg') as HTMLImageElement;
       img.addEventListener('animationiteration', () =>{
         let attr: string;
         if (img.getAttribute('src') == "assets/1.png"){
           attr = "assets/2.png";
         }else if (img.getAttribute('src') == "assets/2.png"){
           attr = "assets/3.png";
         }else if (img.getAttribute('src') == "assets/3.png"){
           attr = "assets/4.png";
         }else {
           attr = "assets/1.png";
         }
         img.setAttribute('src', attr);
       })
  }


}
