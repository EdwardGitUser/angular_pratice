import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
    myreactForm: FormGroup;

    ngOnInit(): void {
        this.myreactForm = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(2)]),
            price: new FormControl(null, Validators.required),
            author: new FormControl(null, [Validators.required, Validators.minLength(2)]),
            reklama: new FormControl("default"),
        });
    }

    onSubmit() {
        console.log(this.myreactForm);
        
    }



}

