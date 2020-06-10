import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap'

export default class DishDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }


    renderComments() {
        return (
            this.props.selectedDish.comments != null && this.props.selectedDish.comments.length > 0 ?
                this.props.selectedDish.comments.map(c => {
                    return (
                        <ul className="m-0 p-0">
                            <li key={`${c.id}${c.author}`} className="list-unstyled">{c.comment}
                                <br />
                                <p key={`${c.author}${c.date}`}>-- {c.author}, {c.date}</p>
                            </li>
                        </ul>
                    )
                }) : <div><p>No comments yet</p></div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <Card>
                        <CardImg idth="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardImgOverlay body="true" className="ml-5">
                            <CardTitle heading="true">{this.props.selectedDish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardBody>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 mt-1">
                    <h2>Comments</h2>
                    {this.renderComments()}
                </div>
            </div>

        )
    }
}
