import axios from 'axios';

export default axios.create({
  baseURL: "https://rehamo-wheelchair-solution-default-rtdb.firebaseio.com/"
})
