import { Action  } from '@ngrx/store';

export interface State {
    isLoading: boolean;
  }

  const initialState: State = {
    isLoading: false
  };

export function  LoadingReducer(state=initialState,action:Action){
    switch(action.type){
        case 'START_LOADING':
        return {
            isLoading: true
        };
        case 'STOP_LOADING':
        return {
            isLoading: false
        };
        default:
        return state;
    }
}