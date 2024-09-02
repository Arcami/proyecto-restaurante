import { Card } from "react-bootstrap";

export default function CategoryCard({ category }) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          {category.text} <span>{category.emoji}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
