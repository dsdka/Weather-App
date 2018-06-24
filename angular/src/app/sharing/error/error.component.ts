import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  status: number;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.status = this.dataService.serverStatus;
  }
  returnHomePage() {
    this.router.navigate(['home']);
  }
}
