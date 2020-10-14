import { Component, Input, ViewChild } from '@angular/core';
import { DynamicHostDirective } from './dynamic-host-directive';
import { DynamicRender } from './dynamic-render.service';

@Component({
  selector: 'embed-component',
  template: ` <ng-template dynamicHostDirective></ng-template> `,
})
export class EmbedComponent {
  @Input('src') src: string;

  @ViewChild(DynamicHostDirective, { static: true })
  dynamicHost: DynamicHostDirective;

  constructor(private dynamicRender: DynamicRender) {}

  ngOnInit() {
    if (this.src.endsWith('.ts')) {
      this.dynamicRender.loadComponent(this.dynamicHost.viewContainerRef, this.src);
    }
  }
}
