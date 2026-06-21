import API from "../services/api";

function ReviewList({
  reviews,
  fetchReviews,
  onEdit
}) {

  const handleDelete = async (id) => {

    try {

      await API.delete(`/reviews/${id}`);

      alert("Review Deleted");

      fetchReviews();

    } catch (error) {

      console.log(error);

    }

  };
// Reviews ko product_id ke basis par group kar rahe hain
  const groupedProducts = reviews.reduce((acc, review) => {

    if (!acc[review.product_id]) {
      acc[review.product_id] = [];
    }

    acc[review.product_id].push(review);

    return acc;

  }, {});

  // Reviews UI render karna start

  return (
    <div>

      <h1>All Reviews</h1>

      {
        Object.entries(groupedProducts).map(
          ([productId, productReviews]) => {

            const averageRating =
              (
                productReviews.reduce(
                  (sum, review) =>
                    sum + Number(review.rating),
                  0
                ) / productReviews.length
              ).toFixed(1);

            return (

              <div key={productId}>

                <h2>
                  Product ID: {productId}
                </h2>

                <h3>
                  Average Rating: {averageRating}
                </h3>

                <div style={{ fontSize: "24px" }}>
                  {"⭐".repeat(
                    Math.round(averageRating)
                  )}
                </div>

                <p>
                  Total Reviews:
                  {" "}
                  {productReviews.length}
                </p>

                <hr />

                {
                  productReviews.map((review) => (

                    <div
                      key={review.review_id}
                    >

                      <h3>
                        {review.username}
                      </h3>

                      <p>
                        Rating:
                        {" "}
                        {review.rating}
                      </p>

                      <p>
                        {review.review_text}
                      </p>

                      <button
                        onClick={() =>
                          onEdit(review)
                        }
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            review.review_id
                          )
                        }
                      >
                        Delete
                      </button>

                      <hr />

                    </div>

                  ))
                }

              </div>

            );

          }
        )
      }

    </div>
  );
}

export default ReviewList;