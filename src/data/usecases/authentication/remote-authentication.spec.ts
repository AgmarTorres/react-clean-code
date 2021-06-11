import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpPostClientSpy } from '../../tests/mock-http-client'
import { mockAuthentication } from '../../../domain/test/mock-authentication'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

class RemoteAuthentication {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    // Quero saber quando eu chamar ele
    // Sistem Under Test
    // Spy: Coloca valor fake, ou compara valore
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
