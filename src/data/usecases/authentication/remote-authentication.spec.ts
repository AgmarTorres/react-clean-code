import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpPostClientSpy } from '../../tests/mock-http-client'

class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async auth (): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', () => {
    // Quero saber quando eu chamar ele
    // Sistem Under Test
    // Spy: Coloca valor fake, ou compara valore

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
