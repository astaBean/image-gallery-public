import Head from 'next/head'
import Layout from '../components/layout'
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

export default function Images ({ allImages }) {
  return (
    <Layout>
      <Head>
        <title>Images</title>
      </Head>
      <CardGroup>
        {allImages.map(image => (
          <Card key={image.uuid}>
            <CardImg
              src={image.path} // Route of the image file
              className={`class_${image.uuid}`}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{image.title}</CardTitle>
              <CardSubtitle tag="h6" className="text-muted">{image.description}</CardSubtitle>
            </CardBody>
          </Card>
        ))
        }
      </CardGroup>

    </Layout>
  )
}

export const getStaticProps = async () => {
  const serverUrl = process.env.SERVER_URL
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }

  const getResponse = await fetch(`${serverUrl}/images`, requestOptions)
  console.log(`url - ${getResponse}`)
  const images = await getResponse.json()

  return {
    props: {
      allImages: images
    }
  }
}
