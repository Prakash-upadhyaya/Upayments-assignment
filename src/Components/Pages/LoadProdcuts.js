import React, { Suspense } from "react";
import Loading from "./Loading";

const Home = React.lazy(() => import("./Home"));

function LoadProdcuts() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default LoadProdcuts;
