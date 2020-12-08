============
Installation
============

Enable Wagtail's and Django's internationalisation features
===========================================================

Wagtail Localize requires Wagtail 2.11 or above.

Firstly, enable Wagtail's built-in localisation:

https://docs.wagtail.io/en/stable/advanced_topics/i18n.html#configuration


Add the following to `MIDDLEWARE`:

.. code-block::

    ```python
    "django.middleware.locale.LocaleMiddleware",
    ```

    Ensure your settings file has:

    ```python
    LANGUAGE_CODE = "en-gb"  # Or your preferred default language
    USE_I18N = True
    ```

    Add to following to your settings specifying any languages you would like to translate:

    ```python
    LANGUAGES = [
        ("en", "English"),
        ("fr", "French"),
    ]
    ```

    ### URL configuration

    The following additions need to be made to `./yoursite/urls.py`

    ```python
    from django.conf.urls.i18n import i18n_patterns

    # Non-translatable URLs
    # Note: if you are using the Wagtail API or sitemaps,
    # these should not be added to `i18n_patterns` either
    urlpatterns = [
        path('django-admin/', admin.site.urls),

        path('admin/', include(wagtailadmin_urls)),
        path('documents/', include(wagtaildocs_urls)),
    ]

    # Translatable URLs
    # These will be available under a language code prefix. For example /en/search/
    urlpatterns += i18n_patterns(
        path('search/', search_views.search, name='search'),
        path("", include(wagtail_urls)),
    )
    ```

Install Wagtail Localize
========================

Wagtail Localize can be installed with ``pip``:

    pip install wagtail-localize

Add it to ``INSTALLED_APPS``, between your project's apps and Wagtail:

.. code-block:: python

    INSTALLED_APPS = [
        ...
        "myproject.home",

        "wagtail_localize",

        "wagtail.core",
        ...
    ]

If you have enabled ``wagtail.locales``, replace this with ``wagtail_localize.locales``.

