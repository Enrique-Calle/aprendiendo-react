import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialisFollowing}) {
    //useState devuelve dos valores
    //isFollowing --> Valor actual
    //setIsFollowing --> Valor que se modifica
    const [isFollowing,setIsFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    //Estado interno
    const handleClick = () => {
        setIsFollowing(!isFollowing)//Cambiamos a verdadero, porque su primer estado es falso
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de enrique"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@ {userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}