import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.scss']
})
export class BarDetailsComponent implements OnInit {
  id: any;

  constructor(private $state: StateService) {}

  ngOnInit() {
    console.log('INIT')
    this.id = this.$state.params.id;
  }

}
