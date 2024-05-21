import s from './Navbar.module.css'

console.log(s);
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>menu1</div>
            <div className={s.item}>menu2</div>
            <div className={s.item}>menu3</div>
        </nav>
    )
}

export default Navbar;
