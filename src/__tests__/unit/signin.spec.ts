
import faker from 'faker'
import request from 'supertest'

import AppServer from '../../server'

describe('SignIn test suit', () => {
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

  it('Shoud singin an user with valid credentials', async () => {
    await request(AppServer)
      .post('/signup')
      .send(user)

    const signInResponse = await request(AppServer)
      .post('/signin')
      .send(user)

    expect(signInResponse.status).toBe(200)
    expect(signInResponse.body).toHaveProperty('_id')
    expect(signInResponse.body).toHaveProperty('nome')
    expect(signInResponse.body).toHaveProperty('email')
    expect(signInResponse.body).not.toHaveProperty('senha')
    expect(signInResponse.body).toHaveProperty('data_criacao')
    expect(signInResponse.body).toHaveProperty('data_atualizacao')
  })

  it('Shoud not signIn an user with invalid e-mail', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      senha: faker.internet.password()
    }

    const response = await request(AppServer)
      .post('/signin')
      .send(fakeUser)

    expect(response.status).toBe(401)
  })

  it('Shoud not signIn an user with invalid password', async () => {
    const invalidPassword = {
      email: user.email,
      senha: faker.internet.password()
    }

    const response = await request(AppServer)
      .post('/signin')
      .send(invalidPassword)

    expect(response.status).toBe(401)
  })
})
