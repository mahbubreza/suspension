import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <div>
        <ErrorBoundary fallback={<h1>Error fetching Post</h1>}>
          <Suspense fallback={<h1>Loading Posts...</h1>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<h1>Error fetching Comments</h1>}>
          <Suspense fallback={<h1>Loading Comments...</h1>}>
            {selectedPostId && <Comments postId={selectedPostId} />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
