import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styleUrls: ['./change-detection-default.component.css']
})
export class ChangeDetectionDefaultComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

}
