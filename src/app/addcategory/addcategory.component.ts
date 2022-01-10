import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  public categories:any = [];
  
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data:any)=>{
      this.categories = data.data
      console.log(this.categories)
    });
  }

  save(frm:NgForm){
    console.log(frm.value)
    this.categoryService.saveCategory(frm.value).subscribe(data=>{
        this.categories.push(data)
    })
  }

}
