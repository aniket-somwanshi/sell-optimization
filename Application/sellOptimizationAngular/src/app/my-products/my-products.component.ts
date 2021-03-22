import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  date = "2019-01-01";
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
  myProducts=[];

  showOptimizations:boolean = false;

  ngOnInit() {
    this.myProducts =  JSON.parse(localStorage.getItem('my-products'));
    // console.log(this.myProducts);
  }

   async generate(){
    console.log(this.myProducts);
    // console.log(this.myProducts.length);
    var i=0;
    for(i = 0; i < this.myProducts.length; i++){
      // console.log(this.myProducts[i]);

      this.myProducts[i].curr_date = this.date;

      const promise:any = await this.http.post('http://127.0.0.1:5000/predict', this.myProducts[i]).toPromise();
      console.log(promise);
      console.log("i",i);
      this.myProducts[i].month = promise.month;
      this.showOptimizations = true;

      // promise.then((data:any)=>{
      //   console.log("i", i);
      //   console.log(this.myProducts[i]);
      //   this.myProducts[i].month = data.month;
      //   // console.log(data);
      //   this.showOptimizations = true;
      // }).catch((error)=>{
      //   console.log("Promise rejected with " + JSON.stringify(error));
      // });

      // promise.then((data:any)=>{
      //   console.log("i", i);
      //   console.log(this.myProducts[i]);
      //   this.myProducts[i].month = data.month;
      //   // console.log(data);
      //   this.showOptimizations = true;
      // }).catch((error)=>{
      //   console.log("Promise rejected with " + JSON.stringify(error));
      // });




      // this.http.post('http://127.0.0.1:5000/predict', this.myProducts[i]).subscribe((data:any)=>{
      //   console.log("i", i);
      //   // console.log(this.myProducts[i]);
      //   this.myProducts[i].month = data.month;
      //   // console.log(data);
      //   this.showOptimizations = true;
      // });
    }
  }

  deletePurchaseHistory(){
    localStorage.clear();
    this.ngOnInit();
  }
  

  
}
