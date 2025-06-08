export default function ItemLista({ src, children }) {
    return(
        <li>
            <a href='#' className='item__link item__link--ativo'>
                <img src={src} alt='' />
                <span>{children}</span>
            </a>
        </li>
    )    
}