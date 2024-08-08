import { redirect } from "vike/abort";

export async function guard(pageContext) {
  if (pageContext.routeParams.id === 'btc') {
    throw redirect('/links-de-pagamento')
  }
}