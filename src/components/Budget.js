import React from 'react';
import { Form } from "./Form";
import { useSelector } from 'react-redux';
import BudgetList from './BudgetList';
import Alert from './Alert';

export default function Budget() {
  const count = useSelector((state) => 
    state.counter.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  const isVisible = useSelector((state) => state.budget.isVisible)
  const isRemoveAlertVisible = useSelector((state) => state.budget.isRemoveAlertVisible)

  return (
    <div className="w-3/5 border-2 m-auto px-14 py-10"
      style={{ borderColor: "#1c2129"}}
    >
      {isVisible && <Alert colorType="bg-green-500" content="생성"/>}
      {isRemoveAlertVisible && <Alert colorType="bg-red-500" content="삭제"/>}
      <div
        className="text-left"
      >예산 계산기</div>
      <Form />
      <BudgetList />
      <div
        className="text-right m-2"
      >총지출:{count}</div>
    </div>
  )
}