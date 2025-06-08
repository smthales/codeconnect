import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import ItemLista from '../ItemLista';
import './styles.css';

export default function Sidebar() {
    return (
        <aside>
                <img src={Logo} alt='Logo do CodeConnect' />
                <nav>
                    <ul className='lista-sidebar'>
                        <li>
                            <a href='#' className='item__link-publicacao'>Publicar</a>
                        </li>
                        
                        <ItemLista src={Feed} children='Feed'/>
                        <ItemLista src={Account} children='Perfil'/>
                        <ItemLista src={Info} children='Sobre nós'/>
                        <ItemLista src={Logout} children='Sair'/>

                    </ul>
                </nav>
        </aside>
    )
}