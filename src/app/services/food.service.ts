import { Injectable } from '@angular/core';
import { Foods } from '../shared/Models/food';
import { Tag } from '../shared/Models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 23,
        favourite: true,
        star: 3.5,
        tags: ['Fast Food', 'Fry'],
        imageUrl: "/assets/food1.jpg",
        cookTime: '10-15',
        origins: ['India', 'Germany']
      },
      {
        id: 2,
        name: 'Burger',
        price: 15,
        favourite: true,
        star: 5,
        tags: ['Fast Food', 'Non Veg'],
        imageUrl: "/assets/food2.jpg",
        cookTime: '20-25',
        origins: ['Germany', 'USA']
      },
      {
        id: 3,
        name: 'Soup',
        price: 10,
        favourite: false,
        star: 2.5,
        tags: ['Healthy', 'Non Veg'],
        imageUrl: "/assets/food3.jpg",
        cookTime: '5-10',
        origins: ['China', 'Japan']
      },

    ]
  }

  getAllTag():Tag[]{
    return [
      {name:'All',count:this.getAll().length},
      {name:'Fast Food',count:this.getAll().filter(f=>f.tags?.includes('Fast Food')).length},
      {name:'Pizza',count:10},
      {name:'Burger',count:12},
      {name:'Lunch',count:8},
      {name:'Fry',count:this.getAll().filter(f=>f.tags?.includes('Fry')).length},
      {name:'Healthy',count:5},
      {name:'Non Veg',count:this.getAll().filter(f=>f.tags?.includes('Non Veg')).length},
      {name:'Soup',count:this.getAll().filter(f=>f.tags?.includes('Soup')).length}
    ]
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All') {
      return this.getAll();
    }
    else {
      return this.getAll().filter(food => food.tags?.includes(tag));
    }
  }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

}
