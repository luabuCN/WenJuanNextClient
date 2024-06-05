const HOST = " http://38.55.232.117:3001";

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`);
  const data = res.json();
  return data;
}

export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: "post",
    body: JSON.stringify(body),
  });
  const data = res.json();
  return data;
}
