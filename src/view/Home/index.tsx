import React , {useState, useEffect} from 'react';
import { Container } from './style';
import api from '../../services/api';
import Logo from '../../assets/logobrechó.jpg'


interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}


const Home: React.FC = () => {
    const [ data, setData ] = useState<IProduct[]>([]);
    const [ cart, setCart ] = useState<IProduct[]>([]);

    useEffect(( ) =>{
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    })

    const handleCart = (index: number) => {
        let push: any = [...cart, cart.push(data[index])]
        setCart(push)
        const productStore = JSON.stringify (cart);
        console.log(cart)
        localStorage.setItem('@cart', productStore)
    }



  return (
      <Container>
          <div className="nav">
              <div>
                  <img src={Logo} className="imgLogo"/>
              </div>
              <div className="cart">
                  {cart.length} produtos no carrinho
              </div>
          </div>
          <section>
              { data.map( (prod, index) =>(
                  <div className="product-content" key={prod.id}>
                  <img src={prod.photo} className="images"/>
                  <h4> {prod.name} </h4>
                  <span> {prod.description} </span>
                  <h6> {prod.price} </h6>
                  <button onClick={ () => handleCart(index)} className="button"> Adicionar ao carrinho </button>
              </div>
              ))}
                
          </section>
      </Container>
  );
}

export default Home;