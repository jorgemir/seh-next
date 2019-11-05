import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import '../../public/static/styles.css';

export default ({ children, ...props }) => (
    <div className="bg-gray-300">
        <Head>
            <title>Sport Event Hotels</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Header {...props} />
        <main>{children}</main>
        <Footer {...props} />
    </div>
)