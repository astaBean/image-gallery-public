import Head from 'next/head'

function CommonHeader ({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link
        rel="icon"
        href="/images/favicon.ico"
      />
    </Head>
  )
}

export {
  CommonHeader
}
