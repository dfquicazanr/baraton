import {Component, Input, OnInit} from '@angular/core';
import {Sublevel} from '../../model/sublevel';
import {Product} from '../../model/product';

@Component({
  selector: 'app-sublevel',
  templateUrl: './sublevel.component.html',
  styleUrls: ['./sublevel.component.css']
})
export class SublevelComponent implements OnInit {
  @Input() sublevels: Sublevel[];
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
