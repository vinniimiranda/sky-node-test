
import faker from 'faker'
import request from 'supertest'

import AppServer from '../../server'

describe('User test suit', () => {
  it('Should return all users with a valid token', async () => {
    const user = {
      nome: faker.name.findName(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
      telefones: [
        {
          numero: faker.phone.phoneNumber(),
          ddd: 11
        }
      ]
    }

    await request(AppServer)
      .post('/signup')
      .send(user)

    const signInResponse = await request(AppServer)
      .post('/signin')
      .send(user)

    const token = signInResponse.body.token

    const usersResponse = await request(AppServer)
      .get('/users')
      .set('Authorization', `Berear ${token}`)

    expect(usersResponse.status).toBe(200)
  })

  it('Should return not authorized for request without token', async () => {
    const response = await request(AppServer)
      .get('/users')

    expect(response.status).toBe(401)
  })
})
