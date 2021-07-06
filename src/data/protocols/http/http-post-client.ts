import { HttpResponse } from '.'

export type HttpPostParams<T> ={
  url: string
  body?: T
}

// tipo do body dos parametros, e tipo do body da resposta
export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
