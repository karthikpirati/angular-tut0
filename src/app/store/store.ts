export abstract class Store{

    protected constructor(){

    }

    protected abstract initialState(): void;
    abstract get state$(): any;
    abstract get stateSnapshot(): any
    abstract clearAll(): void;
}