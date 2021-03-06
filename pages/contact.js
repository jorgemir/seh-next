import Layout from '../components/Layout';
import content from '../content/contact.md';

let { html , attributes:{ title } } = content;

export default () => (
    <Layout>
        <div className="top-content">
            <div className="top-content-inner">
                <div className="top-content-left">
                <h1 className="top-title">{title}</h1>

                <form name="contact" netlify-honeypot="human" data-netlify="true" data-netlify-recaptcha="true" className="">

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="first">
                            First Name*
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="first" type="text" placeholder="John" />
                            <div>
                            <span className="hidden text-red-500 text-xs italic">
                                Please fill out this field.
                            </span>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="last">
                            Last Name*
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="last" type="text" placeholder="Doe" />
                        </div>
                        </div>

                        <p className="hidden">
                            <label>Don’t fill this out if you're human: <input name="human" /></label>
                        </p>

                        <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                            Company Name*
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Netboard" />
                            <div>
                            <span className="hidden text-red-500 text-xs italic">
                                Please fill out this field.
                            </span>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
                            Title*
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer" />
                        </div>
                        </div>

                        <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="numberOfRooms">
                            Number of Rooms*
                            </label>
                            <div>
                            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="numberOfRooms">
                                <option>10-15</option>
                                <option>16-20</option>
                                <option>More than 20</option>
                            </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="numberofSuites">
                            Number of Suites*
                            </label>
                            <div>
                            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="numberofSuites">
                                <option>3-5</option>
                                <option>6-10</option>
                                <option>More than 10</option>
                            </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="occupancy">
                            Occupancy*
                            </label>
                            <div>
                            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="occupancy">
                                <option>10-20</option>
                                <option>21-40</option>
                                <option>More than 40</option>
                            </select>
                            </div>
                        </div>
                        </div>

                        <div data-netlify-recaptcha="true"></div>

                        <div className="">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                Message:
                            </label>
                            <textarea className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="message"></textarea>
                        </div>

                        <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-3">
                            <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                            Submit
                            </button>
                        </div>
                        </div>
                </form>
                    
                </div>
            </div>
        </div>
    </Layout>
);