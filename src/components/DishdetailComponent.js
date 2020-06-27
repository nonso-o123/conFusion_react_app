import React from 'react'
import {
    Card, CardBody, CardImg, CardTitle,
    CardText, CardImgOverlay, Breadcrumb,
    BreadcrumbItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function DishDetail({ dish, comments }) {

    const renderComments = () => {
        return (
            comments.length > 0 ?
                comments.map(c => {
                    return (
                        <ul className="m-0 p-0" key={c.id}>
                            <li className="list-unstyled">{c.comment}
                                <p>-- {c.author}, &nbsp;
                                {new Intl.DateTimeFormat('en-us',
                                    { year: 'numeric', month: 'short', day: '2-digit' })
                                        .format(new Date(Date.parse(c.date)))}</p>
                            </li>
                        </ul>
                    )
                }) : <div><p>No comments yet</p></div>
        )
    }


    return (
        <>
            {dish != null ?
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                            <Card>
                                <CardImg idth="100%" src={dish.image} alt={dish.name} />
                                <CardImgOverlay body="true" className="ml-5">
                                    <CardTitle heading="true">{dish.name}</CardTitle>
                                </CardImgOverlay>
                                <CardBody>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <h2>Comments</h2>
                            {renderComments()}
                        </div>
                    </div>
                </div>
                : <div />}
        </>
    )

}
