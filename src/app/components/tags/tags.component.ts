import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/Models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags:Tag[]=[];

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

}
