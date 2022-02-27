import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mapping-operators',
  templateUrl: './mapping-operators.component.html',
  styleUrls: ['./mapping-operators.component.css']
})
export class MappingOperatorsComponent implements OnInit {

  searchResults : any = [];
  searchText$: Observable<string>

  constructor(private fb : FormBuilder, private userService : UserService) { 
    this.autocompleteForm = this.fb.group({
      value : ''
    })
  }

  ngOnInit(): void {
    // this.autocompleteForm.valueChanges.subscribe(value=>{
    //   console.log(value)
    //   if(value){
    //     this.userService.findByEmailLike(value.value).subscribe(resp=>{
    //       console.log(resp)
    //       this.searchResults = resp
    //     })
    //   }
    // })
   this.searchText$= this.autocompleteForm.valueChanges.pipe(
        map(value => {
          console.log(value.value)
          return value.value
        }),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
    ); 

    this.searchText$.pipe(
      switchMap((value:any)=>{
        if(value){
          return this.userService.findByEmailLike(value)
        }else{
          return of([])
        }
      }),
      debounceTime(400)
    ).subscribe(
      resp=>{
      this.searchResults = resp;
    },
    err => {
      console.log('error',err)
    },
    ()=>{
      console.log('completes')
    })
  }


  autocompleteForm : FormGroup 

}
