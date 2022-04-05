import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-as-link',
  templateUrl: './as-link.component.html',
  styleUrls: ['./as-link.component.sass'],
})
export class AsLinkComponent {
  @Input() href: string = '/';

  @Input() linkText: string = '';
}
