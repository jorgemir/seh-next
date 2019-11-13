import React, { Component } from 'react';
import Layout from '../components/Layout';
import content from '../content/home.md';
import Link from 'next/link';

let { html , attributes:{ title, subtitle, hero } } = content;

const importEventPosts = async () => {
    const markdownFiles = require
      .context('../content/events', false, /\.md$/)
      .keys()
      .map(relativePath => relativePath.substring(2));
    return Promise.all(
      markdownFiles.map(async path => {
        const markdown = await import(`../content/events/${path}`);
        return { ...markdown, slug: path.substring(0, path.length - 3) };
      })
    );
  };


export default class Home extends Component {
  static async getInitialProps() {
    const eventList = await importEventPosts();

    return { eventList };
  }
  render() {
    const { eventList } = this.props;

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
                { eventList.map((event, k) => (
                    
                    <div key={k} className="bottom-module">
                        <div className="module-img-container">
                            <Link href={event.attributes.link}><a><img className="module-img" alt={event.attributes.name} src={event.attributes.thumbnail} /></a></Link>
                        </div>
                        
                        <div className="p-6">
                            <h4 className="font-semibold text-lg">{event.attributes.title}</h4>
                            <div className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: event.html }}/>
                            <Link href={event.attributes.link}><a className="block mt-4">View Event</a></Link>                    
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
  }
}
