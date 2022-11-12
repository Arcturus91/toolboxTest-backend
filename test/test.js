const axios=require('axios');
const {expect}=require('chai');

describe("Endpoint testing",async()=>{
    it("Get Files Data",async()=>{
        const response = await axios.get('http://localhost:5005/api/files/data', { 
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).equals(200);
    })
})