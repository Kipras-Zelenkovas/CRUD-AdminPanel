/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/UserManagement/NavigationBar/NavigationBar.tsx",
    "./src/UserManagement/UserManagementTable/Table.tsx",
    "./src/UserManagement/UserManagementTable/TableHead.tsx",
    "./src/UserManagement/UserManagementTable/TableBody.tsx",
    "./src/UserManagement/UserManagementTable/TablePagination.tsx",
    "./src/UserManagement/AddUser/AddUser.tsx",
    "./src/App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FAF8FF',
        'smoked': '#494554',
        'navy': '#298895',
      }
    },
  },
  plugins: [],
}
