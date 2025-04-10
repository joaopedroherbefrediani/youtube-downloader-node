const express = require('express');
const { exec } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

let downloadHistory = []; // Histórico de downloads

app.use(express.static('public'));
app.use(express.json());

// Rota que retorna o vídeo diretamente como stream
app.post('/download', (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(400).send('URL inválida');

  const filename = `${uuidv4()}.mp4`;
  const outputPath = path.join(__dirname, filename);
  const command = `yt-dlp -f best -o "${outputPath}" "${url}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Erro ao baixar vídeo:', stderr);
      return res.status(500).send('Erro ao baixar vídeo');
    }

    // Adiciona o vídeo ao histórico
    downloadHistory.push({ url, filename });

    res.setHeader('Content-Disposition', 'attachment; filename=video.mp4');
    res.setHeader('Content-Type', 'video/mp4');

    const filestream = fs.createReadStream(outputPath);
    filestream.pipe(res);

    filestream.on('end', () => {
      fs.unlink(outputPath, () => {});
    });

    filestream.on('error', (err) => {
      console.error('Erro ao enviar o arquivo:', err);
      res.status(500).end();
    });
  });
});

// Rota para obter o histórico de downloads
app.get('/history', (req, res) => {
  res.json(downloadHistory);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Rota para limpar o histórico de downloads
app.delete('/history', (req, res) => {
  downloadHistory = []; // Limpa o histórico
  res.json({ message: 'Histórico limpo com sucesso!' });
});

