// import { Component } from "@angular/core";

// @Component({
//    standalone:true,
//    selector:'todo-list-item',
//    template:`<li>(TODO) read cup of coffee 
//              introduction</li>`,
//    styles:['li{color: papyawhip;}'],
// })
// //rendering dynamic data

// @Component({
//    template: ` <p>Title: {{ taskTitle }}</p> `,
//  })
//  @Component({
//    selector:'profile-pic',
//    template:`<img src="profile-photo.jpg" alt="Your profile photo" />`,
//    syles:[
//       `img{
//          border-radius:50%;
//       }`
//    ]
// })

// export class TodoListItem{
//    taskTitle = 'Todo List & read cup of coffee';
//    isComplete = false;
   
// }
// //Dynamic Properties and Attributes
// //<button [disabled]="hasPendingChanges"></button>

// //Even handling
// //<button (click) = "savachanges($event)">Save Changes </button>

// // <section class = "admin-control" *nglf ="hasAdminPrivile">
// // the content you are lokking for is here"
// // </section>
// //rendering a list
// // <ul class = "ingredient-list"><li *ngFor = "let task of taskList">{{task}}</ul>


// //custom directives
// // @Directive({
// //    selector:'[appHighLight]'
// // })
// // exports class HighlightDirective{
// //    private el = inject(ElementRef);
// //    constructor(){
// //       this.el.nativeElement.style.backgroundColor = 'yellow';
// //    }
// // }

import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculatorService = inject(CalculatorService);
  totalCost = this.calculatorService.add(50, 25);
}