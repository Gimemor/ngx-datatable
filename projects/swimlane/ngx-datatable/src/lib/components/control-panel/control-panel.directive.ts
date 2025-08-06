import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-control-panel]' })
export class DataTableControlPanelDirective {
  constructor(public template: TemplateRef<any>) {}
}
