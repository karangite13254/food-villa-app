const Title = () =>(
    <a href="/ ">
    <img 
    className='logo'
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" alt="logo" />
    </a>
  )
  
  
  
  const Header = () =>{
    return (
      <div className="header">
    <Title/>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
      </div>
  
    )
  }

  export default Header;