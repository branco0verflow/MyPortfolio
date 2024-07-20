import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './ProyectCard.css';
import VideoGit1 from '../Video/VideoGitHub/VideoGit1';
import VideoGit2 from '../Video/VideoGitHub/VideoGit2';
import VideoGit3 from '../Video/VideoGitHub/VideoGit3';
import VideoGit4 from '../Video/VideoGitHub/VideoGit4';
import VideoGit5 from '../Video/VideoGitHub/VideoGit5';
import VideoGit6 from '../Video/VideoGitHub/VideoGit6';
import VideoGit7 from '../Video/VideoGitHub/VideoGit7';
import VideoGit8 from '../Video/VideoGitHub/VideoGit8';
import VideoGit9 from '../Video/VideoGitHub/VideoGit9';
import VideoGit10 from '../Video/VideoGitHub/VideoGit10';

function ProyectCard(props) {
    const videoMap = {
        777302027: VideoGit1,
        743780599: VideoGit2,
        740763020: VideoGit3,
        711726260: VideoGit4,
        743341633: VideoGit5,
        743332910: VideoGit6,
        778070645: VideoGit7,
        813893425: VideoGit8,
        812861100: VideoGit9,
    };

    const Portada = videoMap[props.id] || VideoGit10;
    const esIngles = props.esIngles;

    return (
        <div className="card-container">
            <Card className="custom-card" bg="dark" text="white">
                <Card.Body>
                    <div className='card-image'>
                        <Portada />
                    </div>
                    <Card.Title>{esIngles ? `Name: ${props.name}` : `Nombre: ${props.name}`}</Card.Title>
                    <Card.Text>{esIngles ? `Description: ${props.description}` : `Descripción: ${props.description}`}</Card.Text>
                    <Button variant="secondary">
                        {esIngles ? "Go to the GitHub repository" : "Ir al repositorio GitHub"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProyectCard;

