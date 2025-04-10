#!/bin/bash

echo "🔧 Instalando yt-dlp..."

# Baixa o yt-dlp (Linux) e dá permissão de execução
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o yt-dlp
chmod +x yt-dlp

echo "✅ yt-dlp instalado com sucesso!"
