import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-produk',
  standalone: true,
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  imports: [IonicModule] 
})
export class ProdukPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
