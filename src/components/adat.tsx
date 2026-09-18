export type Hajoszin ='fekete'|'kek'|'zold'|'piros'|'feher'
export interface HajoTipus{
    readonly id: number
    nev:string
    kapitany:string
    valodi:boolean
    szin:Hajoszin
    leiras:string
}
export const HAJOLISTA:HajoTipus[]=[
    {
        id:12,
        nev:"pearl",
        szin:"fekete",
        kapitany:"davy",
        valodi:false,
        leiras:"davy kis rezidenciája"
    },
    {
        id:53,
        nev:"titanic",
        szin:"zold",
        kapitany:"dicabrio",
        valodi:true,
        leiras:"hit one bird with one stone"
    },
    {
        id:96857463,
        nev:"bolygo",
        szin:"kek",
        kapitany:"dunno",
        valodi:false,
        leiras:"must have been the wind"
    },
]