import React from 'react'
import Link from 'next/link';

export default class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isActive: true,
      }
    }

    toggleMenu = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render = () => {
        return (
            
                <div onClick={ this.toggleMenu }>
                    <button className="block text-gray-500 focus:text-white hover:text-white focus:outline-none" type="button">
                        <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
                    </button>
                </div>

            
        )    
    }
}
