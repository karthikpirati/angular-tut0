import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  ct: number ;

  constructor(private commonService : CommonService) { }

  counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counterObservable$: Observable<number>;

  count: number = 0;

  ngOnInit(): void {
    this.ct = this.commonService.getCount();
  }



  /*
  Observables provide support for passing data between parts of your application. 



  Note : In JavaScript we can pass function as value like integer or object
  -------------------------------------------------------

  Real time examples to understand this concept :

  1) Youtube -> Channel and Subscribers.
    One Subscriber subscribes to muliple channel or one channel may subscribed by multiple followers.

    when channel uploads new vidoes , Subscribers whose subscribed to that channel will gets that new vidoes 
  2) Twitter -> Celebrities and Followers
    Celebrities tweets their messages and followers will gets that messages


    Publisher :
    ----------
    
    Celebrity whose tweets messages/ Youtube channel who uploads new videos etc
    we can simply  say whose pushes/publishes some kind of data.

    it will achieved in Angular by subscriber function/publisher function

     This subscriber function/publisher function is function which accepts observer object as an argument and 
    pushes new notification to observer by call next call back of observer.


     Example : 
    // subscriber function/publisher function 
    // which pushes new data to each observer/follower/subscriber by call next callback function
    {
      next : ()=> {

      },
      err : ()=>{

      }
    }
    subscriberFunction(observer){
      observer.next("new video/new tweet");
    }

    what is this observer object ?
    

    Subscriber :
    ------------

     Whose subscribed to specific channel / who follows some celebrity
     we can call him as Observer in angular


    observer is object which contains three properties where each property accepts callback function
    or we can also say  it is an object with three callback functions

    observer = {
      next : CallBackFunction,
      error : CallBackFunction,
      complete : CallBackFunction
    }


    next : will accepts new data got from publisher as an argument and it has body to take care of that code.

    this next call back function will be called when publisher pushes new data/new video/new tweet.

    next = (publishedData) => {
      // code to whatever we want to do with publishedData
    }

    error : this function will be called when there an error while pushing the data
    error = (err) => //code to take care based on error


    observer = {
      next : (publishedData) =>  // logic to do with publishedData we received from publisher,
      error : (err) => // //code to take care based on error
      complete : () => // 
    }
    
   
 1) We will create an Observable by passing subscriberFunction/publisher function as a value.
     Note : During Observable object creation we are just passing function as a value to constructor but not calling
    that function 

    const observable = new Observable(subscriberFunction)

    Note : Each Observer binds to one subscriberFunction/publisher that contains code to push some kind of data
    
    
    now observerable object internally stores this subscriberFunction/publisher function 
    which contains code to push/publish new data to follwers/subscribers

    Note : till this we just create observable and stores subscriberFunction 
    but subscriberFunction is not called yet

  2) Observale class internally contains subscribe
  subscribe method accepts observer object as an argument and internally calls publisherFunction/subscriberFunction
  by passing observer.
      
    class Observable {
        subscribe(observer : Observer) : Subscription{
            this.subscriberFunction(observer)
        }
      }

    observable.subscribe(observer);

   now publisherFunction/subscriberFunction will be called with observer as an argument and 
    calls next call function of observer object.

    3)  now publisherFunction/subscriberFunction pushes new data by calling next on observer object as below
    
    observer.next("some date/vide/tweet")


  */

  reciever(){
   /*
   below is observer object with next,error and complete as key and their value is callback function
   observer = {
     next : next callbackfunction,
     error : error callbackfunction,
     complete : complete callbackfunction
   }
   */

   // first observer
    const observer = {
      next : data => console.log(`Observer 1 - data : ${data}`),
      error : err => console.log("Observer 1 -  got an error : "+err),
      complete : () => console.log('Observer 1 -  completed')
    }
    

    console.log("calling sequenceSubscriber")
    const sequenceObservable = this.sequenceSubscriber();
    console.log("sequenceSubscriber returns an observable calling subscribe()");
    //step2 - call subscribe with observer as an argument
    sequenceObservable.subscribe(observer);

  }


   //step1 - create observable
   sequenceSubscriber(){
    console.log("sequence subscriber");
    const sequence = new Observable(this.subscriberFun);
    
    //alternatively we can also write as
    // const sequence = new Observable((observer) => {
    // console.log("subscriber function called" );
    // console.log(observer)
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.complete();
  // });
  

    return sequence;
  }


  //step3 - pushes new data to observer by calling next calling function inside observer object
  subscriberFun(observer) {
    console.log("subscriber function called" );
    // pubslisher calls next callback fuction on observer with data it has
    console.log(observer)
    observer.next(1);
    observer.next(2);
    observer.next(3);
    //setInterval((observer)=>this.getData,1000)
    observer.complete();
  }

  getData(observer){
    console.log("get data called")
    let x=0;
     x+=1;
    observer.next(x);
  }


  /*
    one count observable with multple subscribers or observers to receive the count
 Note :  In this example if we observe it is first pushing all the data to subscriber1
  followed by subscriber2 and subscriber3
  */

  countSubscribers(){
      const sub1 = {
        next : (count) => console.log(`sub 1 recieved count : ${count}`),
        error : (err) => console.log(`sub 1 error`),
        complete : () => console.log("complete")
      }

      const countObs=this.countObservable();
      countObs.subscribe(sub1);
      countObs.subscribe({
        next : (count) => console.log(`sub 2 recieved count : ${count}`),
        error : (err) => console.log(`sub 2 error`),
        complete : () => console.log("complete")
      })
      countObs.subscribe({
        next : (count) => console.log(`sub 3 recieved count : ${count}`),
        error : (err) => console.log(`sub 3 error`),
        complete : () => console.log("complete")
      })
  }

  countObservable() : Observable<number>{
    return new Observable(this.countPublisher);
  }
 
  //subFunction 
  countPublisher(observer){
    let i:number;
    for(i=1;i<5;i++){
      observer.next(i)
    }
  }
 


  oneObservableWithMulitpleObservers(){
      
       const sequenceObservable1 = this.sequenceSubscriber();
      //first observer
       const observer1 = {
        next : data => console.log(`Observer 1 - data : ${data}`),
        error : err => console.log("Observer 1 -  got an error : "+err),
        complete : () => console.log('Observer 1 -  completed')
      }

       //second observer
       const observer2 = {
        next : data => console.log(`Observer 2 - data : ${data}`),
        error : err => console.log("Observer 2 -  got an error : "+err),
        complete : () => console.log('Observer 2 -  completed')
      }
  
      //const sequenceObservable2 = this.sequenceSubscriber();
      //sequenceObservable1.subscribe(observer2);
  
      //call subscribe on same Observable but with different observer
      // example : subscribing to same channel but with different user
      sequenceObservable1.subscribe(observer1);
      sequenceObservable1.subscribe(observer2);
      //third observer
      sequenceObservable1.subscribe({
        next : data => console.log(`Observer 3 - data : ${data}`),
        error : err => console.log("Observer 3 -  got an error : "+err),
        complete : () => console.log('Observer 3 -  completed')
      });
      
  }



    /*
  
  Here's an example of creating and subscribing to a simple observable, 
  with an observer that logs the received message to the console:
  */
 howObservableWorks2() {
  const myObservable = of(1, 2, 3); // new Obverable and obs.next(1,2,4)

  const myObserver = {
    next: x => console.log(x),
    error: err => console.log(err),
    complete: () => console.log('Observer got a complete notification')
  }

  myObservable.subscribe(myObserver);
  
}



}
