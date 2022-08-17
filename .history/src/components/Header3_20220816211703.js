import './Header3.css'

const Header3 = () => {
    return (  

        <>
        <nav class="menu">
  <input id="menu__button" type="checkbox" checked />
  <a className="menu__item" href="#">Home</a>
  <a className="menu__item" href="#">About</a>
  <a className="menu__item" href="#">Contact</a>
  <a className="menu__item" href="#">Help</a>
  <label className="menu__close" for="menu__button"></label>
</nav>
<h1>Triangular mobile navigation</h1>
        
        </>
    );
}
 
export default Header3;

