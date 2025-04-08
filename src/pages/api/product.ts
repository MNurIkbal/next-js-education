import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string; // Gunakan 'string' dengan huruf kecil
  statusCode: number;
  data: {
    id: number; // Mengubah 'String' menjadi 'number' sesuai tipe id pada data
    nama: string; // Gunakan 'string' dengan huruf kecil
    harga: number; // Gunakan 'number' dengan huruf kecil
    size: string; // Gunakan 'string' dengan huruf kecil
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = [
    {
      id: 1,
      nama: "baju1",
      harga: 1000,
      size: "XL",
    },
    {
      id: 2,
      nama: "celana",
      harga: 10000,
      size: "L",
    },
    {
      id: 3,
      nama: "sepatu",
      harga: 3000,
      size: "XL",
    },
  ];

  res.status(200).json({
    status: true,
    message: "Data Berhasil Ditampilkan",
    statusCode: 200,
    data: data, // Mengirimkan data dengan format yang sesuai
  });
}
