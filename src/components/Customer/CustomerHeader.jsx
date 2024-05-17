import React from 'react'
import Title from '../Title'
import BreadcrumbsNew from '../Breadcrumbs/BreadcrumbsNew'
import { Breadcrumbs } from '..'

const CustomerHeader = ({ title }) => {
  return (
    <div>
      <Title>Customer</Title>
      <BreadcrumbsNew menu={"Customer"} subMenu={"Account Limit"} subMenu2={title} />
    </div>
  )
}

export default CustomerHeader


export const CustomerDeletionHeader = () => {
  return (
    <div>
      <Title>Customer</Title>
      <Breadcrumbs menu={'Customer'} subMenu={'Account Deletion'} />
    </div>
  )
}