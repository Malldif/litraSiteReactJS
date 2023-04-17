import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import Dostoevsky from '../Assets/dostoevskij_glazunov15.jpg';
import Raskolnikov from '../Assets/1675609769_papik-pro-p-raskolnikov-risunok-39.jpg';
import Nature from '../Assets/1625177776_51-kartinkin-com-p-prestuplenie-i-nakazanie-fon-krasivie-foni-54.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel className={"Block"}  style={{width:"1400px", marginLeft:"auto",marginRight:"auto", marginTop:"auto"}}>
                    <CarouselItem>
                        <img
                            className={"d-block w-100"}
                            src={Dostoevsky}
                            alt="Dostoevsky"
                        />
                        <Carousel.Caption>


                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            className={"d-block w-100"}
                            src={Raskolnikov}
                            alt="Raskolnikov"
                        />
                        <Carousel.Caption>


                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            className={"d-block w-100"}
                            src={Nature}
                            alt="Nature"
                        />
                        <Carousel.Caption>


                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </div>
        );
    }
}

