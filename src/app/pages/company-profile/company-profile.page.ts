import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
  imports: [IonicModule] 
})
export class CompanyProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
