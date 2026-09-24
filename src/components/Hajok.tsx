import Hajo from './Hajo'
import { type HajoTipus } from './adat'

interface Hajoprops {
  lista: HajoTipus[]
}

export default function Hajok({ lista }: Hajoprops) {
  return (
    <>
      {lista.map((e, i) => (
        <Hajo hajom={e} key={i} />
      ))}
    </>
  )
}