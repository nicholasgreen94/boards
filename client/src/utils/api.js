import axios from 'axios'

export default {
  // signUp: axios.get('/auth/google')
  checkUser: () => axios.get('/profile/auth'),
  createNewUser: (data) => axios.post('/auth/google', data)
}
