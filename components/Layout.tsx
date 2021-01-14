import NextHead from 'next/head'
import Header from "./header";
import Footer from "./footer";

interface Props {
    title: string,
    description: string,
    active: string,
    children: React.ReactNode
}

const Layout = (props: Props) => (
    <>
        <NextHead>
            <title>{props.title || ''}</title>
            <meta name="description" content={props.description || ''}/>
            <link rel="icon" sizes="192x192" href="/static/images/icons-192.png"/>
            <link rel="apple-touch-icon" href="/static/images/icons-192.png"/>
            <link rel="icon" href="/static/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
        </NextHead>
        <div className="flex flex-col min-h-screen">
            <Header active={props.active}></Header>
            <main className="flex-1 w-full md:py-8 font-serif">
                {props.children}
            </main>
            <Footer></Footer>
        </div>
        <style jsx global>{`
    `}</style>
    </>
)

export default Layout
