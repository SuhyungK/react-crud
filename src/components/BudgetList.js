import { useSelector } from "react-redux"
import { BudgetItem } from "./BudgetItem"

export default function BudgetList() {
  const budgetList = useSelector((state) => state.budget.list)
  
  return (
    <ul>
      {budgetList.map((item, index) => (
        <li className="my-3">
          <BudgetItem key={index} item={item} />
        </li>
      ))}
    </ul>
  )
}