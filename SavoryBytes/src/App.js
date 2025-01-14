import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ProfilePage from './Componets/ProfilePage'
import ListCard from './Componets/ListCard';

const App = () => {
  return (
  //   <Provider store={store}>
  //     <div className="App">
  //       <h1>Welcome to the Recipe App</h1>
  //       <ProfilePage />
  //     </div>
  //   </Provider>
  <ListCard/>
  );
};

export default App;
