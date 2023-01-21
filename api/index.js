import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const data = {
  nama: "Tri Wulandari",
  nim: "02042111031",
  prodi: "D3 Manajemen Informatika",
  semester: "3",
};

const port = 3000;

app.get("/api/lihat", (_req, res) => {
  res.send(data);
});

app.listen(port, () => console.log("DIAM LAGI JALAN!!!"));
