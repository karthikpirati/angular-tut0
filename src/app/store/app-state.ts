import { EMPTY, Observable } from "rxjs";
import { State } from "./state";

export class AppState$ extends State{
    public test$ : Observable<any | null> = EMPTY;
    public test2$ : Observable<any | null> = EMPTY;
}


export class AppStateSnapshot extends State{
    public test : any | null = null;
    public test2 : any | null = null;
}