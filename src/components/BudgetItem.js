import { useDispatch } from "react-redux"
import { Button } from "./Button"
import { removeItem, setSelectedItem, setRemoveAlertVisibility } from "../features/counter/budgetListSlice"
import { decrementByAmount  } from "../features/counter/counterSlice"

export function BudgetItem({ item }) {
  const { title, expense } = item
  const convertExpense = expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(setSelectedItem(item))
  }

  const handelDelete = () => {
    dispatch(removeItem(item))
    dispatch(decrementByAmount(item?.expense))
  }

  const handleAlert = () => {
    dispatch(setRemoveAlertVisibility())  

    setTimeout(() => {
      dispatch(setRemoveAlertVisibility())
    }, 2000)
  }

  return (
    <div 
      className="border-2 flex px-2 transform hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
      style={{ borderColor: "#1c2129"}}
    >
      <p className="flex-1 text-left px-4" style={{ display: "flex", alignItems: "center", margin: 0 }}>
        {title}
      </p>
      <p className="flex-1 text-left px-4 flex items-center m-0">
        {convertExpense}
      </p>
      <div className="flex-2">
        <Button name="수정" onClick={handleEdit}/>
        {/* <Button name="삭제" onClick={handelDelete}/> */}
        <Button name="삭제" onClick={() => {
          handelDelete();
          handleAlert()
        }}/>
      </div>
    </div>
  )
}
