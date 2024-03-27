import { Card, Button, Modal } from 'react-bootstrap';
import React from 'react';
import './ProyectCard.css';
import VideoGit1 from '../Video/VideoGitHub/VideoGit1';
import VideoGit2 from '../Video/VideoGitHub/VideoGit2';
import VideoGit3 from '../Video/VideoGitHub/VideoGit3';
import VideoGit4 from '../Video/VideoGitHub/VideoGit4';
import VideoGit5 from '../Video/VideoGitHub/VideoGit5';
import VideoGit6 from '../Video/VideoGitHub/VideoGit6';
import VideoGit7 from '../Video/VideoGitHub/VideoGit7';

function ProyectCard(props) {

    const Portada = props.id === 777302027 ? VideoGit1 : props.id === 743780599 ? VideoGit2 : props.id === 740763020 ? VideoGit3 : props.id === 711726260 ? VideoGit4 : props.id === 743341633 ? VideoGit5 : props.id === 743332910 ? VideoGit6 : VideoGit7;
    const esIngles = props.esIngles;

    

    return (

        
        <div className="card-container">


            
            <Card className="custom-card" bg="dark" text="white">
                <Card.Body>
                    <div className='card-image'>
                        <Portada />
                    </div>

                    {esIngles ? <Card.Title>Name: {props.name}</Card.Title> : <Card.Title>Nombre: {props.name}</Card.Title>}
                    
                        {esIngles ? <Card.Text> Description: {props.description}</Card.Text> : <Card.Text>Descripción: {props.description}</Card.Text>}

                    {esIngles ? <Button variant="secondary">Go to the GitHub repository</Button> : <Button variant="secondary">Ir al repositorio GitHub</Button>}
                    
                </Card.Body>
            </Card>

           
        </div>
    );
}

export default ProyectCard;
