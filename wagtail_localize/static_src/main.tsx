import './editor/main';


import { ReactNode } from "react";

declare global {
    // Wagtail globals

    interface WagtailConfig {
        ADMIN_API: {
            PAGES: string;
            DOCUMENTS: string;
            IMAGES: string;
            EXTRA_CHILDREN_PARAMETERS: string;
        };

        I18N_ENABLED: boolean;
        LOCALES: {
            code: string;
            /* eslint-disable-next-line camelcase */
            display_name: string;
        }[];
    }

    const wagtailConfig: WagtailConfig;

    function registerShellView(name: string, render: (data: any, csrfToken: string) => ReactNode): void;

    // Django i18n utilities

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#gettext
    function gettext(text: string): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#ngettext
    function ngettext(singular: string, plural: string, count: number): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#interpolate
    // FIXME export default function interpolate(...): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#get-format
    type FormatType =
        | 'DATE_FORMAT'
        | 'DATE_INPUT_FORMATS'
        | 'DATETIME_FORMAT'
        | 'DATETIME_INPUT_FORMATS'
        | 'DECIMAL_SEPARATOR'
        | 'FIRST_DAY_OF_WEEK'
        | 'MONTH_DAY_FORMAT'
        | 'NUMBER_GROUPING'
        | 'SHORT_DATE_FORMAT'
        | 'SHORT_DATETIME_FORMAT'
        | 'THOUSAND_SEPARATOR'
        | 'TIME_FORMAT'
        | 'TIME_INPUT_FORMATS'
        | 'YEAR_MONTH_FORMAT';

    function get_format(formatType: FormatType): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#gettext_noop
    function gettext_noop(text: string): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#pgettext
    function pgettext(context: string, text: string): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#npgettext
    function pgettext(context: string, text: string, count: number): string;

    // https://docs.djangoproject.com/en/3.1/topics/i18n/translation/#pluralidx
    function pluralidx(count: number): boolean;
}

export {};
