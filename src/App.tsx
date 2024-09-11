import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Movies", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        category={selectedCategory}
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((exp) => exp.id !== id))
        }
      />
    </div>
  );
}

export default App;
