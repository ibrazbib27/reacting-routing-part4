import React , {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Filter from './Filter';


class FilmsPage extends Component {
    constructor(){
        super();
        this.state = {
            end: false,
            cardDetails: []
           
        }
        this.sortUp = this.sortUp.bind(this);
this.sortDown = this.sortDown.bind(this);
    }
    componentDidMount() {
       
         let arr = [];
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res =>  res.json())
            .then(obj => {
            obj.forEach( (val) => {
                arr.push(val);
            })
             this.setState({
                cardDetails: arr
            })
        }); }
  sortUp(val){
      let arr = this.state.cardDetails;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let val1, val2;
            if(val === "rating"){
                val1 = parseInt(arr[i].rt_score);
                val2 = parseInt(arr[j].rt_score);
            }
            else if(val === "release"){
                val1 = parseInt(arr[i].release_date);
                val2 = parseInt(arr[j].release_date);
            }
            else{
                val1 = (arr[i].title).toLowerCase();
                val2 = (arr[j].title).toLowerCase();
            }
            if(val1 < val2){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
                
        }
    }
      
     this.setState({
                cardDetails: arr
            }) ;
  }
  sortDown(val){
      let arr = this.state.cardDetails;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let val1, val2;
            if(val === "rating"){
                val1 = parseInt(arr[i].rt_score);
                val2 = parseInt(arr[j].rt_score);
            }
            else if(val === "release"){
                val1 = parseInt(arr[i].release_date);
                val2 = parseInt(arr[j].release_date);
            }
            else{
                val1 = (arr[i].title).toLowerCase();
                val2 = (arr[j].title).toLowerCase();
            }
            if(val1 > val2){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
                
        }
    }
      
     this.setState({
                cardDetails: arr
            }) ;
  }
    
    render(){

             const films = this.state.cardDetails.map((film) =>
    <Col key={film.id} id={film.id} xs={10} md={8} className="text-center border-secondary border-top  py-5 mx-auto">
       <a href="#" className="h3 text-dark">{film.title}</a><br /><br /><p className=" text-muted small">{film.release_date} | {film.rt_score}%</p>
    </Col>

    );
         
        return(
          <Row >
         <Col xs={12} className=""><Row><Col xs={12} md={4}  lg={3}  className=""></Col><Col xs={12} md={4}  lg={6} style={{fontFamily: 'cursive'}}className="text-center display-3 h1 mb-md-5 mb-2">Films</Col><Col xs={12} md={4}  lg={3} className="mt-lg-3 mt-md-4 mt-0 mb-3 mb-md-0"><Filter styles={"text-md-right text-center "} up={this.sortUp}  down={this.sortDown} /></Col></Row></Col>
            {films}
          </Row>
        );
    }

}
export default FilmsPage;