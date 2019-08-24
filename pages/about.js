import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout>
        <h1>About Sport Event Hotels</h1>
               
        <p>EventPro Productions, Incentives and Hospitality</p>

        <p>Is an Award-Winning Production company with over 35 years of Experience.</p>

        <p>Specializing in Incentives, Entertainment, Corporate and Hospitality events for Live Events, Sporting Events and Concert Events.</p>

        <p>With our years of experience no detail is left undone.</p>

        <p>Hotels, Logistics, Transportation, Hospitality Parties, and Team Building .We do it all</p>

        <p>With Eventpro Productions many years in business and the excellent Hotel Relationships we have built up over this time. We are known for excelling at sourcing and procuring hotels worldwide .</p>

        <p>Sporting and Concert Packages to the Biggest events in the world.</p>

        <p>We have a hand-picked staff of the most experienced Event Planners , Producers and On-Site Management Staff in the industry.</p>

        <p>We stand behind our reputation to create an event with memories that will last a lifetime.</p>
        <p>
            <Link prefetch href="/contact">
                <a>Contact Us</a>
            </Link>
        </p>
    </Layout>
)