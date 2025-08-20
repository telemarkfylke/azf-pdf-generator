---
definition: fagskolen-brevmal
language: nb
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

# Forhåndsvarsel - Manglende godkjenning av arbeidskrav

Vi viser til § 4-3 (3) Forskrift om høyere yrkesfaglig utdanning ved Fagskolen Vestfold og Telemark, hvor det står at studenter må ha alle arbeidskrav eller et minimum av antall arbeidskrav godkjent for å få emnekarakter i emnet. Du har to forsøk per arbeidskrav jf. Retningslinjer for arbeidskrav og sluttvurdering.

Du har fått ikke godkjent **{{content.assignment}}** på 1. forsøk, og mottar derfor et forhåndsvarsel.

Du har rett til et 2. forsøk på arbeidskravet. Dersom arbeidskravet ikke blir godkjent, vil du måtte ta emnet **{{content.course.nb}} ({{content.course.name}})** på nytt. Det vil da bli fattet et enkeltvedtak, som du har klagerett på, om at du ikke får sluttvurdering i emnet (emnekarakter).

Dersom du har spørsmål eller trenger veiledning, ta gjerne kontakt med {{teacher.name}}{{#if content.contactWithinDays}} innen {{content.contactWithinDays}} dager{{/if}}.

Med vennlig hilsen

{{ teacher.name }}<br />
{{content.course.nb}} - {{ school.name }}<br />
{{teacher.mail}}

*Dokumentet er elektronisk godkjent og sendes uten signatur.*
