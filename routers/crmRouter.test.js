const request =  require('supertest');
const app  = require('../server');

//  HTTP route testing (express )

describe('get /lookupClaim', ()=>{
    it ('Should return claim detail', async()=>{
            // const res = await request(app)
         const res = await request(app).get('/lookupClaim/abc123');

      expect(res.statusCode).toBe(200);
      expect(typeof res.body).toBe('object')
    });
})


describe('POST: validate-claim', ()=>{
    it ('1: res.statusCode 200 2: return flag 3: return typeof check ', async()=>{
               const res = await request(app)
               .post('/validate-claim')
               .send({
                procedureCode: 'D4341',
                diagnosisCode: '',
                documentationProvided: false,
                frequencyExceeded: false,
                })


   expect(res.statusCode).toBe(200);
   expect(typeof res.body).toBe('object');
   expect(res.body).toHaveProperty('flag')
    })
})

