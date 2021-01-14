import Layout from "../components/Layout"
import ClientSatisfaction from "../components/client-satisfaction"
import {Review} from "../types/review.type"
import styles from './index.module.css'
import {getReviews} from './api/reviews'

interface Props {
    reviews: Review[];
}

export default function Home({reviews}: Props) {
    return (
        <>
            <Layout
                title="Rose Orientale patisserie orientale"
                active="home"
                description="Learn how to build an AMP First with Next.js."
            >
                <div className={styles.landing + ' w-full h-72'}>
                    <section id="title" className="w-full md:w-8/12 h-60 flex flex-col justify-center items-center text-center">
                        <h1 className="w-full md:w-1/2 text-3xl text-bold">Rose Orientale</h1>
                        <h2 className="w-full md:w-1/2">Découvrez nos patisseries orientale,

                        </h2>
                        <h3 className="w-full md:w-1/2">pour tout moment de votre vie</h3>
                    </section>

                </div>
                <div className="mx-auto">
                    <ClientSatisfaction reviews={reviews}/>
                </div>
            </Layout>
            <style jsx global>{`
              
            `}
            </style>
        </>
    )
}

export async function getStaticProps({preview = null}) {
    const reviews = await getReviews();
    return {
        props: {reviews},
    }
}