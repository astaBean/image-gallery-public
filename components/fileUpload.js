import 'react-image-upload/dist/index.css'
import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'

const UploadElement = () => {
  const [file, setFile] = useState(null)
  const fileHandler = async (e) => {
    const fileUploading = e.target.files[0]
    setFile(fileUploading)
    await uploadFile(fileUploading)
  }

  return (
    <div>
      <img
        className={utilStyles.imagePreview}
        src={file ? URL.createObjectURL(file) : null}
        alt={file ? file.name : null}
        style={!file ? { display: 'none' } : {}}/>
      <input type="file" onChange={fileHandler}/>
    </div>
  )
}

const uploadFile = async (file) => {
  const serverUrl = process.env.SERVER_URL
  console.info(`file - ${JSON.stringify(file)}`)
  const isImage = isFileImage(file)

  if (!isImage) {
    console.error('Validation error')
    return
  }

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  const getResponse = await fetch(`${serverUrl}/storage`, requestOptions)
  const s3Url = await getResponse.json()
  const preSignedUrl = s3Url.signedURL
  console.info(`Pre-signed url ${preSignedUrl}`)

  const putRequestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'image/*', 'Access-Control-Allow-Origin': '*' },
    body: file,
    mode: 'no-cors'
  }

  try {
    const response = await fetch(preSignedUrl, putRequestOptions)
    console.info(`Response ${JSON.stringify(response)}`)
  } catch (err) {
    console.error('Error', err)
  }
}

// This is to do
const removeFile = (file) => {
  return 'ok removed that file'
}

function isFileImage (file) {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png']
  return file && acceptedImageTypes.includes(file.type)
}

export {
  UploadElement,
  removeFile
}
