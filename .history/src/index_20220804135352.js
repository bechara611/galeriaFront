import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.css'

const Index = () => {
    return ( 
        <Login></Login>
     );
}
 


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

   <Index>dany</Index>

 
);

