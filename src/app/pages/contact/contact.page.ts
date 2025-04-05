import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  imports: [IonicModule] 
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
