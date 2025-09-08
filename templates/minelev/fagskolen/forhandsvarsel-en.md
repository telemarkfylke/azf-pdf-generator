---
definition: fagskolen-brevmal
language: en
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

# Advance Notice – Missing Approval of Coursework Requirement

We refer to § 4-3 (3) of the Regulations on Higher Vocational Education at Fagskolen Vestfold og Telemark, which states that students must have all coursework requirements, or a minimum number of them, approved in order to receive a subject grade. You have two attempts per coursework requirement, cf. Guidelines for Coursework Requirements and Final Assessment.

You did not receive approval for **{{content.assignment}}** on your first attempt and are therefore receiving this advance notice.

You are entitled to a second attempt at the coursework requirement. If the requirement is not approved, you will have to retake the subject **{{content.course.nb}} ({{content.course.name}})**. A formal decision will then be made, which you have the right to appeal, stating that you will not receive a final assessment (subject grade) in the subject.

If you have any questions or need guidance, please feel free to contact {{teacher.name}}{{#if content.contactWithinDays}} within {{content.contactWithinDays}} days{{/if}}.

Kind regards

{{ teacher.name }}<br />
{{content.course.nb}} - {{ school.name }}<br />
{{teacher.mail}}

*This document is electronically approved and sent without a signature.*

