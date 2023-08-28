import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from 'react'
//Tenemos que hacer que el isFollowing se ejecute directamente desde 
//el componente no aqui...

//Cuando pidamos por solicitud http
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]
//Forma normal para subir sin usar bucle
export function App() {
    return (
        <section className='App'>
            {
                //Aqui
                users.map(({ userName, name, isFollowing }) => (
                    //Esto se puede sustituir arriba en vez de user
                    //const { userName, name, isFollowing} = user
                    //No olvidemos que si queremos quitar el return, aqui arriba.. ponemos llave
                    //return(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialisFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                    //)
                ))
            }
        </section>
    )
}
/* export function App() {
    //Pasar objetos como props
    const midudev = { userName: 'midudev' }
    const [isFollowing, setIsFollowing] = useState(true)
    return (
        <section className='App'>
            <TwitterFollowCard {...midudev}>
                Midudev
            </TwitterFollowCard>
            <TwitterFollowCard userName="pheralb" initialisFollowing={isFollowing}>
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk" >
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard userName="vxnder" >
                Vanderhard
            </TwitterFollowCard>
        </section>
    )
} */