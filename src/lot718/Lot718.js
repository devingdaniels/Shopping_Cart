// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Cayman718 from './images/Cayman718.png'
import Boxster718 from './images/Boxster718.png'
import CaymanS718 from './images/CaymanS718.png'
import BoxsterS718 from './images/BoxsterS718.png' 
import Cayman718GTS from './images/Cayman718GTS.png'
import Boxster718GTS from './images/Boxster718GTS.png'
import Spyder718 from './images/Spyder718.png'
import Cayman718GT4 from './images/Cayman718GT4.png'


const Lot718 = [{
    name: '718 Cayman',
    img: Cayman718,    
    price: '$63,400',
    id: uniqueID(),
},
{
    name: '718 Boxster',
    img: Boxster718,
    id: uniqueID(),
    price: '$65,500'
},
{
    name: '718 Cayman S',
    img: CaymanS718,
    id: uniqueID(),
    price: '$75,400'
},
{
    name: '718 Boxster S',
    img: BoxsterS718,
    id: uniqueID(),
    price: '$77,500'
},
{
    name: '718 Cayman GTS 4.0',
    img: Cayman718GTS,
    id: uniqueID(),
    price: '$90,300'
},
{
    name: '718 Boxster GTS 4.0',
    img: Boxster718GTS,
    id: uniqueID(),
    price: '$92,400'
},
{
    name: '718 Spyder',
    img: Spyder718,
    id: uniqueID(),
    price: '$103,400'
},
{
    name: '718 Cayman GTR RS',
    img: Cayman718GT4,
    id: uniqueID(),
    price: '$149,100'
},
]

export { Lot718 }