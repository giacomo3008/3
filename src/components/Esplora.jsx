import { ListGroup } from "react-bootstrap"
import './Esplora.css'
import { MdKeyboardArrowRight } from "react-icons/md";


function Esplora() {

    return (
        <div className=" px-5 mt-5">
            <h2 className=" text-white display-6 fw-bold mb-3 mt-5">Altro da esplorare</h2>
            <ListGroup>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Esplora per genere
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Decenni
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Attività e stati d'animo
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Worldwide
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Classifiche
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Audio spaziale
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Video musicali
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Nuovi artisti
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
                <ListGroup.Item className="list-item py-4 fs-4 mb-3 d-flex flex-row justify-content-between align-items-center">
                    Hit del passato
                    <span> <MdKeyboardArrowRight color="#F7586A" size={30} /> </span>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Esplora