const formatDate = require('../lib/format-date')
const style = require('../shared/style')
const header = require('../shared/fagskolen-header.js')
const helpers = require('../shared/helpers')
const watermark = require('../shared/watermark')
const fagskolenFooter = require('../shared/fagskolen-footer.js')

module.exports = ({ metadata, content }) => {
  const address = metadata.address || {}
  const document = metadata.document || {}
  const info = metadata.info || {}
  const footer = metadata.footer || {}

  const infoFields = []
  const appendInfo = (field, title, parseField) => {
    if (field) {
      infoFields.push({
        title,
        field: (parseField && typeof (parseField) === 'function' ? parseField(field) : field)
      })
    }
  }

  appendInfo(info['our-date'] || new Date(), 'Vår dato', formatDate)
  appendInfo(info['your-date'], 'Dykkar dato', formatDate)
  appendInfo(info['our-reference'], 'Vår referanse')
  appendInfo(info['your-reference'], 'Dykkar referanse')
  appendInfo(info['our-caseworker'], 'Vår saksbehandler')
  appendInfo(info.paragraph, 'Unnateke offentlegheit')

  const defintion = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [65, 120, 65, 70],
    info: {
      title: document.title,
      author: document.author,
      subject: document.subject,
      keywords: document.keywords
    },
    watermark: watermark(metadata, 'Førehandsvisning'),
    header,
    content: [
      {
        table: {
          widths: ['50%', '*', '*'],
          body: [
            [
              { text: [address.name, address.street, address.city].filter(text => !!text).join('\n'), style: 'address', rowSpan: 2 },
              { text: `${info.sector || ''}`, style: 'info', bold: true, colSpan: 2, marginTop: 30 },
              ''
            ],
            [
              '',
              infoFields.map(info => ({ text: `${info.title}:`, style: 'info' })),
              infoFields.map(info => ({ text: info.field, style: 'info' }))
            ]
          ]
        },
        layout: {
          defaultBorder: false,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 5
        }
      },
      content
    ],
    footer: (page) => ({
      table: {
        widths: [95, 100, 103, 52, 130],
        body: [
          [
            [
              { text: 'Postadresse:', style: 'footer', bold: true },
              { text: fagskolenFooter.postalAddress, style: 'footer' }
            ],
            [
              { text: 'Besøksadresse:', style: 'footer', bold: true },
              { text: fagskolenFooter.visitingAddress, style: 'footer' }
            ],
            [
              { text: 'Sentralbord:', style: 'footer', bold: true },
              { text: fagskolenFooter.phone, style: 'footer' },
              { text: fagskolenFooter.email, style: 'footer' }
            ],
            [
              { text: 'Org. nr.:', style: 'footer', bold: true },
              { text: fagskolenFooter.orgnr, style: 'footer' }
            ],
            /*
            [
              { text: fagskolenFooter.url, style: 'footer', bold: true, alignment: 'right', fontSize: 10 }
            ],
            */
            [
              { text: fagskolenFooter.url, style: 'footer', bold: true, alignment: 'right', fontSize: 8 },
              { text: ' ', style: 'footer' },
              { text: footer['page-numbers'] === false ? '' : page, style: 'pagenumber' }
            ]
          ]
        ]
      },
      layout: {
        defaultBorder: false,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0
      },
      margin: [65, 5, 65, 0]
    }),
    ...style,
    ...helpers
  }

  return defintion
}
