const login = (req, res) => {
  res.render('login', {
    title: "KAM 3 Login page"
  })
}

module.exports = {
  login
}