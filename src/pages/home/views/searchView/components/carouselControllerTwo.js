import { Carousel} from "antd"
export default function CarouselControllerTwo() {
    return (
        <Carousel autoplay style={{ width: '448px', height:'336px'}}>
            <div>
            <img style={{width:'448px',height:'336px'}} src="http://localhost:3000/carousel2_.png" alt=""/>
            </div>
        </Carousel>
    )
}