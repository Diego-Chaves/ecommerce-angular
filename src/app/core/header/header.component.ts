import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name:string = ""
  categories:string[];

  constructor(){
    this.categories=[
      "category1",
      "category2",
      "category3",
      "category4",
      "category5",
      "category6",
      "category7",
      "category8",
      "category9",
      // "category10",
      // "category11",
      // "category12",
      
    ]
  }

}
