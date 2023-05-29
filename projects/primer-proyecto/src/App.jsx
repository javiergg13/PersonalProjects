import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}` // pasar funcion como prop
    const pheralb = { formatUserName: format, name: "Pablo Hernandez", initialIsFollowing: true} // pasar las props con el rest

    const users = [
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

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                userName="midudev" 
                name="Miguel Ángel durán"
                initialIsFollowing
            />

            <TwitterFollowCard 
                formatUserName={format} 
                userName="esfeid">
                El Fercho 
            </TwitterFollowCard>

            <TwitterFollowCard 
                {...pheralb}> 
            </TwitterFollowCard>

            {/* Renderizar lista de usuarios */}

            { 
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard {...user} key={userName}> 
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
    // pasar el nombre como children o como prop
}