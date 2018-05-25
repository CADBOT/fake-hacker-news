let axios = require('axios')

axios.get('http://localhost:3000/articles')
  .then(res => {
     console.log(res.data)
   })
