import { useState, useEffect } from "react"
import axios from "axios"
import './app.scss'

export default function App() {

  const [info, setInfo] = useState([])

  const pegarDados = async () => {
    const dados = await axios.get('https://fakestoreapi.com/products')
    setInfo(dados.data)
  }

  useEffect(()=>{
    pegarDados()
  },[])

  return (
    <main>
      <h1>Vai na Loja</h1>

      <section>
      {
        info.map((item)=>(
          <article>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt="" />
            <h3>$ {item.price}</h3>
            <button>Buy now</button>
            <button className="cart-btn">Add to cart</button>
          </article>
        ))
      }
      </section>
    </main>
  )
}