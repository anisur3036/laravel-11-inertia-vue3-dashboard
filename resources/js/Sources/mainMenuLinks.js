/* Multi-language */
import {useI18n} from "vue-i18n";
// import {mainMenuTranslates} from "@/Lang/languages";
import {computed} from "vue";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  Bars3Icon,
  PlusIcon,
  CalculatorIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  HandRaisedIcon,
  InboxIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  CircleStackIcon,
  BellAlertIcon,
  PowerIcon,
  CursorArrowRippleIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/outline";

export default function ({roles,permissions}) {

    // const {tm} = useI18n({
    //     inheritLocale: true,
    //     messages: mainMenuTranslates
    // })

    /*Main Menu Links*/
    const mainMenuLinks = computed(()=>{
        return [
            {
                id: "externalGitHubRepo",
                label:  "externalGitHubRepo",
                icon: HomeIcon,
                link: "https://github.com/sinan-aydogan/anemon-laravel",
                type: "simple-link",
                target: "_blank",
                visibleFor: true,
            },
            {
                id: "authPages",
                label:  "Authentication",
                icon: GlobeAltIcon,
                link: null,
                type: "dropdown",
                links: [
                    {
                        id:"authLogin",
                        label:  "Login",
                        icon: null,
                        link: "login-app",
                        type: "route"
                    },
                    {
                        id: "authRegister",
                        label:  "Register",
                        icon: null,
                        link: "register-app",
                        type: "route"
                    },
                    {
                        id: "authForgotPassword",
                        label:  "Forgot Password",
                        icon: null,
                        link: "forgot-password-app",
                        type: "route"
                    }
                ]
            },
            {
                id: "components",
                label:  "Components",
                icon: CalculatorIcon,
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "componentAlert",
                        label:  "Alert",
                        icon: null,
                        link: "alert",
                        type: "route"
                    },
                    {
                        id: "componentAvatar",
                        label:  "Avatar",
                        icon: null,
                        link: "avatar",
                        type: "route"
                    },
                    {
                        id: "componentTable",
                        label:  "Table",
                        icon: HomeIcon,
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "componentTableJson",
                                label:  "componentTableJson",
                                icon: null,
                                link: "table",
                                type: "route"
                            },
                            {
                                id: "componentTableBackend",
                                label:  "componentTableBackend",
                                icon: null,
                                link: "back-end-table",
                                type: "route"
                            },
                            {
                                id: "componentPagination",
                                label:  "componentPagination",
                                icon: null,
                                link: "pagination",
                                type: "route"
                            }
                        ]
                    },
                    {
                        id: "componentTooltip",
                        label:  "componentTooltip",
                        icon: null,
                        link: "tooltip",
                        type: "route"
                    },
                    {
                        id: "layoutElements",
                        label:  "Elements",
                        icon: HandRaisedIcon,
                        link: null,
                        type: "dropdown",
                        links: [
                            {
                                id: "layoutStructure",
                                label:  "Structure",
                                icon: HomeIcon,
                                link: "layout-structure",
                                type: "route"
                            },
                            {
                                id: "layoutGrid",
                                label:  "Grid",
                                icon: HomeIcon,
                                link: "layout-grid",
                                type: "route"
                            },
                            {
                                id: "componentContentBox",
                                label:  "ContentBox",
                                icon: HomeIcon,
                                link: "content-box",
                                type: "route"
                            },
                        ]
                    },
                ]
            },
            {
                id: "formElements",
                label:  "Elements",
                icon: HandRaisedIcon,
                link: null,
                type: "dropdown",
                links: [
                    {
                        id: "formStructure",
                        label:  "Structure",
                        icon: null,
                        link: "form-structure",
                        type: "route"
                    },
                    {
                        id: "formInputGroup",
                        label:  "Input Group",
                        icon: null,
                        link: "form-input-group",
                        type: "route"
                    },
                    {
                        id: "formSimpleInputs",
                        label:  "Simple Inputs",
                        icon: null,
                        link: "form-simple-field",
                        type: "route"
                    },
                    {
                        id: "formRepeatableInput",
                        label:  "Repeatable Input",
                        icon: null,
                        link: "form-repeatable-field",
                        type: "route"
                    },
                    {
                        id: "formDateTimeInput",
                        label:  "Date Time Input",
                        icon: null,
                        link: "form-date-field",
                        type: "route"
                    },
                    {
                        id: "formSelectInput",
                        label:  "Select Input",
                        icon: null,
                        link: "form-select-input",
                        type: "route"
                    }
                ]
            },
            {
                id: "externalSources",
                label:  "external Sources",
                link: null,
                icon: HomeIcon,
                type: "dropdown",
                links: [
                    {
                        id: "externalLaravelDocument",
                        label:  "externalLaravelDocument",
                        icon: null,
                        link: "https://laravel.com/docs",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalInertiaDocument",
                        label:  "externalInertiaDocument",
                        icon: null,
                        link: "https://inertiajs.com/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalVuejsDocument",
                        label:  "externalVuejsDocument",
                        icon: null,
                        link: "https://v3.vuejs.org/",
                        type: "simple-link",
                        target: "_blank"
                    },
                    {
                        id: "externalTailwindcssDocument",
                        label:  "externalTailwindcssDocument",
                        icon: null,
                        link: "https://tailwindcss.com/docs",
                        type: "simple-link",
                        target: "_blank"
                    }
                ]
            }
        ]
    });

    /*Main Menu Footer*/
    const mainMenuFooterLinks = computed(()=>{
        return [
            {
                id: "footerHelp",
                label:  "footerHelp",
                linkType: "simple-link",
                link: "https://github.com/sinan-aydogan",
                icon: HomeIcon,
                target: "_blank"
            },
            {
                id: "footerSettings",
                label:  "footerSettings",
                showWhenFolded: true,
                linkType: "route",
                link: "settings",
                icon: HomeIcon
            }
        ]
    });

    return {mainMenuLinks, mainMenuFooterLinks}

};
