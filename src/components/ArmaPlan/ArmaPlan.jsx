import { useParams } from 'react-router-dom'

export default function ArmaPlan(){
    const {plate} = useParams()
    return(
        <div>
            <h1>Hola tu Placa es {plate} </h1>
        </div>
    )
}