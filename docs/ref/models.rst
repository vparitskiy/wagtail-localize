======
Models
======

.. module:: wagtail_localize.models

Strings and Translations
========================

``TranslatableObject``
----------------------

.. autoclass:: TranslatableObject

Source strings
--------------

The ``String`` model stores all of the source strings.

.. autoclass:: String

Rich text templates
-------------------

Wagtail localize extracts multiple strings from each rich text field, one
string for each paragraph or heading. In order to reconstruct these into
a translated paragraph, we store a template containing all of the
untranslated content such as the structural tags (``<p>``, ``<ul>``, ``<h1>``,
etc) and untranslated block elements such as images and embeds.

These templates are stored in the ``Template`` model.

.. autoclass:: Template

Translation contexts
--------------------

A translation context allows a string to be translated differently when it is
displayed in different locations. It is made up of an object ID (more on
those in a bit) and a content path.

These two attributes mean that a string can have a different translation on
different pages or in different fields on the same page.

.. autoclass:: TranslationContext

Translated strings
------------------

The ``StringTranslation`` stores translations of the source strings for a
given locale and context.

.. autoclass:: StringTranslation


Translation workflow
====================

``TranslationSource``
---------------------

TODO

``Translation``
---------------

TODO

``TranslationLog``
------------------

TODO

Segments
========

``StringSegment``
-----------------

TODO


``TemplateSegment``
-------------------

TODO

``RelatedObjectSegment``
------------------------

TODO

``OverridableSegment``
----------------------

TODO

``SegmentOverride``
-------------------

TODO

Tree synchronisation
====================

``LocaleSynchronization``
-------------------------

TODO
