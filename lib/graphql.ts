export const HeroSection = `
    query HeroSection($locale: I18NLocaleCode) {
        hero(locale: $locale) {
            HeroSection {
                title
                description
                myWorkButton
                contactButton
            }
        }
    }
`;

export const MyProjects = `
    query Query($locale: I18NLocaleCode)  {
        myProject(locale: $locale) {
            heading
            shortHeading
            myProjects {
                description
                isLive
                thumbnail {
                    url
                    name
                }
                techStack {
                    name
                    tech {
                    name
                    url
                    }
                }
                link
                title
            }
        }
    }
`;

export const MyContent = `
    query Content($locale: I18NLocaleCode)  {
        hero(locale: $locale) {
            HeroSection {
                contactButton
                description
                myWorkButton
                profilePhoto {
                    url
                }
                title
            }
        }
        myProject(locale: $locale) {
            heading
            shortHeading
            myProjects {
                description
                isLive
                link
                title
                thumbnail {
                    url
                }
                techStack {
                    Image {
                        url
                    }
                    name
                }
            }
        }
        knowHow(locale: $locale) {
            myKnowHow {
                className
                description
                identifier
                img {
                    url
                }
                imgClassName
                spareImg {
                    url
                }
                title
                titleClassName
            }
        }
        myTechStack {
            imgSize
            StackType {
                stackType
                stackList {
                    name
                    Image {
                        url
                    }
                }
            }
        }
        testimonial(locale: $locale) {
            heading
            shortHeading
            testimonials {
                name
                title
                quote
                img {
                    url
                }
            }
            companies {
                name
                img {
                    url
                }
            }
        }
        myWorkExperience(locale: $locale) {
            heading
            shortHeading
            WorkExperience {
                title
                desc
                className
                thumbnail {
                    url
                }
            }
        }
        myApproach(locale: $locale) {
            myApproach {
                title
                description
            }
            heading
            shortHeading
        }
        contactForm(locale: $locale) {
            contactForm {
                title
                titlePlaceholder
                nameTitle
                namePlaceholder
                emailTitle
                emailPlaceholder
                messageTitle
                messagePlaceholder
            }
            heading
            shortHeading
            success
            failure
        }
        navbar(locale: $locale) {
        navBarItems {
            name
            link
        }
    }
    }
`;