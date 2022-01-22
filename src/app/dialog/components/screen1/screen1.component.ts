import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'screen1.component.html',
})
export class Screen1Component {
  constructor(private router: Router) {}

  goToScreen2(): void {
    this.router.navigate(['/dialog/screen2'], {
      skipLocationChange: true,
    });
  }
}
