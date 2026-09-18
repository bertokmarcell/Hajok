import Hajo from "./Hajo.tsx";
import { HAJOLISTA } from "./adat.tsx";
interface Hajoprops{
    lista:HajoTipus[]
}

export default function Hajok({lista}:Hajoprops){
    return (
        <>
        {
            lista.map((e,i)=>{
                return <Hajo hajom={e} key={i} index ={i} />
            })
        }
        
        </>
    )
}