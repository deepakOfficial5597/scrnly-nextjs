import FAQ from '@/components/home/faq'
import Footer from '@/components/home/footer'
import HeroSection from '@/components/home/hero-section'
import Steps from '@/components/home/steps'
import UseCases from '@/components/home/usecases'
import Header from '@/components/home/header'
import LandingPageSeo from '@/components/seo/landing.page'

export default function Home() {
  return (
    <>
      <LandingPageSeo />
      <main>
        <Header />
        <section className="h-[70vh] px-[5%] md:px-[17.5%] flex justify-center items-center">
          <HeroSection />
        </section>
        <section className="px-[10%] md:px-[13%] my-10">
          <Steps />
        </section>
        <section className="px-[10%] md:px-[13%] flex flex-col gap-4 py-10">
          <h6 className="text-xl font-bold text-center">Use cases</h6>
          <UseCases />
        </section>
        <section className="px-[10%] md:px-[13%] flex flex-col gap-4 py-10">
          <h6 className="text-xl font-bold text-center">Frequently asked questions</h6>
          <FAQ />
        </section>
      </main>
      <Footer/>
    </>
  )
}
