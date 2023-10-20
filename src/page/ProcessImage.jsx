import React, { useEffect } from "react";
import classes from "./ProcessImage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ProcessImage() {
    let currentStream;
    let video = document.getElementById("camera");
    const getKeyStream = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                currentStream = stream;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    };
    useEffect(() => {
        getKeyStream();
    }, []);
    return (
        <div className={classes.wrapper}>
            <Container>
                <Row
                    className={`${classes.row} mx-auto d-flex justify-content-center`}
                >
                    <Col
                        lg={6}
                        className="p-0"
                        data-aos="fade-right"
                        data-aos-easing="ease-out"
                        data-aos-duration="1500"
                    >
                        <div className={classes.text__div}>
                            <div className="row ">
                                <div className="col">
                                    <div>
                                        <div className="d-flex gap-2">
                                            <video
                                                title="Camera"
                                                id="camera"
                                                width="400"
                                                height="400"
                                                autoplay
                                                className="border"
                                            ></video>
                                            <canvas
                                                title="Photograph"
                                                id="canvas"
                                                width="400"
                                                height="400"
                                                className="border"
                                            ></canvas>
                                        </div>
                                        <div className="d-flex gap-4">
                                            <button
                                                id="snap"
                                                className="btn btn--primary btn-wide btn--large u-fullwidth"
                                            >
                                                <i className="bi bi-camera2"></i>
                                            </button>
                                            <button
                                                id="search"
                                                className="btn btn--primary btn-wide btn--large u-fullwidth"
                                            >
                                                <i className="bi bi-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
