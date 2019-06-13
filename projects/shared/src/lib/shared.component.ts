import { Component, OnInit } from '@angular/core';
import {DTO } from '@models';

@Component({
  selector: 'lib-shared',
  template: `
    <div class="rect">
      {{dto.name}}
    </div>
  `,
  styles: [`
  .rect {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  `]
})
export class SharedComponent implements OnInit {
dto: DTO;

  ngOnInit() {
    this.dto = {
      id: 234,
      name: 'DTO name'
    };
  }

}
