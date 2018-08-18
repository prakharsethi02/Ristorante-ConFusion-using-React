import React from 'react'; /*include {Component} here*/
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

function RenderDish({dish})
{
    if(dish == null){
        return (<div></div>)
    }
    else{
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function RenderComment({comment})
{
    if(comment == null)
        {
            return (<div></div>)
        }
        const comments = comment;

        const rendercomments = comments.map((comment) =>
        <div>
            <div className = "m-1">
                {comment.comment}
            </div>
            <div>
                <span> --{comment.author}, </span>
                <span> {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </span>
             </div>
        </div>
    );
        return (
            <div>
                {rendercomments}
            </div>
        );
}

const DishDetail = (props) => {
    if(props.dish){
        return(
            <div className= "container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComment comment = {props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
        } else {
  
          return(<div></div>);
        }
}
export default DishDetail;

/*class DishDetail extends Component {

    componentDidMount(){
        console.log('Dishdetail Component componentDidMount is invoked');
    }
    componentDidUpdate(){
        console.log('Dishdetail Component componentDidUpdate is invoked');
    }
    renderComment(comment)
    {
        if(comment == null)
        {
            return (<div></div>)
        }
        const commnts = comment;

        const rendcommnts = commnts.map((comment) =>
        <div>
            <div className = "m-1">
                {comment.comment}
            </div>
            <div>
                <span> --{comment.author}, </span>
                <span> {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </span>
             </div>
        </div>
    );
        return (
            <div>
                {rendcommnts}
            </div>
        );
    }
    render()
    {
        console.log('Dishdetail Component render is invoked');

        if(this.props.dish == null){
            return (<div></div>)
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                        
                        </div>
                        <div className="col-12 col-md-5 m-1"> 
                        <h4> Comments </h4>
                        {this.renderComment(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
    }

}*/


