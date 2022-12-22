import { Carousel} from "antd"
export default function CarouselControllerOne() {
    return (
        <Carousel autoplay style={{ width: '448px', height:'336px'}}>
            <div>
            <img style={{width:'448px',height:'336px'}} src="http://localhost:3000/carousel1_.png" alt=""/>
            </div>
        </Carousel>
    )
}