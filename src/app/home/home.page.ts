import { Component } from '@angular/core';
// import SwiperCore from 'swiper';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Aktifkan fitur Swiper
// SwiperCore.use([Autoplay, Pagination]);

import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  // modules = [Autoplay, Pagination, Navigation];

  selectedTab: string = 'haji';
  activeTab: string = 'Home';
  isMobile: boolean = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
  ) {
    this.isMobile = this.platform.is('mobile');
  }

  images: string[] = [
    'assets/header/header1.png',
    'assets/header/header2.png',
    'assets/header/header3.png'
  ];

  getImages() {
    return this.images;
  }

  hajiItems = [
    {
      imghaji: 'assets/img_berita2.png',
      titlehaji: 'Haji Persiapan & Keberangkatan1',
      deschaji: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imghaji: 'assets/img_berita2.png',
      titlehaji: 'Haji Persiapan & Keberangkatan2',
      deschaji: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imghaji: 'assets/img_berita2.png',
      titlehaji: 'Haji Persiapan & Keberangkatan3',
      deschaji: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
  ];

  umrahItems = [
    {
      imgumrah: 'assets/img_berita2.png',
      titleumrah: 'Umrah Persiapan & Keberangkatan1',
      descumrah: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imgumrah: 'assets/img_berita2.png',
      titleumrah: 'Umrah Persiapan & Keberangkatan2',
      descumrah: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imgumrah: 'assets/img_berita2.png',
      titleumrah: 'Umrah Persiapan & Keberangkatan3',
      descumrah: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
  ];

  wisataItems = [
    {
      imgwisata: 'assets/img_berita2.png',
      titlewisata: 'Wisata Persiapan & Keberangkatan1',
      descwisata: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imgwisata: 'assets/img_berita2.png',
      titlewisata: 'Wisata Persiapan & Keberangkatan2',
      descwisata: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
    {
      imgwisata: 'assets/img_berita2.png',
      titlewisata: 'Wisata Persiapan & Keberangkatan3',
      descwisata: 'Calon jemaah haji mempersiapkan dokumen, kesehatan, dan perlengkapan sebelum berangkat ke Tanah Suci.'
    },
  ];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  openMenu() {
    this.menu.open();
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
    
  }

}
