import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default ({ children, ...props }) => (
    <div className="bg-gray-300">
        <Head>
            <link rel="stylesheet"
            href="static/styles.css" />
        </Head>
        <Header {...props} />
        <main>{children}</main>
        <Footer {...props} />
    </div>
)