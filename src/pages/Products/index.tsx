import Button from '../../components/Button'
import * as S from './products.style'
import * as G from '../../style'

const Products = () => {
  return (
    <S.Products>
      <S.ProductsHeader>
        <S.ProductsCaption>
          <S.ProductsTitle>Produtos</S.ProductsTitle>
          <S.ProductsSubtitle>Gerencie seus produtos</S.ProductsSubtitle>
        </S.ProductsCaption>
        <Button action="add">Adicionar</Button>
      </S.ProductsHeader>

      <G.Table>
        <G.TableHeader>
          <G.TableRow>
            <G.TableHead>Rótulo</G.TableHead>
            <G.TableHead>Preço</G.TableHead>
            <G.TableHead>Descrição</G.TableHead>
            <G.TableHead>Icone</G.TableHead>
          </G.TableRow>
        </G.TableHeader>

        <G.TableBody>
          <G.TableRow>
            <G.TableData>Colorado</G.TableData>
            <G.TableData>R$ 10,00</G.TableData>
            <G.TableData>Muito boa</G.TableData>
            <G.TableData>Icone</G.TableData>
          </G.TableRow>
        </G.TableBody>
      </G.Table>
    </S.Products>
  )
}

export default Products
