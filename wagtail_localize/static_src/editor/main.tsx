import React from 'react';
import ReactDOM from 'react-dom';

import TranslationEditor from './components/TranslationEditor';

document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.js-translation-editor');

    if (element instanceof HTMLElement && element.dataset.props) {
        const csrfTokenElement = element.querySelector(
            '[name="csrfmiddlewaretoken"]'
        );

        if (csrfTokenElement instanceof HTMLInputElement) {
            const csrfToken = csrfTokenElement.value;

            ReactDOM.render(
                <TranslationEditor
                    csrfToken={csrfToken}
                    {...JSON.parse(element.dataset.props)}
                />,
                element
            );
        } else {
            console.error(
                "Not starting translation editor because I couldn't find the CSRF token element!"
            );
        }
    }
});

// Register as a shell view
registerShellView('wagtail_localize.edit_translation', (props, csrfToken) => {
    return (
        <TranslationEditor
            csrfToken={csrfToken}
            {...props}
        />
    )
});
