import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  imports: [IonicModule] 
})
export class NewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
