const app  = require('express')()
const port = 4000

app.get('/', (req, res) => {
  res.send("Halo ganteng... ❤️")
})

app.listen(port, () => {
  console.log("Aplikasi mahal ini udah jalan di port 4k bos 🚀")
})
