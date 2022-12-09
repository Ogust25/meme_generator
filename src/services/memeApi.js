import axios from 'axios'

export async function getMemes() {
  const url = `https://api.imgflip.com/get_memes`

  return axios.get(url).then((res) => {
    return res.data.data.memes
  })
}

export async function getCreatedMeme(id, txt1, txt2) {
  let myFormData = new FormData()

  myFormData.append('template_id', id)
  myFormData.append('username', process.env.REACT_APP_USERNAME)
  myFormData.append('password', process.env.REACT_APP_PASSWORD)
  myFormData.append('text0', txt1)
  myFormData.append('text1', txt2)

  let axiosConfig = {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  }
  return axios
    .post('https://api.imgflip.com/caption_image', myFormData, axiosConfig)
    .then((response) => response.data.data.url)
}
