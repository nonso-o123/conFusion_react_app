import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

export default function Menu({ dishes }) {

    const menu = dishes.dishes.map(d => {
        return (
            <div key={d.id} className="col-12 col-md-5 mt-1">
                <Card>
                    <Link to={`/menu/${d.id}`}>
                        <CardImg width="100%" src={`${baseUrl}/${d.image}`} alt={d.name} />
                        <CardImgOverlay body="true" className="ml-5">
                            <CardTitle heading="true">{d.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>

                </Card>
            </div>
        )
    });

    if (dishes.isLoading)
        return (<Loading />)

    else if (dishes.errMess)
        return <h4>{dishes.errMess}</h4>
    else
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



