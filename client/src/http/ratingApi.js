import axios from "axios";
import { $host } from "./index";

export const setRating = async (rate, repo_id, user_id) => {

    // console.log(localStorage.getItem('token'))
      let axiosConfig = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
        }
      };

      axios.post('http://localhost:5000/api/rating/rate', {rate, repo_id, user_id}, axiosConfig)
      .then((res) => {
          alert('Rated')
      })
      .catch((err) => {
          alert('Something went wrong...')
      })
}