import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/shared/Models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodList: Foods[] = [];

  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hello")
    this.foodList = this.fs.getAll();
    this.router.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foodList = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if(params['tag']){
        this.foodList = this.fs.getAllFoodByTag(params['tag'])
      }
      else {
        this.foodList = this.fs.getAll();
      }
    })
  }


}
