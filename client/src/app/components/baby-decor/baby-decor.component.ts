import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../models/image.model';
import { GalleryCarouselComponent } from '../gallery-carousel/gallery-carousel.component';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-baby-decor',
  standalone: true,
  imports: [CommonModule, GalleryCarouselComponent, NgOptimizedImage],
  templateUrl: './baby-decor.component.html',
  styleUrl: './baby-decor.component.scss'
})
export class BabyDecorComponent {
  public selectedImage: number | null = null;

  images = [{
    url: './assets/images/baby-decor/1.JPG'
  },
  {
    url: './assets/images/baby-decor/2.JPG'
  },
  {
    url: './assets/images/baby-decor/3.JPG'
  },
  {
    url: './assets/images/baby-decor/4.JPG'
  },
  {
    url: './assets/images/baby-decor/5.JPG'
  },
  {
    url: './assets/images/baby-decor/6.JPG'
  },
  {
    url: './assets/images/baby-decor/7.JPG'
  },
  {
    url: './assets/images/baby-decor/8.JPG'
  },
  {
    url: './assets/images/baby-decor/9.JPG'
  },
  {
    url: './assets/images/baby-decor/10.JPG'
  },
  {
    url: './assets/images/baby-decor/11.JPG'
  },
  {
    url: './assets/images/baby-decor/12.JPG'
  },
  {
    url: './assets/images/baby-decor/13.JPG'
  },
  {
    url: './assets/images/baby-decor/14.JPG'
  },
  {
    url: './assets/images/baby-decor/15.JPG'
  },
  {
    url: './assets/images/baby-decor/16.JPG'
  },
  {
    url: './assets/images/baby-decor/17.JPG'
  },
  {
    url: './assets/images/baby-decor/18.JPG'
  },
  {
    url: './assets/images/baby-decor/19.JPG'
  },
  {
    url: './assets/images/baby-decor/20.JPG'
  },
  {
    url: './assets/images/baby-decor/21.JPG'
  },
  {
    url: './assets/images/baby-decor/22.JPG'
  },
    // {
    //   url: './assets/images/baby-decor/23.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/24.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
    // {
    //   url: './assets/images/baby-decor/1.JPG'
    // },
  ] as Array<Image>;

  constructor() { }

  ngOnInit(): void {

  }
}
