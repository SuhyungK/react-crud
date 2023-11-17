import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrementByAmount, incrementByAmount } from '../features/counter/counterSlice';
import { addItem, editItem, setSelectedItem, setAlertVisibility } from '../features/counter/budgetListSlice';

import InputForm from './InputForm';

export function Form() {
  const selectedItem = useSelector((state) => state.budget.selectedItem)
  const [ formData, setFormData ] = useState({
    ...selectedItem
  })
  const dispatch = useDispatch()

  const changeExpenseValue = (event) => {
    setFormData({
      ...formData, 
      [event.target.name] : event.target.value
    })
  }

  const handleAlert = () => {
    dispatch(setAlertVisibility())  

    setTimeout(() => {
      dispatch(setAlertVisibility())
    }, 2000)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.title === "" || formData.expense === 0) return  

    if (formData.index !== -1) {
      dispatch(decrementByAmount(selectedItem.expense))
      dispatch(editItem({
        index: formData.index,
        ...formData
      }))
    } else {
      dispatch(addItem({ 
        ...formData
      }))
    }
    dispatch(incrementByAmount(Number(formData.expense)))
    dispatch(setSelectedItem())
  }

  useEffect(() => {
    setFormData({
      ...selectedItem
    });
  }, [selectedItem])

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="flex">
        <InputForm 
          htmlFor="title"
          title="지출 항목"
          type="text"
          name="title"
          placeholder="예)렌트비"
          value={formData.title}
          onChange={changeExpenseValue}
        />
        <InputForm 
          htmlFor="expense"
          title="비용"
          type="number"
          name="expense"
          value={formData.expense}
          onChange={changeExpenseValue}
        />
        <div className="flex-2">
          {formData.index === -1 ?
            <Button 
              width="120px"
              name="제출"
              onClick={handleAlert}
            />
          :
            <Button 
              name="수정"
            />
          }
        </div>
      </form>
    </div>
  )
}