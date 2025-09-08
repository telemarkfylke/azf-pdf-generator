---
definition: fagskolen-brevmal
language: nn
watermark: {{#if preview}} true {{else}} false {{/if}}
logo: fagskolen
address:
  name: {{#if recipient.fullName }}{{recipient.fullName}}{{else}}{{student.name}}{{/if}}
  street: {{ recipient.streetAddress }}
  city: {{ recipient.zipCode }} {{ recipient.zipPlace }}
info:
  our-date: {{ isoDate created.timestamp }}
  sector: {{ school.name }}
  our-caseworker: {{ teacher.name }}
  paragraph: Offl. § 13 jf. fvl. §13 (1)
footer:
  visiting-address: {{#if schoolFooter.address }}{{schoolFooter.address}}{{/if}}
  phone: {{#if schoolFooter.phoneNumber }}{{schoolFooter.phoneNumber}}{{/if}}
  email: {{#if schoolFooter.mail }}{{schoolFooter.mail}}{{/if}}
  orgnr: {{#if schoolFooter.organizationNumber }}{{schoolFooter.organizationNumber}}{{/if}}
---

# Varsel - Godkjenning av arbeidskrav manglar

Vi viser til § 4-3 (3) i Forskrift om høgare yrkesfagleg utdanning ved Fagskulen Vestfold og Telemark, der det står at studentar må ha alle arbeidskrav, eller eit minimum av talet på arbeidskrav, godkjent for å få emnekarakter i emnet. Du har to forsøk per arbeidskrav, jf. Retningslinjer for arbeidskrav og sluttvurdering.

Du har ikkje fått godkjent **{{content.assignment}}** på første forsøk, og får difor eit varsel om at godkjenning av arbeidskrav manglar. 

Du har rett til eit andre forsøk på arbeidskravet. Dersom arbeidskravet ikkje blir godkjent, må du ta emnet **{{content.course.nb}} ({{content.course.name}})** på nytt. Det vil då bli fatta eit enkeltvedtak, som du har klagerett på, om at du ikkje får sluttvurdering i emnet (emnekarakter).

Dersom du har spørsmål eller treng rettleiing, ta gjerne kontakt med {{teacher.name}}{{#if content.contactWithinDays}} innen {{content.contactWithinDays}} dagar{{/if}}.

Vennleg helsing

{{ teacher.name }}<br />
{{content.course.nb}} - {{ school.name }}<br />
{{teacher.mail}}

*Dokumentet er elektronisk godkjent og vert sent utan signatur.*
