import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductItem } from '../features/productListSlice'
import { getOneProduct } from '../api/product'
import ProductItemDetail from '../components/ProductItemDetail'

function ProductItemDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedProdcut = useSelector((state) => state.products.selectedProdcut)
  const productList = useSelector((state) => state.products.list)
  const [ productItem, setProductItem ] = useState([])

  const getProductInfo = async () => {
    const result = await getOneProduct(id)
    setProductItem([result.data])
  }

  useEffect(() => {
    getProductInfo()
  }, [])

  useEffect(() => {
    if (!productList) {
      getProductInfo()
    } else {
      dispatch(getProductItem(id))
      if (selectedProdcut) {
        setProductItem([selectedProdcut])
      }
    }
  }, [id])

  useEffect(() => {
    console.log('asdfasas', productItem)
  }, [productItem])

  return (
    <div>
      {productItem && productItem.map((item, index) => (
        <ProductItemDetail key={index} product={item} />
      ))}
    </div>
  )
}

export default ProductItemDetailPage