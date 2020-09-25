import axios from 'axios';

export default axios.create({
  baseURL: 'https://creatorsfantasyfpn.com/aps/server.cgi/'
})