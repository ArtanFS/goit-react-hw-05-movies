import { List, Text, Title } from './ReviewsItems.styled';

const ReviewsItems = ({ reviews }) => {
  return (
    <List>
      {reviews.map(review => (
        <li key={review.id}>
          <Title>Author: {review.author}</Title>
          <Text>{review.content}</Text>
        </li>
      ))}
    </List>
  );
};

export default ReviewsItems;
