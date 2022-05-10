import "./Topbar.scss";
import {Person} from '@material-ui/icons'
import {Mail} from '@material-ui/icons'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span className="D">D</span>
            <span className="T">eveloper</span>
          </a>
          <div className="itemContainer">
            <Person className='icons'/>
            <span className="iconSpan">+91 8838647902</span>
          </div>
          <div className="itemContainer">
            <Mail className='icons'/>
            <span className="iconSpan">pavithrasethuraman92@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
