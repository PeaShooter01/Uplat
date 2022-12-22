import { useLocation } from "react-router-dom"

export default function HeadLogo (){
    const location=useLocation()
    if(location.pathname==='/')
        return (
            <img style={{width:'110px',height:'40px'}} src="http://localhost:3000/logo_.jpg" alt=''/>   
        )
}