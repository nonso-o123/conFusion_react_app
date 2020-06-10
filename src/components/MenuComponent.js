import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, } from 'reactstrap'
import DishDetail from './DishdetailComponent'


export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDish: null
        };

    }

    onDishSelect(dish) {
        console.log('clicked')
        this.setState({ selectedDish: dish })
    }
    renderDish(dish) {
        return (
            dish != null ?
                <DishDetail selectedDish={dish} /> :
                <div></div>
        )
    }
    render() {
        const menu = this.props.dishes.map(d => {
            return (
                <div key={d.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(d)}>
                        <CardImg width="100%" src={d.image} alt={d.name} />
                        <CardImgOverlay body="true" className="ml-5">
                            <CardTitle heading="true">{d.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        )
    }
}


