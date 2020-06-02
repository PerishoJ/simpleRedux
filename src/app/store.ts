import {StoreActions} from './action';
import {tassign} from 'tassign';

export interface Store {
  counter: number;
}



export function rootReducer(state: Store, action) {
  console.log('getting action of ' + action.type);

  switch (action.type) {
    // The tassign function is how we mutate the object with an effective "diff object"
    //    -copies source object
    //    -updates any fields declared in the second object
    case StoreActions.INC:
      return tassign(state, {counter: state.counter + 1});
    default:
      console.log('default handler');

      return state;
  }
}



