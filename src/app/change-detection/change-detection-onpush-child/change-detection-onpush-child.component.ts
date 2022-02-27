import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-change-detection-onpush-child',
  templateUrl: './change-detection-onpush-child.component.html',
  styleUrls: ['./change-detection-onpush-child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnpushChildComponent implements OnInit {

  constructor() { }

  @Output()
  onPushWithEmit : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.onPushWithEmit.emit("test")
  }

}
