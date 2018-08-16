import React, { Component } from 'react';
import { Card, CadImg, CardImgOverlay, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
    super(props);
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

}

export default DishDetail;
