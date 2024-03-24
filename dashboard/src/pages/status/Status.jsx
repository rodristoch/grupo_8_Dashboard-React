import React from "react";
import { Container, Table, Badge } from 'react-bootstrap';
import './Status.css'

const Status = () => {

    const services = [
        { title: "Patitas web", tag: "online" },
        { title: "Patitas SQL", tag: "online" },
    ];

    return (
        <Container className="mt-4">
            <Table striped>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td>{service.title}</td>
                            <td>
                            <Badge className="badge rounded-pill bg-success text-white">{service.tag}</Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Status;
