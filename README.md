<h1 align="center" style="font-weight: bold;">Web System Academic</h1>
<p align="center">
<b>WebSystemAcademic</b> is a full-stack web application for academic data management, built with Node.js, Express.js, Faker.js and Microsoft SQL Server, featuring a responsive frontend with HTML, CSS and JavaScript.
</p>

## 📍 Features

- **Academic Data Management**: Manage students, courses, grades, departments and more.
- **RESTful API**: Built with Express.js for clean and scalable routing.
- **Mock Data Generation**: Populate tables automatically using Faker.js scripts.
- **SQL Server Integration**: Full integration with Microsoft SQL Server.
- **Responsive Frontend**: Interface built with HTML, CSS and JavaScript.

## 💻 Technologies

**Backend:**
- Node.js
- Express.js
- Faker.js
- Microsoft SQL Server
- Azure Data Studio

**Frontend:**
- HTML
- CSS
- JavaScript

## 📂 Project Structure
```
WebSystemAcademic/
├── public/
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── src/
│   ├── config/db.js
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Environment Setup

1. Configure your Microsoft SQL Server connection in `src/config/db.js`
2. Run the SQL scripts in `src/database/` to create the database structure
3. Generate mock data using the Faker.js scripts in `src/scripts/`

## 💡 How to Use

1. Clone the repository:
```bash
   git clone https://github.com/dm-moro/WebSystemAcademic.git
```

2. Navigate to the project directory:
```bash
   cd WebSystemAcademic
```

3. Install dependencies:
```bash
   npm install
```

4. Configure the database as described above.

5. Start the server:
```bash
   npm start
```

6. Open `public/index.html` in your browser or navigate to `http://localhost:3000`.

## 📌 Credits

> This project was developed for **UNICEP São Carlos University** under the guidance of teacher **Saulo Santos**.
