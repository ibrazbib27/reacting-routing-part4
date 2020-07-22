import React , {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class HomePage extends Component {
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films").then((res) => {
            return res.json();
        })
        .then((obj) => console.log(obj));
    }
    render(){
        return(
           <h1>This is the home page</h1>
        );
    }
}
export default HomePage;