import libre from 'libreoffice-convert'
import { promisify } from 'util'

const libreConvertAsync = promisify(libre.convert)

const convertDocxToPdf = async (docxBuffer) => {
  const pdfBuffer = await libreConvertAsync(docxBuffer, 'pdf', undefined)
  return pdfBuffer
}

export const fileConvert = {
  convertDocxToPdf,
}
