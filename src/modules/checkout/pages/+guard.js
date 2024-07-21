import { redirect } from "vike/abort";

export async function guard(pageContext) {
  console.log(pageContext.routeParams.id)
  if (pageContext.routeParams.id === 'btc') {
    throw redirect('/links-de-pagamento')
  }
}