import axios from 'axios'
import faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockClear().mockResolvedValue(mockedValues)
  return mockedAxios
}

const mockedValues = {
  data: faker.random.objectElement(),
  status: faker.datatype.number()
}
