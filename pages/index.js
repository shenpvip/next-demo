import Layout from '../components/Layout'
import { Button } from 'antd-mobile'
import Link from 'next/link'
import axios from 'axios'

const Index = props => (
  <Layout title="Index">
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/about?name=sp">
      <Button>Go to About</Button>
    </Link>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async ()=> {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  console.log(`服务端获取数据！`)

  return {
    shows: data
  }
}

export default Index
