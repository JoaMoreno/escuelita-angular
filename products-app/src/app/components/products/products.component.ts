import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products;

  constructor(
    private api: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getProducts().subscribe(
      res =>{
        this.Products = res
        //console.log(this.Products)
      },
      err => console.log(err)
    )
  }

  goToProduct(id){
    this.router.navigateByUrl("/product/"+id)
  }

  delete(id){
    this.api.deleteProduct(id).subscribe(
      res => {
        console.log(res)
        this.getProducts()
      },
      err => console.log(err)
    )
  }

}
