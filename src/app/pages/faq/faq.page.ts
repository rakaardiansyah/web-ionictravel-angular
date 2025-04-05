import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  imports: [IonicModule]
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
