# Redux Simple Flash
A simple flash message plugin for react and redux.


## Integration


1 npm install 'redux-simple-flash' --save

2 Add redux-thunk middleware
```
npm install 'redux-thunk' --save
```

```javascript
 import reduxThunk from 'redux-thunk'

 const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
 const store = createStoreWithMiddleware()
```

3 Add the reducer to your root reducer

```javascript

import { flashReducer } from 'redux-simple-flash'

const rootReducer = combineReducers({
  flash: flashReducer
})

export default rootReducer
```

4 Import and use action creator in your own actions

```javascript

import { addMessage } from 'redux-simple-flash'

...
dispatch(addMessage("success", "User created!"))
...
```
