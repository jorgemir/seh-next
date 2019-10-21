import Layout from '../components/Layout';
import content from '../content/home.md';

let { html , attributes:{ title, subtitle, events } } = content;

export default () => (
    <Layout>
        <div className="bg-gray-100 flex">
            <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                <div className="xl:max-w-lg xl:ml-auto">
                    <img className="mt-6 rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/static/four-seasons-st-petersburg.jpg" />
                    <h1 className="mt-6 text-2xl font-semibold text-gray-900 leading-tight sm:text-4xl lg:text-3xl">{title}</h1>
                    <h3 className="text-blue-400 text-sm sm:text-lg sm:text-4xl lg:text-3xl">{subtitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                    <ul>
                        { events.map((event, k) => (
                            <li key={k}>
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:relative">
                <img className="absolute inset-0 h-full w-full object-cover object-center" src="/static/four-seasons-st-petersburg.jpg" />
            </div>
        </div>
    </Layout>
);
