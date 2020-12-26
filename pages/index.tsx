import Layout from "../components/Layout";
import ClientSatisfaction from "../components/client-satisfaction";
import {Review} from "../types/review.type";
interface Props {
    reviews: Review[];
}
export default function Home({reviews}: Props) {
    return (
        <Layout
            title="Rose Orientale patisserie orientale"
            active="home"
            description="Learn how to build an AMP First with Next.js."
        >
            <div className="text-red-600">
                Hello World !
            </div>
            <ClientSatisfaction reviews={reviews} />
        </Layout>
    )
}
export async function getStaticProps({ preview = null }) {
  const request = await fetch('http://localhost:3000/api/reviews');
  const reviews = await request.json();
  return {
    props: { reviews },
  }
}