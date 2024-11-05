import Grid from "@/components/grid";
import Hero from "@/components/Hero";
import RecentProjects from "../../components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experiences from "@/components/experiences";
import MyApproach from "@/components/MyApproach";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import LanguageSwitcher from "@/components/ui/language_switcher";
import { fetchDocWithLocale } from "@/lib/actions";
import { MyContent } from "@/lib/graphql";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const contentData = await fetchDocWithLocale(MyContent, locale);
  console.log(contentData?.toString());
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="absolute z-20 right-5 top-5">
        <LanguageSwitcher className="text-white text-xs"/>
      </div>
      { contentData && Object.keys(contentData).length !=0 ? 
        (
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={contentData?.["navbar"]?.["navBarItems"] as Array<{name:string, link:string}> || navItems}/>
            <Hero data = {contentData["hero"]}/>
            <Skills data = {contentData["myTechStack"]}/>
            <Grid data={contentData["knowHow"]}/>
            <RecentProjects data = {contentData["myProject"]}/>
            <Clients data = {contentData["testimonial"]}/>
            <Experiences data = {contentData["myWorkExperience"]}/>
            <MyApproach data = {contentData["myApproach"]}/>
            <Footer data = {contentData["contactForm"]} />
          </div>
        )
        :(
          <div className="flex h-screen items-center justify-center space-x-2">
            <div className="w-10 h-10 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
          </div>
        )
      }
    </main>
  );
}
