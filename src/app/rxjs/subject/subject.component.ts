import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  
  subject : Subject<string> = new Subject();
  behaviourSubject = new BehaviorSubject(null);
  sub$ : Observable<string>;
  bsub$ : Observable<string>;
  counter : number =0;


  counterSubject : Subject<number> = new Subject();
  counterObservable : Observable<number> = this.counterSubject.asObservable();

  constructor() { 
  }

  /*
  1) An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.
  2) It is an observer in addition to being an observable so you can also send values to a subject in addition to 
  subscribing to it(both publisher and subcriber)
  3) Subject maintains a list of observers, and notifies them automatically of state changes or when new data publishes
  which is also called multi casting

  Subject/BehaviourSubject for multicasting :

  In observable , if we observer counterPublisher example where it is first pushing all the data(1,2,3,4,5) 
  to subscriber1 followed by subscriber2 and subscriber3
  subscriber1  ---- 1,2,3,4,5
  subscriber2  ---- 1,2,3,4,5
  subscriber3  ---  1,2,3,4,5


  In muit casting : 
   subscriber1  ---- 1
  subscriber2  ---- 1
  subscriber3  ---  1

  subscriber1  ---- 2
  subscriber2  ---- 2
  subscriber3  ---  2

  subscriber1  ---- 3
  subscriber2  ---- 3
  subscriber3  ---  3
  
  so on.

  which will be achieved by  Subject/BehaviourSubject - check multiCastingSubjectorPublisher() 
  and multiCastingSubscribers()
  or click on MultiCasting with counter button.
 
  Subject Vs Behaviour Subject :
  Behaviour Subject is also a subject but gets last emitted when user subscribed to it.

  Subject :
      subscriber will get only latest data that is published after he subscribed but not data which was published before.
      does not need any initial value 
      sub : Subject = new Subject();

  Behaviour Subject
    with Behaviour subject subscriber will get latest emitted value once he subscribed as well as new data which
  will get published
    It needs an initial value as it must always return a last emitted value on subscription even 
    next() is not called on BehaviourSubject object as behSub.next(1);

     behSub : BehaviourSubject = new BehaviorSubject(0/null/some initial value);


     Example : Test this scenario by 
     first click on publish button which will publish data using both subject and behaviour subject
     then click on sub Vs BehSub button which will subscribe after data published

     you will see observe last emitted value in acse on behavior subject and nothing for Subject

  */

  ngOnInit(): void {
    this.sub$=this.subject.asObservable();
    this.bsub$=this.behaviourSubject.asObservable();

    this.multiCastingSubscribers();
  }

  publish(){
    console.log("data pushed")
    this.subject.next(`publish count using subject`);
    this.behaviourSubject.next(`publish count using subject`);
  }

  /*
  if we subscribed after data is pushed
  */
  subVsBehSub(){
    this.sub$.subscribe(count => console.log(count)) 
    this.bsub$.subscribe(count => console.log(count))
  }


  multiCastingSubjectorPublisher(){
    let i:number;
    for(i=1;i<5;i++){
      this.counterSubject.next(i);
    }
  }

  multiCastingSubscribers(){
    const sub1 = {
      next : (count) => console.log(`sub 1 recieved count : ${count}`),
      error : (err) => console.log(`sub 1 error`),
      complete : () => console.log("complete")
    }

    this.counterObservable.subscribe(sub1);
    this.counterObservable.subscribe({
      next : (count) => console.log(`sub 2 recieved count : ${count}`),
      error : (err) => console.log(`sub 2 error`),
      complete : () => console.log("complete")
    })
    this.counterObservable.subscribe({
      next : (count) => console.log(`sub 3 recieved count : ${count}`),
      error : (err) => console.log(`sub 3 error`),
      complete : () => console.log("complete")
    })
  }



}
