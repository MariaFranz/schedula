import supertest from 'supertest'
import app from './app.jsx'

describe("POST /loggin", () => {
    
    describe("Logg in", () => {
        // Shoud have a username and password
        // shoud respond with a 200 status code
        // should specify json in the content type header
        test(" should respond with 200 status code", async () => {
            const respons = await request(app).post("/loggin").send({
                username: "exempel@nodehill.com",
                Password: "abs123"
            })
            expect(response.statusCode).toBe(200)
        })
    
    
    })

    describe("If username and password is incorrect", () => {
        // Shoud have a username and password
        // shoud respond with a 200 status code
        // should specify json in the content type header
    })

})