import React from 'react'
import Link from 'next/link';

export default class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isActive: false,
      }
    }

    toggleMenu = (e) => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render = () => {
        return (
            <header className="Header bg-gray-300 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0 bg-gray-300">
                    <div className="max-w-sm">
                        <Link href="/"><img alt="Sport Event Hotels" className="h-16 cursor-pointer" src="/static/logo/logo-transparent.png" /></Link>
                    </div>
                    <div className="sm:hidden" onClick={ this.toggleMenu }>
                        <button className="block text-gray-500 focus:text-white hover:text-white focus:outline-none" type="button">
                            <svg className={this.state.isActive ? 'block h-12 w-12 fill-current' : 'hidden'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
                            <svg className={this.state.isActive ? 'hidden' : 'bloc kh-12 w-12 fill-current'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
                        </button>
                    </div>
                </div>
                <div className={this.state.isActive ? 'show' : 'hidden' + " px-2 pt-2 pb-4 sm:flex sm:p-0"}>
                    <nav className="sm:flex">
                        <Link href="/">
                            <a className="block text-gray-900 font-semibold rounded px-2 py-1 hover:bg-gray-400">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">About</a>
                        </Link>
                        <Link href="/contact">
                            <a className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">Contact</a>
                        </Link>
                    </nav>
                </div>
            </header> 
        )    
    }


}
