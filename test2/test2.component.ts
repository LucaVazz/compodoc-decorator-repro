import { Component, Input, OnInit } from '@angular/core';

import { testDecorator } from '../test-decorator';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
@testDecorator
export class Test2Component implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
