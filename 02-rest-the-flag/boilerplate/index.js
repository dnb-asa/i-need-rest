import request from 'request'

request.get('https://api.com', function(error, response, body) {
    console.log('error:', error)
    console.log('response:', response)
    console.log('body:', body)
})
