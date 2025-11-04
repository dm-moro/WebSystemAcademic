# 🌐 WebSystemAcademic

**WebSystemAcademic** is a full-stack web application for academic data management.  
Built with **Node.js**, **Express.js**, **Faker.js**, and **Microsoft SQL Server**, it features a responsive frontend developed with **HTML**, **CSS**, and **JavaScript**.  
The database is managed on Linux using **Azure Data Studio**.

---

## 🚀 Features
- Academic data management (students, courses, grades, etc.)
- RESTful API using **Express.js**
- Mock data generation for tables with **Faker.js**
- Integration with **Microsoft SQL Server**
- Responsive frontend built in **HTML**, **CSS**, and **JavaScript**

---

## 🧱 Technologies
**Backend:**
- Node.js  
- Express.js  
- Faker.js  
- Microsoft SQL Server  
- Azure Data Studio (for database management on Linux)  

**Frontend:**
- HTML  
- CSS  
- JavaScript  

---

## 📂 Project Structure
```
WebSystemAcademic/
│
├── node_modules/
│ 
├── public/
│   ├── css/
│   │    └── style.css
│   ├── js/
│   │    └── script.js
│   └── index.html
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── alunosController.js
│   │   ├── cursosController.js
│   │   ├── departamentosController.js
│   │   ├── matriculasController.js
│   │   ├── pagamentosController.js
│   │   └── turmasController.js
│   │
│   ├── database/
│   │   ├── cria_usuario_bd.sql
│   │   └── projeto_universidade_web.sql
│   │
│   ├── models/
│   │   ├── alunoModel.js
│   │   ├── cursoModel.js
│   │   ├── departamentoModel.js
│   │   ├── matriculaModel.js
│   │   ├── pagamentoModel.js
│   │   └── turmaModel.js
│   │
│   ├── routes/
│   │   ├── alunos.js
│   │   ├── cursos.js
│   │   ├── departamentos.js
│   │   ├── matriculas.js
│   │   ├── pagamentos.js
│   │   └── turmas.js
│   │
│   ├── scripts/
│   │   ├── faker_alunos_matriculas.js
│   │   └── faker_pagamentos.js
│   │
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
---

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/dm-moro/WebSystemAcademic.git
   cd WebSystemAcademic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   - Configure your **Microsoft SQL Server** connection in `src/config/db.js`
   - Create the required tables or run your migration script
   - Generate mock data for the tables using the scripts in `src/scripts/` (powered by **Faker.js**)

4. **Run the server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`

5. **Open the frontend**
   - Navigate to the `public` folder
   - Open `index.html` in your browser

---

## ☁️ Deployment
This project does not use cloud services.  
The database is managed locally on Linux using **Azure Data Studio**.

---

## ℹ️ Note
This project was developed for **UNICEP São Carlos University** under the guidance of Professor **Saulo Santos**.