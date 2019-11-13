import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const importHotelPosts = async () => {
    const markdownFiles = require
        .context('../../content/hotels', false, /\.md$/)
        .keys()
        .map(relativePath => relativePath.substring(2));
    return Promise.all(
        markdownFiles.map(async path => {
        const markdown = await import(`../../content/hotels/${path}`);
        return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};


class Post extends Component {
    
    static async getInitialProps({query}) {
        const { slug } = query
        const blogpost = await import(`../../content/events/${slug}.md`).catch(
            error => null
        )
        const hotelList = await importHotelPosts();

        return { blogpost, hotelList };
    }
    render() {
        if (!this.props.blogpost) return <div>not found</div>;

        const { html , attributes:{ title, subtitle, hero } } = this.props.blogpost.default;

        const { hotelList } = this.props;

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
                    { hotelList.map((hotel, k) => (
                        <div key={k} className="bottom-module">
                            <div className="module-img-container">
                                <Link href={hotel.default.attributes.link}><a><img className="module-img" alt={hotel.default.attributes.name} src={hotel.default.attributes.image} /></a></Link>
                            </div>
                            
                            <div className="p-6">
                                <h4 className="font-semibold text-lg">{hotel.default.attributes.name}</h4>
                                <p className="text-gray-600 text-sm">{hotel.default.attributes.description}</p>
                                <Link href={hotel.default.attributes.link}><a className="block mt-4">Contact Us Now</a></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        );
    }
}

export default Post;
