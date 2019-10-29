import Layout from '../components/Layout';
import content from '../content/home.md';
import Link from 'next/link';

let { html , attributes:{ title, subtitle, hero, link, events } } = content;

export default () => (
    <Layout>
        <div className="bg-gray-100 flex">
            <div className="px-8 py-8 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                <div className="xl:max-w-lg xl:ml-auto">
                    <img className="rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src={hero} />
                    <h1 className="mt-6 text-2xl font-semibold text-gray-900 leading-tight sm:text-4xl lg:text-3xl">{title}</h1>
                    <h3 className="text-blue-400 text-sm sm:text-lg sm:text-4xl lg:text-3xl">{subtitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:relative">
                <img className="absolute inset-0 h-full w-full object-cover object-center" src={hero} />
            </div>
        </div>

        <div className="antialiased sm:flex text-gray-900 mt-8">
            { events.map((event, k) => (
                <div key={k} className="bg-white border rounded-lg overflow-hidden max-w-lg inline-block mx-2">
                    <div className="relative bg-red-500 pb-1/3">
                    <Link href={link}><a><img className="absolute h-full w-full object-cover" alt={event.name} src={event.image} /></a></Link>
                    </div>
                    
                    <div className="p-6">
                        <h4 className="font-semibold text-lg">{event.name}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                        <Link href={link}><a className="block mt-4">View Event</a></Link>                    
                    </div>
                </div>
            ))}
        </div>
    </Layout>
);
