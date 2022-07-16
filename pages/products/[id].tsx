import useSWR from "swr";
import {
  fetcher,
  GetAllProducts,
  GetProductById,
} from "../../src/services/apiFetchService";

export async function getStaticPaths() {
  const data = await GetAllProducts();
  const paths = data.map((item: any) => {
    return { params: { id: String(item.id) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const data = await GetProductById(params.id);

  return {
    props: {
      product: data,
    },
  };
}

const Product = ({ product }: any) => {
  const { data, error } = useSWR(`/api/products/${product.id}`, fetcher, {
    fallbackData: product,
  });

  // if (error) {
  //   return <div>Algo deu errado</div>;
  // }

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Nome: {data.title}</h1>
      <h2>Descricao: {data.description}</h2>
      <h3>Price: R$ {data.price}</h3>
    </div>
  );
};

export default Product;
