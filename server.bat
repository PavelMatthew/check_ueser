cmd /c "chcp 65001 >nul"
cmd /c "mkdir "C:\Test"
cmd /c "net user>"C:\Test\list.txt""
start http://localhost:3000/checkuser
cmd /c "node C:\Users\pavelomatthew\Desktop\Checking_of_users\app.js"
