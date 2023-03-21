import "./globals.css";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { TasksProvider } from "../context/TasksContext";

export const metadata = {
  title: "Tasks App",
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TasksProvider>
          <Navbar />
          <Layout>{children}</Layout>
        </TasksProvider>
      </body>
    </html>
  );
}
