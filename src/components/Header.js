import React, {useState} from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/icons/esm/Menu'
import Close from '@material-ui/icons/esm/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header({title}) {

  const [bugerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)

  return (
    <Container>
      <a href='#'>
        <img src = "/images/logo_1.svg" alt="" />
      </a>

      <Menu1>
        {cars && cars.map((car, index) =>(
          <a key = {index} href='#'>{car}</a>
        ))}
      </Menu1>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>

        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show = {bugerStatus}>
        <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>

        {cars && cars.map((car, index) =>(
          <li key= {index}><a href='#'>{car}</a></li>
        ))}
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cyber Truck</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Charging</a></li>
      </BurgerNav>

    
    </Container>
  )
}

export default Header

const Container = styled.div`
      min-height: 60px;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
`


const Menu1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px; 
}
`

const CustomMenu = styled(Menu)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.4s ease-in-out;

    li {
      padding: 15px 0;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      a {
        font-weight: 600;
      }
    }

`
const CustomClose = styled(Close)`
      cursor: pointer;
`

const CloseWrapper = styled.div`
      display: flex;
      justify-content: flex-end;
`