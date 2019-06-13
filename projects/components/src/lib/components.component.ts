import { Component, OnInit } from '@angular/core';
import { Status } from '@models';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      components works!
    </p>
    <lib-shared></lib-shared>
  `,
  styles: []
})
export class ComponentsComponent implements OnInit {

  ngOnInit() {
  }

}
