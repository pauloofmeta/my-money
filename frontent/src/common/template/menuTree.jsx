import React from 'react'

export default props => (
  <li className='treeview'>
    <a href>
      <i className={`fa fa-${props.icon}`} /> {props.label}
      <i className='fa fa-angle-left pull-right' />
    </a>
    <ul className='treeview-menu'>
      {props.children}
    </ul>
  </li>
)