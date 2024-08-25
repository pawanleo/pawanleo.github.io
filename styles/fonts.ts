import { Bodoni_Moda, Great_Vibes, Inter } from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts

const greatVibes=Great_Vibes(
    {
        weight: ["400"],
        style: ["normal"],
        subsets: ["latin"],
        display: "swap",
    }
)
const bodoniModa=Bodoni_Moda({  subsets: ["latin"],})
const sankofa = localFont({ src: './SankofaDisplay-Regular.ttf' })
 
export {greatVibes,bodoniModa,sankofa}