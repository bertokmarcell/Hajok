import { type HajoTipus } from './adat'

interface HajoProps {
  hajom: HajoTipus
}

export default function Hajo({ hajom }: HajoProps) {
  return (
    <div className="hajo">
      <h2>{hajom.nev}</h2>
      <p>
        <span>Kapitány neve: </span>
        {hajom.kapitany}
      </p>
      <p>
        <span>Szín: </span>
        {hajom.szin}
      </p>
      <button>Kiválaszt</button>
    </div>
  )
}