'use client'
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function LanguageSwitcher({className}: {className?:string}) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = useLocale()
  //get local from pathname
  //const local = pathname.split('/')[1];
  //const [lang, setLang] = useState(local);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const LANGUAGE_SELECTOR_ID = 'language-selector';
  useEffect(() => {
      const handleWindowClick = (event: any) => {
          const target = event.target.closest('button');
          if (target && target.id === LANGUAGE_SELECTOR_ID) {
              return;
          }
          setIsOpen(false);
      }
      window.addEventListener('click', handleWindowClick)
      return () => {
          window.removeEventListener('click', handleWindowClick);
      }
  }, []);

    const handleLanguageChange = (language:string)=> {
        router.push(`/${language}`);
        window.location.href=`/${language}`;

    };
  
  return (
    <React.Fragment>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 gap-1"
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
    >
        <img src={`${lang}_flag.png`} alt={lang} width={25} height={25} />
        <svg
            className="-me-1 ms-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                clipRule="evenodd"
            />
        </svg>
    </button>
    { isOpen && (
      <div className="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role='menu'
        aria-orientation='vertical'
        aria-labelledby={LANGUAGE_SELECTOR_ID}
      >
        <div className='py-1 flex flex-col' role='none'>
          { ["fo", "en"].map((language, index)=>{
            return(
              <button key={`${language}_${index}`} 
                onClick={()=>handleLanguageChange(language)}
                className={`${
                  lang === language
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
              } px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
              role="menuitem"
              >
                <img src={`${language}_flag.png`} alt={language} width={25} height={25} />
                <span className="ml-2">{language.toUpperCase()}</span>
              </button>
            )
          }) }
        </div>
      </div>
    ) }
    </React.Fragment>
  )
}



