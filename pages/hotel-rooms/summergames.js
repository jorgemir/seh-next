import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
// import content from '../../content/2020-summer-games.md';

// let { html , attributes:{ title } } = content;

export default function Event() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.slug}</h1>
      <p>This is the hotel content.</p>
    </Layout>
  );
}