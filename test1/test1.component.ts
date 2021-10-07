import { Component, Input, OnInit } from '@angular/core';

import { testDecorator } from '../test-decorator';

@testDecorator
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
