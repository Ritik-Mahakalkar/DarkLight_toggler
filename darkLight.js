document.addEventListener("DOMContentLoaded", () => {
            const themeToggle = document.getElementById("theme-toggle");
            const body = document.body;

            
            const savedTheme = localStorage.getItem("theme") || "light-mode";
            body.classList.add(savedTheme);

           
            themeToggle.addEventListener("click", () => {
                if (body.classList.contains("light-mode")) {
                    body.classList.replace("light-mode", "dark-mode");
                    localStorage.setItem("theme", "dark-mode");
                } else {
                    body.classList.replace("dark-mode", "light-mode");
                    localStorage.setItem("theme", "light-mode");
                }
            });
        });