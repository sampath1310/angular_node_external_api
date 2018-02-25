import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {HttpService} from '../http.service'
import {List} from '../model/List'
import { Observable } from 'rxjs/Observable';
@Component({
 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() list:List
  obj:Object
  message;
  constructor(private service:HttpService,private http:HttpClient) { 
  }

  ngOnInit() {
    //this.service.getData().subscribe(val => this.list=val);
    // this.nodecall().subscribe(val => {
    //         this.obj=JSON.parse(val.toString());
    //   });
  }

   onSubmit(f: NgForm) {
        this.scrap();
        // this.list=new  List(this.obj['status'],this.obj['message'])
        // this.message=this.getBreeds(this.list);

  }

  nodecall():Observable<Object>{
    return this.http.get('http://localhost:3000/test')
  }

  scrap():void{
    this.http.get('http://localhost:3000/scrape').subscribe(val=>{
      console.log(val);
    });
  }

  getBreeds(List):Array<string>{
    return List['message']
  }

  }
  

