import Navbar from "../../src/components/NavBar";
import PageBody from "../../src/components/PageBody";
import useSWR from "swr";
import { fetcher } from "../../src/services/apiFetchService";

export async function getStaticProps() {
  const { GetAllProducts } = require("../../src/services/apiFetchService");
  const data = await GetAllProducts();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export default function Products(props: any) {
  const { data } = useSWR("/api/products", fetcher, {
    fallbackData: props.data,
    refreshInterval: 30000,
  });

  return (
    <>
      <Navbar />
      <PageBody data={data} />
    </>
  );
}
