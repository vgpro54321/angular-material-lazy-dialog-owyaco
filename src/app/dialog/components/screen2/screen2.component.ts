import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'screen2.component.html',
})
export class Screen2Component {
  constructor(private router: Router) {}

  goToScreen(number: number): void {
    this.router.navigate([`/dialog/screen${number}`], {
      skipLocationChange: true,
    });
  }
}
