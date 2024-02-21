import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-1',
  standalone: true,
  imports: [],
  templateUrl: './feature-1.component.html',
  styleUrl: './feature-1.component.scss'
})
export class Feature1Component implements OnInit, OnDestroy{
  ngOnInit(): void {
    console.log('Feature1Component init')
  }
  ngOnDestroy(): void {
    console.log('Feature1Component destroy')
  }
}
