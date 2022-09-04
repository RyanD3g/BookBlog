 import '../styles/Menu.scss';
 import { FaRegBookmark } from 'react-icons/fa';
 import Typical from 'react-typical';
 export const Menu = ()=>{
    return(
        <>
            <div className="root">
                <header className="cabecalho">
                    <nav className="menu">
                        <div className="container_0">
                            <h1>Book </h1> <Typical
                            steps={['Blog', 2000, 'Talk', 2000, 'Spoiler', 2000]}
                            loop={Infinity}
                            wrapper="p"
                            className="tipical"
                            />
                            <FaRegBookmark className='icon'/>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
 }
