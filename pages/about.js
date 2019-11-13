import content from '../content/about.md';
import Layout from '../components/Layout';

let { html , attributes:{ title } } = content;

export default () => (
    <Layout>
        <div className="top-content">
            <div className="top-content-inner">
                <div className="top-content-left">
                    <h1 className="top-title">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
        </div>
    </Layout>
)