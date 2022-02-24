import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-as-link',
  templateUrl: './as-link.component.html',
  styleUrls: ['./as-link.component.sass'],
})
export class AsLinkComponent implements OnInit {
  @Input() href: string = '/';

  @Input() linkText: string = '';

  ngOnInit(): void {}
}
