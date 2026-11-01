import type {Metadata} from 'next';import Header from '@/components/Header';import Footer from '@/components/Footer';import './globals.css';
export const metadata:Metadata={title:{default:'ToolNest — Free Online Tools',template:'%s | ToolNest'},description:'Free online tools for images, PDFs, text, developers and SEO.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
