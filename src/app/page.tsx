import { Skeleton } from "@mui/material";
import Header from "./components/HeaderComponent";


export default function Home() {


  return (
    <main className="min-h-screen flex-col items-center justify-between" >
      <Header />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
      <Skeleton variant="rectangular" width="100%" height="100vh" />
    </main>
  );
}
