import React, { useState } from 'react'
import CommentForm from './CommentForm'
import {
    Card, CardBody, CardImg, CardTitle,
    CardText, CardImgOverlay, Breadcrumb,
    BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'


export default function DishDetail({ dish, isLoading, errMess, comments, addComment }) {

    const [modalOpen, setModalOpen] = useState(false)

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
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        )
    }
    else
        return (
            <div className="container">
                {dish != null ?
                    <>
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
                                <Button outline onClick={() => setModalOpen(!modalOpen)}>
                                    <span className="fa fa-pencil"></span> Submit Comment</Button>
                            </div>
                        </div>
                        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                            <ModalHeader toggle={() => setModalOpen(!modalOpen)} className="ml-3">Submit Comment</ModalHeader>
                            <ModalBody>
                                <CommentForm dishId={dish.id} addComment={addComment} />
                            </ModalBody>
                        </Modal>

                    </>
                    : <div />}


            </div>
        )

}
