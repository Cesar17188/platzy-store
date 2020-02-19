import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor() {
    console.log('1. constructor');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  //    ngOnChanges(changes: SimpleChanges): void {
  //        console.log('2. ngOnChanges');
  //        console.log(changes);
  //       }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    console.log('5.ngOnDestroy');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {
    console.log('4. DoCheck');
  }
  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
