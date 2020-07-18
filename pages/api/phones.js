import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials/credentials-api.json';

export default async (req, res) => {
  const doc = new GoogleSpreadsheet('1S3QeRFwUm8-91bPD60ICKuB2uDZ6f9yAinn4klmzTuM');

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });

  await doc.loadInfo(); //info 

  const sheet = doc.sheetsByIndex[0];
  const telephones = await sheet.getRows();

  const phones = telephones.map(({ modelo, preco, imagem, desconto }) => {
    return {
      modelo,
      preco,
      imagem,
      desconto,
    }
  })

  res.send({
    phones,
  })
}
