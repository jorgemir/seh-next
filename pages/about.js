import content from '../content/about.md';
import Layout from '../components/Layout';

let { html , attributes:{ title } } = content;

export default () => (
    <Layout>
        <div className="bg-gray-100 flex">
            <div className="px-8 py-8 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                <div className="xl:max-w-lg xl:ml-auto">
                    <h1 className="mt-6 text-2xl font-semibold text-gray-900 leading-tight sm:text-4xl lg:text-3xl">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
        </div>
    </Layout>
)