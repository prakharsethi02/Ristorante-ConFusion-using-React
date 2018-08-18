import React from 'react'; /*include {Component} here*/
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

/* One way to implement functional component*/
function RenderMenuItem({dish, onClick}) {
    return (
        <Card onClick={()=> onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

/* Second way to implement functional component*/
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;
/*class Menu extends Component {

    constructor(props) {
        super(props);
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked');
    }
    

    /*renderDish(dish)
    {
        if(dish != null)
        {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            ); 
        });
        console.log('Menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        )
    }
}*/

