
import logo from "../../assets/logo.png";
const NavBar=() =>{

    return (
       <div>
           <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="" src={logo} alt="" />
        </a>
      </div>
      <div className="flex-items-center">
        <span className='mr-1'> 600000000 </span>
        <span className='mr-1'> Coin </span>
      </div>
    </div>    
</div>
    );
  };


export default NavBar;