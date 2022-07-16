const API_URL = "https://fakestoreapi.com";
export async function GetAllProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function GetProductById(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
}

export const fetcher = (arg: any, ...args: any) =>
  fetch(arg, ...args).then((res) => res.json());
