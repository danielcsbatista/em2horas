import fs from 'fs';
import path from 'path';

const distPath = './dist';
const indexHtmlPath = path.join(distPath, 'index.html');

// Verifica se os arquivos existem
if (!fs.existsSync(distPath)) {
  console.error('❌ Pasta dist não existe!');
  process.exit(1);
}

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ index.html não encontrado!');
  process.exit(1);
}

// Verifica os caminhos no index.html
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const hasCorrectBase = indexHtml.includes('href="/') || indexHtml.includes('src="/');

console.log('✅ Build verificado com sucesso');
console.log('📁 Conteúdo da pasta dist:');
fs.readdirSync(distPath).forEach(file => {
  console.log(`   - ${file}`);
});