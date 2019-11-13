import Layout from '../../components/Layout';
import Link from 'next/link';

const Post = ({ blogpost }) => {
    if (!blogpost) return <div>not found</div>

    let { html , attributes:{ title, subtitle, hero, link, hotels } } = blogpost.default;

    return (
        <Layout>
            <div className="top-content">
                <div className="top-content-inner">
                    <div className="top-content-left">
                        <img className="hero" src={hero} />
                        <h1 className="top-title">{title}</h1>
                        <h3 className="top-subtitle">{subtitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: html }}/>
                    </div>
                </div>
                <div className="large-hero-container">
                    <img className="large-hero" src={hero} />
                </div>
            </div>

            <div className="bottom-content">
                { hotels.map((hotel, k) => (
                    <div key={k} className="bottom-module">
                        <div className="module-img-container">
                            <Link href={hotel.link}><a><img className="module-img" alt={hotel.name} src={hotel.image} /></a></Link>
                        </div>
                        
                        <div className="p-6">
                            <h4 className="font-semibold text-lg">{hotel.name}</h4>
                            <p className="text-gray-600 text-sm">{hotel.description}</p>
                            <Link href={hotel.link}><a className="block mt-4">Contact Us Now</a></Link>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

Post.getInitialProps = async ({ query }) => {
  const { slug } = query
  const blogpost = await import(`../../content/events/${slug}.md`).catch(
    () => null
  )
  return { blogpost }
}

export default Post
