import { SetStorageSpy } from '@/data/tests/mock-storage'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'

describe('LocalStorage', () => {
  test('should call SetStoragfe with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
