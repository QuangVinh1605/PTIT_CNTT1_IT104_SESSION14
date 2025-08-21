import React, { Component } from 'react'
import { ChildrenComponent } from './ChildrenComponent'

export default class ParentComponent extends Component {
  render() {
    return (
        <div>ParentComponent
            <ChildrenComponent />
            
        </div>
        
    )
  }
}
