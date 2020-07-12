import React from 'react'
import { Button, Label, Col, Row, } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'


const required = val => val && val.length
const maxLength = len => val => !val || val.length <= len
const minLength = len => val => !val || val.length >= len


export default function CommentForm({ postComment, dishId }) {


    const handleSubmit = (val) => {
        postComment(dishId, val.rating, val.author, val.comment)
    }


    return (
        <>
            <LocalForm onSubmit={(val) => handleSubmit(val)}>
                <Row className="form-group ml-3 mr-3">
                    <Label htmlFor="rating" md={12}>Rating</Label>
                    <Col md={12}>
                        <Control.select model=".rating" name="rating"
                            className="form-control"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Col>
                </Row>

                <Row className="form-group ml-3 mr-3">
                    <Label htmlFor="author" md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text model=".author" id="author" name="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                        />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: 'Required ',
                                minLength: 'Must be more than 2 characters ',
                                maxLength: 'Must be 15 characters or less '
                            }}
                        />
                    </Col>
                </Row >
                <Row className="form-group ml-3 mr-3">
                    <Label htmlFor="comment" md={12}>Your Feedback</Label>
                    <Col md={12}>
                        <Control.textarea model=".comment" id="comment" name="comment"
                            className="form-control"
                            rows="6"
                        />
                    </Col>
                </Row >
                <Row className="form-group ml-3 mr-3">
                    <Col md={{ size: 3 }}>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Col>
                </Row>
            </LocalForm>
        </>
    )
}


