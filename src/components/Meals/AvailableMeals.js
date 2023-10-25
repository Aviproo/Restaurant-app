import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Briyani",
    description: "Rosted chicken with boiled rice with indian dish",
    price: 220,
  },
  {
    id: "m2",
    name: "Chicken Tandoori",
    description: "Fry on medium temperature",
    price: 160,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Chinees, rosted ",
    price: 120,
  },
  {
    id: "m4",
    name: "Chicken curry",
    description: "Healthy...Indian masala...",
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
