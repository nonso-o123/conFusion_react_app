import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap'

export default function DishDetail({ selectedDish }) {

    const renderComments = () => {
        return (
            selectedDish.comments.length > 0 ?
                selectedDish.comments.map(c => {
                    return (
                        <ul className="m-0 p-0">
                            <li key={c.id} className="list-unstyled">{c.comment}
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
            {selectedDish != null ?
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        <Card>
                            <CardImg idth="100%" src={selectedDish.image} alt={selectedDish.name} />
                            <CardImgOverlay body="true" className="ml-5">
                                <CardTitle heading="true">{selectedDish.name}</CardTitle>
                            </CardImgOverlay>
                            <CardBody>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h2>Comments</h2>
                        {renderComments()}
                    </div>
                </div>
                : <div />}
        </>
    )

}
