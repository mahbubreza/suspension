import { Suspense, useState } from "react";
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </div>
  );
}
