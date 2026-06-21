import { useEffect, useState } from "react";
import API from "../services/api";
//component receiving 3 propertiesss ( fetchreviews , edit reviews , set editing review )
function ReviewForm({
  fetchReviews,
  editingReview,
  setEditingReview
}) {

// creating state 

  const [formData, setFormData] = useState({
    product_id: "",
    user_id: "",
    username: "",
    rating: "",
    review_text: ""
  });

  useEffect(() => {
    if (editingReview) {
      setFormData({
        product_id: editingReview.product_id,
        user_id: editingReview.user_id,
        username: editingReview.username,
        rating: editingReview.rating,
        review_text: editingReview.review_text
      });
    }
  }, [editingReview]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();// stp the page reloading 


    try {

      if (editingReview) {

        await API.put(
          `/reviews/${editingReview.review_id}`,
          formData
        );

        alert("Review Updated");

        setEditingReview(null);

      } else {

        await API.post(
          "/reviews",
          formData
        );

        alert("Review Added Successfully");
      }

      fetchReviews();

      setFormData({
        product_id: "",
        user_id: "",
        username: "",
        rating: "",
        review_text: ""
      });

    } catch (error) {
      console.log(error);
    }


  };

  return (<form onSubmit={handleSubmit}>


    <input
      type="number"
      name="product_id"
      placeholder="Product ID"
      value={formData.product_id}
      onChange={handleChange}
    />

    <br /><br />

    <input
      type="number"
      name="user_id"
      placeholder="User ID"
      value={formData.user_id}
      onChange={handleChange}
    />

    <br /><br />

    <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
    />

    <br /><br />

    <input
      type="number"
      name="rating"
      placeholder="Rating (1-5)"
      value={formData.rating}
      onChange={handleChange}
    />

    <br /><br />

    <textarea
      name="review_text"
      placeholder="Write Review"
      value={formData.review_text}
      onChange={handleChange}
    />

    <br /><br />

    <button type="submit">
      {editingReview ? "Update Review" : "Add Review"}
    </button>

  </form>


  );
}

export default ReviewForm;
