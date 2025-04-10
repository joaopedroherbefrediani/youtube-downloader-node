# YouTube Video Downloader (Node.js + yt-dlp)

Este projeto é um backend em Node.js que baixa vídeos do YouTube utilizando o `yt-dlp`.

## 🔧 Tecnologias
- Node.js
- Express
- yt-dlp (versão Linux)

## 🚀 Deploy na Render

1. Faça fork ou clone deste repositório.
2. Suba para o seu GitHub.
3. Acesse [https://dashboard.render.com](https://dashboard.render.com)
4. Crie um novo **Web Service** com as seguintes configs:

| Campo            | Valor                      |
|------------------|----------------------------|
| Build Command    | `./install.sh && npm install` |
| Start Command    | `npm start`                |
| Environment      | Node                      |
| Instance Type    | Free                       |

## 📦 Rotas da API

- `POST /download`  
  **Body:** `{ "url": "https://youtube.com/..." }`  
  **Retorno:** inicia o download e entrega o vídeo como arquivo

- `GET /history`  
  Retorna o histórico de vídeos baixados

- `DELETE /history`  
  Limpa o histórico

---

## 🔒 Observações

- A Render usa Linux, então o `yt-dlp.exe` não funciona. Por isso o binário Linux é baixado via `install.sh`.

---
