import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionar } from '../src/store/reducers/carrinho'; // Corrija o caminho conforme necessário
import { useFetchProdutosQuery } from './services/produtosApi'; // Corrija conforme necessário
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';



export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos } = useFetchProdutosQuery()
  const dispatch = useDispatch()
  const carrinho = useSelector((state) => state.carrinho.itens)

  const adicionarAoCarrinho = (produto) => {
    dispatch(adicionar(produto))
  }


  function favoritar(produto: Produto) {
    if (favoritos.find((produto) => produto.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
