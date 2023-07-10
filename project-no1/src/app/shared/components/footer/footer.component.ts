import { Component, OnInit } from '@angular/core';

// Decorator -- is a fn called with the meta data
// * will decorate a normal class as angular component
@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <p>Copyright {{copyrightYear}} | Arun</p>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  // public variable 
  copyrightYear = 2023;

  constructor() { }

  ngOnInit(): void {
  }

}
