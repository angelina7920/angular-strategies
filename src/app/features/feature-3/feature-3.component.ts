import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-3',
  standalone: true,
  imports: [],
  templateUrl: './feature-3.component.html',
  styleUrl: './feature-3.component.scss',
})
export class Feature3Component implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Feature3Component init');
  }
  ngOnDestroy(): void {
    console.log('Feature3Component destroy');
  }
}
