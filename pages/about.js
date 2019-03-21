import Layout from '../components/Layout'
import { Button } from 'antd-mobile'
import Link from 'next/link'
import React from 'react'

// export default () => (
//   <Layout title='About'>
//     <Link href='/'>
//       <Button>Go to Index</Button>
//     </Link>
//   </Layout>
// )
export default class About extends React.Component {
  static async getInitialProps({ query }) {
    return { query }
  }
  render() {
    return (
      <Layout title="About">
        <p>{this.props.query.name}</p>
        <Link href="/">
          <Button>Go to Index</Button>
        </Link>
      </Layout>
    )
  }
}
