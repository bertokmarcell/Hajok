import { type HajoTipus } from './adat' 
interface HajoProps{
    hajom:HajoTipus,
    index:number
}


export default function Hajo({hajom,index}:HajoProps) {

  return (
    <>
      <div className='hajo'>
        <h2>{hajom.nev}</h2>
        <p><span>kapitany neve: </span>{hajom.kapitany}</p>
        <p><span>szin: </span>{hajom.szin}</p>
        <button>kivalaszt</button>
      </div>
    </>
  )
}