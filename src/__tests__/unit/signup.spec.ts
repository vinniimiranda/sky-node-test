
import request from 'supertest'
import faker from 'faker'

import AppServer from '../../server'

describe('SignUp test suit', () => {
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

  it('Shoud signup an user', async () => {
    const response = await request(AppServer)
      .post('/signup')
      .send(user)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('_id')
    expect(response.body).toHaveProperty('nome')
    expect(response.body).toHaveProperty('email')
    expect(response.body).not.toHaveProperty('senha')
    expect(response.body).toHaveProperty('data_criacao')
    expect(response.body).toHaveProperty('data_atualizacao')
  })

  it('Shoud not signup an user for email already in use', async () => {
    const response = await request(AppServer)
      .post('/signup')
      .send(user)

    expect(response.status).toBe(400)
  })
})
