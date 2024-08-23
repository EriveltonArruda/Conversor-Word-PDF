import { fileConvert } from '../services/fileConvert.js'

const allowedMimeType = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const recivedFile = async (req, res) => {
  const { mimetype, buffer } = req.file

  if (!allowedMimeType.includes(mimetype)) {
    res.json(
      {
        message: 'File type is not supported.',
      },
      400
    )
  }

  const fileBuffer = await fileConvert.convertDocxToPdf(buffer)

  res.set('Content-Type', `application/pdf`)
  res.send(new Buffer.from(fileBuffer, 'base64'))
}

export const fileController = {
  recivedFile,
}
