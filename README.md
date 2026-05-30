# Fábrica de Software Acadêmica - Website

Site profissional da Fábrica de Software Acadêmica, incubadora de software do IFRS Campus Osório.

## 📋 Requisitos

- Node.js 18+
- npm ou yarn

## 🚀 Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível em: `http://localhost:3000`

3. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Estrutura do Projeto

```
app/
├── components/        # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── layout.tsx         # Layout raiz
├── page.tsx           # Página principal
└── globals.css        # Estilos globais
```

## 🎨 Personalizações Necessárias

1. **Dados dos Professores** - Editar `app/components/Team.tsx`:
   - Adicionar nomes completos, títulos e experiências
   - Adicionar fotos (substituir emojis por imagens)

2. **Contato** - Editar `app/components/Contact.tsx`:
   - Adicionar número de WhatsApp real no link
   - Atualizar link do LinkedIn com perfil/página da incubadora

3. **Informações Gerais**:
   - Logo da FSA em `public/images/`
   - Metadados em `app/layout.tsx`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositório GitHub
2. Importar projeto no Vercel
3. Deploy automático em cada push

### Outras Plataformas
- Netlify
- GitHub Pages
- AWS Amplify
- Heroku

## 📝 Licença

IFRS Campus Osório - 2024

## 📞 Contato

Para dúvidas sobre o site, entre em contato através de:
- WhatsApp: [adicionar número]
- LinkedIn: [adicionar perfil]
