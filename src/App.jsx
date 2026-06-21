import { useEffect, useState } from "react";
import API from "./services/api";

import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await API.get("/reviews");
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Product Review System</h1>

      <ReviewForm
        fetchReviews={fetchReviews}
        editingReview={editingReview}
        setEditingReview={setEditingReview}
      />

      <hr />

      <ReviewList
        reviews={reviews}
        fetchReviews={fetchReviews}
        onEdit={setEditingReview}
      />
    </div>
  );
}

export default App;