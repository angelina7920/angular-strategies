import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-2',
  standalone: true,
  imports: [],
  templateUrl: './feature-2.component.html',
  styleUrl: './feature-2.component.scss'
})
export class Feature2Component implements OnInit, OnDestroy{
  ngOnInit(): void {
    console.log('Feature2Component init')
  }
  ngOnDestroy(): void {
    console.log('Feature2Component destroy')
  }
}
