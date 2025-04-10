#!/bin/bash

echo "🔧 Instalando yt-dlp..."

# Baixa a versão Linux do yt-dlp e torna executável
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o yt-dlp
chmod +x yt-dlp

echo "✅ yt-dlp instalado com sucesso!"
