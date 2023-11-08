const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
const port = 3000;

const userJson = require("./user.json");

app.use(bodyParser.json());

app.use(cors());

const uuidGenerator = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });

app.get("/", (req, res) => {
  res.send(userJson);
});

app.post("/", async (req, res) => {
  try {
    const postData = req.body;
    // Ajouter les données au tableau dans la mémoire
    userJson[0].unshift({
      ...postData.post,
      id: uuidGenerator(),
      date: Date.now(),
    });

    // Convertir le tableau en format JSON
    const jsonData = JSON.stringify(userJson, null, 2);
    // Chemin du fichier que vous souhaitez réécrire
    const filePath =
      "/home/lucas/2023-09-JS-BDX-P2-croissants/backend/user.json";
    // Écriture du nouveau contenu dans le fichier
    await fs.writeFile(filePath, jsonData);
    res.send("Données ajoutées avec succès et fichier réécrit.");
  } catch (error) {
    console.error(
      "Erreur lors de l'ajout des données ou de la réécriture du fichier :",
      error
    );
    res
      .status(500)
      .send(
        "Erreur lors de l'ajout des données ou de la réécriture du fichier."
      );
  }
});

app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
