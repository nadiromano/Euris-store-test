import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-layout-switch',
  templateUrl: './layout-switch.component.html',
  styleUrls: ['./layout-switch.component.css'],
})
export class LayoutSwitchComponent implements OnInit {
  @Output() changeView = new EventEmitter<string>();
  view: string = 'list';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onList() {
    this.view = 'list';
    this.changeView.emit(this.view);
  }

  onCards() {
    this.view = 'card';
    this.changeView.emit(this.view);
  }
}
