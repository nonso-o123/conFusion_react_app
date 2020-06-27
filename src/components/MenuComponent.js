import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function Menu({ dishes }) {

    const menu = dishes.map(d => {
        return (
            <div key={d.id} className="col-12 col-md-5 mt-1">
                <Card>
                    <Link to={`/menu/${d.id}`}>
                        <CardImg width="100%" src={d.image} alt={d.name} />
                        <CardImgOverlay body="true" className="ml-5">
                            <CardTitle heading="true">{d.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>

                </Card>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>

    )
}



