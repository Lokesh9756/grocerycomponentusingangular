import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() userData: any[] = []

  constructor() { }
  deleteValue(e: any) {
    let ele = e.parentElement.parentElement


  }
  ngOnInit(): void {
  }

}
