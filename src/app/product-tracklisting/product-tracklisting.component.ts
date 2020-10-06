import { Component, OnInit } from '@angular/core';
import { AlbumStorePage } from '../../../e2e/app.po';

import {Album} from '../album';

import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(_productService) { }

  ngOnInit() {
    this._productService.getAlbum(1)
  }

}

albumInfo: Album;