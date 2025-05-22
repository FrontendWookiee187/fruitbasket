import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitslist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitslist.component.html',
  styleUrl: './fruitslist.component.scss'
})
export class FruitslistComponent {

  fruitlistdata = inject(FruitlistdataService);

  fontColorGood = 'green';
  fontColorBad = 'red';

   

  addComment(comment:string, index:number){
      this.fruitlistdata.addCommentToFruit(comment, index);

  };


}
