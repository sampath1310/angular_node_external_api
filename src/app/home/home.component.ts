import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
   onSubmit(f: NgForm) {
     return this.http.get('http://localhost:3000/test').toPromise()
     .then(data => {
       console.log(data);
     },err => {
       console.log("Error occured");
     });
    
  }
  }
  

